import React, { useState } from 'react';
import {
	View,
	Button,
	Text,
	StyleSheet,
	TextInput,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';

const StartGameScreen = (props) => {
	const [enteredValue, setEnteredValue] = useState('');
	const [confirmed, setConfirmed] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState();

	//#region StartScreen methods
	const numberInputHandler = (inputText) => {
		setEnteredValue(inputText.replace(/[^0-9]/g, ''));
	};

	const resetInputHandler = () => {
		setEnteredValue('');
		Keyboard.dismiss();
		setConfirmed(false);
	};

	const confirmInputHandler = () => {
		const chosenNumber = parseInt(enteredValue);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert(
				'Invalid number!',
				'Number has to be a number between 1 and 99.',
				[{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
			);
			return;
		}
		setConfirmed(true);
		setSelectedNumber(chosenNumber);
		setEnteredValue('');
		Keyboard.dismiss();
	};

	let confirmedOutput;
	if (confirmed) {
		confirmedOutput = (
			<Card style={styles.summaryContainer}>
				<BodyText>You selected</BodyText>
				<NumberContainer>{selectedNumber}</NumberContainer>
				<Button onPress={() => {props.onStartGame(selectedNumber)}} title="Start Game"></Button>
			</Card>
		);
	}
	//#endregion

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View style={styles.screen}>
				<Text style={styles.title}>Start a New Game!</Text>
				<Card style={styles.inputContainer}>
					<BodyText>Select a Number</BodyText>
					<Input
						style={styles.input}
						autoCapitalize="none"
						blurOnSubmit
						keyboardType="number-pad"
						maxLength={2}
						autoCorrect={false}
						onChangeText={numberInputHandler}
						value={enteredValue}
					></Input>
					<View style={styles.buttonContainer}>
						<View style={styles.btn}>
							<Button
								style={styles.btn}
								title="Reset"
								onPress={() => {
									resetInputHandler();
								}}
								color={Colors.accent}
							></Button>
						</View>
						<View style={styles.btn}>
							<Button
								style={styles.btn}
								title="Confirm"
								onPress={() => {
									confirmInputHandler();
								}}
								color={Colors.primary}
							></Button>
						</View>
					</View>
				</Card>
				{confirmedOutput}
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	btn: {
		width: 90,
	},
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		marginVertical: 20,
		marginBottom: 30,
		fontFamily: 'open-sans-bold'
	},
	inputContainer: {
		width: 300,
		maxWidth: '80%',
		alignItems: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
	},
	input: {
		minWidth: 50,
		maxWidth: 120,
		textAlign: 'center',
	},
	summaryContainer: {
		marginTop: 20,
		alignItems: 'center',
	},
});

export default StartGameScreen;
