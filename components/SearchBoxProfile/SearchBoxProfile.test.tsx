import { render, fireEvent, screen } from '@testing-library/react';
import { SearchBoxProfile } from './SearchBoxProfile';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '/',
      push: jest.fn(),
    };
  },
}));
const useRouterSpy = jest.spyOn(require('next/router'), 'useRouter');

describe('Form Search Profile', () => {
  it('Should change route', () => {
    render(<SearchBoxProfile />);

    const router = { push: jest.fn() };
    useRouterSpy.mockReturnValue(router);

    const input = 'wentzpatricia';

    const searchField = screen.getByPlaceholderText(
      'Search github profile by the name'
    );
    expect(searchField).toBeInTheDocument();

    const searchIcon = screen.getByRole('svg');

    fireEvent.change(searchField, { target: { value: input } });
    fireEvent.click(searchIcon);
    fireEvent.submit(searchField);

    expect(router.push).toHaveBeenCalledWith(`/search/${input}`);
  });
});
