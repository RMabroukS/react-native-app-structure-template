import { StyleSheet } from 'react-native';
import { getHeight, getWidth, RFValue } from '../../../config/dimensions';
import { Colors } from '../../../styles';
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center"

    },
    StandardButtonContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: getWidth(343),
        height: getHeight(38),
        backgroundColor: Colors.DARK_GRAY,
        borderRadius: getHeight(38 / 2),
        flexDirection: "row"
    },

    customButtonContainer: {
        height: getHeight(44),
        flexDirection: "row",
        justifyContent: "space-between",
        width: getWidth(343),
        alignItems: "center",
        borderWidth: 1,
        borderRadius: RFValue(15,812),
        backgroundColor: Colors.WHITE,
        borderColor: Colors.BORDER,
        paddingHorizontal: getWidth(16),
        marginTop: getHeight(10),
    },
    value: { paddingHorizontal: getWidth(10) }

});
export default styles;
