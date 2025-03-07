import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const PlaceInput = ({ onAddPlace, onCancel }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAddress, setEnteredAddress] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");

  const addPlaceHandler = () => {
    if (!enteredTitle.trim()) return;
    onAddPlace(enteredTitle, enteredAddress, enteredDescription);
    setEnteredTitle("");
    setEnteredAddress("");
    setEnteredDescription("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder="Name" style={styles.input} onChangeText={setEnteredTitle} value={enteredTitle} />
      <TextInput placeholder="Address" style={styles.input} onChangeText={setEnteredAddress} value={enteredAddress} />
      <TextInput placeholder="Description" style={[styles.input, styles.textArea]} onChangeText={setEnteredDescription} value={enteredDescription} multiline />

      <View style={styles.buttonContainer}>
        <Button title="Add" color="#007AFF" onPress={addPlaceHandler} />
        <Button title="Cancel" color="red" onPress={onCancel} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: { padding: 20 },
  input: { borderBottomWidth: 1, padding: 8, fontSize: 16, marginBottom: 10 },
  textArea: { height: 60 },
  buttonContainer: { flexDirection: "row", justifyContent: "space-between" },
});

export default PlaceInput;
