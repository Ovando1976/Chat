const express = require('express');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();
const events = [];

router.use(express.json());

router.post('/events', (req, res) => {
  const { title, description, date, location } = req.body;
    const event = {
        id: uuidv4(),
            title,
                description,
                    date,
                        location,
                            created_at: new Date(),
                              };
                                events.push(event);
                                  res.status(201).json(event);
                                  });

                                  router.get('/events', (req, res) => {
                                    res.json(events);
                                    });

                                    router.get('/events/:id', (req, res) => {
                                      const event = events.find(e => e.id === req.params.id);
                                        if (event) {
                                            res.json(event);
                                              } else {
                                                  res.status(404).send('Event not found');
                                                    }
                                                    });

                                                    router.put('/events/:id', (req, res) => {
                                                      const event = events.find(e => e.id === req.params.id);
                                                        if (event) {
                                                            const { title, description, date, location } = req.body;
                                                                event.title = title || event.title;
                                                                    event.description = description || event.description;
                                                                        event.date = date || event.date;
                                                                            event.location = location || event.location;
                                                                                event.updated_at = new Date();
                                                                                    res.json(event);
                                                                                      } else {
                                                                                          res.status(404).send('Event not found');
                                                                                            }
                                                                                            });

                                                                                            router.delete('/events/:id', (req, res) => {
                                                                                              const eventIndex = events.findIndex(e => e.id === req.params.id);
                                                                                                if (eventIndex !== -1) {
                                                                                                    events.splice(eventIndex, 1);
                                                                                                        res.status(204).send();
                                                                                                          } else {
                                                                                                              res.status(404).send('Event not found');
                                                                                                                }
                                                                                                                });

                                                                                                                const initialize = (app) => {
                                                                                                                  app.use('/api', router);
                                                                                                                  };

                                                                                                                  module.exports = { initialize };