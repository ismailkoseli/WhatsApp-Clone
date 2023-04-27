import React from 'react'
import { TouchableHighlight } from 'react-native';
import { StyleSheet } from 'react-native';
import { View, Image } from 'react-native'
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text } from 'react-native';

const ChatPageHeader = () => {
    return (
        <View style={styles.chatHeaderCard}>

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', height: 40, justifyContent: 'space-between', top: 40 }}>
                <View style={{ width: '60%', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5, }}>
                    <Ionicons name="arrow-back-outline" style={{ color: "#fff", fontSize: 25, }} />
                    <Image style={styles.chatImg} source={{
                        uri: "https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg",
                    }} />
                    <Text style={{ fontSize: 18, fontWeight: 600, color: '#fff', width: '70%' }} numberOfLines={1}>Mark Zuckerberg</Text>
                </View>
                <Ionicons name="videocam" style={{ color: "#fff", fontSize: 20, }} />
                <Ionicons name="call" style={{ color: "#fff", fontSize: 20, }} />
                <Ionicons name="ellipsis-vertical" style={{ color: "#fff", fontSize: 25, }} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    chatHeaderCard: {
        width: "100%",
        height: 90,
        paddingHorizontal: 10,
        display: "flex",
        flexDirection: "row",
        backgroundColor: '#2A9C90',
    },
    chatImg: {
        position: 'relative',
        width: 40,
        height: 40,
        borderRadius: 500,
    },
    mainNameTitle: {
        color: "black",
        fontWeight: 700,
        fontSize: 16,
    },
});
export default ChatPageHeader