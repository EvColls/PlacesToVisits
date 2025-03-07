import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, Modal } from "react-native";

const PlaceItem = ({ title, address, description, id, onDelete, onUpdate }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newAddress, setNewAddress] = useState(address);
  const [newDescription, setNewDescription] = useState(description);

  return (
    <View>
      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        <View style={styles.listItem}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.address}>{address}</Text>
        </View>
      </TouchableOpacity>

      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContent}>
          {isEditing ? (
            <>
              <TextInput style={styles.input} value={newTitle} onChangeText={setNewTitle} />
              <TextInput style={styles.input} value={newAddress} onChangeText={setNewAddress} />
              <TextInput 
                style={[styles.input, styles.textArea]} 
                value={newDescription} 
                onChangeText={setNewDescription} 
                multiline
              />
            </>
          ) : (
            <>
              <Text style={styles.modalTitle}>{title}</Text>
              <Text style={styles.modalAddress}>{address}</Text>
              <Text style={styles.modalDescription}>{description}</Text>
            </>
          )}

          <View style={styles.buttonContainer}>
            {isEditing ? (
              <Button
                title="Save"
                onPress={() => {
                  onUpdate(id, newTitle, newAddress, newDescription);
                  setIsEditing(false);
                }}
                color="#4CAF50"
              />
            ) : (
              <Button title="Edit" onPress={() => setIsEditing(true)} color="#FFA500" />
            )}
            <Button title="Delete" onPress={() => { onDelete(id); setIsModalVisible(false); }} color="red" />
            <Button title="Close" onPress={() => setIsModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: "#FFF",
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  address: {
    color: "#555",
  },
  modalContent: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  modalAddress: {
    fontSize: 18,
    color: "#555",
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    color: "#333",
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    fontSize: 16,
  },
  textArea: {
    height: 60,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default PlaceItem;
