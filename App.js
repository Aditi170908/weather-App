import React, { Component } from 'react';
import { Text, View, StyleSheet,Image} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';


export default class WeatherScreen extends Component {
   constructor() {
    super();
    this.state = {
      weather: '',
    };
  }

  getWeather = async () => {
    //change latitude and longitude
    var url = 'https://fcc-weather-api.glitch.me/api/current?lat=23.0225&lon=72.5714';
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          weather: responseJson,
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  wheatherImage=async()=>{
    var url='https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/5dd4f83d646fed2b341d4ee3451daa80'
  }

  
  componentDidMount = () => {
    this.getWeather();
  };

render(){
  if (this.state.weather === '') {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    } 

else{
return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(255,255,0,0.8)', 'transparent']}
        style={styles.background}
      />
       <View style={styles.subContainer}>
            <Text style={styles.title}>
              Weather Forecast
            </Text>
            <Text style={{ fontSize: 20, marginTop:10}}>
              Country : {this.state.weather.sys.country}
            </Text>
            <Image
              style={styles.cloudImage}
              source={require('cloud3.png')}
            />
            <View style={styles.textContainer}>
            <Text style={{ fontSize: 18}}>
              {this.state.weather.main.temp}&deg;C
            </Text>
            <Text style={{ fontSize: 20, margin:10}}>
              humidity : {this.state.weather.main.humidity}
            </Text>
            <Text style={{fontSize: 20}}>
              {this.state.weather.weather[0].description}
            </Text>
          </View>
          <Text style = {{fontFamily:'Luminari'}}> ....Have a Pleasent Day.... </Text>
          </View>    
      
    </View>
  );
}
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  subContainer : { 
    flex: 1, 
     
    alignItems: 'center' 
    },
    title:{ 
      marginTop: 50, 
      fontSize: 30,
      fontWeight: '550' 
    },
    cloudImage :{ 
      width: 200, 
      height: 200, 
      marginTop: 30 
    },
    textContainer : { 
      flex: 1,
      alignItems: 'center', 
      flexDirection:'row', 
      marginTop:-150
    }
});
