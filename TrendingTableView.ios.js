
import React, { Component } from 'react';
import { View ,StyleSheet,Text} from 'react-native';
var styles = StyleSheet.create(
  {
    description:{
      fontSize:20,
      textAlign:'center',
      color:'#000000'
    },
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#123756'
    }
  }
);
class TrendingTableView extends Component {
  render() {
    return(
      <View style={styles.container}>
      <Text style = {styles.description}>
      welcome to SettingsView Component!
      </Text>
      </View>
    )

  }
}
module.exports=TrendingTableView;
