import React from 'react';
import { View ,StyleSheet,Image} from 'react-native';

export default function Gorilla(){
 return (
   <View>
        <View style={styles.gorilla}>
          <Image style={styles.gorillaInner}
          source={require('../../assets/gorilla.png')}/>
        </View>
      </View>
 )
};

const styles = StyleSheet.create({
  gorilla:{
  flexDirection: 'row',
  justifyContent : 'center',
  alignItems : 'center',

  },
  gorillaInner:{
     width: 100,
     height: 100,
     margin:15,
  },

});