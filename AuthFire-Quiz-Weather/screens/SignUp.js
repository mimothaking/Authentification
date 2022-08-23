import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { auth } from '../firebase/firebase'
import { useNavigation } from '@react-navigation/core'
import LottieView from 'lottie-react-native'
import * as SplashScreen from 'expo-splash-screen';


// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(true)

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("Home")
            }
        })
        return unsubscribe
    }, [])

    const handleSignUp = () => {
        auth.createUserWithEmailAndPassword(email, password).then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered with :', user.email)
        })
            .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        navigation.navigate("Login")
    }
  

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={styles.logo}>
                <Image source={require('../assets/eaglocLogo.png')}
                    style={{ width: 270, height: 270 }} />
            </View>
            <Text style={styles.loginText}>Create your account </Text>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Email'
                    value={email} onChangeText={text => setEmail(text)}
                    style={styles.input}
                    placeholderTextColor="#2ea3ff"
                />
                <TextInput placeholder='Password'
                    value={password} onChangeText={text => setPassword(text)}
                    style={styles.input}
                    placeholderTextColor="#2ea3ff"
                    secureTextEntry
                />
                <TextInput placeholder='Enter password again'
                    value={password} onChangeText={text => setPassword(text)}
                    style={styles.input}
                    placeholderTextColor="#2ea3ff"
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.button2, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Sign up</Text>
                </TouchableOpacity>
            </View>
           
        </KeyboardAvoidingView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginText: {
        textAlign: 'center',
        marginBottom: 30,
        color: '#2ea3ff',
        fontSize: 20,
        fontWeight: '700'
    },
    inputContainer: {
        width: '90%',
    },
    input: {
        backgroundColor: '#f7f8f8',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 7,
        marginTop: 2,
        marginLeft: 40,
        marginBottom: 14,
        borderColor: '#2ea3ff',
        borderWidth: 1,
        height: 42
    },
    buttonContainer: {
        width: '37%',
        height: 40,
        marginTop: 12,
        flexDirection: 'row',
        marginLeft: 26,
        marginRight: 20
    },
    buttonContainer2: {
        width: '90%',
        marginTop: 30
    },
    button: {
        backgroundColor: '#fff',
        width: "100%",
        marginLeft: 15,
        padding: 8,
        borderRadius: 7,
        alignItems: 'center',
        borderColor: '#2ea3ff',
        borderWidth: 1.5,
    },
    button2: {
        backgroundColor: '#2ea3ff',
        width: "100%",
        marginLeft: 15,
        padding: 8,
        borderRadius: 7,
        alignItems: 'center',
    },
    buttonText: {
        color: '#2ea3ff',
        fontWeight: '900',
        fontSize: 16
    },
    buttonOutlineText: {
        color: '#fff',
        fontWeight: '900',
        fontSize: 16
    },
    anim1: {
        width: 35,
        height: 35,
        marginLeft: 10,
        marginTop: 4
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})