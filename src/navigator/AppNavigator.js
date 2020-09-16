import { createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import MainTabNavigator from '../navigator/MainTabNavigator'

const MainNavigator = createStackNavigator({
  Main: {
    screen: MainTabNavigator,
    navigationOptions: ({}) => ({
      headerShown: false,
    })
  }
});

const RootNavigator = createSwitchNavigator({
  Main: MainNavigator
});

export default RootNavigator
