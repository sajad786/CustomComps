import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

const FlatListWithpagination = () => {

    const [skip, setSkip] = useState(0)
    const [limit, setLimit] = useState(10)
    const [products, setProducts] = useState([])
    const [isLoading , setIsloading ] = useState(false)


    useEffect(() => {
        getAllProducts()
    }, [])

    const getAllProducts = () => {
        let uri = `?skip=${skip}&limit=${limit}`
        fetch('https://dummyjson.com/products'+ uri)
            .then(res => {
                console.log(res,"ress")
            }).catch(err => {
                console.log(err, "err in api")
            })
    }

    return (
        <View>
            <Text>FlatListWithpagination</Text>
        </View>
    )
}

export default FlatListWithpagination

const styles = StyleSheet.create({

})