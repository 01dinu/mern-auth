import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-4xl w-full flex flex-col md:flex-row bg-white relative">
        {/* Left side: Form content */}
        <div className="w-full md:w-1/2 px-8 py-12 relative z-10">
          {children}
        </div>
        
        {/* Right side: Decorative image with subtle curved left border */}
        <div className="hidden md:block w-1/2 absolute top-0 right-0 h-full">
          <div 
            className="w-full h-full rounded-1-lg overflow-hidden"
            style={{
              clipPath: 'inset(0 0 0 0 round 20px 0 0 20px)'
            }}
          >
            <img
              src="/images/leaf.jpg"
              alt="Monstera leaves"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 bg-black/5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;