import { View, Text, SafeAreaView, StyleSheet, StatusBar, Button} from 'react-native'
import React,{useState, useCallback} from 'react'
import DocumentPicker from 'react-native-document-picker';
const DocumentPickerCus = () => {
    const [fileResponse, setFileResponse] = useState([]);

    const handleDocumentSelection = useCallback(async () => {
      try {
        const response = await DocumentPicker.pick({
          presentationStyle: 'fullScreen',
        });
        setFileResponse(response);
      } catch (err) {
        console.warn(err);
      }
    }, []);
  
    return (
      <SafeAreaView style={styles.container} >
        <StatusBar barStyle={'dark-content'} />
        {fileResponse.map((file, index) => (
          <Text
            key={index.toString()}
            style={styles.uri}
            numberOfLines={1}
            ellipsizeMode={'middle'}>
            {file?.uri}
          </Text>
        ))}
        <Button title="Select " onPress={handleDocumentSelection} />
      </SafeAreaView>
    );
    }

    const styles = StyleSheet.create({
        container:{
            flex:1
        }
    })

export default DocumentPickerCus