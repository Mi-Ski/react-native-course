import { StyleSheet, ImageBackground, SafeAreaView, } from "react-native";
import { LinearGradient, } from "expo-linear-gradient";
import { useState, } from "react";
import { useFonts, } from "expo-font";
import AppLoading from "expo-app-loading";

import Colors from "./utils/colors";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber,] = useState(null);
  const [gameIsOver, setGameIsOver,] = useState(true);
  const [roundsNumber, setRoundsNumber,] = useState(0);

  const [fontsLoaded,] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const pickedNumberHandler = pickedNum => {
    setGameIsOver(false);
    setUserNumber(pickedNum);
  };

  const gameOverHandler = numberOfRounds => {
    setGameIsOver(true);
    setRoundsNumber(numberOfRounds);
  };

  const gameResetHandler = () => {
    setUserNumber(null);
    setRoundsNumber(0);
  };

  let screen = <StartGameScreen pickedNumberProp={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber}
      onGameOver={gameOverHandler}
    />;
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen roundsNumber={roundsNumber}
      userNumber={userNumber}
      onStartNewGame={gameResetHandler}
    />;
  }

  return (
    <LinearGradient colors={[Colors.primary900, Colors.secondary500,]}
      style={styles.rootScreen}
    >
      <ImageBackground source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient >
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: .15,
  },
});
