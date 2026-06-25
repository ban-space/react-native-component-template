import { useState } from 'react';
import { StyleSheet, View, Button, Text, Alert, ScrollView } from 'react-native';
import { useTheme } from '../../store/useTheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../component/header';
import Icon from '../../component/icon';
import SearchInput from '../../component/searchInput';
import Chips from '../../component/chips';
const index = () => {
    const [searchInput, setSearchInput] = useState("")
    const { themeMode, colors, toggleTheme, fontSizes, spacing, verticalScale, horizontalScale, moderateScale, fontScale } = useTheme()
    const styles = createstyles({ colors, fontSizes, spacing, verticalScale, horizontalScale, moderateScale, fontScale })
    const notification = () => {
        Alert.alert("notification", "you have no new notification")
    }
    return (
        <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
            <SafeAreaView style={styles.headerSection}>
                <Header name="BanTech" />
                <View style={styles.iconContainer}>
                    <Icon name={themeMode === 'light' ? 'moon-outline' : 'sunny-outline'} action={toggleTheme} />
                    <Icon name="notifications-outline" action={notification} />
                </View>
            </SafeAreaView>

            <SearchInput value={searchInput} onChangeText={setSearchInput} />

            <Chips />
        </SafeAreaView>
    );
}

const createstyles = ({ colors, fontSizes, spacing, verticalScale, horizontalScale, moderateScale, fontScale }) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.bg,
            paddingHorizontal: spacing.wlg,
        },
        headerSection: {
            paddingTop: spacing.md,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        iconContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: spacing.hlg
        },
        chipsContainer: {
            flexGrow: false,
            marginTop: spacing.hlg
        }

    });
}

export default index;

