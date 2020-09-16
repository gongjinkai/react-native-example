import React from 'react'
import { BackHandler, ToastAndroid } from 'react-native'
import {
  createReactNavigationReduxMiddleware,
  createReduxContainer,
  createNavigationReducer
} from 'react-navigation-redux-helpers';

import { connect } from 'react-redux'
import AppNavigator from './navigator/AppNavigator'

export const routerMiddleware = createReactNavigationReduxMiddleware(state => state.router, 'root');
export const routerReducer = createNavigationReducer(AppNavigator);


const App = createReduxContainer(AppNavigator, 'root');


class Router extends React.Component {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
  }

  backHandle = () => {
    if (this.lastBackPressed &&  this.lastBackPressed + 2000 >= Date.now()) {
      //最近2秒内按过back键，可以退出应用。
      BackHandler.exitApp();
      return;
    }
    this.lastBackPressed = Date.now();
    ToastAndroid.show('再按一次退出应用',ToastAndroid.SHORT);
    return true;
  };

  render() {
    const { dispatch, router } = this.props;
    return <App dispatch={dispatch} state={router} />
  }
}

export default connect(({ app, router }) => ({ app, router }))(Router)
