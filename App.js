import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

// custom components
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";

export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null
  };

  uuidv4 = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

  onPlaceAdded = name => {
    this.setState(prevState => ({
      places: prevState.places.concat({
        key: this.uuidv4(),
        name,
        image: {
          uri: "https://via.placeholder.com/350x150"
        }
      })
    }));
  };

  placeSelectedHandler = () => {};

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.onPlaceAdded} />
        <PlaceList
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff"
  }
});
