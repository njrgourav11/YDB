import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="flex flex-col items-center">
          <img
            src="/logo.png"
            alt="YDB Logo"
            className="h-10 w-auto mb-2"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
          <h2 className="mt-2 text-center text-3xl font-bold text-gray-900">
            Registration Disabled
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Account registration is currently disabled. Please contact an administrator for access.
          </p>
          <div className="mt-4 text-center">
            <Link to="/login" className="font-medium text-purple-600 hover:text-purple-500">
              ← Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;