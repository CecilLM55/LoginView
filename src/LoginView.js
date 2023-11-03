import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, Alert, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';

export default class LoginView extends Component {
    constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    }

    getLogin = () => {
        const emailError = this.validadeEmail(this.state.email);
        const passwordError = this.validadePassword(this.state.password);

        if (emailError || passwordError) {
            Alert.alert(
                'Error de validación',
                emailError || passwordError,
                [
                    {text: 'OK'},
                ],
            );
        } else {
            console.warn('Email: ' + this.state.email);
            console.warn('Password: ' + this.state.password);
        }
    }

    onChangeEmail = (value) => {
        this.setState({email: value});
    }

    onChangePassword = (value) => {
        this.setState({password: value});
    }

    validadeEmail(email) {
        var regex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;
        if(!email.match(regex)) {
            return 'Email inválido';
        } else if (email.trim() === '') {
            return 'Este campo no puede estar vacío';
        }

        return null;
    }

    validadePassword(password) {
        uppercase = /[A-Z]/;
        lowercase = /[a-z]/;
        special = /[^A-Za-z0-9]/;

        if (password === '') {
            return 'Este campo no puede estar vacío';
        } else if(password.length < 8) {
            return 'La contraseña debe tener al menos 8 caracteres';
        } else if(!uppercase.test(password)) {
            return 'La contraseña debe tener al menos una letra mayúscula';
        } else if(!lowercase.test(password)) {          
            return 'La contraseña debe tener al menos una letra minúscula';
        } else if(!special.test(password)) {
            return 'La contraseña debe tener al menos un caracter especial';
        }

        return null;
    }



    render() {
        return (
            <View style={styles.container}>
                <Image 
                    source={require('../assets/logo.jpg')}
                    style={{width: 200, height: 200}}
                />

                <Text style={styles.subtitles}>Correo electrónico</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(email) => this.onChangeEmail(email)}
                    placeholder="Escribe tu correo electrónico..."
                    value = {this.state.email}
                />

                <Text style={styles.subtitles}>Contraseña</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(password) => this.onChangePassword(password)}
                    placeholder="Escribe tu contraseña..."
                    value = {this.state.password}
                    secureTextEntry={true}                    
                />
                
                <Button
                    style={styles.button}
                    title="Iniciar sesión"
                    onPress={() => this.getLogin()}
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
    },
    subtitles: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    input: {
        width: 200,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    },
    button: {
        
        width: 200,
        marginVertical: 10,
        marginHorizontal: 20,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    }
});