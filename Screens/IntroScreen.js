import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const IntroScreen = () => {
  return (
    <View style={{ flex: 10 }}>
      {/* Image Logo and Text */}
      <View style={{ flex: 8,}}>
        {/* Image */}
        <Image
          style={{
            height: 240,
            width: 240,
            top: 270,
            alignSelf: "center",
            resizeMode: "contain",
          }}
          source={require("../Images/logo.png")}
        />
        {/* Text */}
        <Text
          style={{
            textAlign: "center",
            top: 270,
            fontWeight: "bold",
            fontSize: 30,
            color:"#0F3460",
          }}
        >
          TRAVEL
        </Text>
      </View>
      <View style={{ flex: 2,}}>
        <TouchableOpacity style={{backgroundColor:"#0F3460", padding:20, margin:30, borderRadius:50}}>
            <Text style={{textAlign:"center", fontSize:20, color:"white"}}>Lets Go</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IntroScreen;
