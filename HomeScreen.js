import React, {useState} from 'react';
import { View, Text, Alert, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";

export default function HomeScreen(){
    
    const navigation = useNavigation();
    const [email,setEmail] =useState("");
    const [password,setPassword] = useState("");
    
    
    return(
        <View style={styles.container}>
            <input 
            placeholder="Email"
            onChangeText = {(text) => setEmail(text)}
            value={email}
        />
        <input 
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
        />
        
            
        </View>
    )
}

