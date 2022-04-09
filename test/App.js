import { useState, } from "react";
import { StatusBar, } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, Button, } from "react-native";

import GoalItem from "./components/GoalItem.jsx";
import GoalInput from "./components/GoalInput.jsx";

export default function App() {
  const [goalList, setGoalList,] = useState([]);
  const [modalVisible, setModalVisible,] = useState(false);

  const addGoalHandler = inputText => {
    setGoalList(prevState => [
      ...prevState,
      {
        text: inputText,
        _fake_id: Math.random().toString(),
      },
    ]);
  };

  const deleteGoalHandler = goalID => {
    setGoalList(prevState => {
      return prevState.filter(el => el._fake_id !== goalID);
    });
  };

  const changeModalVisibility = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button title="Add New Goal"
          color="#a065ec"
          onPress={changeModalVisibility}
        />
        <GoalInput addGoalHandler={addGoalHandler}
          modalVisibilityHandler={changeModalVisibility}
          modalVisible={modalVisible}
        />

        <View style={styles.goalsContainer}>
          <FlatList data={goalList}
            renderItem={itemData => {
              return (
                <GoalItem itemData={itemData} deleteItem={deleteGoalHandler} />
              );
            }}
            alwaysBounceVertical="false"
            keyExtractor={(item, id) => {
              return item._fake_id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 20,
    paddingVertical: 70,
    height: "100%",
  },
  goalsContainer: {
    paddingTop: 20,
    flex: 5,
  },
});
