import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SectionListScreen from './src/Screens/SectionListScreen/SectionListScreen'

const App = () => {
  return (
    <View style={styles.container} >
      <SectionListScreen />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1, 
  }
})

