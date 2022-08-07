import * as React from "react";
import {UserType, UserContextType} from "../types/userType";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';



const initialState = {
    name: "",
    email: "",
    id: ""
}

export const UserContext = React.createContext< UserContextType| null>(null);

const UserProvider: React.FC<React.ReactNode> = ({children}) => {
    const [user, setUser] = React.useState<UserType>(initialState);
    
    
    const addUser = (user: UserType) => {
        const newUser:UserType = {
            id: uuidv4(),
            email: user.email,
            name: user.name,
        }
        setUser(newUser)
    }

    const removeUser = () => {
        setUser(initialState)
    }

    return(
        <UserContext.Provider value={{user, addUser, removeUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;