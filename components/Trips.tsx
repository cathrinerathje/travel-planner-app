import TripCard from "./TripCard";
import {ActivityIndicator, FlatList, StyleSheet, View} from "react-native";
import {useEffect, useState} from "react";

export interface Trip {
    id: string;
    destination: string;
    image: string;
    startDate: Date;
    endDate: Date;
    packingList: PackingItem[];
}

interface PackingItem {
    id: string;
    name: string;
    completed: boolean;
}

const dummyTrips: Trip[] = [
    {
        id: '1',
        destination: 'Paris',
        image: 'https://placehold.co/400x600',
        startDate: new Date('2026-06-01'),
        endDate: new Date('2026-06-07'),
        packingList: [
            { id: '1', name: 'Passport', completed: true },
            { id: '2', name: 'Sunscreen', completed: false },
        ]
    },
    {
        id: '2',
        destination: 'Vancouver',
        image: 'https://placehold.co/400x600',
        startDate: new Date('2026-06-01'),
        endDate: new Date('2026-06-07'),
        packingList: [
            { id: '1', name: 'Passport', completed: true },
            { id: '2', name: 'Sunscreen', completed: false },
        ]
    },
    {
        id: '3',
        destination: 'London',
        image: 'https://placehold.co/400x600',
        startDate: new Date('2026-06-01'),
        endDate: new Date('2026-06-07'),
        packingList: [
            { id: '1', name: 'Passport', completed: true },
            { id: '2', name: 'Sunscreen', completed: false },
        ]
    },
    {
        id: '4',
        destination: 'New York',
        image: 'https://placehold.co/400x600',
        startDate: new Date('2026-06-01'),
        endDate: new Date('2026-06-07'),
        packingList: [
            { id: '1', name: 'Passport', completed: true },
            { id: '2', name: 'Sunscreen', completed: false },
        ]
    },
    {
        id: '5',
        destination: 'Oslo',
        image: 'https://placehold.co/400x600',
        startDate: new Date('2026-06-01'),
        endDate: new Date('2026-06-07'),
        packingList: [
            { id: '1', name: 'Passport', completed: true },
            { id: '2', name: 'Sunscreen', completed: false },
        ]
    }
];

export default function Trips() {
    const [trips, setTrips] = useState<Trip[]>([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const fetchTrips = async () => {
        setTimeout(() => {
            setTrips(dummyTrips);
            setLoading(false)
        }, 1000);
    }

    useEffect(() => {
        void fetchTrips();
    }, []);

    const handleRefresh = () => {
        setRefreshing(true);
        void fetchTrips();
        setRefreshing(false);
    };

    return (
        <View style={styles.container}>
            {loading ? <ActivityIndicator size="large" style={styles.spinner} /> : (
                <FlatList
                    data={trips}
                    keyExtractor={trip => trip.id}
                    refreshing={refreshing}
                    onRefresh={handleRefresh}
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