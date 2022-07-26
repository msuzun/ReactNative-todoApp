import { View, Text, SafeAreaView,TextInput,TouchableOpacity,FlatList } from 'react-native'
import React,{useState} from 'react'

import {appStyles as styles} from './styles'; 

export default function App() {
  const [text,SetText] = useState("");
  const [task,SetTask] =  useState([]);
  const handleAddtaskPress = () => {
    SetTask([...task,text]);
    SetText("");
  }
  const handleDeleteTask = (index) => {
    const newTask = [...task];
    newTask.splice(index,1);
    SetTask(newTask);
  }
  return (
    <SafeAreaView style={{flex:1}}>
       <View style={styles.container}>
          <Text style={styles.title}>My task </Text>
          <Text style={styles.subtitle}>lorem ipsun dolor color sit amea lorem ipsun dolor color sit amea lorem ipsun dolor color sit amea</Text>
          <TextInput
          style={styles.input}
          placeholder="Enter your task here"
          value={text}
          onChangeText={(value)=>{
            SetText(value);
          }}
          />
          <TouchableOpacity style={styles.buttonContainer} onPress={handleAddtaskPress}>
            <Text style={styles.buttonText}>Add Task</Text>
          </TouchableOpacity>

          <View style={styles.divider} />
          <FlatList 
          data={task}
          renderItem={({item,index}) => (
            <View style={styles.taskContainer}>
              <Text style={styles.taskText}>{item}</Text>
              <TouchableOpacity style={styles.taskDelete}
              onPress={()=> handleDeleteTask(index)}
              > 
                <Text style={styles.taskDeleteText}>X</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) =>item + Date.Now + Math.random()}
          />
      </View>
    </SafeAreaView>
  )
}