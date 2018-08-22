import { RSAA } from 'redux-api-middleware'
import X2JS from 'x2js'
const parser = new X2JS()

import * as types from 'constants.js'
import getTypes, { START, SUCCESS, FAIL } from 'constants.js'

export const searchOnMedium = searchQuery => ({
  [RSAA]: {
    types: [
      types.SEARCH_ON_MEDIUM+START,
      //If response isnt json need some additional work to types define
      {
        type: types.SEARCH_ON_MEDIUM+SUCCESS,
        //If response isnt json api wouldnt returns payload without additions manual parsing
        payload: async (action, state, res) => {
          let rss = await res.text()
          let json = parser.xml2js(rss).rss.channel

          return {rss: json}
        }
      },
      types.SEARCH_ON_MEDIUM+FAIL,
    ],
    method: 'GET',
    headers: { 'Content-Type': 'text/xml' },
    // endpoint: `api/${searchQuery}` //* This part can be done on server but githib pages only for static pages */
    endpoint: `https://hidden-coast-36070.herokuapp.com:443/https://medium.com/feed/${searchQuery}` //* This part can be done on server but githib pages only for static pages */
  }
})
