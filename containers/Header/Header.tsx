import { HeaderContainer, HeaderTitle } from './HeaderStyle';
import { FaGithubAlt } from 'react-icons/fa';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>
        Github Api
        <FaGithubAlt />
      </HeaderTitle>
    </HeaderContainer>
  );
};
