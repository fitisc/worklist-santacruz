import React from 'react';
import {TextInput} from 'react-native';
import {style} from './styles';


const Input = ({placeholder, styles, placeholderTextColor, value, onChangeText, onBlur, onFocus, editable, ...props}) => {

const onChangeTextHandler = (text) => {
    onChangeText(text);
};
const onHandlerBlur = () => {
    onBlur();
};

const onHandlerFocus = () => {
    onFocus();
};



    return (
        <TextInput
            {...props}
            placeholder={placeholder}
            style={[styles.input, {...style}]}
            placeholderTextColor={placeholderTextColor}
            value={value}
            onChangeText={onChangeTextHandler}
            onBlur={onHandlerBlur}
            onFocus={onHandlerFocus}
            editable={editable}

      />
    )
    }

    export default Input;
