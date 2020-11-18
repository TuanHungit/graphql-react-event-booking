const { buildSchema } = require('graphql');
const userSchema = require('./schema/user');
const eventSchema = require('./schema/events');
module.exports = buildSchema(`

    ${eventSchema.Booking}

    ${eventSchema.Event}

    ${eventSchema.EventInput}

    ${userSchema.User}

    ${userSchema.UserInput}

    ${userSchema.AuthData}

    type RootQuery {
        ${eventSchema.EventQueries}
        ${userSchema.UserQueries}
    }

    type RootMutation  {
        ${eventSchema.EventMutations}
        ${userSchema.UserMutations}

    }

    schema {
        query:RootQuery
        mutation:RootMutation
    }
`);
