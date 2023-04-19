import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { TouchableOpacity } from "react-native-web";
import {
    Image, Platform, StyleSheet, Text,
    TouchableHighlight, TextInput, Dimensions, View
} from 'react-native';
import { SignInButton } from './Buttons';

const logoImage = require("./logo.png");

const data = [
    {
        image: logoImage,
    },
];

const Login = (props) => {
    return (
        <View style={styles.Container}>
            <Image style={styles.cardImage} source={logoImage} />
            <Text style={styles.title}>Login</Text>
            <Text style={styles.subTitle}>Sign In To Your Account</Text>
            <TextInput
                placeholder="user@email.com"
                style={styles.textInput}
            />
            <TextInput
                placeholder="password"
                style={styles.textInput}
                secureTextEntry={true}
            />
            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot your password?</Text>
            </TouchableOpacity>
            <SignInButton />
            <TouchableOpacity>
                <Text style={styles.haveAccount}>Don't have an account?</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
};

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: data,
        };
    }

    render() {
        const list = this.state.data.map(function (item, index) {
            const { image, showThumbnail } = item;
            return (
                <Login
                    image={image}
                    showThumbnail={showThumbnail} />);
        }, this);
        return (
            <View style={styles.container}>
                {list}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1e1e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardImage: {
        margin: 0,
        width: 200,
        height: 150,
    },
    title: {
        fontSize: 40,
        color: '#24e8a6',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subTitle: {
        fontSize: 13,
        color: '#03a1f8',
        textAlign: 'center',
    },
    textInput: {
        borderWidth: 2,
        borderColor: '#333333',
        padding: 10,
        paddingStart: 20,
        width: '100%',
        height: 30,
        marginTop: 10,
        borderRadius: 30,
        backgroundColor: '#fff',
        textAlign: 'center',
    },
    forgotPassword: {
        fontSize: 10,
        marginTop: 5,
        color: '#24e8a6',
        fontWeight: 'bold',
        textAlign: 'right',
    },
    haveAccount: {
        fontSize: 10,
        marginTop: 7,
        color: '#03a1f8',
        fontWeight: 'bold',
        textAlign: 'center',
    },

});
export default App;  
