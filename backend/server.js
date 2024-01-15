const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(cors());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

async function main() {
  await mongoose.connect('mongodb+srv://g00402138:ATU123@cathalmchale.cvr04oh.mongodb.net/?retryWrites=true&w=majority');
}

main().catch((err) => console.log(err));

const eventSchema = new mongoose.Schema({
  event: String,
  date: String,

  date: { type: Date, default: Date.now },
});

const eventsModel = mongoose.model('Event', eventSchema);

app.delete('/api/events/:id', async (req, res) => {
  console.log('Delete: ' + req.params.id);

  try {
    let event = await eventsModel.findByIdAndDelete(req.params.id);
    res.send(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/api/events/:id', async (req, res) => {
  console.log('Update: ' + req.params.id);

  try {
    let event = await eventsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/events', async (req, res) => {
  console.log(req.body);

  try {
    await eventsModel.create({
      event: req.body.event,
      date: req.body.date,
      
    });

    res.send('Event created');
  } catch (error) {
    console.error(error);
    res.status(500).send('Event not created');
  }
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/events', async (req, res) => {
  try {
    let events = await eventsModel.find({});
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/events/:identifier', async (req, res) => {
  console.log(req.params.identifier);

  try {
    let event = await eventsModel.findById(req.params.identifier);
    res.send(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
