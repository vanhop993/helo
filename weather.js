const request = require("request");

// const getWeather = (lat,lng, cb) => {
//     // request to darksky de lay thoi tiet
//     request({
//         url: `https://api.darksky.net/forecast/7bbecca28cbc31d7c6739e70baa64e46/${lat},${lng}`,
//         json: true
//     },(err, res , body) => {
//         if(err){
//             console.log("cannot connect to darksky server");
//             return;
//         }
//         // const {summary, temperature} = body.currently;
//         cb(body.currently); 
//     })
// }

// const getWeather = (lat,lng) => {
//     // request to darksky de lay thoi tiet
//     return new Promise((resolve,reject)=>{
//         request({
//             url: `https://api.darksky.net/forecast/7bbecca28cbc31d7c6739e70baa64e46/${lat},${lng}`,
//             json: true
//         },(err, res , body) => {
//             if(err){
//                 reject("cannot connect to darksky server");
//                 return;
//             }
//             // const {summary, temperature} = body.currently;
//             resolve(body.currently);
//         })
//     });
// }
const axios = require('axios');
const getWeather = (lat,lng) => {
    return axios({
        url: `https://api.darksky.net/forecast/7bbecca28cbc31d7c6739e70baa64e46/${lat},${lng}`,
        method: 'GET', 
    })
}

module.exports = {getWeather};