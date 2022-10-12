import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const IntroScreen = ({navigation}) => {
  return (
    <View style={{ flex: 10 }}>
      {/* Image */}
      <View style={{ flex: 6 }}>
        <Image
          source={require("../Images/3.jpg")}
          style={{
            alignSelf: "center",
            resizeMode: "cover",
            height: 470,
            width: 400,
            borderBottomRightRadius: 40,
            borderBottomLeftRadius: 40,
          }}
        />
      </View>
      {/* Text and button */}
      <View style={{ flex: 4, paddingHorizontal: 20 }}>
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 35, fontWeight: "bold" }}>
            Winter{"\n"}Vacation Trips
          </Text>
          {/* Description */}
          <Text style={{ marginVertical: 20 }}>
            Enjoy your winter vacation with warmth{"\n"}and amazing sightseeing
            on the mountains.{"\n"}
            Enjoy the best experience with us!
          </Text>
        </View>
        {/* Button and text */}
        <TouchableOpacity onPress={() =>{
          navigation.navigate("HomeScreen")
        }}
          style={{
            backgroundColor: "#0B2F54",
            padding: 10,
            flexDirection: "row",
            width: "50%",
            borderRadius: 40,
            justifyContent:"center",
          }}
        >
          <Text style={{fontWeight:"bold", color:"white", top:4}}>Let's Go!</Text>
          <Ionicons style={{left:3}} name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IntroScreen;
