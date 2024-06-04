const express = require('express');
const router = express.Router();

router.use(express.json());

let rideRequests = [];

router.post('/rideshare/request', (req, res) => {
  const { userId, location, destination } = req.body;
    const rideRequest = { userId, location, destination, id: Date.now() };
      rideRequests.push(rideRequest);
        res.status(201).json(rideRequest);
        });

        router.get('/rideshare/requests', (req, res) => {
          res.json(rideRequests);
          });

          const initialize = (app) => {
            app.use('/api', router);
            };

            module.exports = { initialize };