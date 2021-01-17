import React, { useEffect } from 'react';
import{ View,StyleSheet } from 'react-native';
import Gorilla from '../components/Gorilla';
import MainWalk from '../components/MainWalk';
import MainPoint from '../components/MainPoint';
import MainPass from '../components/MainPass';
import Button from '../components/Button';





export  const HomeScreen=()=>{

return (
<View style={styles.container}>

    <View>
       <Gorilla/>
       <MainWalk/>
    </View>

    <View style={styles.ButtonContainer}>
       <MainPoint/>
       <View>
        <Button style={styles.Button} label="QRコードを読み込む"/>
       </View>
    </View>

    <View style={styles.ButtonContainer}>
      <MainPass/>
      <View >
        <Button style={styles.Button} label="診察券を読み込む"/>
      </View>
   </View>
</View>


    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
   ButtonContainer:{
     justifyContent : 'center',
     alignItems : 'center',
  },
  Button:{
    backgroundColor:'#CC9966',
    borderRadius:29,
    width:200,
    margin:30,


  },
 

});