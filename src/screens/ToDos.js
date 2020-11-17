import React,{useState, useEffect} from 'react';
import {Text, TouchableOpacity, View, TextInput, StyleSheet, FlatList} from "react-native"
import { AntDesign } from '@expo/vector-icons'; 

const ToDos = () => {

    const [incompleteTask, setIncompleteTask] = useState("");
    const [incTaskArr, setincTaskArr] = useState(["Example Task 3", "Example Task 4"]);
    const [compTaskArr, setCompTaskArr] = useState(["Example Task 1", "Example Task 2"]);

    //To do later:
    //Change tasks to object with id, datecreated, task and bool completed

    const AddNewTask = (newTask) => {
        //add new task to incTaskArr array
    }

    const CompleteTask = () => {
        //get task and remove from incomplete to complete
    }

    async function setter(){
        //fetch user data here and set to proper variables
    };

    useEffect(() => {
        setter();
    }, []);  

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
                            <AntDesign style={styles.iconStyle} name="delete" size={24} color="black"/>
                            <AntDesign style={styles.iconStyle} name="check" size={24} color="black"/>
                            <Text>{item}</Text>
                        </View>
                    )}
                />
            </View>
            <View style={styles.createNewTaskButton}>
                <TextInput 
                    style = {style = styles.newTask}
                    placeholder="Add new task"
                />
                <AntDesign style={styles.iconStyle} name="addfile" size={24} color="black"/>
            </View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Completed Tasks</Text>
                <View>
                    <FlatList
                        data={compTaskArr}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (
                            <View style = {styles.taskItem}>
                                <Text>{item}</Text>
                            </View>
                        )}
                    />
            </View>
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

    newtask:{
        flex:9
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
        marginVertical:3,
        flexDirection: 'row',
    }

})

export default ToDos;