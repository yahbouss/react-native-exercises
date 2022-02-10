import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, Linking } from 'react-native';
import myPic from "./assets/taswirti.jpg"
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={myPic}
          style={styles.picture}
        />
        <Text style={styles.text}>Yahia Boussaid</Text>
        <Text style={styles.text}>Life is like the wind, always by my side</Text>
        <Button
          title='Connect'
          style={styles.button}
          onPress={ ()=>{ Linking.openURL('https://github.com/yahbouss')}}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picture:{
    resizeMode: "contain",
    height: 400,
    borderRadius:20
  },
  text: {
    textAlign: "center",
    fontFamily: 'sans-serif',
    fontSize: 15,
    color: "#000",
    fontWeight: "700",
    margin: 10,
  },
  button:{
    width: "100%",
  }
});
