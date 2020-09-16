import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
import Hyperlink from 'react-native-hyperlink'

const { width, height } = Dimensions.get('window');

const imgData = [
  "https://m.360buyimg.com/mobilecms/s772x376_jfs/t23224/12/1547449730/265644/6da76a53/5b627790N1beab594.jpg!cr_1125x549_0_72!q70.jpg.dpg.webp",
  "https://m.360buyimg.com/mobilecms/s772x376_jfs/t23389/341/1459755771/98229/bdf1b674/5b619766Nb8e94478.jpg!cr_1125x549_0_72!q70.jpg.dpg.webp",
  "https://m.360buyimg.com/mobilecms/s772x376_jfs/t23560/365/1407572473/129109/377153ef/5b6010acN1b265667.jpg!cr_1125x549_0_72!q70.jpg.dpg.webp",
  "https://m.360buyimg.com/mobilecms/s772x376_jfs/t25549/223/5998595/106769/8dfb1308/5b62a8a3Nae1a28e1.jpg!cr_1125x549_0_72!q70.jpg.dpg.webp",
  "https://m.360buyimg.com/mobilecms/s772x376_jfs/t24148/59/1544888845/169957/6b3a521d/5b62a6edNd0172ab9.jpg!cr_1125x549_0_72!q70.jpg.dpg.webp",
]

const examples = [
  {
    label: '分页切换',
    value: ''
  }
]


class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerShown: false,
    }
  };

  goPage(item) {
    console.log(item)
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.swiper_content }>
          <Swiper
            paginationStyle={{ bottom: 30 }}
            horizontal={ true }
            dot={
              <View
                style={{
                  backgroundColor:'rgba(0,0,0,.2)',
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  marginLeft: 3,
                  marginRight: 3,
                  marginTop: 3,
                  marginBottom: 3
                }}
              />
            }
            activeDot={<View style={{
              backgroundColor: '#fff',
              width: 16,
              height: 8,
              borderColor: '#fff',
              borderRadius: 8,
              marginRight: 6,
            }}/>}>
            { imgData.map((item,index)=>(
              <Image
                source={{ uri:item }}
                style={{ width:width, height: width / 2}}
                key={index}
              />
            )) }
          </Swiper>
        </View>
        <View>
          <FlatList
            data={ examples }
            renderItem={ ({ item, index, separators }) => (
              <TouchableOpacity
                style={ styles.list_item }
                onPress={ () => this.goPage(item) } key={index}>
                <Text style={ styles.list_item_text }>{ item.label }</Text>
              </TouchableOpacity>
            )}
          />
          <Hyperlink linkDefault={ true } linkStyle={{ color: '#2980b9' }}>
            <Text style={ { fontSize: 15 } }>
              This text will be parsed to check for clickable strings like https://github.com/obipawan/hyperlink and made clickable.
            </Text>
          </Hyperlink>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 16
  },
  swiper_content: {
    height: width / 2
  },
  list_item: {
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  list_item_text: {
    fontSize: 15,
    color: '#232306'
  }
});

export default HomeScreen
