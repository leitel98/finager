'use client';

import Button from '../atoms/Button';
import { signOut } from 'next-auth/react';

const SignOutButton = () => {
  return (
    <Button
      size='sm'
      color='rose'
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: `${window.location.origin}?type=login`,
        })
      }
    >
      Sign out
    </Button>
  );
};

export default SignOutButton;
