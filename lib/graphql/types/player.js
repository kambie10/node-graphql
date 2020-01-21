import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
} from 'graphql'

import GraphQLDate from 'graphql-date'

// output data player
export const playerType = new GraphQLObjectType({
  name: 'Player',
  description: 'Player Type',
  fields: () => ({
    _id : {
      type: GraphQLID
    },
    name: {
      type: GraphQLString,
    },
    club: {
      type: GraphQLString,
    },
    position: {
      type: GraphQLString,
    },
    nationality: {
      type: GraphQLString,
    },
    createdAt: {
      type: GraphQLDate,
    },
    updatedAt: {
      type: GraphQLDate,
    },
  })
})

//input data player
export const playerInputType = new GraphQLInputObjectType({
  name: 'PlayerInput',
  description: 'Player Input Type',
  fields: () => ({
    name: {
      type: GraphQLString,
    },
    club: {
      type: GraphQLString,
    },
    position: {
      type: GraphQLString,
    },
    nationality: {
      type: GraphQLString,
    },
  })
})