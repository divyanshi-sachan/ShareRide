import React from 'react';
import { SignIn } from '@clerk/clerk-react';
const SignInPage = () => {
  return (
      <SignIn 
        path="/sign-in" 
        routing="/home" 
        signUpUrl="/home" 
      />
  );
};
export default SignInPage;


