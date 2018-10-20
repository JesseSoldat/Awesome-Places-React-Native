import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "./ListItem";

const PlaceList = props => {
  return (
    <FlatList
      data={props.places}
      renderItem={info => (
        <ListItem name={info.item.name} onItemPressed={() => {}} />
      )}
    />
  );
};

export default PlaceList;
