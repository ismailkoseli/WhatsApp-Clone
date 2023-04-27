import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  ScrollView,
} from "react-native";
import ChatCard from "../components/ChatCard";

const ChatsScreen = (props) => {
  return (
    <ScrollView>
      <ChatCard
        name="Mark Zuckerberg"
        message="Sanane?"
        date="20.04.2023"
        photo="https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg"
      />
    </ScrollView>
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
export default ChatsScreen;
