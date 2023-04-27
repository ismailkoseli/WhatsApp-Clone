import React from "react";
import { Text, View } from "react-native";

const ChatBubble = (props) => {
  if (props.fromwho == "me") {
    return (
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            maxWidth: "70%",
            minHeight: 40,
            backgroundColor: "#d2fabe",
            margin: 10,
            padding: 10,
            borderRadius: 8,
          }}
        >
          <Text>{props.message}</Text>
        </View>
      </View>
    );
  } else if (props.fromwho == "from") {
    return (
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <View
          style={{
            maxWidth: "70%",
            minHeight: 40,
            backgroundColor: "#fff",
            margin: 10,
            padding: 10,
            borderRadius: 8,
          }}
        >
          <Text>{props.message}</Text>
        </View>
      </View>
    );
  }
};

export default ChatBubble;
