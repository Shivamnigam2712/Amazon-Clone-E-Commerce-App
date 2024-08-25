// import React from 'react';
// import {StyleSheet} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import Registar from './src/screen/Registar';
// import Login from './src/screen/login';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Registar" component={Registar} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import React from 'react';
import {MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
      <View>
        <Image
          style={{width: 150, height: 100}}
          source={{
            uri: 'https://tse1.mm.bing.net/th?id=OIP.Aie-0i180j40AZ4nxYVG5AHaFj&pid=Api&P=0&h=220',
          }}
        />
      </View>
      <KeyboardAvoidingView>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              marginVertical: 12,
              color: '#041E42',
            }}>
            Login In To your Account
          </Text>
        </View>
        <View style={{marginTop: 70}}>
          <MaterialCommunityIcons name="email" size={24} color="black" />
          <TextInput placeholder="enter your email" />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
