import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const ListItem = props => {
  return (
    <TouchableOpacity onPress={props.onItemPressed}>
      <View>
        <Text>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
