import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavLink } from '@mantine/core';

export function Demo() {
  const router = useRouter();
  return (
    <>
      <a
          key='hh'
          href='/'
          onClick={(event) => event.preventDefault()}
        >
          jj
        </a>
        <a
          key='as'
          href='/about'
        >
          ss
        </a>
        
    </>
  );
}