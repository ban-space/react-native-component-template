import { TextInput, View, StyleSheet, Alert } from "react-native";
import { useTheme } from "../store/useTheme";
import Icon from "./icon";

export default function SearchInput({ value, onChangeText }) {
    const { colors, fontSizes, spacing, verticalScale, horizontalScale, moderateScale, fontScale, borderRadii } = useTheme()
    const searchingInput = (value) => {
        Alert.alert("Searching", `you are seaching for ${value}`)
    }
    return (
        <View style={[styles.container, { backgroundColor: colors.card, paddingHorizontal: spacing.wsm, paddingVertical: spacing.hsm, borderRadius: borderRadii.md }]}>
            <Icon name="search" action={() => searchingInput(value)} isBordered={false} />
            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={[styles.input, { color: colors.text }]}
                placeholder="Search..."
                placeholderTextColor={colors.textMuted}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    input: {
        flex: 1,
    }
})