import React from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { usePlaces } from "../context/PlacesContext";
import PlaceItem from "../components/PlaceItem";

const HomeScreen = ({ navigation }) => {
  const { places } = usePlaces();

  return (
    <View style={styles.container}>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PlaceItem place={item} />}
      />
      <Button title="Add New Place" onPress={() => navigation.navigate("AddEditPlace")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});

export default HomeScreen;
