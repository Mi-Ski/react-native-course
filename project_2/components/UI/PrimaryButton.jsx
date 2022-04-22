import { View, Text, Pressable, StyleSheet, ProgressViewIOSComponent, } from "react-native";
import Colors from "../../utils/colors";

const PrimaryButton = ({ children, pressed, }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable onPress={pressed}
        android_ripple={{ color: Colors.primary700, }}
        style={({ pressed, }) => pressed ? [styles.buttonInnerContainer, styles.pressed,] : styles.buttonInnerContainer}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable >
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;