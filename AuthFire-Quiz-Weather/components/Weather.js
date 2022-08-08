import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const getIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`

export default function Weather({ forecast }) {
  return (
      <View style={styles.container}>
          
          <Text>{forecast.hour}h</Text>
          <Image source={{ uri: getIcon(forecast?.icon) }}
              style={{ width: 50, height: 50 }}
          />
          <Text style={styles.temp}>{forecast.temp}°C</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    container:{
        
        backgroundColor: "#bdc3c5",
        height: 140,
        width: 75,
        paddingVertical: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        borderRadius: 50,                   
    },
    temp:{
        fontSize: 18,
        fontWeight: 'bold'
    }
})