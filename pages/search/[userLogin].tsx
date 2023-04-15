import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { ProfileListCard } from '../../components/ProfileListCard/ProfileListCard';
import { SearchProfile } from '../../containers/SearchProfile/SearchProfile';
import { UsersInterface } from '../../model/UsersInterface';

interface UserLoginProps {
  user: UsersInterface[];
}

interface DataProps {
  items: UsersInterface[];
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { userLogin }: ParsedUrlQuery = context.query;
  const response: Response = await fetch(
    `http://localhost:3000/api/searchUser?userlogin=${userLogin}`
  );
  const profile: DataProps = await response.json();

  return { props: { user: profile?.items } };
};

const Search: NextPage<UserLoginProps> = ({ user }: UserLoginProps) => {
  return (
    <>
      <SearchProfile />
      <ProfileListCard user={user} />
    </>
  );
};

export default Search;
