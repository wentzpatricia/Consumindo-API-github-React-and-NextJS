import type { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from 'octokit';
import { ReposInterface } from '../../model/ReposInterface';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ReposInterface[]>
) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  });
  let userRepo = req.query.userRepo;
  const perPage = 12;
  const result = await octokit.request(
    `/users/${userRepo}/repos?page=1&per_page=${perPage}`
  );

  const users: ReposInterface[] = await result.data;

  res.status(200).json(users);
}
