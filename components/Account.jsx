import React, { useState } from "react";

function Account() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic here to update the user's account information
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Account Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default Account;
