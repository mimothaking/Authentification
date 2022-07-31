import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const loginScreen = () => {
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput placeholder='Email' 
        //value={ } onChangeText={Text =>}
        style={styles.input}
        />
        <TextInput placeholder='Password'
        //value={ } onChangeText={Text =>}
        style={styles.input}
        secureTextEntry
        />
        
      </View>

      <View style={styles.buttonContainer}>
      <TouchableOpacity
      onPress={ () => {}}
      style={styles.button}
      >
        <Text style={styles.buttonText}>LogIn</Text>
      </TouchableOpacity>
      <TouchableOpacity
       onPress={() => { }}
       style={[styles.button, styles.buttonOutline]}
       >
       <Text style={styles.buttonOutlineText}>Register</Text>
       </TouchableOpacity>

      </View>
      </KeyboardAvoidingView>
  )
}

export default loginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
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
        backgroundColor: '#b4c4d4',
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
        borderColor: '#b4c4d4',
        borderWidth: 2,
    },
    buttonOutlineText: {
        color: '#b4c4d4',
        fontWeight: '700',
        fontSize: 16
    }
})