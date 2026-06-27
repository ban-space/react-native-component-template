import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useTheme } from '../store/useTheme';
const HeroTitle = ({ title }) => {
    const { colors, fontSizes } = useTheme()
    return (
        <View>
            <Text style={{ color: colors.onColor, fontSize: fontSizes.hero }}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default HeroTitle;
