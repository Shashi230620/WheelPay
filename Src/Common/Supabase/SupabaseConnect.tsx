import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js"
import storage from "app-Common/Storage/Storage"
const supabaseUrl = 'https://tzjyguposcofzkridqtk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6anlndXBvc2NvZnprcmlkcXRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc1Mjk1MDQsImV4cCI6MjA5MzEwNTUwNH0.r5V7t5mpj-XxNhhMRf-eRAb4E3Y--wK6NdtbQ-O5umE'


const SupabaseStorage={
  getItem:(key:string)=>{
    const value=storage.getString(key)
    return value??null
  },
setItem:(key:string,value:string)=>{
 storage.set(key,value)
},
removeItem:(key:string)=>{
  storage.delete(key)
}
}
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage:SupabaseStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})