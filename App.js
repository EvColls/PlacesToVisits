import React, { useState } from "react";
import { View, FlatList, Button, Modal, StyleSheet } from "react-native";
import PlaceInput from "./components/PlaceInput";
import PlaceItem from "./components/PlaceItem";

export default function App() {
  const [places, setPlaces] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addPlaceHandler = (title, address, description) => {
    setPlaces((currentPlaces) => [
      ...currentPlaces,
      { 
        id: Math.random().toString(), 
        title, 
        address, 
        description 
      },
    ]);
    setModalVisible(false);
  };

  const deletePlaceHandler = (placeId) => {
    setPlaces((currentPlaces) => currentPlaces.filter((place) => place.id !== placeId));
  };

  const updatePlaceHandler = (placeId, newTitle, newAddress, newDescription) => {
    setPlaces((currentPlaces) =>
      currentPlaces.map((place) =>
        place.id === placeId 
          ? { ...place, title: newTitle, address: newAddress, description: newDescription }
          : place
      )
    );
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Place" color="#007AFF" onPress={() => setModalVisible(true)} />
      <Modal visible={modalVisible} animationType="slide">
        <PlaceInput onAddPlace={addPlaceHandler} onCancel={() => setModalVisible(false)} />
      </Modal>
      <FlatList
        data={places}
        renderItem={(itemData) => (
          <PlaceItem
            title={itemData.item.title}
            address={itemData.item.address}
            description={itemData.item.description}
            id={itemData.item.id}
            onDelete={deletePlaceHandler}
            onUpdate={updatePlaceHandler}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#F3F4F6",
  },
});

