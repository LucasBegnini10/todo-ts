import React, { useContext } from "react";
import {View, StyleSheet, Text, FlatList, SafeAreaView} from "react-native"


//COMPONENTS
import Background from "../components/Common/Background";
import Header from "../components/Header";
import colors from "../config/colors";
import AddTodoButtom from "../components/Todo/AddTodoButtom";
import TodoComponent from "../components/Todo";


import { fontResize } from "../utils/fontResize";


//TYPES
import { TodoContextType } from "../types/todo";

//CONTEXT
import { TodoContext } from "../context/todoContext";

import {NavigationProp} from "@react-navigation/native"

interface Props{
    navigation: NavigationProp<any, any>
}

const TodoListScreen: React.FC<Props> = ({navigation}) => {

    const {todos, removeTodo} = useContext(TodoContext) as TodoContextType;

    return(
        <Background>
            <Header/>
            <AddTodoButtom navigation={navigation} />
            <SafeAreaView style={styles.container}>
                <Text style={{fontSize: 30, color: colors.secondary}}>To Do List</Text>
                <FlatList 
                    data={todos}
                    renderItem={({ item }) => (
                        <TodoComponent 
                            key={item.id} 
                            title={item.title} 
                            description={item.description} 
                            fcUpdate={() => navigation.navigate("AddTodoItem", {
                                id: item.id,
                                title: item.title,
                                description: item.description
                            })}
                            fcRemove={() => removeTodo(item?.id)}
                            />
                    )}
                />
            </SafeAreaView>
        </Background>
    )
}

const styles= StyleSheet.create({
    viewTitlePage: {
        width: '100%',
        height: '15%',
    },
    titlePage: {
        textAlign: 'center',
        fontSize: fontResize(28),
        color: colors.tertiary
    },
    container: {
        flex: 1,
        width: "90%",
        marginTop: "40%",
        justifyContent: 'center',
        alignItems: "center"
    }
})

export default TodoListScreen;