import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Trips from "@/components/Trips";
import TripDetails from "@/components/TripDetails";
import {globalHeaderStyles} from "@/app/(tabs)/_layout";

export type RootStackParams = {
    Trips: undefined;
    TripDetails: { id: string };
}

const Stack = createNativeStackNavigator<RootStackParams>();

export default function RootStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Trips" component={Trips} options={{ title: 'Trips', ...globalHeaderStyles }} />
            <Stack.Screen name="TripDetails" component={TripDetails} options={{ ...globalHeaderStyles, title: 'Trip details', headerBackTitle: 'Back' }} />
        </Stack.Navigator>
    )
}