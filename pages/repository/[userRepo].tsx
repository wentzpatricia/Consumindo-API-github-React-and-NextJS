import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import RepositoryCard from '../../components/RepositoryCard/RepositoryCard';
import { ReposInterface } from '../../model/ReposInterface';

interface RepoProps {
  repo: ReposInterface[];
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { userRepo }: ParsedUrlQuery = context.query;
  const response: Response = await fetch(
    `http://localhost:3000/api/repoProfiles?userRepo=${userRepo}`
  );
  const data: ReposInterface[] = await response.json();
  return {
    props: { repo: data },
  };
};

const Repository: NextPage<RepoProps> = ({ repo }: RepoProps) => {
  return <RepositoryCard repo={repo} />;
};

export default Repository;
