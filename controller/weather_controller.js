const axios = require('axios')
var weather = [];

module.exports = {
    read: ( req, res ) => {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${req.params.city}&mode=json&APPID=4d928f7a0eb70754b2bbd3711db8b253`)
        .then(response => {
            console.log("here ", response.data)
            res.status(200).send( response.data );
        })
    }
}