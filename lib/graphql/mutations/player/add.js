import {GraphQLNonNull} from 'graphql' // validasi field tertentu harus di isi

import {playerType, playerInputType} from '../../types/player'
import PlayerModel from '../../../models/player'

export default {
  type: playerType, //return playerType
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(playerInputType)
    }
  },
  resolve(root, params) { //fungsi setiap add di panggil
    const playerModel = new PlayerModel(params.data)
    const newPlayer = playerModel.save()
    if(!newPlayer){
      throw new Error('Cannot create new player')
    }

    return newPlayer
  }
}