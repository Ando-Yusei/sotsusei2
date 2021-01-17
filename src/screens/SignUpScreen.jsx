// import { NavigationRouteContext } from '@react-navigation/native';
// import React ,{useState}from 'react';
// import{ View,Text,StyleSheet,TextInput,TouchableOpacity, TouchableOpacityBase, Alert} from 'react-native';
// import firebase from 'firebase';
// import Button from '../components/Button';

// export default function SignUpScreen(props){
//     const {navigation} = props;
//     const [email,setEmail] = useState(''); 
//     const [password,setPassword] = useState(''); 

//     function handlePress(){
//         firebase.auth().createUserWithEmailAndPassword(email,password)
//         // 会員登録に成功した場合
//          .then((userCredential)=>{
//              const {user} = userCredential;
//              console.log(user.uid);
//              navigation.reset({
//              index: 0,
//              routes:[{name:'Home'}],   
//         });

//          })
//          .catch((error)=>{
//              console.log(error.code,error.message);
//              Alert.alert(error.code);
//          });

//     }

//     return(
//         <View style={styles.container}>
//             <View style={styles.inner}>
//                 <Text style={styles.title}>登録</Text>
//                 <TextInput 
//                 style={styles.input} 
//                 value={email}
//                 onChangeText={(text) => { setEmail(text); }}
//                 autoCapitalize="none"
//                 keyboardType="email-address"
//                 placeholder="Email Address"
//                 textContentType="emailAddress"

//                 />
//                 <TextInput
//                  style={styles.input} 
//                  value={password}
//                  onChangeText={(text)=>{setPassword(text);}}
//                  autoCapitalize='none'
//                  placeholder="Password"
//                  secureTextEntry
//                  textContentType="emailAddress"
//                  />
                 
//                 <Button label="登録する"
//                 onPress={handlePress}/>
//                 <View style={styles.footer}>
//                     <Text style={styles.footerText}>すでに登録済みですか</Text>
//                     <TouchableOpacity onPress={()=> {navigation.reset({
//                         index:0,
//                         routes:[{name:'Login'}],
//                     });}}>
//                       <Text style={styles.footerLink}>ログインはこちら</Text>
//                     </TouchableOpacity>
                   
//                 </View>
//             </View>
//         </View>


//     );

// }

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor:'#F0F4F8'
//     },
//     inner:{
//         paddingHorizontal:27,
//         paddingVertical:24,

//     },
//     title:{
//      fontSize:24,
//      lineHeight:32,
//      fontWeight:'bold',
//      marginBottom:24,
//     },
//     input:{
//         fontSize:16,
//         height:48,
//         borderColor:'#DDDDDD',
//         borderWidth:1,
//         backgroundColor:'#ffffff',
//         paddingHorizontal:8,
//         marginBottom:16,
//     },

//     footerText:{
//      fontSize:14,
//      lineHeight:24,
//      marginRight:8,
//     },
//     footerLink:{
//         fontSize:14,
//         lineHeight:24,
//         color:'#467FD3',

//     },
//     footer:{
//         flexDirection:'row',
//     }
  
// });