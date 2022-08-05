import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
      <Text style={styles.username}>Welcome, {auth.currentUser?.email.substring(0, auth.currentUser?.email.lastIndexOf("@"))}</Text>

      <TouchableOpacity
        style={styles.buttonChoice}
        onPress={() => {}}
      >
        <ImageBackground
          source={{ uri: 'https://www.plascilab.fr/wp-content/uploads/2022/01/istockphoto-477110708-612x612-1.jpg' }}
          imageStyle={{ borderRadius: 10}}
          style={{
            height: 122,
            width: 180,
            position: 'absolute',
          }}
        >
        </ImageBackground>
        <Text style={styles.buttonChoiceText}>Weather</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonChoice2}
        onPress={() => { }}
      >
        <ImageBackground
          source={{ uri: 'https://t3.ftcdn.net/jpg/02/55/81/40/360_F_255814073_eVeqoLhJQ31uBZ3fcgaaRcYgEtYDkYkF.jpg' }}
          imageStyle={{ borderRadius: 10 }}
          style={{
            height: 122,
            width: 180,
            position: 'absolute',
          }}
        >
        </ImageBackground>
        <Text style={styles.buttonChoiceText2}>Quiz Game</Text>
      </TouchableOpacity>

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
        
    },
    button: {
        backgroundColor: '#b4c4d4',
        width: "60%",
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 150,
        marginLeft: 75,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
    username: {
      fontSize: 14,
      marginTop: '10%',
      marginLeft: '65%'
    },
  buttonChoice: {
    backgroundColor: '#b4c4d4',
    width: "50%",
    padding: 50,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 120,
    marginLeft: 88,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonChoiceText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonChoice2: {
    backgroundColor: '#b4c4d4',
    width: "50%",
    padding: 50,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 90,
    marginLeft: 88,
  },
  buttonChoiceText2: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16
  },
})