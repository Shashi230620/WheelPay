import React from "react";
import { create } from "zustand";
import Base_Url from "../BaseUrl/BaseUrl";
import storage from "app-Shared/Services/Storage/Storage";

const WheelPayId=storage.getString('WheelPayId')
const UserWalletStore=create((set)=>({
    user_walletDetails:async()=>{
        try{
            const getDetails=await fetch(`${Base_Url}/customer_walletDetails`,{method:'GET',headers:{'Content-Type': 'application/json', WheelPayId: WheelPayId,}})
            const resp=await getDetails.json()
            set({resp})
        }
        catch(error){
            console.log('their is an error in walletDetails')
        }
    }
}))
export  default UserWalletStore