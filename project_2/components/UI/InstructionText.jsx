import { StyleSheet, Text, } from "react-native";
import Colors from "../../utils/colors";

const InstructionText = ({ children, style, }) => {
  return (
    <Text style={[styles.mainTitle, style,]}>{children}</Text>
  );

};

const styles = StyleSheet.create({
  mainTitle: {
    color: Colors.secondary500,
    fontFamily: "open-sans",
    fontSize: 34,
    textAlign: "center",
  },
});

export default InstructionText;