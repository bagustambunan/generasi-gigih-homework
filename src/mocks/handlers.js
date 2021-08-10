import { rest } from 'msw';
import { client_id, scope, redirect_uri } from '../values';

export const handlers = [
  // rest.post('/login', (req, res, ctx) => {

  //   let spotify_url = "https://accounts.spotify.com/authorize";
  //   spotify_url += "?response_type=token";
  //   spotify_url += "&client_id=" + encodeURIComponent(client_id);
  //   spotify_url += "&scope=" + encodeURIComponent(scope);
  //   spotify_url += "&redirect_uri=" + encodeURIComponent(redirect_uri);

  //   return window.location = spotify_url;
  // }),

  rest.get('/callback', (req, res, ctx) => {

    console.log(res);

  }),
]
