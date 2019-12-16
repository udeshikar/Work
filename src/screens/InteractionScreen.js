import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class InteractionScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View stylesheet={styles.mainContainer}>
                <Text>InteractionScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch'
    }
});

export default InteractionScreen;