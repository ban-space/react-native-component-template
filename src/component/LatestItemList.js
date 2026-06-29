import React from 'react';
import { StyleSheet, View, Pressable, Image, Text } from 'react-native';
import { useTheme } from '../store/useTheme';
import Caption from './caption';
import Ionicons from '@expo/vector-icons/Ionicons';
const LatestItemList = ({ title, source, author, readTime, iconName }) => {
    const { colors, fontSizes, spacing, iconSizes, borderRadii } = useTheme();
    const styles = createStyles({ colors, fontSizes, spacing, iconSizes, borderRadii });
    return (
        <Pressable style={styles.container} onPress={() => console.log("See all pressed")}>
            <View style={styles.TextImageContainer}>
                <View style={styles.titleContainer}>
                    <Text numberOfLines={3} style={styles.title}>{title}</Text>
                    <Caption author={author} readTime={readTime} color={colors.textMuted} />
                </View>

                <Image resizeMode="cover" source={source} style={{ width: 100, height: 100, borderRadius: borderRadii.lg }} />
            </View>
            <Ionicons name={iconName} size={iconSizes.md} color={colors.accent} />
        </Pressable>
    );
}

const createStyles = ({ colors, fontSizes, spacing, iconSizes, borderRadii }) => {
    return StyleSheet.create({
        container: {
            paddingTop: spacing.hmd,
            paddingBottom: spacing.hlg,
            paddingHorizontal: spacing.wmd,
            backgroundColor: colors.card,
            borderRadius: borderRadii.lg,
            borderWidth: 1,
            borderColor: colors.border,
        },
        TextImageContainer: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginBottom: spacing.hlg,
        },
        titleContainer: {
            flex: 0.9,
            gap: spacing.hsm,
        },
        title: {
            color: colors.text,
            fontSize: fontSizes.bodyLarge,
            fontWeight: '320'
        }
    });
};

export default LatestItemList;
