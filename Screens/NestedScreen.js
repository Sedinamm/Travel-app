import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
function BottomTabs() {
    <Tab.Navigator
    screenOptions={{
        tabBarStyle: [
            {
                height:80,
                paddingBottom:0,
                marginBottom:30,
                borderRadius:50,
                marginHorizontal:10,
                position:"absolute",
                elevation:1
            },
            null,
        ],
        tabBarLabelStyle: { fontWeight:"bold", fontSize:15 },
        tabBarActiveTintColor:"#11b6f7",
        tabBarShowLabel: false,
    }}
    >
        <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
            headerTitle: 'Discover',
            headerTitleStyle:{fontSize:30},
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor:"white",},
            // tabBarIcon: ({color}) => (

            // ),
            // headerLeft: () => (
            //     <FontAwesome name='text' size={35} color={color} />
            // ),
            headerShadowVisible: false
        }}
        />
        <Tab.Screen name="Calender" component={CalenderScreen}
        options={{
            // tabBarIcon: ({color}) => (
            //     <MaterialCommunityIcons name="calender-month-outline" size={27} color={color}
            // ),
        }}/>
        <Tab.Screen name="Search" component={SearchScreen}
        options={{
            // tabBarIcon: ({color}) => (
            //     <MaterialCommunityIcons name="search" size={27} color={color}
            // ),
        }}/>
        <Tab.Screen name="Profile" component={ProfileScreen}
        options={{
            // tabBarIcon: ({color}) => (
            //     <MaterialCommunityIcons name="person" size={27} color={color}
            // ),
        }}
        />
    </Tab.Navigator>
}

const Stack = createNativeStackNavigator();
export default ItemsScreen = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen
                name="BottomTabs"
                component={BottomTabs}
                options={{headerShown: false}}
                />
                <Stack.Screen name="Details" component={Details} />
                <Stack.Screen name="New" component={New} />
            </Stack.Navigator>

        </NavigationContainer>
    );
};