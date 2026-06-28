import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import { useTheme } from '../store/useTheme';
const ListHeader = ({ action }) => {
    const { colors, fontSizes, spacing } = useTheme()
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: spacing.hlg, marginBottom: spacing.hmd }}>
            <Text style={{ fontSize: fontSizes.bodyLarge, fontWeight: 'bold', color: colors.text }}>Latest</Text>
            <Pressable onPress={action} style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1, transform: [{ scale: pressed ? 0.94 : 1 }] }]}>
                <Text style={{ color: colors.accent }}>See all</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ListHeader;
