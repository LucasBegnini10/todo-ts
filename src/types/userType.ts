export  interface UserType {
    id?: string,
    name: string,
    email: string,
}

export interface UserContextType {
    user: UserType,
    addUser: (user: UserType) => void;
    removeUser: (id: string) => void
}
