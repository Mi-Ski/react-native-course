import { StyleSheet, Text, View, Pressable, } from "react-native";

const GoalItem = props => {
  return (
    <View
      style={styles.goalItem}>
      <Pressable
        android_ripple={{ "color": "#8b3bf4", }}
        onPress={() => props.deleteItem(props.itemData.item._fake_id)}
        style={pressData => pressData.pressed && styles.pressedItem}
      >
        <Text
          style={styles.goalItemText}>{props.itemData.item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 5,
  },
  goalItemText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: .5,
  },
});
