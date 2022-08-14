import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();









export default function LanguagesScreen()   {




    const navigation = useNavigation()

    const handleEng = () => {

        navigation.navigate("Login")

    }

    const handleFr = () => {

        navigation.navigate("Connection")

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
    

    <View style={styles.container}
    onLayout={onLayoutRootView}>
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