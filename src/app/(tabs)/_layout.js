import { Tabs } from 'expo-router'
import { Text } from 'react-native';
import { Home, LayoutGrid, Bookmark, User } from 'lucide-react-native';
import { useTheme } from '../../store/useTheme';
import { SystemBars } from 'react-native-edge-to-edge';
const Layout = () => {
    const { colors } = useTheme()
    return (
        <>
            <SystemBars style={colors.SystemBar} />
            <Tabs screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colors.tabbar,
                    borderTopWidth: 1,
                    elevation: 0,
                    height: 70,
                    borderTopColor: colors.border,
                },
                tabBarItemStyle: {
                    paddingTop: 15,
                }
            }}>
                <Tabs.Screen name='index' options={{
                    title: 'Home',
                    tabBarLabel: ({ color, focused }) => {
                        return focused ? <Text style={{ color, fontSize: 10 }}>Home</Text> : null;
                    },
                    tabBarIcon: ({ color, size, focused }) => {
                        return <Home color={color} size={focused ? size : size - 5} />
                    }
                }
                } />
                <Tabs.Screen name='category' options={{
                    title: 'Category',
                    tabBarLabel: ({ color, focused }) => {
                        return focused ? <Text style={{ color, fontSize: 10 }}>Category</Text> : null;
                    },
                    tabBarIcon: ({ color, size, focused }) => {
                        return <LayoutGrid color={color} size={focused ? size  + 5: size} />
                    }
                }
                } />
                <Tabs.Screen name='favorite' options={{
                    title: 'Favorite',
                    tabBarLabel: ({ color, focused }) => {
                        return focused ? <Text style={{ color, fontSize: 10 }}>Favorite</Text> : null;
                    },
                    tabBarIcon: ({ color, size, focused }) => {
                        return <Bookmark color={color} size={focused ? size + 5 : size} />
                    }
                }
                } />
                <Tabs.Screen name='profile' options={{
                    title: 'Profile',
                    tabBarLabel: ({ color, focused }) => {
                        return focused ? <Text style={{ color, fontSize: 10 }}>Profile</Text> : null;
                    },
                    tabBarIcon: ({ color, size, focused }) => {
                        return <User color={color} size={focused ? size + 5 : size} />
                    }
                }
                } />

            </Tabs>
        </>
    );
}

export default Layout;
