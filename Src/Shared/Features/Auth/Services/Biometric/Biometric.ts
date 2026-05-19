import ReactNativeBiometrics,{BiometryTypes} from "react-native-biometrics";

const Biometric = async (): Promise<boolean | undefined> => {
   try{
    const rnbiometric=new ReactNativeBiometrics()
    const {biometryType,available}=await rnbiometric.isSensorAvailable()
    if(biometryType===BiometryTypes.Biometrics && available){
        const {success}=await rnbiometric.simplePrompt({
            promptMessage:'verify with finger'
        })
        return success
   }
   else{
    console.log("biometric feature not available in your device")
   }
    }
    catch(error){
       console.log( 'Bimetric function is not working properly')
    }
}
export default Biometric