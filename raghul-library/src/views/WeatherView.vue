<template>
    <div class="container">
      <h1>Weather</h1>
      <div class="inner-container">
        <input type="text" v-model="city" placeholder="Enter city name" class="search-input"/>
        <button @click="searchByCity" class="search-button">Search</button>
      </div>
    </div>
    <main>
      <!--If there is no data returned, then skip rendering the information-->  
      <div v-if="weatherData">
        <h2>
          {{ weatherData.name }}, {{ weatherData.sys.country }}
        </h2>
        <div>
          <img :src="iconUrl" alt="Weather Icon" />
          <p>{{ temperature }} °C</p>
        </div>
        <span>{{ weatherData.weather[0].description }}</span>
      </div>
    </main>
  </template>
  
  <script>
    import axios from "axios";
  
    const apikey = "c2e7bb73b635b04e5568773c75e3649f";
  
    export default {
      name: "App",
      data() {
        return {
          city: "",
          weatherData: null,
          hourlyForecast: [],
          dailyForecast: [],
        };
      },
  
      computed: {
        temperature() {
          return this.weatherData
            ? Math.floor(this.weatherData.main.temp - 273.15)
            : null;
        },
        iconUrl() {
          return this.weatherData
            ? `https://openweathermap.org/img/wn/${this.weatherData.weather[0].icon}@2x.png`
            : null;
        },
      },
      mounted() {
        this.fetchCurrentLocationWeather();
      },
      methods: {
        async fetchCurrentLocationWeather() {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
              const { latitude, longitude } = position.coords;
              const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`;
              await this.fetchWeatherData(url);
            }, (error) => {
              console.error("Geolocation permission denied or unavailable:", error);
            });
          } else {
            console.error("Geolocation not supported by this browser.");
          }
        },
        async fetchWeatherData(url) {
          try {
            const response = await axios.get(url);
            this.weatherData = response.data;
          } catch (error) {
            console.error("Error fetching weather data:", error);
          }
        },
        async searchByCity() {
          if (this.city) {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apikey}`;
            await this.fetchWeatherData(url);
          }
        }
      }
    }
  </script>
  
<style>

.container {
    display: flex;
    align-items: center;
}
</style>