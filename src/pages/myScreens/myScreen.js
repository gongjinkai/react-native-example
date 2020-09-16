import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class MyScreen extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.title }>我的页面</Text>
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
  }
});

export default MyScreen
