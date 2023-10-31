import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class LoginView extends Component {
    constructor(props) {
    super(props);
    this.state = {
      text1: 'Hola, soy un texto',
    };
    }

    getLogin = () => {
        console.warn('Hola, router');
    }

    render() {
        return (
            <View style={styles.container}>
                <Button 
                    onPress={this.getLogin}
                    title='Login'
                    color='#FF0000'
                    accessibilityLabel='Login button'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    }
});