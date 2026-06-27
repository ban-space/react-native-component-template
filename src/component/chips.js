import { StyleSheet, View, Pressable, Text, ScrollView } from 'react-native';
import { useState } from 'react';
import { useTheme } from '../store/useTheme';
import { Category } from '../data/category';
import { Scaling } from 'lucide-react-native';
const Chips = () => {
    const [selectedCategory, setSelectedCategory] = useState(Category[0]);
    const { colors, toggleTheme, fontSizes, spacing, verticalScale, horizontalScale, moderateScale, fontScale, borderRadii } = useTheme()
    return (
        <ScrollView horizontal
            showsHorizontalScrollIndicator={false}
            style={{ flexGrow: 0, marginTop: spacing.hlg, marginBottom: spacing.hxl }}>
            {Category.map((cat) => (
                <Pressable key={cat} onPress={() => setSelectedCategory(cat)}
                    style={({ pressed }) => [{
                        transform: [{ scale: pressed ? .95 : 1 }],
                        backgroundColor: selectedCategory == cat ? colors.accent : colors.card,
                        paddingHorizontal: spacing.wlg,
                        paddingVertical: spacing.hsm,
                        borderRadius: borderRadii.lg,
                        marginLeft: spacing.wsm
                    }]}>
                    <Text style={[{ color: selectedCategory == cat ? 'white' : colors.textMuted }]}>{cat}</Text>
                </Pressable>
            ))}

        </ScrollView>

    );
}

export default Chips;