import { StyleSheet, Pressable, ImageBackground, Text } from 'react-native';
import { useTheme } from '../store/useTheme';
import LinearGradient from 'react-native-linear-gradient';
import Tags from './tags';
const Card = () => {
    const { colors, spacing, verticalScale, borderRadii } = useTheme()
    const source = { uri: "https://i.postimg.cc/yYSkyJwH/image.png" }
    return (
        <Pressable style={{ height: verticalScale(250), borderRadius: borderRadii.lg, overflow: 'hidden' }}>

            < ImageBackground style={{ flex: 1, paddingVertical: spacing.hsm, paddingHorizontal: spacing.wsm }} source={source}>
                <Tags tag={"Live"} />
            </ImageBackground >

        </Pressable>

    )

}

const styles = StyleSheet.create({})

export default Card;
