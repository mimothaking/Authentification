import { StyleSheet, Text, ScrollView, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { enUS } from 'date-fns/locale'
import Weather from './Weather'

export default function ForecastWeather ({data}) {

    const [forecasts, setForecasts] = useState([])

    useEffect(() => {
        const forecastData = data.list.map(f => {
            const dt = new Date(f.dt * 1000)
            return({
                date: dt,
                hour: dt.getHours(),
                temp: Math.round(f.main.temp),
                icon: f.weather[0].icon,
                name: format(dt, "EEEE", {locale: enUS})
            })
        })
        setForecasts(forecastData)
    }, [data])

  return (
    <ScrollView
    horizontal
    showHorizontalScrollIndicator={false}
    style={styles.container}
    >
      {forecasts.map(f => (
        <View>
              <Text style={styles.name}>{f.name}</Text>
              <Weather forecast={f} />
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 90,
    },
    name:{
        marginLeft: 17
    }
})