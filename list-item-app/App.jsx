import React, { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { BlurView } from 'expo-blur';

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [isAddMode, setIsAddMode] = useState(false);

	const addGoalHandler = enteredGoal => {
		setCourseGoals(currGoals => [
			...currGoals,
			{
				uid: Math.random().toString(),
				value: enteredGoal,
			},
		]);

		setIsAddMode(false);
	};

	const closeModalHandler = () => {
		setIsAddMode(false);
	};

	const removeGoalHandler = goalId => {
		setCourseGoals(curr => {
			return curr.filter(el => el.uid !== goalId);
		});
	};

	return (
		<View style={styles.root}>
			<GoalInput
				visible={isAddMode}
				onCloseModal={closeModalHandler}
				onAddGoal={addGoalHandler}
			/>
			<View style={{ marginBottom: 50 }}>
				<Pressable onPress={() => setIsAddMode(true)}>
				<FlatList
					data={courseGoals}
					keyExtractor={item => item.uid}
					renderItem={el => (
						<GoalItem
							id={el.item.uid}
							onDelete={removeGoalHandler}
							element={el}
						/>
					)}
					style={styles.flatList}
				/>
				</Pressable>
				<View style={styles.rootBtn}>
					<Pressable
						style={styles.btnPressable}
						onPress={() => setIsAddMode(true)}>
						<Text style={{ color: '#000' }}>DODAJ</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		paddingTop: 100,
		paddingVertical: 60,
		paddingHorizontal: 40,
		backgroundColor: '#242424',
		height: '100%',
	},
	rootBtn: {
		alignItems: 'center',
	},
	flatList: {
		marginVertical: 30,
		backgroundColor: '#000',
		height: '70%',
		borderRadius: 5,
		paddingHorizontal: 10,
		paddingVertical: 15,
	},
	btnPressable: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: '#f1faee',
		width: '50%',
	},
});
