const express = require('express');
const videoController = require('./controllers/videoController');
const routes = express.Router();

const VideoController = require('./controllers/videoController');
const VideoMiddleware = require('./middlewares/videoMiddleware');

routes.get('/', async(req, res) => {
    return res.status(200).send({ msg: '🌎 Hello World' })
});
routes.get('/videos', VideoController.index);
routes.post('/videos', VideoController.store);
routes.put('/videos/:id', VideoMiddleware.validadeId, VideoController.update);
routes.delete('/videos/:id', VideoMiddleware.validadeId, videoController.delete);
routes.patch('/videos/:id', VideoMiddleware.validadeId, videoController.updateLike);

module.exports = routes;