const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const Incedent = require('./models/incedent.js');
const Tip = require('./models/tip.js');
const { Ollama } = require('ollama');

const ollama = new Ollama({ host: 'http://127.0.0.1:11434' })


app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({extended: true}));
app.engine('ejs', ejsMate);
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));


main().then(()=>{
    console.log('DB connected');
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/suraksha');
}

app.get('/', async (req, res) => {
    // let incedents = await Incedent.find();
    res.render('layout/landing.ejs');
})

app.get('/tara', async (req, res) => {
    // let incedents = await Incedent.find();
    res.render('layout/tara.ejs');
})

app.get('/map', async (req, res) => {
    let incedents = await Incedent.find();
    let tips = await Tip.find();
    res.render('layout/map.ejs', {incedents, tips});
})

app.get('/form', async (req, res) => {
    res.render('layout/form.ejs');
})
app.get('/tipform', async (req, res) => {
    res.render('layout/tipform.ejs');
})

app.get('/about', async (req, res) => {
    res.render('layout/about.ejs');
})

app.get('/help', async (req, res) => {
    res.render('layout/help.ejs');
})

app.get('/legalresource', async (req, res) => {
    res.render('layout/legalresources.ejs');
})

app.post('/submit-tip', async (req, res) => {
    const { text, date, lat, long } = req.body;
  
    try {
      const newTip = new Tip({
        text,
        date: new Date(date),
        location: {
          lat: parseFloat(lat),
          long: parseFloat(long)
        }
      });
  
      await newTip.save();
      res.redirect('/map'); // or wherever you want
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  });

app.post('/api/anonymous-reports', async (req, res) => {
    try {
        const reportData = req.body;
        if (!reportData.Country || !reportData.City || !reportData.what || !reportData.when || !reportData.Time) {
          return res.status(400).json({ error: 'Missing required fields.' });
        }
    
        const newReport = new Incedent(reportData);
    
        const savedReport = await newReport.save();
    
        console.log('Anonymous report submitted successfully:', savedReport);
        res.status(201).json({ message: 'Report submitted successfully!', reportId: savedReport._id });
        res.redirect('/map');
    } catch (error) {
        console.error('Error submitting anonymous report:', error);
        res.status(500).json({ error: 'Failed to submit report. Please try again later.' });
    }
});

app.listen(8080, ()=>{
    console.log('Listing port: 8080')
})