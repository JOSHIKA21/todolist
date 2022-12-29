import React, {Components} from "react";
import {View, Text, Button} from "react-native";
export default class extends Components
{
    render()
    {
        return(
            <View>
                <Text style={{textalign:'centter', fontSize:30}}>Screen 1</Text>
                <Button title=" Show "></Button>
            </View>
        )
    }
}