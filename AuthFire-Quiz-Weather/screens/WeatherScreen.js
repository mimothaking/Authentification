import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import * as Location from "expo-location"
import axios from 'axios'
import CurrentWeather from '../components/CurrentWeather'
import WeatherLoader from '../components/WeatherLoader'

const API_URL = (lat, lon) => `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=810b824e9b9d3466bebfd2ba8cc79146&lang=en&units=metric`

export default function WeatherScreen() {

    //Get user location

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)

    useEffect(() => {
        const getCoordinates = async () => {
           const { status } = await Location.requestForegroundPermissionsAsync()
           if (status !== "granted")
           return

           const userLocation = await Location.getCurrentPositionAsync()
           getWeather(userLocation)
        } 
        getCoordinates()
     }, [])
    //Make a request into our servers
    //City
    //Current weather
    //previsions
    const getWeather = async(location) => {
        try{
            const response = await axios.get(API_URL(location.coords.latitude, location.coords.longitude))

            setData(response.data)
            setLoading(false)
        }catch(e) {
            console.log("Error getWeather")
        }
        
    }


    if (loading){
        return <View style={styles.container1}>
            <WeatherLoader />
        </View>
    }

  return (
    <View style={styles.container}>
      <CurrentWeather data={data} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    container1:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    }
})