import React, { useState } from "react";

interface ViewProfileProps {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
}

const ViewProfile: React.FC<ViewProfileProps> = ({
  fullName,
  email,
  phoneNumber,
  address,
}) => {
  const [fullNameState, setFullName] = useState(fullName);
  const [emailState, setEmail] = useState(email);
  const [phoneNumberState, setPhoneNumber] = useState(phoneNumber);
  const [addressState, setAddress] = useState(address);

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 mt-10 ">
      <div className="bg-white overflow-hidden shadow rounded-lg border lg:flex lg:items-center">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            User Profile
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            This is some information about the user.
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  value={fullNameState}
                  onChange={(e) => setFullName(e.target.value)}
                  className="border border-gray-300 rounded-md px-2 py-1"
                />
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <input
                  type="email"
                  value={emailState}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 rounded-md px-2 py-1"
                />
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Phone number
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <input
                  type="tel"
                  value={phoneNumberState}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="border border-gray-300 rounded-md px-2 py-1"
                />
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Address</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <textarea
                  value={addressState}
                  onChange={(e) => setAddress(e.target.value)}
                  rows={2}
                  className="border border-gray-300 rounded-md px-2 py-1 w-full"
                />
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Save
              </button>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
