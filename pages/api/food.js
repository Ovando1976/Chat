const express = require('express');
const router = express.Router();

router.use(express.json());

let restaurants = [
  { id: 1, name: 'Restaurant A', cuisine: 'Italian' },
    { id: 2, name: 'Restaurant B', cuisine: 'Mexican' },
    ];

    router.get('/food/restaurants', (req, res) => {
      res.json(restaurants);
      });

      const initialize = (app) => {
        app.use('/api', router);
        };

        module.exports = { initialize };