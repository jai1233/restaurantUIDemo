'use strict';

import React, { Component } from 'react';
import {
  Image,
  ListView,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  AlertIOS,
} from 'react-native';

var TempListView = React.createClass({
  getInitialState: function() {
    this._onPressButtonGET ={};


    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(this._genRows({})),
    };
  },

  _pressData: ({}: {[key: number]: boolean}),

  componentWillMount: function() {
    this._pressData = {};
  },
  _onPressButtonGET: function() {
        fetch("https://api.myjson.com/bins/yqsh1", {method: "GET"})
        .then((response) => response.json())
        .then((responseData) => {
            AlertIOS.alert(
                "GET Response",
                "Search Query -> " + responseData.search
            )
        })
        .done();
    },

  render: function() {
    return (
      // ListView wraps ScrollView and so takes on its properties.
      // With that in mind you can use the ScrollView's contentContainerStyle prop to style the items.
      <ListView contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />
    );
  },

  _renderRow: function(rowData: string, sectionID: number, rowID: number) {
    var rowHash = Math.abs(hashCode(rowData));
    var imgSource = {
      uri: THUMB_URLS[rowHash % THUMB_URLS.length],
    };
    return (
      <TouchableHighlight onPress={() => this._pressRow(rowID)} underlayColor='rgba(0,0,0,0)'>
        <View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={imgSource} />
            <Text style={styles.text}>
              {rowData}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  },

  _genRows: function(pressData: {[key: number]: boolean}): Array<string> {
    var dataBlob = [];
    for (var ii = 0; ii < 100; ii++) {
      var pressedText = pressData[ii] ? ' (X)' : '';
      dataBlob.push('Cell ' + ii + pressedText);
    }
    return dataBlob;
  },

  _pressRow: function(rowID: number) {
    this._pressData[rowID] = !this._pressData[rowID];
    this.setState({dataSource: this.state.dataSource.cloneWithRows(
      this._genRows(this._pressData)
    )});
  },
});
var THUMB_URLS = ['https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'];



var hashCode = function(str) {
  var hash = 15;
  for (var ii = str.length - 1; ii >= 0; ii--) {
    hash = ((hash << 5) - hash) + str.charCodeAt(ii);
  }
  return hash;
};

var styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row: {
    justifyContent: 'center',
    padding: 5,
    margin: 10,
    width: 100,
    height: 100,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC'
  },
  thumb: {
    width: 64,
    height: 64
  },
  text: {
    flex: 1,
    marginTop: 5,
    fontWeight: 'bold'
  },
  button: {
        backgroundColor: '#eeeeee',
        padding: 10,
        marginRight: 5,
        marginLeft: 5,
    }
});





module.exports=TempListView;
