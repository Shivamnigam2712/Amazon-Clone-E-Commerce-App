import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <SafeAreaView>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: 'https://tse2.mm.bing.net/th?id=OIP.Amtad6cu5WsYrZ3gC2IgGgHaFj&pid=Api&P=0&h=220',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  image: {
    height: 40,
    width: 50,
  },
});
