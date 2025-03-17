import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { usePlaces } from "../context/PlacesContext";
import { useNavigation } from "@react-navigation/native";

const PlaceItem = ({ place }) => {
  const { deletePlace } = usePlaces();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("AddEditPlace", { place })}
      style={styles.card}
    >
      <Text style={styles.title}>{place.title}</Text>
      <Text>{place.address}</Text>
      <Text numberOfLines={2}>{place.description}</Text>
      <Text></Text>
      <Button title="Delete" onPress={() => deletePlace(place.id)} color="red" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "#f8f8f8", padding: 15, marginVertical: 8, borderRadius: 8 },
  title: { fontSize: 18, fontWeight: "bold" },
});

export default PlaceItem;
