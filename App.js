import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { EXPO_API_KEY } from '@env';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${EXPO_API_KEY}&units=metric`);
      const data = await response.json();
      console.log(data);
      
      // 날씨 데이터를 상태에 저장
      if (response.ok) {
        setWeatherData(data);
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("날씨 정보를 가져오는 중에 오류가 발생했습니다.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="도시 입력"
        value={city}
        onChangeText={setCity}
      />
      <Button title="날씨 가져오기" onPress={fetchWeather} />
      {weatherData && (
        <Text style={styles.weatherText}>
          {weatherData.main.temp}°C, {weatherData.weather[0].description}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '80%',
    paddingHorizontal: 10,
  },
  weatherText: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default App;
