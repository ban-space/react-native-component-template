import { Pressable, Text, StyleSheet } from 'react-native';
import { useTheme } from '../store/useTheme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Container } from 'lucide-react-native';
export default function Icon({ name, action,isBordered = true }) {
    const { toggleTheme, colors, fontSizes, borderRadii, spacing, verticalScale, horizontalScale, moderateScale, fontScale, iconSizes } = useTheme();
    const styles = createStyles({isBordered, borderRadii, colors, fontSizes, spacing, verticalScale, horizontalScale, moderateScale, fontScale });

    return (
        <Pressable style={styles.iconContainer} onPress={action} >
            <Ionicons name={name} size={iconSizes.md} color={colors.iconColor} />
        </Pressable>
    );

}

const createStyles = ({ isBordered, borderRadii, colors, fontSizes, spacing, verticalScale, horizontalScale, moderateScale, fontScale }) => StyleSheet.create({
    iconContainer: {
        backgroundColor: colors.card,
        padding: spacing.wsm,
        borderRadius: borderRadii.lg,
        ...(isBordered && {
            borderWidth: 1,
            borderColor: colors.border,
        })
    }
});