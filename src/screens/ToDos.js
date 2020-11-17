import React,{useState, useEffect} from 'react';
import {Text, TouchableOpacity, View, TextInput, StyleSheet, FlatList} from "react-native"
import { AntDesign } from '@expo/vector-icons'; 

const ToDos = () => {

    const [incompleteTask, setIncompleteTask] = useState("");
    const [incTaskArr, setincTaskArr] = useState(["Example Task 1", "Example Task 2"]);
    const [compTaskArr, setCompTaskArr] = useState([]);

    const AddNewTask = (newTask) => {

    }

    const CompleteTask = () => {

    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>My Tasks</Text>
            </View>
            <View>
                <FlatList
                    data={incTaskArr}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <View style = {styles.taskItem}>
                            <Text>{item}</Text>
                        </View>
                    )}
                />
            </View>
            <View style={styles.createNewTaskButton}>
                <TextInput
                    placeholder="Add new task"
                />
                <AntDesign style={styles.iconStyle} name="addfile" size={24} color="black"/>
            </View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Completed Tasks</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    header:{
        marginTop:35,
        borderBottomWidth:3,
        marginHorizontal: 10
    },

    headerText:{
        fontWeight:'bold',
        fontSize:25,
        
    },

    tasks:{

    },

    createNewTaskButton:{
        flexDirection:'row',
        borderWidth:1,
        marginHorizontal:10,
        borderRadius:5,
        marginTop:10
    },

    container:{
        flex:1,
    },

    iconStyle:{
        paddingHorizontal:10,
        
    },

    taskItem:{
        marginHorizontal:10,
        marginVertical:3
    }

})

export default ToDos;