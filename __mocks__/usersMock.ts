import { DetailUsersInterface, UsersInterface } from '../model/UsersInterface';

export const usersDefaultMock: UsersInterface[] = [
  {
    id: '1',
    login: 'mojombo',
    avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
  },
  {
    id: '2',
    login: 'defunkt',
    avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
  },
  {
    id: '3',
    login: 'pjhyett',
    avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
  },
  {
    id: '4',
    login: 'wycats',
    avatar_url: 'https://avatars.githubusercontent.com/u/4?v=4',
  },
];

export const searchUserMock = {
  items: [
    {
      id: '85044012',
      login: 'wentzpatricia',
      avatar_url: 'https://avatars.githubusercontent.com/u/85044012?v=4',
    },
  ],
};

export const detailProfileMock: DetailUsersInterface = {
  id: '85044012',
  login: 'wentzpatricia',
  location: 'Porto Alegre',
  company: 'ilegra',
  avatar_url: 'https://avatars.githubusercontent.com/u/85044012?v=4',
  bio: 'Estudante de Análise e Desenvolvimento de Sistemas',
  name: 'Patrícia',
  followers: 16,
  following: 45,
  public_repos: 10,
};

export const reposMock = [
  {
    id: '506830207',
    name: 'Aplicando-Design-Patterns',
    language: 'Python',
    forks: '1',
    open_issues: '0',
    watchers: '0',
  },
  {
    id: '442550995',
    name: 'dance-with-us',
    language: 'HTML',
    forks: '0',
    open_issues: '0',
    watchers: '0',
  },
];
