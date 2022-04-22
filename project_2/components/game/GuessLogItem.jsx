import { View, Text, StyleSheet, } from "react-native";
import Colors from "../../utils/colors";

const GuessLogItem = props => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{props.roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's guess: {props.guess}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 8,
    borderColor: Colors.primary900,
    borderRadius: 40,
    borderWidth: 1,
    padding: 12,
    backgroundColor: Colors.secondary500,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0, },
    shadowOpacity: .25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
