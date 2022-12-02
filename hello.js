const { json } = require("express");

const axios = require("axios").default
async function run(){
    const response = await axios.get("https://randomuser.me/api?results=5")
     const json = response.data;
     let names = [];
    for(const user of json.results){
        // console.log(user.name.first)
        names.push(user.name.first)
    }
    // console.log(names.join(", "))
    const name = json.results.map(user => user.name.first)
//  console.log(name.join(", "))
    // const response = await axios.get("https://randomuser.me/api")
    // console.log(response.data)
    // console.log(response.data.results[0].name.first)
    // console.log(response.data.results[0].location.street.number)
    // console.log(response.data.results[0].picture.medium)
    // console.log(response.data.info.version)
    // console.log(name.sort())
    // console.log(name.reverse())
    const namees = json.results.map(user => user.name.first + user.name.last)
    console.log(namees.join(", "))
    console.log(namees.sort())
}
run();