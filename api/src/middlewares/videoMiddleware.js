const { validate: isUuid } = require('uuid');
// const { validate } = require('uuid');
const Video = require('../models/video');

module.exports ={
    async validadeId(req, res, next){
        const { id } = req.params;
        if(!isUuid(id)){
            return res.status(400).json({ error: 'Invalid ID.' });
        };
        try{
            const video = await Video.findById(id);
            res.video = video;
            if(!video){
                return res.status(404).json({ error: 'Video not found.' })
            }
        }catch(error){
            return res.status(400).json({ error: error.massage });
        };
        next();
    }
}
