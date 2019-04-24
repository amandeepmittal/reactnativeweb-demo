import React from "react"
import { StyleSheet, Text, View, FlatList } from "react-native"

class App extends React.Component {
	state = {
		StarWarsAPI: [
			{
				id: 1,
				name: "Luke Skywalker"
			},
			{
				id: 2,
				name: "C-3PO"
			},
			{
				id: 3,
				name: "R2-D2"
			}
		]
	}

	_keyExtractor = (item, index) => item.id

	_renderItem = ({ item }) => (
		<View style={styles.listContainer}>
			<Text style={styles.listItem}>{item.name}</Text>
		</View>
	)

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>Hello, world!</Text>
				<FlatList
					data={this.state.StarWarsAPI}
					keyExtractor={this._keyExtractor}
					renderItem={this._renderItem}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		flex: 1
	},
	text: {
		fontWeight: "bold",
		fontSize: 30
	},
	listContainer: {
		paddingTop: 20
	},
	listItem: {
		fontSize: 20
	}
})

export default App
