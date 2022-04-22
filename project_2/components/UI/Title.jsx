import { StyleSheet, Text, } from "react-native";


const Title = props => {
  return (
    <Text style={styles.title}>{props.children}</Text>
  );

};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    borderColor: "#fff",
    borderWidth: 2,
    padding: 12,
  },
});

export default Title;