import React, {
    memo,
    FC
} from "react";
import {
    TextProps,
    Text as RNText
} from "react-native";

type TextProp = {

}

const Text: FC<TextProps & TextProp> = ({ ...props }) => (
    <RNText {...props} />
)


export default memo(Text)