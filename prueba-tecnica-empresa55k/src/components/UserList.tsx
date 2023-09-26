import { SortBy, type User } from '../types.d'

interface Props {
  changeSorting: (sort: SortBy) => void
  deleteUser: (email: string) => void
  showColors: boolean
  users: User[]
}
// consigna 2 realizada (disponer los datos de usuario en formato de tabla)
export function UserList({ changeSorting, deleteUser, showColors, users }: Props) {
  return (
        <table width='100%'>
            <thead>
                <tr>
                    <th>Foto</th>
                    <th className='pointer' onClick={() => { changeSorting(SortBy.NAME) }}>Nombre</th>
                    <th className='pointer' onClick={() => { changeSorting(SortBy.LAST) }}>Apellido</th>
                    <th className='pointer' onClick={() => { changeSorting(SortBy.COUNTRY) }}>País</th>
                    <th>Acciones</th>
                </tr>
            </thead>

            <tbody>
                {
                    users.map((user, index) => {
                    // Consigna 3 realizada (colorear los usuarios con un boton, el button esta en el app.tsx)
                      const backgroundColor = index % 2 === 0 ? '#333' : '#555'
                      const color = showColors ? backgroundColor : 'transparent'
                      return (
                            <tr key={user.email} style={{ backgroundColor: color }}>
                                <td>
                                    <img src={user.picture.thumbnail} />
                                </td>
                                <td>
                                    {user.name.first}
                                </td>
                                <td>
                                    {user.name.last}
                                </td>
                                <td>
                                    {user.location.country}
                                </td>
                                <td>
                                    <button onClick={() => {
                                      deleteUser(user.email)
                                    }}>Borrar</button>
                                </td>
                            </tr>
                      )
                    })
                }
            </tbody>
        </table>
  )
}

// table, thead, tbody ---> Son la CLAVE para un tabla
// tr --> row
// td --> cell
