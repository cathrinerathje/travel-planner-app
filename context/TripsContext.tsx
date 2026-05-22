import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

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

interface TripsContextType {
    trips: Trip[];
    getTripById: (id: string) => Trip | undefined;
    refreshTrips: () => void;
    isLoading: boolean;
    isRefreshing: boolean;
}

const TripsContext = createContext<TripsContextType | undefined>(undefined);

export function TripsProvider({ children }: { children: ReactNode }) {
    const [trips, setTrips] = useState<Trip[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(false);

    useEffect(() => {
        void loadTrips();
    }, []);

    const loadTrips = async () => {
        try {
            const stored = await AsyncStorage.getItem('trips');
            setTimeout(() => {
                setTrips(stored ? JSON.parse(stored) : dummyTrips);
            }, 1000);
        } catch (error) {
            console.error('Failed to load trips:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const refreshTrips = async () => {
        setIsRefreshing(true);
        void loadTrips();
        setIsRefreshing(false);
    };

    const getTripById = (id: string) => {
        return trips.find(trip => trip.id === id);
    };

    return (
        <TripsContext.Provider value={{ trips, getTripById, refreshTrips, isLoading, isRefreshing }}>
            {children}
        </TripsContext.Provider>
    );
}

export function useTrips() {
    const context = useContext(TripsContext);
    if (!context) {
        throw new Error('useTrips must be used within TripsProvider');
    }
    return context;
}