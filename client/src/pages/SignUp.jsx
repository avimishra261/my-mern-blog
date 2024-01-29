import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import {Link} from 'react-router-dom';

function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex flex-col md:flex-row md:items-center max-w-3xl p-3 mx-auto'>
        {/* left side */}
        <div className="flex-1">
          <Link to={'/'} className= 'font-bold dark:text-white text-4xl'>
              MyBlog
          </Link>
          <p className='text-sm mt-5 '>
          Welcome to the community . Sign up to get started!!
          </p>
        </div>
        {/* right side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput type="text" placeholder="example@email.com" id="email" />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput type="text" placeholder="Password" id="password" />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
              Sign Up
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/sing-in' className='text-blue-500' >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
