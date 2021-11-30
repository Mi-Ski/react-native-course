import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = (props) => {
	return (
		<View style={{ ...styles.card, ...props.style }}>{props.children}</View>
	);
};

const styles = StyleSheet.create({
	card: {
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.3,
		backgroundColor: 'white',
		elevation: 9,
		padding: 20,
		borderRadius: 10,
	},
});

export default Card;
