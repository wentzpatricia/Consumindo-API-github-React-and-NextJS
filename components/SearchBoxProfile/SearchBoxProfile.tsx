import { SearchBoxProfileContainer } from './SearchBoxProfileStyle';
import { HiOutlineSearchCircle } from 'react-icons/hi';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/router';

export const SearchBoxProfile = () => {
  const [input, setInput] = useState<string>('');
  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmitSearch = (event: FormEvent) => {
    event.preventDefault();
    if (input === '') return;

    router.push(`/search/${input}`);
    setInput('');
  };
  return (
    <SearchBoxProfileContainer onSubmit={(event) => handleSubmitSearch(event)}>
      <input
        type="text"
        placeholder="Search github profile by the name"
        value={input}
        name="searchUser"
        onChange={handleChange}
      />

      <HiOutlineSearchCircle
        role="svg"
        onClick={(event) => {
          handleSubmitSearch(event);
        }}
      />
    </SearchBoxProfileContainer>
  );
};
