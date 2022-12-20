const yargs = require("yargs");
const {getGeoCode} = require('./geocode');
const {getWeather} = require('./weather');

yargs.command({
    command: "run",
    builder: {
        address:{
            demandOption: true,
            type: "string",
        }
    },
    handler: function({address}) {
        // let {address} = args
        // debugger là để debug code;
        // debugger;
        // getGeoCode(address, (latitude, longtitude) => {
        //     // console.log(latitude, longtitude);
        //     getWeather(latitude, longtitude, (weather) => {
        //         console.log('weather:',weather.summary);
        //         console.log('temperature:',weather.temperature)
        //     })
        // });
        getGeoCode(address)
        .then((res)=>{
            const {lat,lng} = res.data.results[0].geometry.location;
            console.log(lat,lng);
            // const lat = res.latitude
            // return getWeather(res.latitude, res.longtitude);
            return getWeather(lat, lng);
        })
        .then((res) => {
            // console.log(JSON.stringify(res.data));
            const {summary, temperature} = res.data.currently;
            console.log('Summary',summary);
            console.log('Temperature',temperature);
        })
        .catch((err)=>{console.log(err);});
    }
});

yargs.parse();