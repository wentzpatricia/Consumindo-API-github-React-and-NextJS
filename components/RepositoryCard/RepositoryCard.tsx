import { AiOutlineArrowLeft } from 'react-icons/ai';
import { ReposInterface } from '../../model/ReposInterface';
import { BtnReturn } from '../ProfileDetail/ProfileDetailStyle';
import {
  RepositoryBox,
  RepositoryContainer,
  TitleRepo,
} from './RepositoryCardStyle';
import { BiGitRepoForked } from 'react-icons/bi';
import { BsCircle } from 'react-icons/bs';
interface RepositoryCardProps {
  repo: ReposInterface[];
}
const RepositoryCard = ({ repo }: RepositoryCardProps) => {
  return (
    <RepositoryContainer>
      {repo.map((item: ReposInterface) => {
        return (
          <RepositoryBox key={item.id}>
            <div>
              <TitleRepo>{item.name}</TitleRepo>
              <h3>
                <strong>
                  <BsCircle />{' '}
                </strong>
                {item.language}
              </h3>
              <h3>
                <strong>
                  <BiGitRepoForked />
                </strong>
                {item.forks}
              </h3>
            </div>
            <div>
              <h3>
                <strong>Open Issues:</strong>
                {item.open_issues}
              </h3>
              <h3>
                <strong>Watchers:</strong>
                {item.watchers}
              </h3>
            </div>
          </RepositoryBox>
        );
      })}
      <BtnReturn>
        <a href={`http://localhost:3000/`}>
          <AiOutlineArrowLeft />
        </a>
      </BtnReturn>
    </RepositoryContainer>
  );
};

export default RepositoryCard;
