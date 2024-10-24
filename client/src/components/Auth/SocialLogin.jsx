// client/src/components/Auth/SocialLogin.jsx (complete)
import React from 'react';
import { initiateGoogleLogin } from '../../services/authService';

const SocialLogin = () => {
  const handleGoogleLogin = async () => {
    try {
      initiateGoogleLogin();
    } catch (error) {
      console.error('Google login error:', error);
    }
  };
  const handleAppleLogin = async () => {
    try {
      // Implement Apple OAuth logic here
      console.log('Apple login clicked');
    } catch (error) {
      console.error('Apple login error:', error);
    }
  };

  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">or</span>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3">
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm text-gray-700 bg-white hover:bg-gray-50"
        >
          <img src="/images/googl.png" className="h-5 w-5 mr-2" alt="Google" />
          Sign in with Google
        </button>
        <button
          onClick={handleAppleLogin}
          className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm text-gray-700 bg-white hover:bg-gray-50"
        >
          <img src="/images/appl.png" className="h-5 w-5 mr-2" alt="Apple" />
          Sign in with Apple
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;