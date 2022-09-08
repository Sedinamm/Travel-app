import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";

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
          }}
        >
          France
        </Text>
      </View>
    </View>
  );
};

export default IntroScreen2;
