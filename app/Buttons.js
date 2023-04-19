import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";

export function SignInButton() {
    return (
        <TouchableOpacity>
            <LinearGradient
                colors={['#24e8a6', '#03a1f8']}
                style={Styles.button}>
                <Text style={Styles.buttonText}>Sign In</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({

    button: {
        alignSelf: 'center',
        borderRadius: 15,
        paddingVertical: 8,
        marginTop: 20,
        width: '80%',
    },
    buttonText: {
        color: '#1e1e1e',
        textAlign: 'center',
    },

})