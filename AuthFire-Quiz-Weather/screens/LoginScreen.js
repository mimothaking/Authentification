import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase/firebase'
import { useNavigation } from '@react-navigation/core'
import LottieView from 'lottie-react-native'

const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(true)

    const navigation = useNavigation()

    useEffect( () => {
       const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("Home")
                
            }
        })
        return unsubscribe
    } , [])

    const handleSignUp = () =>{
        auth.createUserWithEmailAndPassword(email, password).then(userCredentials => 
            {
                const user = userCredentials.user;
            console.log('Registered with :',user.email)
            })
            .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email, password).then(userCredentials => {
            const user = userCredentials.user;
            setLoading(true)
            console.log('LoggedIn with :',user.email)
        })
            .catch(error => alert(error.message))
    }

  return (
    
    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === "ios" ? "padding" : "height"}> 
          <View style={[StyleSheet.absoluteFillObject, styles.anim]}>
              <LottieView source={require('../Images/lf20_odojxouu.json')} autoPlay loop />
          </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Email' 
        value={email} onChangeText={text => setEmail(text)}
        style={styles.input}
        />
        <TextInput placeholder='Password'
        value={password} onChangeText={text => setPassword(text)}
        style={styles.input}
        secureTextEntry
        />
        
      </View>

      <View style={styles.buttonContainer}>
      <TouchableOpacity
      onPress={[handleLogin , ]}
      style={styles.button}
      >
        <Text style={styles.buttonText}>LogIn</Text>
      </TouchableOpacity>
      <TouchableOpacity
       onPress={handleSignUp}
       style={[styles.button, styles.buttonOutline]}
       >
       <Text style={styles.buttonOutlineText}>Register</Text>
       </TouchableOpacity>

      </View>
          <View style={[StyleSheet.absoluteFillObject, styles.anim2]}>
              <LottieView source={require('../Images/lf20_l66ml93e.json')} autoPlay loop />
          </View>
      </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: '#f7f8f8',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    button: {
        backgroundColor: '#111212',
        width: "100%",
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#111212',
        borderWidth: 2,
    },
    buttonOutlineText: {
        color: '#111212',
        fontWeight: '700',
        fontSize: 16
    },
    anim:{
        marginBottom: 450,
        width: 300,
        height: 300,
        marginLeft: 40
    },
    anim2: {
        marginTop: 500,
        width: 250,
        height: 250,
        marginLeft: 60
    }
})