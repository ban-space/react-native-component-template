import { Tabs } from 'expo-router'
import { Text } from 'react-native';
import { Home, LayoutGrid, Bookmark, User } from 'lucide-react-native';
const Layout = () => {
    return (
        <Tabs screenOptions={{
            headerShown: false,
        }}>
            <Tabs.Screen name='index' options={{
                title: 'Home',
                tabBarLabel: ({ color, focused }) => {
                    return focused ? <Text style={{ color, fontSize: 10 }}>Home</Text> : null;
                },
                tabBarIcon: ({ color, size }) => {
                    return <Home color={color} size={size} />
                }
            }
            } />
            <Tabs.Screen name='category' options={{
                title: 'Category',
                tabBarLabel: ({ color, focused }) => {
                    return focused ? <Text style={{ color, fontSize: 10 }}>Category</Text> : null;
                },
                tabBarIcon: ({ color, size }) => {
                    return <LayoutGrid color={color} size={size} />
                }
            }
            } />
            <Tabs.Screen name='favorite' options={{
                title: 'Favorite',
                tabBarLabel: ({ color, focused }) => {
                    return focused ? <Text style={{ color, fontSize: 10 }}>Favorite</Text> : null;
                },
                tabBarIcon: ({ color, size }) => {
                    return <Bookmark color={color} size={size} />
                }
            }
            } />
            <Tabs.Screen name='profile' options={{
                title: 'Profile',
                tabBarLabel: ({ color, focused }) => {
                    return focused ? <Text style={{ color, fontSize: 10 }}>Profile</Text> : null;
                },
                tabBarIcon: ({ color, size }) => {
                    return <User color={color} size={size} />
                }
            }
            } />

        </Tabs>
    );
}

export default Layout;
