import type { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from 'octokit';
import { UsersInterface } from '../../model/UsersInterface';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UsersInterface[]>
) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  });
  let userLogin = req.query.userlogin;
  const perPage = 12;
  const result = await octokit.request(
    `/search/users?q=${userLogin}&page=1&per_page=${perPage}`
  );
  const users: UsersInterface[] = await result.data;

  res.status(200).json(users);
}
