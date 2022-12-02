const express = require('express');
// const axios = require("axios").default
const app = express()
// async function run(){
// const response = await axios.get("https://randomuser.me/api?results=5")
// const json = response.data;
app.get('/',(req,res) => {
    const breakTime = new Date("2022-11-30T16:00:00.000+05:30").getTime();
    const current = new Date()
    const minutesLeft = (breakTime - current) / 100 / 60;
    
    // const user = json.results[0]
    // const dob = new Date(user.dob.date)

    // res.send({currentTime: current.toString(),
    // tomorrow: new Date(current.getTime() + 24*60*60*1000).toString()});

    // const d = new Date(); //get current time
    // const seconds = d.getMinutes() * 60 + d.getSeconds(); //convet current mm:ss to seconds for easier caculation, we don't care hours.
    // const fiveMin = 60 * 20; //five minutes is 300 seconds!
    // const timeleft = fiveMin - seconds % fiveMin; // let's say now is 01:30, then current seconds is 60+30 = 90. And 90%300 = 90, finally 300-90 = 210. That's the time left!
    // const result = parseInt(timeleft / 60) + ':' + timeleft % 60; //formart seconds back into mm:ss 
    // res.send({minutesLeft})
    // res.send(current.getFullYear())
    res.render("user-list.ejs")
    
    
});
app.listen(3000)
// }
// run()
