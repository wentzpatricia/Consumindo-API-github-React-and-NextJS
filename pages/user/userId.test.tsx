import { waitFor, screen } from '@testing-library/react';
import { getPage } from 'next-page-tester';
import { detailProfileMock } from '../../__mocks__/usersMock';

describe('Detail users', () => {
  it('Should render detail users', async () => {
    const { render } = await getPage({
      route: '/user/85044012',
    });

    render();

    await waitFor(() => {
      expect(
        screen.getByRole('img', { name: detailProfileMock.login })
      ).toHaveAttribute('src', detailProfileMock.avatar_url);

      expect(screen.getByText(detailProfileMock.login)).toBeInTheDocument();

      expect(screen.getByText(detailProfileMock.location)).toBeInTheDocument();

      expect(screen.getByText(detailProfileMock.company)).toBeInTheDocument();

      expect(screen.getByText(detailProfileMock.bio)).toBeInTheDocument();

      expect(screen.getByText(detailProfileMock.name)).toBeInTheDocument();

      expect(screen.getByText(detailProfileMock.followers)).toBeInTheDocument();

      expect(screen.getByText(detailProfileMock.following)).toBeInTheDocument();

      expect(
        screen.getByText(detailProfileMock.public_repos)
      ).toBeInTheDocument();
    });
  });
});
