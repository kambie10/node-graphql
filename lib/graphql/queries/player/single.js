import {GraphQLNonNull, GraphQLID} from 'graphql'

import { playerType } from '../../types/player'
import PlayerModal from '../../../models/player'

export default {
  type: playerType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    return PlayerModal.findById(params.id).exec()
  }
}