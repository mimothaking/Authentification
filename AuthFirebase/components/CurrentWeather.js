import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { isSameDay } from "date-fns";



const getIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@4x.png`

export default function CurrentWeather({ data }){

    const [currentWeather, setCurrentWeather] = useState(null)


    useEffect(() => {
        const currentW = data.list.filter(forecast => {
            const today = new Date().getTime() + Math.abs(data.city.timezone * 1000)
            const forecastDate = new Date(forecast.dt * 1000)
            return isSameDay(today, forecastDate)
        })
       setCurrentWeather(currentW[0])
    }, [data])

    return(
        <>
            <Text style={styles.city}>{data?.city?.name}</Text>
            <Text style={styles.today}>Today </Text>
            <Image source={{uri: getIcon(currentWeather?.weather[0].icon)}} 
                style={{width:150, height:150}}
            />
            <Text style={styles.temp}>{currentWeather?.main.temp}°C</Text>
            <Text style={styles.desc}>{currentWeather?.weather[0].description}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    city:{
        color: 'grey',
        fontWeight: '800',
        fontSize: 28,
        marginTop: 80,
        
    },
    today:{
        marginBottom: 100
    },
    temp:{
        fontWeight: '500',
        fontSize: 28
    },
    desc:{
        fontWeight: '300',
        fontSize: 20
    }
})