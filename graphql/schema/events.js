exports.Event = `
type Event {
   _id: ID!
   title: String!
   description: String!
   price: Float!
   date: String!
   creator:User!
}
`;

exports.EventInput = `
input EventInput {
    title: String!
    description: String!
    price: Float!
    date: String!
}
`;
exports.Booking = `
type Booking{
    _id:ID!
    event:Event!
    user:User!
    createdAt:String!
    updatedAt:String!
}
`;
exports.EventQueries = `
   events: [Event!]!
   eventById(id: ID!): [Event!]!
   bookings:[Booking!]!
`;
exports.EventMutations = `
   createEvent(eventInput:EventInput):Event
   bookEvent(eventId:ID!):Booking!
   cancelBooking(bookingId:ID!):Event!
`;
