import { useState } from "react";
import { useLoginUserMutation, useSignupUserMutation } from "../redux/features/auth/authApi";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [signupUser, { isLoading, isError, isSuccess }] = useSignupUserMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const signupInfo = {
      email,
      password,
    };

    const result = await signupUser(signupInfo);

    if (result.data.success) {
      localStorage.setItem("email", email);
      navigate("/login");
    }
    else{
        alert("Error occured");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            SignUp
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link className="text-blue-400" to="/sign-up">
            Login Instead
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
