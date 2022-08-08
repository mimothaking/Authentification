import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const WeatherLoader = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject]}>
      <LottieView source={require('../Images/1173-sun-burst-weather-icon.json')} autoPlay loop></LottieView>
    </View>
  )
}

const styles = StyleSheet.create({})

export default WeatherLoader;