const express = require('express')
const app = express() // **Inconsistent use of semicolons, sometimes you are using them, sometimes not**
const port = 3000
const axios = require('axios')
const path = require('path')
const cors = require('cors')


app.use(cors())

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))


 
}); 


// **Comment here is good, but it says it requires an ID, which it does not require
// Make a request for a user with a given ID
app.get('/data', function (req, res) {
    axios.get('http://ddragon.leagueoflegends.com/cdn/10.13.1/data/en_US/champion.json')
        .then(function (response) {
            // **dont forget to remove console.logs once you have tested what you needed to test
            // handle success
            
            
            // **not a great variable name, variable names need to be descriptive. How about championData?
            const data = response.data.data

            const champNames = Object.getOwnPropertyNames(data)

           
            //res.send(champNames)
            res.send(data)
           
        })

        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
})











