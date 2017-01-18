'use strict';
var SearchResults = require('./SearchResults');
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image,
  AlertIOS,
  NavigatorIOS
} from 'react-native';
var urlString = "https://api.myjson.com/bins/thb9f";
var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
    flex:1
  },
  flowRight: {
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'stretch'
},
buttonText: {
  fontSize: 18,
  color: 'white',
  alignSelf: 'center'
},
button: {
  height: 36,
  flex: 1,
  flexDirection: 'row',
  backgroundColor: '#48BBEC',
  borderColor: '#48BBEC',
  borderWidth: 1,
  borderRadius: 8,
  marginBottom: 10,
  alignSelf: 'stretch',
  justifyContent: 'center'
},
searchInput: {
  height: 36,
  padding: 4,
  marginRight: 5,
  flex: 4,
  fontSize: 18,
  borderWidth: 1,
  borderColor: '#48BBEC',
  borderRadius: 8,
  color: '#48BBEC'
},
image: {
  width: 217,
  height: 138

},

});
function urlForQueryAndPage(key, value, pageNumber) {
  var data = {
      country: 'uk',
      pretty: '1',
      encoding: 'json',
      listing_type: 'buy',
      action: 'search_listings',
      page: pageNumber
  };
  data[key] = value;

  var querystring = Object.keys(data)
    .map(key => key + '=' + encodeURIComponent(data[key]))
    .join('&');

  return 'urlString' + querystring;
};
class SearchPage extends Component {
  constructor(props) {
  super(props);
  this.state = {
  searchString: 'Noida',
  isLoading: false,
  message: ''
};
}
_executeQuery(query) {
  console.log(query);
  this.setState({ isLoading: true });
  fetch(query)
  .then(response => response.json())
  .then(json => this._handleResponse(json.response))
  .catch(error =>
     this.setState({
      isLoading: false,
      message: 'Something bad happened ' + error
   }));
}
_handleResponse(response) {
    this.setState({ isLoading: false , message: '' });
    if (response.application_response_code.substr(0, 1) === '1') {
      AlertIOS.alert(
          "GET Response",
          //responseData,
         "Success -> "
      )
      this.props.navigator.push({
        title: 'Results',
        component:SearchResults,
        passProps:{listings: response.listings}

      });
    } else {
      AlertIOS.alert(
          "GET Response",
          //responseData,
         "error -> "
      )
      this.setState({ message: 'Location not recognized; please try again.'});
    }
  }

onSearchPressed() {
  var query = urlForQueryAndPage('place_name', this.state.searchString, 1);
  this._executeQuery(query);
}
onSearchTextChanged(event) {
  console.log('onSearchTextChanged');
  this.setState({ searchString: event.nativeEvent.text });
  console.log(this.state.searchString);
}
  render()
  {
    var spinner = this.state.isLoading ?
  ( <ActivityIndicator
      size='large'/> ) :
  ( <View/>)
    return (

      <View style={styles.container}>
        <Text style={styles.description}>
          Search Rastuarant!
        </Text>
        <View style={styles.flowRight}>
        <TextInput
        style={styles.searchInput}
        value={this.state.searchString}
        onChange={this.onSearchTextChanged.bind(this)}
        placeholder='Search via name or postcode'/>
        <TouchableHighlight onPress={this.onSearchPressed.bind(this)} style={styles.button}
      underlayColor='#99d9f4'>

      <Text style={styles.buttonText}>Go</Text>


        </TouchableHighlight>
        {spinner}
        </View>

      </View>
    );
    <Text style={styles.description}>{this.state.message}</Text>
  }
}
module.exports = SearchPage;
