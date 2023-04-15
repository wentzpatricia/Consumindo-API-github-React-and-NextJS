import { DetailUsersInterface } from '../../model/UsersInterface';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import {
  BtnRepository,
  BtnReturn,
  PerfilContainer,
  PerfilListContainer,
  ProfileDetailContainer,
} from './ProfileDetailStyle';
import { FiGithub } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
interface ProfileDetailProps {
  user: DetailUsersInterface;
}

const ProfileDetail = ({ user }: ProfileDetailProps) => {
  return (
    <ProfileDetailContainer>
      <PerfilContainer>
        <h2>{user.name}</h2>
        <img src={user.avatar_url} alt={user.login} />
      </PerfilContainer>
      <PerfilListContainer>
        <h3>
          <FiGithub />
          {user.login}
        </h3>
        <p>{user.bio}</p>
        <p>
          <IoLocationOutline />
          {user.location}
        </p>

        <p>
          <strong>Company:</strong> {user.company}
        </p>
        <p>
          <strong>Public repositories:</strong> {user.public_repos}
        </p>

        <p>
          <strong>Followers:</strong>
          {user.followers}
        </p>
        <p>
          <strong>Following:</strong>
          {user.following}
        </p>
        <div>
          <BtnReturn>
            <a href={`http://localhost:3000/`}>
              <AiOutlineArrowLeft />
            </a>
          </BtnReturn>
          <BtnRepository>
            <a href={`/repository/${user.login}`}>repository</a>
          </BtnRepository>
        </div>
      </PerfilListContainer>
    </ProfileDetailContainer>
  );
};

export default ProfileDetail;
