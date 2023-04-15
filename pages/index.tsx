import { ProfileListCard } from '../components/ProfileListCard/ProfileListCard';
import { UsersInterface } from '../model/UsersInterface';
import { SearchProfile } from '../containers/SearchProfile/SearchProfile';
import { GetServerSideProps } from 'next';

interface ProfilePros {
  user: UsersInterface[];
}

export default function Home({ user }: ProfilePros) {
  return (
    <>
      <SearchProfile />
      <ProfileListCard user={user} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<ProfilePros> = async () => {
  const response = await fetch('http://localhost:3000/api/defaultProfiles');
  const user: UsersInterface[] = await response.json();

  return {
    props: { user },
  };
};
