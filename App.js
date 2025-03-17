import React from "react";
import { PlacesProvider } from "./context/PlacesContext";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return (
    <PlacesProvider>
      <AppNavigator />
    </PlacesProvider>
  );
}
