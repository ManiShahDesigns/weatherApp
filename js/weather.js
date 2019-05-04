// Weather Class
class Weather {
  constructor(city){
    this.token = '0a1eb7bfb632cf237657994ebfc659b7';
    this.city = city;
  }

  // Fetch Data
  async getWeather(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&units=metric&APPID=${this.token}`);
    const responseData = await response.json();
    return responseData;     
  }

  changeLocation(city){
    this.city = city;
  }
}