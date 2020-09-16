import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs'
import NavigationUtil from '../navigator/NavigationUtil'
import HomeRootStack from '../navigator/HomeRootStack'
import MyRootStack from '../navigator/MyRootStack'

const TABS = {
  Home: {
    screen: HomeRootStack,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon:({ tintColor,focused }) => {
        return <Ionicons name={ 'ios-home' }
                         size={26}
                         style={{ color: tintColor  }} />
      }
    }
  },
  My: {
    screen: MyRootStack,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon:({ tintColor,focused }) => {
        return <Ionicons name={ 'ios-people' }
                         size={26}
                         style={{ color: tintColor  }} />
      }
    }
  }
};

class MainTabNavigator extends React.Component {
  constructor(props) {
    super(props)
  }
  _tabNavigator() {
    const { Home, My } = TABS;
    const tabs = { Home, My };
    if(!this.tabNavigator) {
      this.tabNavigator = createAppContainer(createBottomTabNavigator(
        tabs,
        {
          backBehavior: false,
          gestureEnabled: true,
        },
        {
          tabBarComponent: props => (
            <BottomTabBar {...props}/>
          )
        }
      ))
    }
    return this.tabNavigator;
  }
  render() {
    NavigationUtil.navigation = this.props.navigation;
    const TabBarNavigator = this._tabNavigator();
    return <TabBarNavigator/>
  }
}

export default MainTabNavigator
