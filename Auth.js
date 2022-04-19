import React, { useContext } from "react";
import {View, Text, Button} from "react-native";
import AuthContext from "./auth-context";

const Auth = () => {

const auth = useContext(AuthContext);
console.log(auth.status);

return (
	<View style={{flex:1, alignItems:"center", justifyContent:'center', backgroundColor:"#F3C5C5" }}>
    <Text style={{fontSize:26}}>AUTHENTICATION{'\n'}using useContext{'\n'}</Text>    
	<Text style={{fontSize:20}}>Are you authenticated?{'\n'}</Text>
    <Text style={{fontSize:16}}>
        {auth.status ?
        <Text>Yes you are!</Text>
        :
        <Text>Nope!</Text>
        } {'\n'}
    </Text>
	<Button color="#886F6F" title="Click to Login" onPress={auth.login}/>
	</View>
);
};

export default Auth;