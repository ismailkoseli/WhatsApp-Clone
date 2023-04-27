import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import { SvgUri } from "react-native-svg";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Navigator, { NavigationContainer } from "@react-navigation/native";
import Stories from "./screens/Stories";
import Callings from "./screens/Callings";
import ChatsScreen from "./screens/ChatsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import ChatPage from "./screens/ChatPage";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const GroupChatScreen = () => {
  return (
    <View>
      <Text>Group Chat Screen</Text>
    </View>
  );
};
const PageNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ChatPage} />
    </Stack.Navigator>
  );
};
const Header = () => {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View style={styles.header}>
        <View style={{ width: "100%", height: 50 }}></View>
        <View style={styles.headerAltMenu}>
          <Text style={{ color: "#fff", fontWeight: 600, fontSize: 22 }}>
            WhatsApp
          </Text>
          <View style={{ display: "flex", flexDirection: "row", gap: 15 }}>
            <Ionicons
              name="camera-outline"
              style={{ color: "#fff", fontSize: 25 }}
            />
            <Ionicons
              name="search-outline"
              style={{ color: "#fff", fontSize: 23 }}
            />
            <Ionicons
              name="ellipsis-vertical-outline"
              style={{ color: "#fff", fontSize: 22 }}
            />
          </View>
        </View>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: "#2A9C90" },
          tabBarLabelStyle: { color: "#fff", fontWeight: "800" },
          tabBarIndicatorStyle: { backgroundColor: "#fff" },
        }}
      >
        <Tab.Screen
          name="chats"
          component={ChatsScreen}
          options={{ title: "Sohbetler" }}
        />
        <Tab.Screen
          name="stories"
          component={Stories}
          options={{ title: "Durum" }}
        />
        <Tab.Screen
          name="callings"
          component={Callings}
          options={{ title: "Aramalar" }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default function App() {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Header"
            component={Header}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="ChatPage" component={ChatPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

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
