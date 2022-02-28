import {
    Platform
} from 'react-native';
import {
    scale
} from './dimensions';





export const REGULAR = Platform.select({ android: "Almarai-Regular", ios: "Almarai-Regular" });
export const EXTRA_BOLD = Platform.select({ android: "Almarai-ExtraBold", ios: "Almarai-ExtraBold" });
export const BOLD = Platform.select({ android: "Almarai-Bold", ios: "Almarai-Bold" });
export const LIGHT = Platform.select({ android: "Almarai-Light", ios: "Almarai-Light" });




export const H1 = scale(22, 650);
export const H2 = scale(16, 650);
export const H3 = scale(12, 650);
export const H4 = scale(9, 650);
export const P = scale(12, 650);
