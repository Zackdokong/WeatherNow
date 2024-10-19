import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { API_KEY } from '@env';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e0f7fa',  // 부드러운 하늘색 배경으로 변경
  },
  input: {
    height: 50,  // 좀 더 큰 높이로 수정
    borderColor: '#00796b',  // 짙은 녹색 경계선
    borderWidth: 1.5,  // 약간 두꺼운 경계선
    borderRadius: 10,  // 둥근 테두리로 변경
    marginBottom: 20,  // 여백을 더 넉넉하게
    width: '90%',
    paddingHorizontal: 15,  // 내부 패딩 증가
    backgroundColor: '#ffffff',
    fontSize: 18,  // 글씨 크기를 조금 더 키움
    color: '#004d40',  // 어두운 녹색 글씨
  },
  buttonContainer: {
    marginTop: 15,  // 버튼 위 여백을 늘림
    width: '90%',
    backgroundColor: '#007BFF',  // 기본 파란색 유지
    borderRadius: 10,  // 둥근 테두리로 통일
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,  // 버튼 글씨 크기 증가
    textAlign: 'center',
    paddingVertical: 12,  // 버튼 안의 텍스트 높이 맞춤
  },
  weatherText: {
    marginTop: 30,  // 여백을 늘려서 텍스트를 더 띄움
    fontSize: 22,  // 날씨 정보 폰트 크기 증가
    fontWeight: 'bold',  // 굵은 폰트 사용
    color: '#00695c',  // 짙은 녹색 텍스트
    textAlign: 'center',
  },
});

export default App;
