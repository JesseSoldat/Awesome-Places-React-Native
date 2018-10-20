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
        <Text>{props.selectedPlace.name}</Text>
      </View>
    );
  }

  return (
    <Modal
      onRequestClose={props.onModalClosed}
      visible={props.selectedPlace !== null}
      animationType="slide"
    >
      <View>{modalContent}</View>
      <View>
        <TouchableOpacity onPress={props.onItemDeleted}>
          <Text>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onModalClosed}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default PlaceDetail;
