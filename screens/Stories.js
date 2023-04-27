import React from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Image,
} from "react-native";
import StoriesCard from "../components/StoriesCard";
const Stories = () => {
  return (
    <ScrollView>
      <TouchableHighlight underlayColor="#DDDDDD">
        <View style={styles.chatCard}>
          <View style={{ width: "15%" }}>
            <Image
              source={require("../assets/nopr.jpg")}
              style={styles.chatImg}
            />
            <View
              style={{
                width: 25,
                height: 25,
                backgroundColor: "#2A9C90",
                position: "absolute",
                bottom: 0,
                right: -5,
                borderRadius: 25,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 2,
                borderColor: "#fff",
              }}
            >
              <Text style={{ color: "#fff" }}>+</Text>
            </View>
          </View>
          <View style={{ width: "85%", paddingLeft: 10 }}>
            <Text style={styles.mainNameTitle}>Durumum</Text>
            <Text style={{ color: "#8d8e8e" }} numberOfLines={1}>
              Durum Güncellemesi Eklemek İçin Dokunun
            </Text>
          </View>
        </View>
      </TouchableHighlight>
      <Text style={{ padding: 10, color: "#777", fontWeight: "700" }}>
        Son Güncellemeler
      </Text>
      <StoriesCard
        name="Sidney Moss"
        date="Bugün 11:04"
        photo="https://media.istockphoto.com/id/157192886/photo/close-up-of-a-mans-head-profile.jpg?s=612x612&w=0&k=20&c=TNvTNzOlYweKeQ28IBj7TDSHZCq4scR6sZT2BtEhilE="
      />
      <StoriesCard
        name="Jaden Callahan"
        date="Bugün 16:04"
        photo="https://media.istockphoto.com/id/481440216/photo/taking-his-business-seriously.jpg?s=612x612&w=is&k=20&c=9FGu7FHrlIGgG6vJujnehfc3_ybLeH1_ntUDJ_c9dIY="
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    backgroundColor: "#2A9C90",
  },
  headerAltMenu: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  chatCard: {
    width: "100%",
    height: 80,
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
export default Stories;
