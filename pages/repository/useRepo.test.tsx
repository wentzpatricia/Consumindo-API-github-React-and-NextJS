import { waitFor, screen } from '@testing-library/react';
import { getPage } from 'next-page-tester';
import { reposMock } from '../../__mocks__/usersMock';

describe('Repositório User', () => {
  it('Should render users repository', async () => {
    const { render } = await getPage({
      route: '/repository/wentzpatricia',
    });

    render();

    await waitFor(() => {
      reposMock.forEach((repos) => {
        expect(screen.getByText(repos.name)).toBeInTheDocument();
        expect(screen.getByText(repos.language)).toBeInTheDocument();
      });
    });
  });
});
