import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const IntroScreen2 = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ height: 850, width: 400 }}
        source={require("../Images/paris.jpg")}
      />
      <View style={{ position: "absolute", alignSelf: "center" }}>
        <Text
          style={{
            color: "#F5D559",
            fontSize: 100,
            fontWeight: "400",
            top: 200,
            // paddingHorizontal: 10,
            shadowOpacity: 2,
          }}
        >
          PARIS
        </Text>
      </View>
      <View style={{ position: "absolute", alignSelf: "center" }}>
        <Text
          style={{
            color: "#F5D559",
            top: 297,
            fontWeight: "500",
            fontSize: 20,
            left: 86,
            shadowOpacity: 2,
          }}
        >
          France
        </Text>
      </View>
      <View
        style={{
          top: -125,
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "500", color: "white", shadowOpacity:2, padding:10 }}>
          Explore World
        </Text>
        <TouchableOpacity style={{ backgroundColor: "white", borderRadius: 50, padding:10}}>
          <Ionicons name="arrow-forward-outline" size={30} color="#F5D559" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IntroScreen2;
