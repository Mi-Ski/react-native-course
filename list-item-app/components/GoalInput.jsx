import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	TextInput,
	Pressable,
	Text,
	Modal,
} from 'react-native';

const GoalInput = props => {
	const [enteredGoal, setEnteredGoal] = useState('');

	const goalInputHandler = val => {
		setEnteredGoal(val);
	};

	const btnPressHandler = () => {
		props.onAddGoal(enteredGoal);
		setEnteredGoal('');
	};

	return (
		<Modal
			visible={props.visible}
			animationType="slide"
			presentationStyle="overFullScreen"
			transparent={true}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Nowy Element"
					style={styles.inputForm}
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<View style={styles.buttonsContainer}>
					<Pressable
						style={[styles.btnPressable, styles.btnCancel]}
						onPress={props.onCloseModal}>
						<Text style={{ color: 'black' }}>Anuluj</Text>
					</Pressable>
					<Pressable
						style={[styles.btnPressable, styles.btnOk]}
						onPress={btnPressHandler}>
						<Text style={{ color: 'black' }}>OK</Text>
					</Pressable>
				</View>
			</View>
		</Modal>
	);
};

export default GoalInput;

const styles = StyleSheet.create({
	inputContainer: {
		backgroundColor: '#000',
		justifyContent: 'flex-start',
		alignItems: 'center',
		flex: 1,
		marginTop: 300,
		paddingVertical: 50,
		borderTopEndRadius: 20,
		borderTopStartRadius: 20,

		shadowRadius: 25,
		shadowColor: '#f1faee',
		shadowOpacity: .15,
	},
	inputForm: {
		backgroundColor: '#fff',
		padding: 10,
		borderWidth: 3,
		borderColor: '#fff',
		borderRadius: 5,
		width: '80%',
		marginBottom: 20,
	},
	btnPressable: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		width: 120,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: '#000',
	},
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '80%',
	},
	btnCancel: {
		backgroundColor: '#e63946',
	},
	btnOk: {
		backgroundColor: '#f1faee',
	},
});
