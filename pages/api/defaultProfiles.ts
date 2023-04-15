import { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from 'octokit';
import { UsersInterface } from '../../model/UsersInterface';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const perPage = 12;
  const octokit = new Octokit({ auth: process.env.TOKEN_GITHUB });
  const result = await octokit.request(`/users?page=1&per_page=${perPage}`);
  const profiles: UsersInterface[] = await result.data;

  res.status(200).json(profiles);
};

export default handler;
