import React from 'react';
import { View , Text , StyleSheet,Button} from 'react-native';
export default function MainPass(){
 return (
    <View style={styles.mainPass}>
    <Text>診察券 </Text>
     <View style={styles.mainPassSpace}/>
    </View>
  );
}
const styles = StyleSheet.create({
mainPass:{
    justifyContent : 'center',
    alignItems : 'center',
},
mainPassSpace:{
    height:150,
    width:300,
    borderColor:'gray',
    borderWidth:3,
    marginBottom:10,
  },
  mainButton:{
    backgroundColor:'#CC9966',
    borderRadius:25,
    width:200,
    margin:10,
  },
});