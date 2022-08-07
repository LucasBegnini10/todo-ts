import React, {useContext, useEffect, useState} from "react";
import {View, Text, StyleSheet} from "react-native";

//COMPONENTS
import Header from "../components/Header";
import Background from "../components/Common/Background";
import { Ionicons } from '@expo/vector-icons';
import colors from "../config/colors";
import { fontResize } from "../utils/fontResize";
import Input from "../components/Common/Input";


import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

//CONTEXT
import {TodoContext} from "../context/todoContext"
import {TodoContextType} from "../types/todo"

//TYPES
import {NavigationProp} from "@react-navigation/native"
import {TodoType} from "../types/todo"
import Button from "../components/Common/Button";

interface Props{
    navigation: NavigationProp<any, any>
    route: {
        key: string,
        name: string,
        params?: {
            id: string,
            title: string,
            description: string
        }
      }
}

const AddTodoItem: React.FC<Props> = ({navigation, route}) => {

    const {addTodo, updateTodo} = useContext(TodoContext) as TodoContextType;

    const[todoItem, setTodoItem] = useState<TodoType>({
        id: "",
        title: "",
        description: "",
        status: false
    })

    useEffect(() => {
        if(route.params){
            const newTodo: TodoType = {
                id: route.params.id,
                title: route.params.title,
                description: route.params.description,
                status: false
            }
            setTodoItem(newTodo)
        }
    }, [])

    return(
        <Background>  
            <Header />
            <View style={styles.viewGoBack}>
                <Ionicons name="arrow-back-sharp" size={fontResize(25)} color={colors.tertiary} onPress={() => navigation.goBack()}/>
            </View>
            <View style={styles.viewTitle}>
                <Text style={styles.title}>
                    {route.params ? "Edite o item abaixo" : "Adicione um novo item"}
                </Text>
            </View>
            <View style={styles.viewInput}>
                <Input 
                    color={colors.tertiary}
                    label="Título da tarefa"
                    value={todoItem.title}
                    onChange={(e: string) => {
                        const newTodo: TodoType = {
                            id: todoItem.id ?? uuidv4(),
                            title: e,
                            description: todoItem.description,
                            status: false,
                        }
                        setTodoItem(newTodo)
                    }}
                    style={styles.input}
                />
            </View>
            <View style={styles.viewInput}>
                <Input 
                    color={colors.tertiary}
                    label="Descrição da tarefa"
                    value={todoItem.description}
                    onChange={(e: string) => {
                        const newTodo: TodoType = {
                            id: todoItem.id,
                            title: todoItem.title,
                            description: e,
                            status: false,
                        }
                        setTodoItem(newTodo)
                    }}
                    style={styles.input}
                />
            </View>
            <View style={styles.viewInput}>
                <Button 
                    title={route.params ? "Editar" : "Adicionar"} 
                    onClick={() => { 
                        route.params 
                        ? updateTodo(todoItem)
                        : addTodo(todoItem)
                        navigation.goBack();
                    }} 
                    style={{button: styles.button, title: styles.titleButton}}/>
                </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    viewGoBack: {
        width: "80%",
        height: '8%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    viewTitle: {
        width: "80%",
        height: "15%",
        justifyContent: "center",
        alignItems: 'center'
    },
    title: {
        color: colors.tertiary,
        fontSize: fontResize(20)
    },
    viewInput: {
        width: "80%",
        height: "8%",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: "10%"
    },
    input: {
        width: "100%",
        backgroundColor: "transparent",
        fontSize: fontResize(16),
      },
      button: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
      },
      titleButton: {
        fontSize: fontResize(24),
        color: colors.tertiary
      },
})

export default AddTodoItem;