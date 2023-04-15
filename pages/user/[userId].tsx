import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { DetailUsersInterface } from '../../model/UsersInterface';
import ProfileDetail from '../../components/ProfileDetail/ProfileDetail';

interface UserDetailsProps {
  user: DetailUsersInterface;
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { userId }: ParsedUrlQuery = context.query;
  const response: Response = await fetch(
    `http://localhost:3000/api/getUserDetails?userId=${userId}`
  );
  const data: DetailUsersInterface = await response.json();
  return {
    props: { user: data },
  };
};

const User: NextPage<UserDetailsProps> = ({ user }: UserDetailsProps) => {
  return <ProfileDetail user={user} />;
};

export default User;
