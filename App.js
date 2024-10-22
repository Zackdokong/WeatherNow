import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { API_KEY } from '@env';
import styles from './styles'; // styles.js를 불러옴

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      console.log(data);
      
      if (response.ok) {
        setWeatherData(data);
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("An error occurred while retrieving weather information");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Please enter your city"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Load weather" onPress={fetchWeather} />
      {weatherData && (
        <Text style={styles.weatherText}>
          {weatherData.main.temp}°C, {weatherData.weather[0].description}
        </Text>
      )}
    </View>
  );
};

export default App;