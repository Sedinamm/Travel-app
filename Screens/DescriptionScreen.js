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
  
  const DescriptionScreen = ({navigation}) => {
    return (
      <View style={{ flex: 10 }}>
           
        <View style={{ flex: 4 }}>
            {/* Image */}
          <Image
            source={require("../Images/5.jpg")}
            style={{
              alignSelf: "center",
              resizeMode: "cover",
              height: 360,
              width: 400,
            }}
          />
            {/* Hamburger Icon */}
            <TouchableOpacity style={{position:"absolute", marginHorizontal:15, marginVertical:30}}>
            <Ionicons name="menu" size={35} color="black" />
          </TouchableOpacity>
        </View>
        {/* Text and button */}
        <View style={{ flex: 6, backgroundColor:"white", borderTopRightRadius:40, borderTopLeftRadius:40 }}>
            <View style={{marginHorizontal:25, marginVertical:40}}>
            <Text>Northern Mountain</Text>
            </View>
          </View>
      </View>
    );
  };
  
  export default DescriptionScreen;
  