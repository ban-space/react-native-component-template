import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useTheme } from '../store/useTheme';
import Entypo from '@expo/vector-icons/Entypo';
const Tags = ({ tag }) => {
    const { colors, spacing, fontSizes, iconSizes, borderRadii, moderateScale } = useTheme()
    return (
        <View style={[styles.container, { backgroundColor: colors.backdrop, paddingVertical: spacing.hxs, paddingHorizontal: spacing.wmd, gap: spacing.wsm, borderRadius: borderRadii.lg }]}>
            <View style={[styles.dot, { backgroundColor: colors.onColor, width: moderateScale(8), borderRadius: borderRadii.md }]} />
            <Text style={{ color: colors.onColor, fontSize: fontSizes.body }}>{tag}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dot: {
        aspectRatio: 1
    }
})

export default Tags;
