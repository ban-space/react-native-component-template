import { useState } from 'react';
import { StyleSheet, View, Button, Text, Alert, ScrollView, FlatList } from 'react-native';
import { useTheme } from '../../store/useTheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../component/header';
import Icon from '../../component/icon';
import SearchInput from '../../component/searchInput';
import Chips from '../../component/chips';
import Card from '../../component/card'
import ListHeader from '../../component/ListHeader';
import LatestItemList from '../../component/LatestItemList';
import { LatestList } from '../../data/latestList';
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

            <FlatList
                data={LatestList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (<LatestItemList
                    title={item.title}
                    source={item.image}
                    author={item.author}
                    readTime={item.readTime}
                    iconName="bookmark-outline"

                />)}
                ListHeaderComponent={
                    <>
                        <Card />
                        <ListHeader action={() => Alert.alert("See all pressed")} />
                    </>
                }
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ gap: spacing.hmd }}
                style={{ flexGrow: false, flex: 1 }}
            />

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

