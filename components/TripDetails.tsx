import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {RouteProp} from "@react-navigation/core";
import {RootStackParams} from "@/app/(tabs)/index/_layout";

type TripDetailsProps = {
    route: RouteProp<RootStackParams, 'TripDetails'>;
};

export default function TripDetails({ route }: TripDetailsProps) {
    const { id } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Trip details: {id}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
    },
});