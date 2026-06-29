import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useTheme } from '../store/useTheme';
const Caption = ({ author, readTime,color }) => {
    const { colors, fontSizes, spacing, moderateScale, borderRadii } = useTheme()
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.wsm }}>
            <Text style={{ color: color || colors.onColorFaint, fontSize: fontSizes.subtext }}>{author}</Text>
            <View style={{ backgroundColor: color || colors.onColorFaint, width: moderateScale(4), aspectRatio: 1, borderRadius: borderRadii.md }} />
            <Text style={{ color: color || colors.onColorFaint, fontSize: fontSizes.subtext }}>{readTime}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Caption;
