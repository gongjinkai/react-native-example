import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import px from '../utils/px'

class CustomHeader extends React.Component {
  render() {
    return (
      <View style={[styles.header_bar, { backgroundColor: this.props.backgroundColor }]}>
        <View style={ styles.line }>
          <TouchableOpacity
            style={ styles.icon_back }
            onPress={ () => this.props.goBack() }>
            <Image source={ this.props.barStyle === 'dark' ? require('../../assets/icons/icon-back_dark.png'): require('../../assets/icons/icon-back_light.png') }/>
          </TouchableOpacity>
          <Text style={[styles.title,this.props.barStyle === 'dark' ? styles.dark_text : styles.light_text ]}>{ this.props.title }</Text>
          <View style={ styles.right }>
            { this.props.right }
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header_bar: {
    paddingLeft: px(32),
    paddingRight: px(32),
    height: px(88),
    justifyContent: 'center'
  },
  line: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon_back: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  right: {
    position: 'absolute',
    right: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 16
  },
  dark_text: {
    color: '#333'
  },
  light_text: {
    color: '#fff'
  }
});


export default CustomHeader
