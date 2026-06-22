import { StyleSheet, View, Text } from 'react-native';
import { useTheme } from '../store/useTheme';

const Header = ({ name }) => {
    const { colors, fontSizes, spacing, verticalScale, horizontalScale, moderateScale, fontScale } = useTheme()
    const styles = createStyles({ colors, fontSizes, spacing, verticalScale, horizontalScale, moderateScale, fontScale })
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
        </View>
    );
}

const createStyles = ({ colors, fontSizes, spacing, verticalScale, horizontalScale, moderateScale, fontScale }) => StyleSheet.create({
    container: {

    },
    title: {
        fontSize: fontSizes.title,
        fontWeight: 'bold',
        color: colors.text,
        fontWeight: 'bold',
    }
})

export default Header;
