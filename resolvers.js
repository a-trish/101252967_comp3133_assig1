const Listing = require("./models/Listing");
const Booking = require("./models/Booking");
const User = require("./models/User");

exports.resolvers = {
    Query: {
        login: async (parent, args) => {
            return User.findOne(
              {
                username: args.username,
                password: args.password
              },
            )
        },

        getListing: async (parent, args) => {
            return await Listing.find({});
        },
    
        getListingByName: async (parent, args) => {
            return await Listing.find({"listing_title" : args.listing_title});
        },
    
        getListingByCity: async (parent, args) => {
            return await Listing.find({"city" : args.city});
        },
    
        getListingByPostalCode: async (parent, args) => {
            return await Listing.find({"postal_code" : args.postal_code});
        },
    
        getBooking: async (parent, args) => {
            return await Booking.find({ "username": args.username });
        },
    
        getListingByAdmin: async (parent, args) => {
            return Listing.find({ "username": args.username })
        },
    },

    Mutation: {
        addListing: async (parent, args) => {
            console.log(args)
    
            let newListing = new Listing({
                listing_id: args.listing_id,
                listing_title: args.listing_title,
                description: args.description,
                street: args.street,
                city: args.city,
                postal_code: args.postal_code,
                price: args.price,
                email: args.email,
                username: args.username,
            });
            return await newListing.save();
        },
    
        addBooking: async (parent, args) => {
            console.log(args)
    
            let newBooking = new Booking({
                listing_id: args.listing_id,
                booking_id: args.booking_id,
                booking_date: args.booking_date,
                booking_start: args.booking_start,
                booking_end: args.booking_end,
                username: args.username,
            });
            return await newBooking.save();
        },

        addUser: async (parent, args) => {
            console.log(args)
            const emailExpression = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            const isValidEmail =  emailExpression.test(String(args.email).toLowerCase())
            
            if(!isValidEmail){
                throw new Error("email not in proper format")
            }

            let newUser = new User({
                username: args.username,
                firstname: args.firstname,
                lastname: args.lastname,
                password: args.password,
                email: args.email,
                type: args.type
            });
            return await newUser.save();
        }
    }
};
  