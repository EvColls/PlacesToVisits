import React, { createContext, useState, useContext } from "react";

const PlacesContext = createContext();

export const PlacesProvider = ({ children }) => {
  const [places, setPlaces] = useState([]);

  const addPlace = (title, address, description) => {
    setPlaces([...places, { id: Date.now().toString(), title, address, description }]);
  };

  const updatePlace = (id, newTitle, newAddress, newDescription) => {
    setPlaces((currentPlaces) =>
      currentPlaces.map((place) =>
        place.id === id ? { ...place, title: newTitle, address: newAddress, description: newDescription } : place
      )
    );
  };

  const deletePlace = (id) => {
    setPlaces((currentPlaces) => currentPlaces.filter((place) => place.id !== id));
  };

  return (
    <PlacesContext.Provider value={{ places, addPlace, updatePlace, deletePlace }}>
      {children}
    </PlacesContext.Provider>
  );
};

export const usePlaces = () => useContext(PlacesContext);
