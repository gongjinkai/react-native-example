import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import MyScreen from '../pages/myScreens/myScreen'

const MyRootStack = createStackNavigator({
  Home: MyScreen,
},{
  initialRouteName: 'Home',
  navigationOptions: ({ navigation }) => ({
    tabBarVisible: navigation.state.index === 0,
  })
});

export default MyRootStack

