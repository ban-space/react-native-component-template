
import { Tabs } from 'expo-router'

const _layout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="index" />
            <Tabs.Screen name="category" />
            <Tabs.Screen name="favorite" />
            <Tabs.Screen name="profile" />
        </Tabs>


    );
}

export default _layout;
