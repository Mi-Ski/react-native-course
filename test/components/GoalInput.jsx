import { useState, } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image, } from "react-native";

const GoalInput = props => {
  const [inputText, setInputText,] = useState("");

  const goalInputHandler = inputValue => {
    setInputText(inputValue);
  };

  const btnAddHandler = () => {
    props.addGoalHandler(inputText);
    props.modalVisibilityHandler();
    setInputText("");
  };

  const btnCancelHandler = () => {
    props.modalVisibilityHandler();
    setInputText("");
  };

  return (
    <Modal visible={props.modalVisible}
      animationType="slide" >
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/images/goal.png")} />
        <TextInput style={styles.textInput}
          onChangeText={goalInputHandler}
          placeholder="Your course goal!"
          placeholderTextColor="#aaa"
          value={inputText}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Cancel"
              onPress={btnCancelHandler} 
              color="#f31282"
              />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal"
              onPress={btnAddHandler}
              color="#b180f0"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#311b6b"
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e5cfff",
    backgroundColor: "#e5cfff",
    marginRight: 10,
    paddingHorizontal: 17,
    paddingVertical: 12,
    borderRadius: 5,
    color: "#160d2f"
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 12,
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
});

export default GoalInput;
