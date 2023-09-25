import { useEffect, useState, useRef } from 'react'
import './App.css'
import { type User } from './types.d'
import { UserList } from './components/UserList'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sortByCountry, setSortByCountry] = useState(false)
  // para resetear los usuarios a los originales usamos el hook useRef (mejor opcion, ya que es usa para guardar un valor que queremos que se comparta entre renderizados pero que al cambiar, no vuelva a renderizar el componente):
  const originalUsers = useRef<User[]>([])

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  // hacemos una funcion de callback que recupere el valor anterior y modifique su estado:
  const toggleSortByCountry = () => {
    setSortByCountry(prevState => !prevState)
  }

  // Consigna 5 (eliminar usuarios) IMPORTANTE USAR FILTER Y NO SLICE
  const handleDelete = (email: string) => {
    const filteredUsers = users.filter((user) => user.email !== email)
    setUsers(filteredUsers)
  }

  // Consigna 6 (resetear usuarios)
  const handleReset = () => {
    setUsers(originalUsers.current)
  }
  // primer consigna (fetch de 100 usuarios)
  useEffect(() => {
    fetch('https://randomuser.me/api?results=100')
      .then(async res => await res.json())
      .then(res => {
        setUsers(res.results)
        originalUsers.current = res.results
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const sortedUsers = sortByCountry
    ? [...users].toSorted((a, b) => {
        return a.location.country.localeCompare(b.location.country)
      })
    : users

  // utilizar users.sort ESTA MAL (el sort MUTA EL ARRAY ORIGINAL, por lo tanto despues no lo podemos recuperar)
  // utilizar users.toSorted ES LO MEJOR , ya que nos crea un nuevo arreglo y no estamos mutando nada.
  // [...users].sort es una opción que está bien
  // structuredClone(users).sort es una opción valida tambien pero como hace una copia bastante profunda de users no esta bueno.

  return (
    <>
      <h1>Prueba tecnica</h1>
      <header>
        <button onClick={toggleColors}>Colorear Filas</button>
        <button onClick={toggleSortByCountry}> {sortByCountry ? 'No ordenar por país' : 'Ordenar por país'}</button>
        <button onClick={handleReset}>Resetear usuarios</button>
      </header>
      <main>
        <UserList deleteUser={handleDelete} showColors={showColors} users={sortedUsers} />
      </main>
    </>
  )
}

export default App
