import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { auth } from '../firebase/firebase'
import { useNavigation } from '@react-navigation/core'
import LottieView from 'lottie-react-native'
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

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
            console.log('LoggedIn with :',user.email)
        })
            .catch(error => alert(error.message))
    }

    
    const [appIsReady, setAppIsReady] = useState(false);


    useEffect(() => {
        async function prepare() {
            try {
                // Pre-load fonts, make any API calls you need to do here
                await Font.loadAsync(Entypo.font);
                // Artificially delay for two seconds to simulate a slow loading
                // experience. Please remove this if you copy and paste the code!
                await new Promise(resolve => setTimeout(resolve, 1000));
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);


    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            // This tells the splash screen to hide immediately! If we call this after
            // `setAppIsReady`, then we may see a blank screen while the app is
            // loading its initial state and rendering its first pixels. So instead,
            // we hide the splash screen once we know the root view has already
            // performed layout.
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }


  return (
    
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}> 
          <View style={styles.logo}>
              <Image source={require('../assets/eaglocLogo.png')}
                  style={{ width: 270, height: 270 }} />
          </View>
          <Text style={styles.loginText}>Login to your account </Text>
      <View style={styles.inputContainer}
            onLayout={onLayoutRootView}>
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
          <View style={{ flexDirection: 'row', marginTop: 38, width: '90%', marginLeft: 20 }}>
              <View style={{ backgroundColor: '#00ffdd', height: 2, flex: 1, alignSelf: 'center'}} />
              <Text style={{ alignSelf: 'center', paddingHorizontal: 5, fontSize: 16, color: '#00ffdd' }}>or</Text>
              <View style={{ backgroundColor: '#00ffdd', height: 2, flex: 1, alignSelf: 'center' }} />
          </View>
          <View style={styles.buttonContainer2}>
              <TouchableOpacity
                  onPress={() => {}}
                  style={styles.button3}
              >
                  <Text style={styles.buttonText}>Log in with Facebook</Text>
                  <View style={[StyleSheet.absoluteFillObject, styles.anim1]}>
                      <LottieView source={require('../Images/90970-facebook-animated-icon.json')} autoPlay />
                  </View>
              </TouchableOpacity>
              <TouchableOpacity
                  onPress={() => { }}
                  style={[styles.button3]}
              >
                  <Text style={styles.buttonText}>Log in with Google</Text>
                  <View style={[StyleSheet.absoluteFillObject, styles.anim1]}>
                      <LottieView source={require('../Images/98499-google (1).json')} autoPlay />
                  </View>
              </TouchableOpacity>
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
    loginText:{
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
        borderRadius: 5,
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
    buttonContainer2:{
        width: '90%',
        marginTop: 30
    },
    button: {
        backgroundColor: '#2ea3ff',
        width: "100%",
        marginLeft: 15,
        padding: 8,
        borderRadius: 5,
        alignItems: 'center',
    },
    button2: {
        backgroundColor: '#fff',
        width: "100%",
        marginLeft: 15,
        padding: 8,
        borderRadius: 5,
        alignItems: 'center',
    },
    button3: {
        backgroundColor: '#2ea3ff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 2,
        marginLeft: 40,
        marginBottom: 14,
        height: 42,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: '900',
        fontSize: 16
    },
    buttonOutline: {
        borderColor: '#2ea3ff',
        borderWidth: 1.5,
    },
    buttonOutlineText: {
        color: '#2ea3ff',
        fontWeight: '900',
        fontSize: 16
    },
    anim1:{
        width: 35,
        height: 35,
        marginLeft: 10,
        marginTop: 4
    },
    logo:{
        justifyContent: 'center',
        alignItems: 'center',
    }
})