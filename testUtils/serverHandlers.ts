import {
  detailProfileMock,
  reposMock,
  searchUserMock,
  usersDefaultMock,
} from '../__mocks__/usersMock';
// manipuladores de servidor (definimos o que mswdeve retornar quando nosso aplicativo atingir uma URL específica).
import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:3000/api/defaultProfiles', (req, res, ctx) => {
    return res(ctx.json(usersDefaultMock));
  }),
  rest.get('http://localhost:3000/api/searchUser', (req, res, ctx) => {
    return res(ctx.json(searchUserMock));
  }),
  rest.get('http://localhost:3000/api/getUserDetails', (req, res, ctx) => {
    return res(ctx.json(detailProfileMock));
  }),
  rest.get('http://localhost:3000/api/repoProfiles', (req, res, ctx) => {
    return res(ctx.json(reposMock));
  }),
];
