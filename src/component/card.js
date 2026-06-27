import { StyleSheet, Pressable, ImageBackground, Text, View } from 'react-native';
import { useTheme } from '../store/useTheme';
import { LinearGradient } from 'expo-linear-gradient';
import Tags from './tags';
import HeroTitle from './heroTitle';
import Caption from './caption';
const Card = () => {
    const { colors, spacing, verticalScale, borderRadii } = useTheme()
    const source = { uri: "https://i.postimg.cc/yYSkyJwH/image.png" }
    return (
        <Pressable style={{ height: verticalScale(220), borderRadius: borderRadii.lg, overflow: 'hidden' }}>

            < ImageBackground resizeMode='cover'
                style={{
                    flex: 1,
                    justifyContent: 'space-between'
                }} source={source}>
                <LinearGradient
                   colors={['transparent', 'transparent', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.87)']}
                    style={{
                        flex: 1,
                        paddingVertical: spacing.hsm,
                        paddingHorizontal: spacing.wsm,
                        justifyContent: 'space-between'
                    }}
                >
                    <Tags tag={"Live"} />
                    <View style={{}}>
                        <HeroTitle title={"AI powered world "} />
                        <Caption author={"Ban Tech"} readTime={'2h ago'} />
                    </View>
                </LinearGradient>

            </ImageBackground >

        </Pressable>

    )

}

const styles = StyleSheet.create({})

export default Card;
