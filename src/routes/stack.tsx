import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//COMPONENTS
import LoginScreen from '../screens/login';
import SignUpScreen from '../screens/signUp';
import TodoListScreen from '../screens/todoList';
import AddTodoItem from '../screens/addTodoItem';

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen 
                    name='Login' 
                    component={LoginScreen}
                    options={{
                        headerShown: false,
                        animation: "slide_from_right"
                    }}
                />
                <Stack.Screen 
                    name='SignUp' 
                    component={SignUpScreen}
                    options={{
                        headerShown: false,
                        animation: "slide_from_right"
                    }}
                />
                <Stack.Screen 
                    name='TodoList' 
                    component={TodoListScreen}
                    options={{
                        headerShown: false,
                        animation: "slide_from_right"
                    }}
                />
                <Stack.Screen 
                    name='AddTodoItem' 
                    component={AddTodoItem}
                    options={{
                        headerShown: false,
                        animation: "slide_from_right"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStack;