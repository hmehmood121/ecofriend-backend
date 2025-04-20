const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  tripId: { type: String, required: true },
  name: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  Distance: { type: Number, required: true },
  fuelConsumption: { type: Number, required: true },
  ecoDrivingScore: { type: Number, required: true },
  vehicle_id: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  vehicle_type: { type: String, required: true },
  speed: { type: Number, required: true }
});

module.exports = mongoose.model('Trip', tripSchema);
