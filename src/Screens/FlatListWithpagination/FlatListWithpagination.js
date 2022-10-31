import { StyleSheet, Text, View, FlatList, Button, TextInput } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'

const FlatListWithpagination = () => {

    const [skip, setSkip] = useState(0)
    const [limit, setLimit] = useState(10)
    const [products, setProducts] = useState([])
    const [isLoading, setIsloading] = useState(false)

    const [text, setText] = useState(null)

    const [output, setOutput] = useState([1, 2, 3, 4, 5, 6])

    useEffect(() => {
        getAllProducts()
        // getpass()
    }, [])


    const getAllProducts = () => {
        let uri = `?skip=${skip}&limit=${limit}`
        fetch('https://dummyjson.com/products'+ uri)
            .then(res => res.json())
            .then(res => {
                console.log(res, 'ress')
                // setOutput(res?.products)
                setProducts(res?.products)
            }).catch(err => {
                console.log(err, 'err raised')
            })
    }
    // Math.floor(Math.random() * alphabet.length)
    // const getpass = () => {
    //     const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    //     // console.log(alphabet.length)
    //     let res = ''
    //     for (let i = 0; i < 6; i++) {
    //     const randomCharacter = alphabet[Math.random() * alphabet.length()]

    //         res+=randomCharacter
    //     }

    //     console.log(res)
    // }



    let deleteItem = (num) => {
        // let arr = [1,2,3,4,5,6]
        let data = output.filter((itm, indx) => itm != num)
        console.log(data, "data")
        setOutput(data)
    }

    const renderItem = useCallback(({item}) => {
        <View>
            <Text style={{color:'red'}} >{'hiii'}</Text>
        </View>
    },[])

    return (
        <View>
            {/* <TextInput 
            style={{
                height:42,
                backgroundColor:'red',
                padding:10,
                marginHorizontal:10,

            }}
                onChangeText={val => setText(val)}
                value={text}
                placeholder='enter value'
            />
           <Button title='Delete' onPress={() => deleteItem(text)} /> */}

            {/* {output.map(i => (
            <Text>{i}</Text>
           ))} */}

            <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={i => i?.id}
            />
        </View>
    )
}

export default FlatListWithpagination

const styles = StyleSheet.create({

})