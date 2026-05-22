import TripCard from "./TripCard";
import {ActivityIndicator, FlatList, StyleSheet, View} from "react-native";
import {useTrips} from "@/context/TripsContext";

export default function Trips() {
    const { trips, isLoading, isRefreshing, refreshTrips } = useTrips();

    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator size="large" style={styles.spinner} /> : (
                <FlatList
                    data={trips}
                    keyExtractor={trip => trip.id}
                    refreshing={isRefreshing}
                    onRefresh={refreshTrips}
                    renderItem={({ item: trip }) => (
                        <TripCard { ...trip} />
                    )}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        padding: 8,
        paddingTop: 0.5,
        paddingBottom: 0.5,
    },
    text: {
        color: '#fff',
    },
    spinner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});