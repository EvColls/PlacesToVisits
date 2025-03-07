import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

const PlaceItem = ({ title, id, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  return (
    <View style={styles.listItem}>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={newTitle}
          onChangeText={setNewTitle}
        />
      ) : (
        <Text>{title}</Text>
      )}
      {isEditing ? (
        <Button title="Save" onPress={() => { onUpdate(id, newTitle); setIsEditing(false); }} />
      ) : (
        <Button title="Edit" onPress={() => setIsEditing(true)} />
      )}
      <Button title="Delete" color="red" onPress={() => onDelete(id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderBottomWidth: 1,
    width: 100,
  },
});

export default PlaceItem;
