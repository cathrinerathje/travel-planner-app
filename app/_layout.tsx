import { Stack } from 'expo-router';
import {TripsProvider} from "@/context/TripsContext";

export default function RootLayout() {
  return (
    <TripsProvider>
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    </TripsProvider>
  );
}
