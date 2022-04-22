import { View, StyleSheet, } from "react-native";
import Colors from "../../utils/colors";

const Card = ({ children, }) => {
  return (
    <View style={styles.container}>{children}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 36,
    marginTop: 35,
    marginHorizontal: 25,
    backgroundColor: Colors.primary900,
    borderRadius: 8,
    // elevation: andorid
    elevation: 4,
    // shadow: iOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2, },
    shadowRadius: 6,
    shadowOpacity: .5,
  },
});

export default Card;
