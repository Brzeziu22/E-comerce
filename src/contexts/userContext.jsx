import { createContext,useState,useEffect,useReducer } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebaseUtil";

export const UserContext=createContext({
    currentUser:null,
    setCurrentUser:()=> null,
});

export  const USER_ACTION_TYPES={
    SET_CURRENT_USER:'SET_CURRENT_USER'
}

const INITIAL_STATE={
    currentUser:null,
}

const userReducer=(state,action)=>{
    const {type,payload}= action;
    

    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {...state,
                currentUser:payload}
    
    default:
        throw new Error(`Unhandled Type in userReducer: ${type}`);
    }
}



export const UserProvider=({children})=>{
   
    const [{currentUser},dispatch]= useReducer(userReducer,INITIAL_STATE)
   

  const setCurrentUser=(user)=>{
    dispatch({type:'SET_CURRENT_USER',payload:user})
    }
    const value={currentUser,setCurrentUser};

    useEffect(()=>{ 
       const unsubscribe = onAuthStateChangedListener((user)=>{
        if(user){
            createUserDocumentFromAuth(user);
        }
        setCurrentUser(user);
       })
       
       return unsubscribe;
    },[])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}