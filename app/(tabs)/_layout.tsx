import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        headerStyle: {
        backgroundColor: '#25292e',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
        backgroundColor: '#25292e',
        },
    }}>
      <Tabs.Screen name="index" options={{ title: 'Trips overview', tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
    }} />
      <Tabs.Screen name="reports" options={{ title: 'Reports', tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'bar-chart-sharp' : 'bar-chart-outline'} color={color} size={24} />
          ), }} />
    </Tabs>
  );
}
