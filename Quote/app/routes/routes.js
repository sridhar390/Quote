module.exports = (app) => {

    const quote = require('../controllers/controllers.js');

 

    //post

    app.post('/postQuote', quote.create);

 

    //get

    app.get('/getQuote', quote.findAll);

 

    //get

    app.get('/getQuote/:Id', quote.findOne);

 

    //delete

    app.delete('/deleteQuote/:Id', quote.delete);

 

    //update

    app.put('/deleteQuote/:Id', quote.update);

}

 