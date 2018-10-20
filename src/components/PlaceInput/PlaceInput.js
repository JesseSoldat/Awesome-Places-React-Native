import React, { Component } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet
} from "react-native";

class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  changeInput = placeName => this.setState({ placeName });

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") return;

    this.props.onPlaceAdded(this.state.placeName);
  };

  renderButton = () => {
    return (
      <TouchableOpacity onPress={this.placeSubmitHandler}>
        <View style={styles.button}>
          <Text>Add</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="An awesome place"
          value={this.state.placeName}
          onChangeText={this.changeInput}
        />
        {this.renderButton()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});

export default PlaceInput;
