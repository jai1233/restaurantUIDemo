
import React, { Component } from 'react';

import {
   ListView,
   View,
   AlertIOS
} from 'react-native';

import MyPresentationalComponent from './MyPresentationalComponent'
var trendingArray = [];
 var urlStriing = "https://api.myjson.com/bins/thb9f";

export default class MyContainerComponent extends Component {
   constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
         dataSource: ds.cloneWithRows(trendingArray)
      };
   }
   componentDidMount() {
     this.getTheData(function(json){
     trendingArray = json;
     AlertIOS.alert(
     "GET getTheData",
     //responseData,
    "Search currentView getTheData -> " + trendingArray[0].Address
 )
   this.setState = ({
     dataSource:this.state.dataSource.cloneWithRows(trendingArray),
     isLoading:false
   });
 }.bind(this));
 }
   getTheData(callback) {
     fetch(urlStriing,{method: "GET"})
     .then(response => response.json())
   .then(json => callback(json.restaurants))
     .catch(error => console.log(error));
   }

   render() {
     this.getTheData(function(json){
     trendingArray = json;
     AlertIOS.alert(
     "GET getTheData",
     //responseData,
    "Search currentView getTheData -> " + trendingArray[0].Address
 )
   this.setState = ({
     dataSource:this.state.dataSource.cloneWithRows(trendingArray),
     //isLoading:false
   });
 }.bind(this));
      return (
         <View>
            <MyPresentationalComponent dataSource = {this.state.dataSource} />
         </View>
      );
   }
}
module.exports = MyContainerComponent;
