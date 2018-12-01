const Quote = require('../models/models.js');

 

//create Quote

exports.create = (req, res) =>

{

    const quote = new Quote({

        TypeofRisk: req.body.TypeofRisk, //Financial / Non-Financial / Public

        FullTimeEmployees: req.body.FullTimeEmployees, //150 

        Limit: req.body.Limit, //(Dropdown) $750,000

        Retention: req.body.Retention,  //$10,000

        PrivateEquityRisks: req.body.PrivateEquityRisks,     //Yes/No -> private/non-private

        CoverageTierScore: req.body.CoverageTierScore,  //2

        GenerateQuote: req.body.GenerateQuote    //Select any quote

    });

 

    //save Quote

    quote.save()

    .then(data => {

        res.send(data);

    }).catch(err => {

        res.status(500).send({

            message: err.message || "Some error occurred while creating the Quote."

        });   

    });

  

};

 

//Get Quote/id

exports.findOne = (req, res) =>

{

    var mongoose = require('mongoose');

    Quote.findById({_id : new mongoose.Types.ObjectId(req.params.Id)})

    .then(quote => {

        if(!quote) {

            return res.status(404).send({

                message: "Quote not found with id " + req.params.Id

           });           

        }

        res.send(quote);

    });

};

 

//Get Quote

exports.findAll = (req, res) =>

{

    Quote.find()

    .then(quote => {

        res.send(quote);

    });

};

 

//Delete Quote

exports.delete = (req, res) => {

    Quote.findByIdAndRemove({_id : new mongoose.Types.ObjectId(req.params.Id)})

    .then(quote => {

        if(!quote) {

            return res.status(404).send({

                message: "Quote not found with id " + req.params.Id

            });

        }

        res.send({message: "Quote deleted successfully!"});

    }).catch(err => {

        if(err.kind === 'ObjectId' || err.name === 'NotFound') {

            return res.status(404).send({

                message: "Quote not found with id " + req.params.Id

            });               

        }

        return res.status(500).send({

            message: "Could not delete Quote with id " + req.params.Id

        });

    });

};

 

//Update Quote

exports.update = (req, res) => {

    if(!req.body.content) {

        return res.status(400).send({

            message: "Quote content can not be empty"

        });

    }

 

   

    Quote.findByIdAndUpdate({_id : new mongoose.Types.ObjectId(req.params.Id)}, {

        TypeofRisk: req.body.TypeofRisk,

        FullTimeEmployees: req.body.FullTimeEmployees,

        Limit: req.body.Limit,

        Retention: req.body.Retention,  

        PrivateEquityRisks: req.body.PrivateEquityRisks,    

        CoverageTierScore: req.body.CoverageTierScore

    }, {new: true})

    .then(quote => {

        if(!quote) {

            return res.status(404).send({

                message: "Quote not found with id " + req.params.Id

            });

        }

        res.send(quote);

    }).catch(err => {

        if(err.kind === 'ObjectId') {

            return res.status(404).send({

                message: "Quote not found with id " + req.params.Id

            });               

        }

        return res.status(500).send({

            message: "Error updating Quote with id " + req.params.Id

        });

    });

};














 