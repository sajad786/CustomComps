import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SectionListScreen from './src/Screens/SectionListScreen/SectionListScreen'
import DocumentPicker from './src/Components/DocumentPicker'
import FlatListWithpagination from './src/Screens/FlatListWithpagination/FlatListWithpagination'
import Payments from './src/Screens/Payments/Payments'

const App = () => {
  return (
    <SafeAreaView style={styles.container} >
      <Payments/>
      {/* <SectionListScreen /> */}
      {/* <DocumentPicker/> */}
      {/* <FlatListWithpagination /> */}
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1, 
  }
})

