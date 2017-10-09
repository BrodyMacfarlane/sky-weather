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
            text: 'Please type in a city name above to receive details from that area.',
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
            console.log("this shit is clear")
            this.setState({
                currentWeatherPic: clear,
                text: 'The weather is clear with a max temp of F and a low of F.'
            })
        }
        else if (this.state.currentWeather === "Clouds") {
            console.log("this shit is cloudy *puffs vape*")
            this.setState({
                currentWeatherPic: cloudy,
                text: 'The weather is cloudy with a max temp of F and a low of F.'
            })
        }
        else if (this.state.currentWeather === "Drizzle") {
            console.log("this shit is drizzly *lets out satisfied sigh*")
            this.setState({
                currentWeatherPic: drizzle,
                text: 'The weather is a light rain with a max temp of F and a low of F.'
            })
        }
        else if (this.state.currentWeather === "Rain") {
            console.log("this shit is rainy *cries cause happy*")
            this.setState({
                currentWeatherPic: rain,
                text: 'The weather is rainy with a max temp of F and a low of F.'
            })
        }
        else if (this.state.currentWeather === "Snow") {
            console.log("this shit is snowy *hits kicker*")
            this.setState({
                currentWeatherPic: snow,
                text: 'The weather is snowy with a max temp of F and a low of F.'
            })
        }
        else if (this.state.currentWeather === "Atmosphere") {
            console.log("this shit is foggy n shit *puffs vape*")
            this.setState({
                currentWeatherPic: visibility,
                text: 'The weather is poor for visibility with a max temp of F and a low of F.'
            })
        }
        else if (this.state.currentWeather === "Thunderstorm") {
            console.log("this shit is a gnarly thunderstorm")
            this.setState({
                currentWeatherPic: thunderstorm,
                text: 'The weather is an intense thunderstorm with a max temp of F and a low of F.'
            })
        }
    }

    getWeather(city){
        axios.get(this.state.baseURL + city + this.state.endURL)
            .then(response => {
                this.setState({
                    weather: response.data,
                    prefix: "Displaying weather for ",
                    returnedLocation: response.data.city.name + ", " + response.data.city.country,
                    currentWeather: response.data.list[20].weather[0].main
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