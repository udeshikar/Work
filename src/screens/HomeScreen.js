import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Alert
} from 'react-native';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    onAlertOpened() {
        return (
            Alert.alert(
                'LOW GPS',
                'Choose mode',
                [
                    {text: 'Interaction Moder', onPress: () => this.props.navigation.navigate('InteractionScreen')},
                    {text: 'NonInteraction Mode', onPress: () => this.props.navigation.navigate('NonInteractionScreen')},
                  ],
                  {cancelable: false},
            )
        )
    }

    render() {
        return (
            <View stylesheet={styles.mainContainer}>
                <Text>HomeScreen</Text>
                <Button 
                    title='Test'
                    onPress={() => this.onAlertOpened()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center', 
        alignSelf: 'stretch',
    },
});

export default HomeScreen;