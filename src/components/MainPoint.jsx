import React from 'react';
import { View , Text , StyleSheet,Button} from 'react-native';
export default function MainPoint(){
 return (
     <View style={styles.mainPoint}>
          <Text style={styles.mainText1}>＜集めた喜笑助の数＞ </Text>
          <Text style={styles.mainText2}>-------100個-------</Text>
          <Text style={styles.mainText3}>★受診時にQRを読み込むと喜笑助くんが1つもらえます。</Text>

         
    </View>

  );
}
const styles = StyleSheet.create({
 mainText1:{
    fontSize:30,
    margin:10,

  },
  mainText2:{
     fontSize:30,
     margin:10,

  },
  mainText3:{
    marginBottom:10,

  },
mainPoint:{
    justifyContent : 'center',
    alignItems : 'center',

  },
  mainPass:{
    justifyContent : 'center',
    alignItems : 'center',

  },mainButton:{
    backgroundColor:'#CC9966',
    borderRadius:25,
    width:200,
    margin:10,
  },
});