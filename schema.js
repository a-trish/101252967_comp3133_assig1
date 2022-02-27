const { gql } = require('apollo-server-express');

exports.typeDefs = gql `
    type Booking {
        id: ID!
        listing_id: String!
        booking_id: String!
        booking_date: String!
        booking_start: String!
        booking_end: String!
        username: String!
    }
    
    type Listing {
        id: ID!
        listing_id: String!
        listing_title: String!
        description: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!
        username: String!
    }

    type User {
        id: ID!
        username: String!
        firstname: String!
        lastname: String!
        password: String!
        email: String!
        type: String!
    }

    type Query {
        login(
          username: String!
          password: String!
        ): User
        getListing: [Listing]
        getListingByName(listing_title: String!): [Listing]
        getListingByCity(city: String!): [Listing]
        getListingByPostalCode(postal_code: String!): [Listing]
        getBooking(username: String!): [Booking]
        getListingByAdmin(username: String!): [Listing]
    }

    type Mutation {
        addListing(
            listing_id: String!
            listing_title: String!
            description: String!
            street: String!
            city: String!
            postal_code: String!
            price: Float!
            email: String!
            username: String!
        ): Listing
        addBooking(
            listing_id: String!
            booking_id: String!
            booking_date: String!
            booking_start: String!
            booking_end: String!
            username: String!
        ): Booking
        addUser(
          username: String!
          firstname: String!
          lastname: String!
          password: String!
          email: String!
          type: String!
        ): User
    }
`;
