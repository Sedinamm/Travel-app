import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
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

        {/* Horizontal Scroll View */}
      <ScrollView horizontal style={{marginTop:30, marginHorizontal:10}}>
        <TouchableOpacity>
        <View style={{alignItems:"center", marginRight:30,}}>
        <Text style={{ fontSize:15, fontWeight:"bold", color:"purple"}}>Popular</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{alignItems:"center", marginRight:30}}>
        <Text style={{ fontSize:15, fontWeight:"bold"}}>Featured</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{alignItems:"center", marginRight:30}}>
        <Text style={{ fontSize:15, fontWeight:"bold"}}>Most Visited</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{alignItems:"center", marginRight:30}}>
        <Text style={{ fontSize:15, fontWeight:"bold"}}>Europe</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{alignItems:"center", marginRight:30}}>
        <Text style={{ fontSize:15, fontWeight:"bold"}}>Asia</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{alignItems:"center", marginRight:30}}>
        <Text style={{ fontSize:15, fontWeight:"bold"}}>Africa</Text>
        </View>
        </TouchableOpacity>
      </ScrollView>
      <ScrollView>
        
      </ScrollView>

    </SafeAreaView>
  );
};

export default HomeScreen;
