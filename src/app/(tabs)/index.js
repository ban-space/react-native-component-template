import { StyleSheet, View, Button } from 'react-native';
import { useTheme } from '../../store/useTheme';
const index = () => {
    const { toggleTheme } = useTheme()
    return (
        <View style={styles.container}>
            <Button style={styles.button} title='Go to Profile' onPress={toggleTheme} />
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {

    }

})

export default index;

