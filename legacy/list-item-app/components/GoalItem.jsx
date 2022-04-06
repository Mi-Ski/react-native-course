import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const GoalItem = props => {
	return (
		<TouchableOpacity
			activeOpacity={0.8}
			onPress={props.onDelete.bind(this, props.id)}>
			<View style={[styles.goalElementView, styles.goalElementFlex]}>
				<View style={styles.flexLeft}>
					<Text>{props.element.item.value}</Text>
				</View>
				<View style={styles.flexRight}>
					<Text style={{color: '#f1faee'}}>×</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default GoalItem;

const styles = StyleSheet.create({
	goalElementView: {
		backgroundColor: '#f1faee',
		paddingVertical: 12,
		borderRadius: 5,
		marginVertical: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	goalElementFlex: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	flexLeft: {
		flex: 1,
		marginLeft: 40,
	},
	flexRight: {
		marginRight: 20,
		backgroundColor: '#e63946',
		width: 20,
		height: 20,
		borderRadius: 4,
		alignItems: 'center',
		justifyContent: 'center',
	}
});
