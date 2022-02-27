const mongoose = require('mongoose')

const ListingSchema = mongoose.Schema(
    {
        listing_id: {
            type: String,
            required: true,
        },
        listing_title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: [true, "Please enter Street"]
        },
        city: {
            type: String, 
            required: [true, "Please enter city"]
        },
        postal_code: {
            type: String,
            required: [true, "Please enter postal code"]
        },
        price: {
            type: Number,
            required: [true, "Please enter price"]
        },
        email: {
            type: String,
            required: [true,"Please enter email"],
            trim: true,
            validate: function(value){
                var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                return emailRegex.test(value)
            }
        },
        username: {
            type: String,
            ref: 'User',
            required: true
        }
    }
)

const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;
