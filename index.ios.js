/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 var ImageGridView = require('./ImageGridView.ios');
 var SearchPage = require('./SearchPage.ios');
 var MyContainerComponent = require('./MyContainerComponent.ios');
 var TrendListView = require('./TrendListView.ios');
 var SwitchContainer = require('./SwitchContainer.ios');


 import React, { Component } from 'react';
 import { View ,AppRegistry,StyleSheet,TabBarIOS,NavigatorIOS} from 'react-native';

class RestaurantApplication extends React.Component {
  constructor(props)
  {
    super(props);
    this.state=
    {
      selectedTab:'ImageGridView'
    };

  }
  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
      <TabBarIOS.Item
      selected = {this.state.selectedTab === 'TrendListView'}
      title="Trending"
      onPress = {()=>{
        this.setState({
          selectedTab:'TrendListView'

        });
      }
    }>
    <TrendListView/>
    </TabBarIOS.Item>
    <TabBarIOS.Item
    selected = {this.state.selectedTab === 'SearchPage'}

    title="SearchRestult"
    onPress = {()=>{
      this.setState({
        selectedTab:'SearchPage'
      });
    }
  }>
  <SearchPage/>
  </TabBarIOS.Item>
    <TabBarIOS.Item
    selected = {this.state.selectedTab === 'SwitchContainer'}
    title="Settings"
    onPress = {()=>{
      this.setState({
        selectedTab:'SwitchContainer'
      })
    }}>
  <SwitchContainer/>
  </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}
AppRegistry.registerComponent('RestaurantApplication', () => RestaurantApplication);
