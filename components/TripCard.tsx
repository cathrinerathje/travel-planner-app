import { Trip } from "@/context/TripsContext";
import React from "react";
import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParams} from "@/app/(tabs)/index/_layout";
import {useNavigation} from "expo-router";

export type NavigationProp = NativeStackNavigationProp<RootStackParams, 'TripDetails'>;

export default function TripCard({ id, image, destination, startDate, endDate }: Trip) {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    navigation.navigate('TripDetails', { id });
  }

  return (
    <Pressable onPress={handlePress} style={styles.card}>
      <ImageBackground
        source={{ uri: image }}
        style={styles.image}
        imageStyle={styles.imageRadius}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>{destination}</Text>
          <Text style={styles.subtitle}>{startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 200,
    borderRadius: 16,
    overflow: 'hidden',
    marginVertical: 2,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  imageRadius: {
    borderRadius: 16,
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.35)",
    padding: 12
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  subtitle: {
    color: "white",
    fontSize: 14,
    marginTop: 4
  },
});