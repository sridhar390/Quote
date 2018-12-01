const mongoose = require('mongoose');

 

//mongoo schema

const QuoteSchema = mongoose.Schema({

    TypeofRisk: String, //Financial / Non-Financial / Public

    FullTimeEmployees: String, //150 

    Limit: String, //(Dropdown) $750,000

    Retention: String,  //$10,000

    PrivateEquityRisks: String,  //Yes/No -> private/non-private

    CoverageTierScore: String,  //2

    GenerateQuote: String    //Select any quote

});

module.exports = mongoose.model('Quote', QuoteSchema);

 

//???????_______----->>INPUT<--------_________

 

// {  

//     "TypeofRisk":"Financial / Non-Financial / Public",

//     "FullTimeEmployees": "150",

//     "Limit":"$750,000",

//     "Retention":"$10,000" ,

//     "PrivateEquityRisks":"Yes/No" ,

//     "CoverageTierScore":"2",

//     "GenerateQuote": "Button"

    

// }

 