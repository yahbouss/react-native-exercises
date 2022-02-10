import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Linking } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>
          Bring your colors from{" "}
          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL("https://coolors.co/")}
          >
            coolors
          </Text>{" "}
          here
        </Text>
        <View style={[styles.box, styles.color1]}>
          <Text style={{color:"#fff"}}>1st Color</Text>
        </View>
        <View style={[styles.box, styles.color2]}>
          <Text style={{color:"#fff"}}>1st Color</Text>
        </View>
        <View style={[styles.box, styles.color3]}>
          <Text style={{color:"#fff"}}>1st Color</Text>
        </View>
        <View style={[styles.box, styles.color4]}>
          <Text style={{color:"#000"}}>1st Color</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box:{
    display: "flex",
    alignSelf:"center",
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 9
  },
  color1:{

    backgroundColor:"#540D6E"
  },
  color2:{
    backgroundColor:"#EE4266"
  },
  color3:{
    backgroundColor:"#FFD23F"
  },
  color4:{
    backgroundColor:"#F3FCF0"
  }
});
