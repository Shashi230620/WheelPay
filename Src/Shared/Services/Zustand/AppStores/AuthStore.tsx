import { create } from "zustand";
import Base_Url from "../BaseUrl/BaseUrl";

const AuthStore=create((set)=>({
    login:async(credential:number)=>{
   try{
       const res= await fetch(`${Base_Url}/Login_newUser`,{method:'POST',headers:{ 'Content-Type': 'application/json'},body:JSON.stringify( credential)})
      const response=await res.json()
      set({response})
   }
   catch(error){
    console.log(error)
   }
    },
 otp_Verifiy:async(credential:number)=>{
   try{
       const res= await fetch(`${Base_Url}/Verify_Otp`,{method:'POST',headers:{ 'Content-Type': 'application/json'},body:JSON.stringify( credential)})
      const response=await res.json()
      set({response})
   }
   catch(error){
    console.log(error)
   }
    }
}))

export default AuthStore