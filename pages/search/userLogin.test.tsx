import { waitFor, screen } from '@testing-library/react';
import { getPage } from 'next-page-tester';
import { searchUserMock } from '../../__mocks__/usersMock';

describe('Search users', () => {
  it('Should render searched users', async () => {
    const { render } = await getPage({
      route: '/search/wentzpatricia',
    });

    render();

    await waitFor(() => {
      searchUserMock.items.forEach((element) => {
        expect(
          screen.getByRole('img', { name: element.login })
        ).toHaveAttribute('src', element.avatar_url);
        expect(screen.getByText(element.login)).toBeInTheDocument();
      });
    });
  });
});
