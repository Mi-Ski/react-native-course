import { StyleSheet, View, Text, } from "react-native";
import Colors from "../../utils/colors";

const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.secondary500,
    borderRadius: 8,
    padding: 24,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.secondary500,
    fontFamily: "open-sans-bold",
    fontSize: 36,
    fontWeight: "bold",
  },
});

export default NumberContainer;