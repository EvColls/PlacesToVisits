# Places Directory App

A simple React Native app for listing, adding, updating, and deleting places using Context API and React Navigation.

## Features
- 📍 View a list of places
- ➕ Add new places with title, address, and description
- ✏️ Edit existing places
- ❌ Delete places
- 🔄 State management using Context API
- 📱 Navigation with React Navigation

## Installation

### 1. Clone the Repository

git clone https://github.com/your-username/places-directory.git
cd places-directory

### 2. Install Dependencies

npm install

### 3. Install React Navigation Dependencies

npm install @react-navigation/native
npm install @react-navigation/stack
npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons


### 4. Run the App

npm start

_Use Expo Go or an emulator to preview the app._

## Project Structure

/screens
  ├── HomeScreen.js
  ├── AddEditPlaceScreen.js
/context
  ├── PlacesContext.js
/components
  ├── PlaceItem.js
/navigation
  ├── AppNavigator.js
App.js


## How It Works
- The **HomeScreen** displays the list of places.
- ![image](https://github.com/user-attachments/assets/1ba12b18-d1d5-486d-918a-1650143c62b3)

- The **AddEditPlaceScreen** allows adding or editing places.
- ![image](https://github.com/user-attachments/assets/4d9e4ac4-a708-4cbd-8152-a894934bede5)
- ![image](https://github.com/user-attachments/assets/e82772d6-f751-4fc1-8116-3a79fcbf8e83)
- The **PlacesContext** manages state across the app.
- The **AppNavigator** handles screen navigation.


