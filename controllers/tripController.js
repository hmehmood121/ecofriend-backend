const Trip = require('../models/Trip');

// POST /api/trips
exports.createTrip = async (req, res) => {
  try {
    const trip = new Trip(req.body);
    await trip.save();
    res.status(201).json({ success: true, data: trip });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// GET /api/trips
exports.getTrips = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json({ success: true, data: trips });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
