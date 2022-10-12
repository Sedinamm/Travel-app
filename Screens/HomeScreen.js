import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
// import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          marginHorizontal: 20,
        }}
      >
        {/* Top Header Navigation */}
        {/* Hamburger Icon */}
        <TouchableOpacity>
          <Ionicons
            name="menu"
            size={30}
            color="black"
          />
        </TouchableOpacity>
        {/* Text */}
        <Text style={{fontSize:25, fontWeight:"bold"}}>Discover</Text>

        {/* Profile Image */}
        <TouchableOpacity>
          <Image
            style={{ height: 40, width: 40, borderRadius: 50 }}
            source={require("../Images/profile.jpg")}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
