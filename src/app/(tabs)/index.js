import { StyleSheet, View, Button, Text } from 'react-native';
import { useTheme } from '../../store/useTheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../component/header';
import Icon from '../../component/icon';
const index = () => {
    const { themeMode, colors, toggleTheme, fontSizes, spacing, verticalScale, horizontalScale, moderateScale, fontScale } = useTheme()
    const styles = createstyles({ colors, fontSizes, spacing, verticalScale, horizontalScale, moderateScale, fontScale })

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.headerSection}>
                <Header name="BanTech" />
                <View style={styles.iconContainer}>
                    <Icon name={themeMode === 'light' ? 'moon-outline' : 'sunny-outline'} isToggle={true} />
                    <Icon name="notifications-outline" />
                </View>
            </SafeAreaView>

        </View>
    );
}

const createstyles = ({ colors, fontSizes, spacing, verticalScale, horizontalScale, moderateScale, fontScale }) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.bg,
        },
        headerSection: {
            paddingHorizontal: spacing.wlg,
            paddingTop: spacing.md,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        iconContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: spacing.hlg
        }

    });
}

export default index;

