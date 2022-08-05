import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase/firebase'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

    const navigation = useNavigation()

    const handleLogOut = () => {
        auth.signOut().then(() => {
            navigation.replace("Login")
        })
        .catch(error => alert(error.message))
    }

  return (
    <View style={styles.container}>
      <Text>Current user : {auth.currentUser?.email}</Text>
      <TouchableOpacity
      style={styles.button}
      onPress={handleLogOut}
      >
        <Text style={styles.buttonText}>SignOut</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#b4c4d4',
        width: "60%",
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
})