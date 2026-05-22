import React from "react";
import {StyleSheet, Text, View, Image, FlatList} from "react-native";
import {RouteProp} from "@react-navigation/core";
import {RootStackParams} from "@/app/(tabs)/index/_layout";
import {useTrips} from "@/context/TripsContext";

type TripDetailsProps = {
    route: RouteProp<RootStackParams, 'TripDetails'>;
};

export default function TripDetails({ route }: TripDetailsProps) {
    const { id } = route.params;
    const { getTripById } = useTrips();
    const trip = getTripById(id);

    if (!trip) {
        return (
            <View style={styles.container}>
                <Text>Trip not found</Text>
            </View>
        );
    }

    const { destination, startDate, endDate, image, packingList } = trip;

    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.tripDetails}>
                <Text style={styles.text}>Trip details: {destination}</Text>
                <Text style={styles.text}>{startDate.toLocaleDateString()}</Text>
                <Text style={styles.text}>{endDate.toLocaleDateString()}</Text>
                {packingList.length > 0 && (
                    <View>
                        <Text style={styles.text}>Packing List:</Text>
                        <FlatList
                            data={packingList}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <Text style={styles.text}>{item.name}</Text>
                            )}
                        />
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
    },
    tripDetails: {
      padding: 8
    },
    text: {
        color: '#fff',
    },
    spinner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 200,
    },
});