
import React, {
    useState
} from 'react';
import {
    TextInput,
    StyleProp,
    KeyboardTypeOptions,
    ViewStyle,
    Keyboard,
    ReturnKeyTypeOptions
} from 'react-native';
import {
    Colors
} from '../../../styles';

import styles from './styles';

type InputProps = {
    placeholder?: string,
    value?: string,
    onChangeText?: (text: string) => void,
    multiline?: boolean,
    password?: boolean,
    keyboardType?: KeyboardTypeOptions | undefined,
    maxLength?: number,
    style?: StyleProp<ViewStyle> | undefined,
    editable?: boolean,
    onFocus?: () => void,
    autoFocus?: boolean,
    returnKeyType?: ReturnKeyTypeOptions | undefined;
    dismissKeyboard?: boolean
}
export const Input = ({
    placeholder,
    value,
    onChangeText,
    style,
    multiline,
    password,
    keyboardType,
    maxLength,
    editable,
    onFocus,
    autoFocus,
    returnKeyType,
    dismissKeyboard
}: InputProps) => {

    let [showPassword, setShowPassword] = useState(password)
    return (
        <TextInput
            placeholderTextColor={Colors.Light_GRAY}
            returnKeyType={returnKeyType}
            autoFocus={autoFocus}
            onFocus={onFocus}
            editable={editable}
            onSubmitEditing={() => {
                if (dismissKeyboard)
                    Keyboard.dismiss()
            }}
            maxLength={maxLength}
            keyboardType={keyboardType}
            secureTextEntry={showPassword}
            multiline={multiline}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            style={[styles.inputStyle,
                style]}
        />

    )
}