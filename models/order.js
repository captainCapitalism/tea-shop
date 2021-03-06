var mongoose = require("mongoose");

var OrderSchema = new mongoose.Schema({
    discount:       { type: String, default: "0" },
    discountToGo:   { type: Boolean, default: false},
    closed:         { type: Boolean, default: false },
    sum:            { type: String, default: "0"},
    discountedSum:  { type: String, default: "0"},
    table:          { type: String, default: "" },
    items: [
        {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Item"
        }
   ],
    
},
                    {timestamps: { createdAt: 'createdAt' } });

module.exports = mongoose.model("Order", OrderSchema);
