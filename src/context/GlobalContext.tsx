import TodoProvider from "./todoContext"
import UserProvider from "./userContext"
import * as React from "react"

const GlobalContext: React.FC = ({children}) => {
    return(
        <UserProvider>
            <TodoProvider>
                {children}
            </TodoProvider>
        </UserProvider>   
    )
}

export default GlobalContext;