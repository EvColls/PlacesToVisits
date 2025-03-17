import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { usePlaces } from "../context/PlacesContext";

const AddEditPlaceScreen = ({ route, navigation }) => {
  const { addPlace, updatePlace } = usePlaces();
  const { place } = route.params || {};

  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (place) {
      setTitle(place.title);
      setAddress(place.address);
      setDescription(place.description);
    }
  }, [place]);

  const handleSubmit = () => {
    if (place) {
      updatePlace(place.id, title, address, description);
    } else {
      addPlace(title, address, description);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{place ? "Edit Place" : "Add New Place"}</Text>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} style={styles.input} />
      <TextInput placeholder="Address" value={address} onChangeText={setAddress} style={styles.input} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} style={styles.input} multiline />
      <Button title={place ? "Update Place" : "Add Place"} onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  input: { backgroundColor: "#f8f8f8", padding: 10, marginVertical: 10, borderRadius: 5 },
});

export default AddEditPlaceScreen;
