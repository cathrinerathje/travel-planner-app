import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const trips = [
  {
    id: '1',
    destination: 'Paris',
    image: 'https://placehold.co/200x300',
    startDate: '2026-06-01',
    endDate: '2026-06-07',
    packingList: [
      { id: '1', name: 'Passport', done: true },
      { id: '2', name: 'Sunscreen', done: false },
    ]
  },
  {
    id: '2',
    destination: 'Vancouver',
    image: 'https://placehold.co/200x300',
    startDate: '2026-06-01',
    endDate: '2026-06-07',
    packingList: [
      { id: '1', name: 'Passport', done: true },
      { id: '2', name: 'Sunscreen', done: false },
    ]
  },
  {
    id: '3',
    destination: 'London',
    image: 'https://placehold.co/200x300',
    startDate: '2026-06-01',
    endDate: '2026-06-07',
    packingList: [
      { id: '1', name: 'Passport', done: true },
      { id: '2', name: 'Sunscreen', done: false },
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
          <View style={{ marginBottom: 20, alignItems: 'center' }}>
            <Image source={{ uri: trip.image }} style={{ width: 300, height: 200, marginBottom: 10 }} />
            <Text style={styles.text}>{trip.destination}</Text>
            <Text style={styles.text}>{trip.startDate} - {trip.endDate}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});