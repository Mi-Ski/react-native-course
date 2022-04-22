import { Text, TextInput, View, StyleSheet, Alert, } from "react-native";
import { useState, } from "react";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";
import InstructionText from "../components/UI/InstructionText";
import Card from "../components/UI/Card";
import Colors from "../utils/colors";

const StartGameScreen = props => {
  const [enteredNumber, setEnteredNumber,] = useState("");

  const resetHandler = () => { setEnteredNumber(""); };

  const confirmHandler = () => {
    const chosenNumber = Number(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 100) {
      Alert.alert("Invalid number", "Choose a number between 1 and 99", [
        {
          text: "OK",
          style: "destructive",
          onPress: () => {
            resetHandler();
            console.log("OK btn pressed");
          },
        },
      ]);
      return;
    }

    props.pickedNumberProp(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess my Number</Title>
      <Card>
        <InstructionText>Choose your Number</InstructionText>
        <TextInput keyboardType="number-pad"
          autoCapitalize="none"
          style={styles.numberInput}
          maxLength={2}
          value={enteredNumber}
          onChangeText={el => setEnteredNumber(el)}
        />
        <View style={styles.buttonContainer}>
          <PrimaryButton pressed={resetHandler} >Reset</PrimaryButton>
          <PrimaryButton pressed={confirmHandler} >Confirm</PrimaryButton>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  numberInput: {
    textAlign: "center",
    borderColor: Colors.secondary500,
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomWidth: 2,
    color: Colors.secondary500,
    marginVertical: 8,
    fontWeight: "bold",
  },
});

export default StartGameScreen;