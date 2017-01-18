'use strict';

import React, {Component} from 'react';
import {
  View,
  ListView,
  Text,
  TouchableHighlight,
  AlertIOS,
  PropTypes
} from 'react-native';
var trendingArray = [];
var urlStriing = "https://api.myjson.com/bins/thb9f";
//var dataSource;
class TrendListView extends Component {
  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.guid !== r2.guid});
    this.state = {
      dataSource:dataSource.cloneWithRows(trendingArray),
      isLoading:true,

    }
  }

  componentDidMount() {
    this.getTheData(function(json){
    trendingArray = json;
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

  renderRow(rowData, sectionID, rowID) {var RestName = "Restaurant Name";
  AlertIOS.alert(
  "RowData",
  //responseData,
  "Search currentView getTheData -> " + rowData.Address
  )
  return (
      <TouchableHighlight underlayColor='#dddddd' style={{height:44}}>
        <View>
        <Text style={{fontSize: 20, color: '##ff0000'}} numberOfLines={1}>{rowData.Address}</Text>
        <Text style={{fontSize: 20, color: '##ff0000'}} numberOfLines={2}>{rowData.RestName}</Text>
        <View style={{height: 20, backgroundColor: '##008000'}}/>
        </View>
      </TouchableHighlight>
  );
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
      isLoading:false
    })
  }.bind(this));
// Refereashing List View
  var currentView = (this.state.isLoading)?<View/>:<ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)} enableEmptySections={true}/>
    return(
      <View>
      {currentView}
      </View>
    );
  }

  }

module.exports = TrendListView;
