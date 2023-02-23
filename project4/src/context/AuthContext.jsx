import { createContext, useState } from "react";

export const AuthContext=createContext()


function AuthContextProvider({children}) {
 
    const [state,setState]=useState({
        isAuth:false,
        token:null
    })
    const [filter,setFilter]=useState("")

    const loginUser=(val)=>{
        setState(
            {...state,
            isAuth:true,
            token:val
        }
        )
    }

    const logoutUser=()=>{
       setState({
            ...state,
            isAuth:false,
            token:null
        })
       
    }
    const search=(val)=>{
        setFilter(val)
    }

return(
    <AuthContext.Provider value={{authState:state,loginUser,logoutUser,search,filter}}>

        {children}
    </AuthContext.Provider>
)

}

export default AuthContextProvider;