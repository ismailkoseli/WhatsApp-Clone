import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
} from "react-native";

const StoriesCard = (props) => {
  return (
    <TouchableHighlight underlayColor="#DDDDDD">
      <View style={styles.chatCard}>
        <View style={{ width: "15%" }}>
          <Image source={{ uri: props.photo }} style={styles.chatImg} />
        </View>
        <View style={{ width: "85%", paddingLeft: 10 }}>
          <Text style={styles.mainNameTitle}>{props.name}</Text>
          <Text style={{ color: "#8d8e8e" }} numberOfLines={1}>
            {props.date}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  chatCard: {
    width: "100%",
    height: 70,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  chatImg: {
    width: 50,
    height: 50,
    borderRadius: 500,
  },
  mainNameTitle: {
    color: "black",
    fontWeight: 700,
    fontSize: 16,
  },
});
export default StoriesCard;
