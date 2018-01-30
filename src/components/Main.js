import React, { Component } from 'react';
import { View, Text } from 'react-native';


class Main extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>React Native Redux Boilerplate</Text>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
    },
};


export default Main;
