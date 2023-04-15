import { UsersInterface } from '../../model/UsersInterface';

import { ProfileCard, ProfileListContainer } from './ProfileListCardStyle';

interface ProfilePros {
  user: UsersInterface[];
}

export const ProfileListCard = ({ user }: ProfilePros) => {
  return (
    <ProfileListContainer>
      {user.length > 0 ? (
        <>
          {user.map((users: UsersInterface) => {
            return (
              <ProfileCard key={users.id}>
                <h2>{users.login}</h2>
                <button>
                  <a href={`/user/${users.id}`}>
                    <img src={users.avatar_url} alt={users.login} />
                  </a>
                </button>
              </ProfileCard>
            );
          })}
        </>
      ) : (
        <>Not Found</>
      )}
    </ProfileListContainer>
  );
};
