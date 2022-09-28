import { View, Text, SectionList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import { totaltaskData } from '../../utils/data/data'

const SectionListScreen = () => {
  let sectionListRef = useRef(null);
const [isHeadertabs, setIsHeadertabs] = useState(false)
const {height, width } = Dimensions.get('window')

 const onScrollToIndex = (index) =>  {
  sectionListRef.current?.scrollToLocation({
        animated: true,
        itemIndex: 0,
        sectionIndex: index,
        viewOffset: 0,
    });
    // sectionListRef.current.sectionList.current.scrollToLocation({
    //   sectionIndex: index,
    //   itemIndex: 0,
    //   animated: true,
    //   viewPosition: 0,
    //   viewOffset: 1,
    // });
 }

  const renderItem = ({item}) => {
    return <Text style={styles.taskItem} >{item.task}</Text>
  }
  const renderSectionHeader = ({section}) => {
    return <Text style={styles.taskTitle } >{section.title}</Text>
  }
// const  renderTab = ({section}) => {
//   return <Text style={styles.taskTitle } >{section.title}</Text>
// }

const rendersectionTab = useCallback(
  (props) => {
    console.log(props,"propsss")
    const {index} = props;

    // if (!isHeadertabs) {
    //   return <TouchableOpacity style={{width: 40}} />;
    // }
    return (
      <View
        // animation={'fadeInUp'}
        style={{
          marginTop:4,
          marginLeft: 12,
          marginBottom: 16,
          padding: 4,
          borderBottomWidth: 3,
          borderColor: 'red',
        }}>
        <TouchableOpacity onPress={() => onScrollToIndex(index)}>
          <Text
            style={{
              color: 'blue'
            }}>
              hello
          </Text>
        </TouchableOpacity>
      </View>
    );
  },
  [isHeadertabs],
);

const  onscroll = (props) => {
  let {nativeEvent} = props
  console.log(nativeEvent, 'nativeEvent')
  let offset = nativeEvent.contentOffset.y;
  if (offset >= 20) {
   setIsHeadertabs(true)
   return
  }else{
    setIsHeadertabs(false)
    return
  }
}


  console.log(totaltaskData,"totaltaskData")
  return (
    <View>
     <SectionList

        ref={sectionListRef}
        sections={totaltaskData}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={item=>item.id}
        // stickySectionHeadersEnabled
        renderTab={rendersectionTab}
        onScroll={onscroll}
        removeClippedSubviews={true} // Unmount components when outside of window
        getItemLayout={(totaltaskData, index) => ({length: 180, offset: 180 * index, index })}
        // renderSectionFooter={({section})=> <Text style={styles.taskTitle } >{section.title}</Text> }
        // ListHeaderComponent = { (props) => {
        //   console.log(props, "itemmm")
        //   return <Text style={styles.taskTitle } >title</Text>
        // }}
        stickyHeaderIndices={[0]}
      />

      
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eafffe'
  },
  taskItem:{
    padding: 10,
    marginVertical: 15,
    fontSize: 16
  },
  taskTitle:{
    backgroundColor: "green",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    elevation: 4,
    margin: 10,
    marginBottom: 0,
    borderRadius: 10
  }
});
export default SectionListScreen