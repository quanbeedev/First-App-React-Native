import * as React from "react";
import { View, Text, StyleSheet,KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from "react-native";
import Task from "./components/Task";


export default function App() {

      return (
          <View style = {styles.container}>
            <View style = {styles.tasksWraper}>
              <Text style = {styles.sectionTitle}>
                Today's tasks
              </Text>

              <View style={styles.items}>
                  <Task text = {'Task 1'}/>
                  <Task text = {'Task 2'}/>
              </View>
            </View>
            <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? "padding" : "height"}
            style = {styles.writeTaskWraper}
            >
             <TextInput style={styles.input} placeholder='Write a task' />
            <TouchableOpacity > 
                <View style = {styles.addWrapper}>
                    <Text style= {styles.addText}>+</Text>
                </View>
            </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
      )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor: '#EBEAED',
  },
  tasksWraper : {
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle : {
    fontSize:24,
    fontWeight:'bold'
  },
  items : {
    marginTop: 30
  },
  writeTaskWraper :{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:"row",
    justifyContent: 'space-between'
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    width:250,
    backgroundColor:"#FFF",
    borderColor: "#C0C0C0",
    borderRadius:60,
    borderWidth:1,
    marginLeft:20
  },
  addWrapper:{
    width: 60,
    height:60,
    backgroundColor:'#FFF',
    justifyContent: 'center',
    alignItems:'center',
    borderColor: "#C0C0C0",
    borderWidth: 1,
    borderRadius: 50,
    marginRight:10
  },
  addText:{
    fontSize: 30
  }
})
