const initialize = (app, wss) => {
      app.get('/document/:id', (req, res) => {
          res.sendFile(path.join(__dirname, '../public/editor
}