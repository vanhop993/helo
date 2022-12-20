const request = require("request");

// const getGeoCode = (address, cb) => {
//     //request google server
//     request({
//         url:`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDBunJ4GXNEC3KJlpoGJO-iB--CjPv4o-s&address=${address}`,
//         json:true,
//     },
//     (err, res , body) => {
//         if(err) {
//             console.log("cannot connect to google server");
//             return;
//         }
//         const {lat,lng} = body.results[0].geometry.location;
//         // console.log(lat,lng);  
//         cb(lat,lng);
//     });
// }

// const getGeoCode = (address) => {
    //request google server
    // return new Promise((resolve,reject) =>{
    //     request({
    //         url:`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDBunJ4GXNEC3KJlpoGJO-iB--CjPv4o-s&address=${address}`,
    //         json:true,
    //     },
    //     (err, res , body) => {
    //         if(err) {
    //             reject("cannot connect to google server");
    //             return;
    //         }
    //         const {lat,lng} = body.results[0].geometry.location;
    //         // console.log(lat,lng);  
    //         resolve({latitude:lat,longtitude:lng});
    //     });
    // })
   
// }
const axios = require('axios');
const getGeoCode = (address) => {
    return axios({
        url:`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDBunJ4GXNEC3KJlpoGJO-iB--CjPv4o-s&address=${address}`, 
        method: 'GET',
    })
}


module.exports = {getGeoCode};