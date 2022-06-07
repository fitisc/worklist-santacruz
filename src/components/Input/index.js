import React from 'react';
import {TextInput} from 'react-native';
import {style} from './styles';


const Input = ({placeholder, style, placeholderTextColor, value, onChangeText, ...props}) => {

const onChangeTextHandler = (text) => {
    onChangeText(text);
};
//const onHandlerBlur = () => {
//    onBlur();
//};

//const onHandlerFocus = () => {
 //   onFocus();
//};



    return (
        <TextInput
            {...props}
            placeholder={placeholder}
            style={{...style}}
            placeholderTextColor={placeholderTextColor}
            value={value}
            onChangeText={onChangeTextHandler}
            
            

      />
    )
    }

    export default Input;
