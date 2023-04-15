import type { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from 'octokit';
import { DetailUsersInterface } from '../../model/UsersInterface';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DetailUsersInterface>
) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  });
  let userId = req.query.userId;

  const result = await octokit.request(`/user/${userId}`);
  const users: DetailUsersInterface = await result.data;

  res.status(200).json(users);
}
