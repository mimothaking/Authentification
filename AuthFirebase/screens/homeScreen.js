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
            height: 135,
            width: 255,
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
            height: 135,
            width: 255,
            position: 'absolute',
          }}
        >
        </ImageBackground>
        <Text style={styles.buttonChoiceText2}>Quiz Game</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.buttonChoice3}
        onPress={() => { }}
      >
        <ImageBackground
          source={{ uri: 'https://media.istockphoto.com/photos/note-pad-and-pencil-picture-id1271863211?b=1&k=20&m=1271863211&s=170667a&w=0&h=j0qujbTbIX3bLDADBzk352ku8XW5NxA6gNw13Z60Pdw=' }}
          imageStyle={{ borderRadius: 10 }}
          style={{
            height: 135,
            width: 255,
            position: 'absolute',
          }}
        >
        </ImageBackground>
        <Text style={styles.buttonChoiceText3}>Coming Soon</Text>
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
        marginTop: 80,
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
    width: "70%",
    padding: 50,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 60,
    marginLeft: 56,
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
    width: "70%",
    padding: 50,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 56,
  },
  buttonChoiceText2: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16
  },
  buttonChoice3: {
    backgroundColor: '#b4c4d4',
    width: "70%",
    padding: 50,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 60,
    marginLeft: 56,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonChoiceText3: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})