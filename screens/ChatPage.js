import React from "react";
import {
  Dimensions,
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import ChatBubble from "../components/ChatBubble";
import ChatPageHeader from "../components/ChatPageHeader";
const ChatPage = () => {
  return (
    <View>
      <Image
        style={[styles.containter]}
        source={{
          uri: "https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png",
        }}
      />

      <View style={[styles.fixed, styles.scrollview]}>
        <ChatPageHeader />
        <ScrollView style={styles.chatArea}>
          <ChatBubble fromwho="me" message="Merhaba, Nasılsın?" time="15.12" />
          <ChatBubble
            fromwho="from"
            message="İyiyim, Teşekkür ederim."
            time="15.14"
          />
          <ChatBubble fromwho="from" message="Sen Nasılsın?" time="15.15" />
          <ChatBubble fromwho="me" message="Sanane?" time="15.12" />

        </ScrollView>
        <View style={styles.chatBottomArea}>
          <View style={styles.chatBottomBar}>
            <Ionicons name="happy-outline" style={{ color: "#777", fontSize: 25 }} />
            <TextInput style={styles.chatInput} multiline={true} placeholder="Mesaj" />
            <Ionicons name="attach-outline" style={{ color: "#777", fontSize: 25 }} />
            <Ionicons name="camera-outline" style={{ color: "#777", fontSize: 25 }} />

          </View>
          <View style={styles.voiceRecorder}>
            <Ionicons name="mic-outline" style={{ color: "#fff", fontSize: 25 }} />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containter: {
    width: Dimensions.get("window").width, //for full screen
    height: Dimensions.get("window").height, //for full screen
  },
  fixed: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  scrollview: {
    backgroundColor: "transparent",
  },
  chatArea: {
    width: Dimensions.get("window").width, //for full screen
    height: Dimensions.get("window").height, //for full screen 
    marginBottom: 55
  },
  chatBottomArea: {
    position: "absolute",
    bottom: 0,
    width: '100%',
    height: 60,
    backgroundColor: 'transparent',
    paddingHorizontal: '2%',
    paddingBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chatBottomBar: {
    width: '83%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  voiceRecorder: {
    width: 50,
    height: 50,
    backgroundColor: '#2A9C90',
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatInput: {
    width: '65%',
    fontSize: 18,

  }

});
export default ChatPage;
