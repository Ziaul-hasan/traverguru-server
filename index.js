const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const destination = require("./Data/destination.json");
const hotel = require("./Data/hotel.json");
const rooms = require("./Data/rooms.json");

app.use(cors());

app.get('/', (req, res)=> {
    res.send('Travel is loading')
})

app.get('/destination', (req, res)=> {
    res.send(destination);
})

app.get('/destination/:id', (req, res) => {
    const id = req.params.id
    console.log(id);
    const selectedPlace = destination.find(place => place.id === parseInt(id))
    res.send(selectedPlace)
})

app.get('/hotel', (req, res)=> {
    res.send(hotel);
})

app.get('/hotel/:id', (req, res)=> {
    const id = req.params.id;
    const selectedHotel = hotel.find(h => h.id === parseInt(id))
    res.send(selectedHotel);
})

app.get('/rooms', (req, res)=>{
    res.send(rooms);
})

app.get('/rooms/:id', (req, res)=> {
    const id = req.params.id;
    const selectedRoom = rooms.find(room => room.id === id)
    res.send(selectedRoom);
})
app.listen(port, ()=>{
    console.log(`Traveling is running from the port: ${port} `)
})