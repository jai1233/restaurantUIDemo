import React, { Component } from 'react'
import {
   View,
   ListView,
   Text,
   StyleSheet,AlertIOS
} from 'react-native'

export default MyPresentationalComponent = (props) => {
  AlertIOS.alert(
  "GET getTheData",
  //responseData,
 "Search currentView getTheData -> "
)
   return (
      <View>
         <ListView
            style = {styles.listContainer}
            dataSource = {props.dataSource}
            renderRow = {
               (rowData) => (
                  <Text style = {styles.listItem}>
                     {rowData.Address}
                  </Text>
               )
            }
            enableEmptySections={true}
         />
      </View>
   )
}

const styles = StyleSheet.create ({
   listContainer: {
      paddingTop: 22
   },
   listItem: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
   }
})
