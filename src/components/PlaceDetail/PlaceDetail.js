import React from "react";
import {
  Modal,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";

const PlaceDetail = props => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image
          resizeMode="cover"
          source={props.selectedPlace.image}
          style={styles.placeImage}
        />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    );
  }

  return (
    <Modal
      onRequestClose={props.onModalClosed}
      visible={props.selectedPlace !== null}
      animationType="slide"
    >
      <View style={styles.modalContainer}>{modalContent}</View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button} onPress={props.onItemDeleted}>
          <Text>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={props.onModalClosed}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  btnContainer: {
    margin: 22
  },
  button: {
    width: "100%",
    margin: 5,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});

export default PlaceDetail;
