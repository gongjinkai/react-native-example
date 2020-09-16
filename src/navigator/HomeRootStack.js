import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../pages/homeScreens/homeScreen'

const HomeRootStack = createStackNavigator({
  Home: HomeScreen,
},{
  initialRouteName: 'Home',
  navigationOptions: ({ navigation }) => ({
    tabBarVisible: navigation.state.index === 0,
  })
});

export default HomeRootStack
