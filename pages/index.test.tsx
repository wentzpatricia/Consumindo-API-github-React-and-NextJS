import { screen, waitFor } from '@testing-library/react';
import { getPage } from 'next-page-tester';
import { usersDefaultMock } from '../__mocks__/usersMock';

describe('Home page', () => {
  it('Should render homepage', async () => {
    const { render } = await getPage({
      route: '/',
    });

    render();

    await waitFor(() => {
      usersDefaultMock.forEach((user) => {
        expect(screen.getByText(user.login)).toBeInTheDocument();
        expect(screen.getByRole('img', { name: user.login })).toHaveAttribute(
          'src',
          user.avatar_url
        );
      });
    });
  });
});
