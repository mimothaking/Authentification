import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native'



const LanguagesScreen = () => {

    const navigation = useNavigation()

    const handleEng = () => {

        navigation.navigate("Login")

    }

    const handleFr = () => {

        navigation.navigate("Connection")

    }


  return (

    <View style={styles.container}>
      <View style={styles.buttonContainer}>
          <TouchableOpacity
              onPress={handleEng}
              style={styles.button}
          >
              <Text style={styles.buttonText}>English</Text>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={handleFr}
              style={[styles.button, styles.buttonOutline]}
          >
              <Text style={styles.buttonOutlineText}>French</Text>
          </TouchableOpacity>

      </View>
      { /*   <View style={[StyleSheet.absoluteFillObject, styles.anim]}>
              <LottieView source={require('../Images/7565-waving-american-flag.json')} autoPlay />
          </View>
      */}
    </View>
  )
}
    
export default LanguagesScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
        marginTop: 335,
        marginLeft: 80,
        width: 50,
        height: 50
    }
})