exports.typeDefs = `

type Recipe{
    name: String!
    category: String!
    description: String!
    instructions: String!
    createdDate: String
    likes: Int
    userName: String
}

type User{
    userName: String! @unique
    password: String!
    email: String!
    joinDate: String
    favorites: [Recipe]
}

type Query{
  getAllRecipes: [Recipe]
}
`;