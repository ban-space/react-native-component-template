import { Tabs } from 'expo-router'
import { Text } from 'react-native';
import { Home, LayoutGrid, Bookmark, User } from 'lucide-react-native';
import { useTheme } from '../../store/useTheme';
import { SystemBars } from 'react-native-edge-to-edge';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
const Layout = () => {
    const { colors, fontSizes, spacing, borderRaddi, iconSizes, verticalScale } = useTheme()
    const insets = useSafeAreaInsets();
    return (
        <>
            <SystemBars style={colors.SystemBar} />
            <Tabs screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colors.tabbar,
                    borderTopWidth: fontSizes.sm,
                    elevation: 0,
                    height: verticalScale(60) + insets.bottom,
                    borderTopColor: colors.border,
                },
                tabBarItemStyle: {
                    paddingTop: verticalScale(10),
                }
            }}>
                <Tabs.Screen name='index' options={{
                    title: 'Home',
                    tabBarLabel: ({ color, focused }) => {
                        return focused ? <Text style={{ color, fontSize: fontSizes.subtext }}>Home</Text> : null;
                    },
                    tabBarIcon: ({ color, size, focused }) => {
                        return <Home color={color} size={focused ? size + 5 : size} />
                    }
                }
                } />
                <Tabs.Screen name='category' options={{
                    title: 'Category',
                    tabBarLabel: ({ color, focused }) => {
                        return focused ? <Text style={{ color, fontSize: fontSizes.subtext }}>Category</Text> : null;
                    },
                    tabBarIcon: ({ color, size, focused }) => {
                        return <LayoutGrid color={color} size={focused ? size + 5 : size} />
                    }
                }
                } />
                <Tabs.Screen name='favorite' options={{
                    title: 'Favorite',
                    tabBarLabel: ({ color, focused }) => {
                        return focused ? <Text style={{ color, fontSize: fontSizes.subtext }}>Favorite</Text> : null;
                    },
                    tabBarIcon: ({ color, size, focused }) => {
                        return <Bookmark color={color} size={focused ? size + 5 : size} />
                    }
                }
                } />
                <Tabs.Screen name='profile' options={{
                    title: 'Profile',
                    tabBarLabel: ({ color, focused }) => {
                        return focused ? <Text style={{ color, fontSize: fontSizes.subtext }}>Profile</Text> : null;
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
