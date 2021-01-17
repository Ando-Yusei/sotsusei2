import React,{Component} from 'react';
import{ View,StyleSheet,Text,TextInput,Button,FlatList,ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Gorilla from '../components/Gorilla';

export default class Diagnosis extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todoValue: "",
      memoValue: "",
      todoList: [],
    };
  }

  render() {
    const { todoValue, memoValue, todoList } = this.state;


    return (
 <View style={styles.container}>

     <Gorilla/>

    <View  style={styles.formTitle}>
       <Text style={styles.formTitleText}>診断名</Text>
    </View>
    
    <View style={styles.formGroup}>

          <Text style={styles.formLabel}></Text>
          <TextInput
            style={styles.formControl}
            value={todoValue}
            placeholder="いつ"
            onChangeText={v => this.setState({ todoValue: v })}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}></Text>
          <TextInput
            style={styles.formControl}
            value={memoValue}
            placeholder="診断名"
            onChangeText={v => this.setState({ memoValue: v })}
          />
        </View>
        <Button
          title="登録"
          onPress={() => {
            const newList = todoList.concat({ todo: todoValue, memo: memoValue });
            this.setState({
              todoValue: "",
              memoValue: "",
              todoList: newList
            });
          }}
        />
     <SafeAreaView style={{flex: 1}}>
            <FlatList
            style={styles.listBox}
            data={todoList}
            renderItem={({ item }) => {
                return (
                <View style={styles.listItem}>
                    <Text>{item.todo}</Text>
                    <Text>{item.memo}</Text>
                </View>
                );
            }}
            keyExtractor={item => item.todo}
            />
    </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  formTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    margin:15,
  },
  formTitleText:{
      fontSize:20,
      
  },
 formGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  formLabel: {
    paddingRight: 16,
  },
  formControl: {
    height: 40,
    width: 160,
    padding: 8,
    borderColor: 'gray',
    borderWidth: 1
  },
  listItem: {
    height: 64,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 60,
    marginRight: 60,
    marginBottom:15,
    backgroundColor:'white',
    borderColor: 'gray',
    borderWidth: 3,


  },
});