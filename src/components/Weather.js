import React, {Component} from 'react'
import axios from 'axios'
import clear from '../weather-imgs/clear.png'
import cloudy from '../weather-imgs/cloudy.png'
import drizzle from '../weather-imgs/drizzle.png'
import extreme from '../weather-imgs/extreme.png'
import rain from '../weather-imgs/rain.png'
import snow from '../weather-imgs/snow.png'
import thunderstorm from '../weather-imgs/thunderstorm.png'
import visibility from '../weather-imgs/visibility.png'

export default class Weather extends Component {
    constructor(props){
        super(props)
        this.state = {
            weather: [],
            city: '',
            prefix: 'Please type a location. ',
            returnedLocation: '',
            currentWeather: '',
            currentWeatherPic: clear,
            temperature: [0,0,0], //[current, high, low]
            text: 'Details will appear after you type a City name and press "enter".',
            baseURL: "http://api.openweathermap.org/data/2.5/forecast?q=",
            endURL: "&mode=json&APPID=4d928f7a0eb70754b2bbd3711db8b253",
        }
        //bind this
        this.getWeather = this.getWeather.bind(this)
        this.handleEnter = this.handleEnter.bind(this)
        this.updateInputValue = this.updateInputValue.bind(this)
        this.weatherPicHandler = this.weatherPicHandler.bind(this)
    }
    handleEnter(e){
        if(e.key === 'Enter') {
            this.getWeather(this.state.city)
        }
    }

    updateInputValue(e){
        this.setState({
            city: e.target.value
        })
    }

    weatherPicHandler(){
        if (this.state.currentWeather === "Clear") {
            this.setState({
                currentWeatherPic: clear,
                text: `The weather is currently clear and ${Math.floor((this.state.temperature[0] - 273.15) * 9/5) + 32}F with a high temp of ${Math.floor((this.state.temperature[1] - 273.15) * 9/5) + 32}F and a low of ${Math.floor((this.state.temperature[2] - 273.15) * 9/5) + 32}F.`
            })
        }
        else if (this.state.currentWeather === "Clouds") {
            this.setState({
                currentWeatherPic: cloudy,
                text: `The weather is currently cloudy and ${Math.floor((this.state.temperature[0] - 273.15) * 9/5) + 32}F with a high temp of ${Math.floor((this.state.temperature[1] - 273.15) * 9/5) + 32}F and a low of ${Math.floor((this.state.temperature[2] - 273.15) * 9/5) + 32}F.`
            })
        }
        else if (this.state.currentWeather === "Drizzle") {
            this.setState({
                currentWeatherPic: drizzle,
                text: `The weather is currently a light rain and ${Math.floor((this.state.temperature[0] - 273.15) * 9/5) + 32}F with a high temp of ${Math.floor((this.state.temperature[1] - 273.15) * 9/5) + 32}F and a low of ${Math.floor((this.state.temperature[2] - 273.15) * 9/5) + 32}F.`
            })
        }
        else if (this.state.currentWeather === "Rain") {
            this.setState({
                currentWeatherPic: rain,
                text: `The weather is currently rainy and ${Math.floor((this.state.temperature[0] - 273.15) * 9/5) + 32}F with a high temp of ${Math.floor((this.state.temperature[1] - 273.15) * 9/5) + 32}F and a low of ${Math.floor((this.state.temperature[2] - 273.15) * 9/5) + 32}F.`
            })
        }
        else if (this.state.currentWeather === "Snow") {
            this.setState({
                currentWeatherPic: snow,
                text: `The weather is currently snowy and ${Math.floor((this.state.temperature[0] - 273.15) * 9/5) + 32}F with a high temp of ${Math.floor((this.state.temperature[1] - 273.15) * 9/5) + 32}F and a low of ${Math.floor((this.state.temperature[2] - 273.15) * 9/5) + 32}F.`
            })
        }
        else if (this.state.currentWeather === "Atmosphere") {
            this.setState({
                currentWeatherPic: visibility,
                text: `The weather is poor for visibility and ${Math.floor((this.state.temperature[0] - 273.15) * 9/5) + 32}F with a high temp of ${Math.floor((this.state.temperature[1] - 273.15) * 9/5) + 32}F and a low of ${Math.floor((this.state.temperature[2] - 273.15) * 9/5) + 32}F.`
            })
        }
        else if (this.state.currentWeather === "Thunderstorm") {
            this.setState({
                currentWeatherPic: thunderstorm,
                text: `The weather is currently an intense thunderstorm and ${Math.floor((this.state.temperature[0] - 273.15) * 9/5) + 32}F with a high temp of ${Math.floor((this.state.temperature[1] - 273.15) * 9/5) + 32}F and a low of ${Math.floor((this.state.temperature[2] - 273.15) * 9/5) + 32}F.`
            })
        }
    }

    getWeather(city){
        axios.get(`http://localhost:3001/api/weather/${city}`)
            .then(response => {
                this.setState({
                    weather: response.data,
                    prefix: "Displaying weather for ",
                    returnedLocation: response.data.city.name + ", " + response.data.city.country,
                    currentWeather: response.data.list[0].weather[0].main,
                    temperature: [response.data.list[0].main.temp, response.data.list[0].main.temp_max, response.data.list[0].main.temp_min]
                })
                console.log(this.currentWeather)
                this.weatherPicHandler()
                console.log(this.state.weather)
                console.log(this.state.returnedLocation)
            })
    }

    render(){
        return(
            <div className="app-container container">
                <div className="app-header">
                    <input className="location-search" value={this.state.city} onChange={e => this.updateInputValue(e)} onKeyPress={this.handleEnter} placeholder="Los Angeles, US"/>
                    <p id="display">{this.state.prefix} {this.state.returnedLocation}</p>
                </div>
                <div className="weather-display">
                    <img className="weather-img" src={this.state.currentWeatherPic}/>
                    <div className="weather-description">{this.state.text}</div>
                </div>
            </div>
        )
    }
}