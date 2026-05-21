import { Trip } from "./Trips";
import React from "react";
import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";

type TripCardProps = Pick<Trip, "image" | "destination" | "startDate" | "endDate"> & { 
    onPress: () => void; 
}

export default function TripCard({ image, destination, startDate, endDate, onPress }: TripCardProps) {
  return (
    <Pressable onPress={onPress} style={styles.card}>
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