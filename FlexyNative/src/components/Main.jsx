import React from 'react'
import { View } from 'react-native'
import Constants from 'expo-constants'
import Register from './Register'

const Main = () => {
  return (
    // las vistas (view) son para crear la interfaz del usuario, se comportan como un contenedor con flexbox, no scrolleables.
    // en native no existe el onclick, hay que usar el contenedor Touchable 
    <View style={{marginTop: Constants.statusBarHeight, flexGrow: 1}}>
        <Register />
    </View>
  )
} 

export default Main