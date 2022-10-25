// import React, {useState, createContext} from "react";



// export const UserContext = createContext({
//     user: null,
//     handleUser: () => {},
// })


// function UserProvider ({children})  {

//     const [user, setUser] = useState("")

    
//     const handleUser = (user) => {
//         setUser(user)
//     }


//     const contextvalue = {
//         user, handleUser
//     }

//     return <UserContext.Provider value={contextvalue}>
//             {children}
//            </UserContext.Provider>
    
    
// }

// export default UserProvider








// export function useUser() {
//     const {state, actions} = useContext(UserContext)
//     return [state, actions]
// }

// const [{state}, {actions}] = useUser()