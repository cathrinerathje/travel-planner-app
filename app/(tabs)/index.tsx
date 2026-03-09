import TripCard from "@/components/TripCard";
import { FlatList, StyleSheet, View } from "react-native";

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

const trips: Trip[] = [
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
  }
];

export default function Trips() {
  return (
    <View style={styles.container}>
      <FlatList
        data={trips}
        keyExtractor={trip => trip.id}
        renderItem={({ item: trip }) => (
          <TripCard
            image={trip.image}
            destination={trip.destination}
            startDate={trip.startDate}
            endDate={trip.endDate}
            onPress={() => alert('Trip pressed:' + trip.destination)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  text: {
    color: '#fff',
  },
});