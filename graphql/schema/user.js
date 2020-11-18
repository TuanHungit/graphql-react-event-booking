exports.User = `
type User{
    _id:ID!
    email:String!
    password:String
    createdEvents:[Event!]
}
`;

exports.AuthData = `
type AuthData{
    userId:ID!
    token:String!
    tokenExpiration:Int!
}
`;

exports.UserInput = `
input UserInput {
    email: String!
    password: String!
}
`;

exports.UserQueries = `
    login(email:String!,password:String!):AuthData
`;

exports.UserMutations = `
    createUser(userInput:UserInput):User
`;
