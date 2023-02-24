import { createContext, useState } from "react";

export const AuthContext=createContext()


function AuthContextProvider({children}) {
 
    const [state,setState]=useState({
        isAuth:false,
        token:null
    })
    const [filter,setFilter]=useState("")
    let cart=[]
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
    const Add_to_Cart=(val)=>{
     cart.push(val)
    }
    

return(
    <AuthContext.Provider value={{authState:state,loginUser,logoutUser,search,filter,Add_to_Cart,cart}}>

        {children}
    </AuthContext.Provider>
)
}


export default AuthContextProvider;