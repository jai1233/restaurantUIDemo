'use strict';
import React, { Component } from 'react';
import {
   View,AlertIOS
 }
from 'react-native';
import SwitchModel from './SwitchModel'

export default class SwitchContainer extends Component {

   constructor() {
      super();
      this.state = {
         switch1Value: false,
         switch2Value: false,
      }
   }
   toggleSwitch1 = (value) => {
     if(value == false )
     {
       AlertIOS.alert(
       "Local Notification Disable",
            )
           this.setState({switch1Value: value})

     }
     else {
       this.setState({switch1Value: value})
       console.log('Switch 1 is:  ' + value)
       AlertIOS.alert(
       "Local Notification Enable",
           )

     }

   }
   toggleSwitch2 = (value) => {
     if(value==false)
     {
       AlertIOS.alert(
       "Remote Notification enable",
            )
       this.setState({switch2Value: value})
       console.log('Switch 2 is:  ' + value)

     }
     else {
       AlertIOS.alert(
       "Remote Notification disable",
            )
       this.setState({switch2Value: value})
       console.log('Switch 2 is:  ' + value)
     }

   }

   render() {
      return (
         <View>
            <SwitchModel
               toggleSwitch1 = {this.toggleSwitch1}
              toggleSwitch2 = {this.toggleSwitch2}
               switch1Value = {this.state.switch1Value}
               switch2Value = {this.state.switch2Value}/>
         </View>
      );
   }
}
module.exports = SwitchContainer;
