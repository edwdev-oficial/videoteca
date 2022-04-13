const mongoose = require('mongoose');

function connectToDatabase(){
    
    mongoose.connect(process.env.DATABASE_URL, {
        useNewURLParser: true,
        useUnifiedTopology: true

    });
    
    const db = mongoose.connection;
    db.on('error', (error) => console.error(error));
    db.once('open', () => console.log('🌎 Connected to the database!'));

};

module.exports = connectToDatabase;
