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
        {/* Text, Description and Button */}
        <View style={{ flex: 6, backgroundColor:"white", borderTopRightRadius:40, borderTopLeftRadius:40 }}>
            <View style={{marginHorizontal:25, marginVertical:40}}>
            <Text style={{fontSize:25, fontWeight:"bold",}}>Northern Mountain</Text>
            <View style={{flexDirection:"row"}}>
            <Ionicons name="location" size={20} color="black" />
            <Text style={{fontWeight:"bold", top:2}}>Alaska, America</Text>
            </View>
            {/* Rating */}
            <View style={{ flexDirection: "row", marginVertical:40, marginHorizontal:-15}}>
                      <Ionicons
                        style={{
                          position: "absolute",
                          bottom: 20,
                          marginHorizontal: 20,
                        }}
                        name="star"
                        size={15}
                        color="gold"
                      />
                      <Ionicons
                        style={{
                          position: "absolute",
                          bottom: 20,
                          marginHorizontal: 36,
                        }}
                        name="star"
                        size={15}
                        color="gold"
                      />
                      <Ionicons
                        style={{
                          position: "absolute",
                          bottom: 20,
                          marginHorizontal: 52,
                        }}
                        name="star"
                        size={15}
                        color="gold"
                      />
                      <Ionicons
                        style={{
                          position: "absolute",
                          bottom: 20,
                          marginHorizontal: 67,
                        }}
                        name="star"
                        size={15}
                        color="gold"
                      />
                      <Ionicons
                        style={{
                          position: "absolute",
                          bottom: 20,
                          marginHorizontal: 84,
                        }}
                        name="star"
                        size={15}
                        color="gold"
                      />
                      <Text
                        style={{
                          position: "absolute",
                          color: "black",
                          bottom: 18,
                          marginHorizontal: 103,
                          fontWeight: "bold",
                        //   shadowOpacity: 2,
                        }}
                      >
                        4.5
                      </Text>
                    </View>
                        <Text>hel</Text>
            </View>
          </View>
      </View>
    );
  };
  
  export default DescriptionScreen;
  