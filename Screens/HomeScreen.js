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
    <View>
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
            <Ionicons name="menu" size={30} color="black" />
          </TouchableOpacity>

          {/* Text */}
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Discover</Text>

          {/* Profile Image */}
          <TouchableOpacity>
            <Image
              style={{ height: 40, width: 40, borderRadius: 50 }}
              source={require("../Images/profile.jpg")}
            />
          </TouchableOpacity>
        </View>

        {/* Horizontal Scroll View */}
        <ScrollView>
          <View>
            <ScrollView
              horizontal
              style={{ marginTop: 30, marginHorizontal: 10 }}
            >
              <TouchableOpacity>
                <View style={{ alignItems: "center", marginRight: 30 }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "purple",
                    }}
                  >
                    Popular
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{ alignItems: "center", marginRight: 30 }}>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    Featured
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{ alignItems: "center", marginRight: 30 }}>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    Most Visited
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{ alignItems: "center", marginRight: 30 }}>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    Europe
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{ alignItems: "center", marginRight: 30 }}>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>Asia</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{ alignItems: "center", marginRight: 30 }}>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    Africa
                  </Text>
                </View>
              </TouchableOpacity>
            </ScrollView>

            {/* Suggestions */}
            <ScrollView horizontal>
              {/* first Image container */}
              <TouchableOpacity>
                <View
                  style={{
                    height: 200,
                    width: 290,
                    backgroundColor: "#D8D9CF",
                    marginHorizontal: 20,
                    marginTop: 30,
                    borderRadius: 20,
                  }}
                >
                  {/* Image */}
                  <Image
                    style={{ height: 200, width: 290, borderRadius: 20 }}
                    source={require("../Images/5.jpg")}
                  />

                  {/* Image description */}
                  <View>
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          position: "absolute",
                          bottom: 50,
                          color: "white",
                          marginHorizontal: 20,
                          fontWeight: "bold",
                        }}
                      >
                        Northern Mountain
                      </Text>
                      <Ionicons
                        style={{
                          position: "absolute",
                          bottom: 45,
                          marginHorizontal: 250,
                        }}
                        name="heart-circle-outline"
                        size={25}
                        color="red"
                      />
                    </View>

                    {/* Rating icons and text */}
                    <View style={{ flexDirection: "row" }}>
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
                          color: "white",
                          bottom: 18,
                          marginHorizontal: 103,
                          fontWeight: "bold",
                          shadowOpacity: 2,
                        }}
                      >
                        4.5
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              {/* second image container */}
              <TouchableOpacity>
                <View
                  style={{
                    height: 200,
                    width: 290,
                    backgroundColor: "#D8D9CF",
                    marginHorizontal: 10,
                    marginTop: 30,
                    borderRadius: 20,
                  }}
                >
                  <Image
                    style={{ height: 200, width: 290, borderRadius: 20 }}
                    source={require("../Images/4.jpg")}
                  />
                  {/* Image description */}
                  <View>
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          position: "absolute",
                          bottom: 50,
                          color: "white",
                          marginHorizontal: 20,
                          fontWeight: "bold",
                        }}
                      >
                        Northern Mountain
                      </Text>
                      <Ionicons
                        style={{
                          position: "absolute",
                          bottom: 45,
                          marginHorizontal: 250,
                        }}
                        name="heart-circle-outline"
                        size={25}
                        color="red"
                      />
                    </View>

                    {/* Rating icons and text */}
                    <View style={{ flexDirection: "row" }}>
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
                          color: "white",
                          bottom: 18,
                          marginHorizontal: 103,
                          fontWeight: "bold",
                          shadowOpacity: 2,
                        }}
                      >
                        4.5
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              {/* third image container */}
              <TouchableOpacity>
                <View
                  style={{
                    height: 200,
                    width: 290,
                    backgroundColor: "#D8D9CF",
                    marginHorizontal: 10,
                    marginTop: 30,
                    borderRadius: 20,
                  }}
                >
                  <Image
                    style={{ height: 200, width: 290, borderRadius: 20 }}
                    source={require("../Images/6.png")}
                  />
                  {/* Image description */}
                  <View>
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          position: "absolute",
                          bottom: 50,
                          color: "white",
                          marginHorizontal: 20,
                          fontWeight: "bold",
                          shadowOpacity: 2,
                        }}
                      >
                        Golden Gate Bridge
                      </Text>
                      <Ionicons
                        style={{
                          position: "absolute",
                          bottom: 45,
                          marginHorizontal: 250,
                        }}
                        name="heart-circle-outline"
                        size={25}
                        color="red"
                      />
                    </View>

                    {/* Rating icons and text */}
                    <View style={{ flexDirection: "row" }}>
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
                          color: "white",
                          bottom: 18,
                          marginHorizontal: 103,
                          fontWeight: "bold",
                          shadowOpacity: 2,
                        }}
                      >
                        4.5
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              {/* fourth image container */}
              <TouchableOpacity>
                <View
                  style={{
                    height: 200,
                    width: 290,
                    backgroundColor: "#D8D9CF",
                    marginHorizontal: 10,
                    marginTop: 30,
                    borderRadius: 20,
                  }}
                >
                  <Image
                    style={{ height: 200, width: 290, borderRadius: 20 }}
                    source={require("../Images/7.jpg")}
                  />
                  {/* Image description */}
                  <View>
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          position: "absolute",
                          bottom: 50,
                          color: "white",
                          marginHorizontal: 20,
                          fontWeight: "bold",
                        }}
                      >
                        Northern Mountain
                      </Text>
                      <Ionicons
                        style={{
                          position: "absolute",
                          bottom: 45,
                          marginHorizontal: 250,
                        }}
                        name="heart-circle-outline"
                        size={25}
                        color="red"
                      />
                    </View>

                    {/* Rating icons and text */}
                    <View style={{ flexDirection: "row" }}>
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
                          color: "white",
                          bottom: 18,
                          marginHorizontal: 103,
                          fontWeight: "bold",
                          shadowOpacity: 2,
                        }}
                      >
                        4.5
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              {/* fifth image container */}
              <TouchableOpacity>
                <View
                  style={{
                    height: 200,
                    width: 290,
                    backgroundColor: "#D8D9CF",
                    marginHorizontal: 10,
                    marginTop: 30,
                    borderRadius: 20,
                  }}
                >
                  <Image
                    style={{ height: 200, width: 290, borderRadius: 20 }}
                    source={require("../Images/8.png")}
                  />
                  {/* Image description */}
                  <View>
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          position: "absolute",
                          bottom: 50,
                          color: "white",
                          marginHorizontal: 20,
                          fontWeight: "bold",
                        }}
                      >
                        Northern Mountain
                      </Text>
                      <Ionicons
                        style={{
                          position: "absolute",
                          bottom: 45,
                          marginHorizontal: 250,
                        }}
                        name="heart-circle-outline"
                        size={25}
                        color="red"
                      />
                    </View>

                    {/* Rating icons and text */}
                    <View style={{ flexDirection: "row" }}>
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
                          color: "white",
                          bottom: 18,
                          marginHorizontal: 103,
                          fontWeight: "bold",
                          shadowOpacity: 2,
                        }}
                      >
                        4.5
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>

          {/* Recommended and View all text */}
        
        <View
          style={{
            marginHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <Text style={{fontWeight:"bold"}}>Recommended</Text>
          <TouchableOpacity>
          <Text style={{fontWeight:"bold"}}>View All</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
