import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../hooks/useSignup.js";
const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };
  const { loading, signup } = useSignup();
  const handleOnsubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
    console.log(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full w-full p-6 shadow-md  rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 ">
        <h1 className="text-3xl font-semibold text-gray-300 text-center">
          Sign Up <span className="text-blue-500">ChatApp</span>
        </h1>
        <form onSubmit={handleOnsubmit}>
          <div>
            <label className="label py-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Fullname"
              className="input w-full input-bordered focus:ring-0 h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label py-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="input w-full input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label py-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input w-full input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label py-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input w-full input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          <GenderCheckBox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />
          <Link
            className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block"
            to="/login"
          >
            Already got an account?
          </Link>
          <div>
            <button
              type="submit"
              className="btn btn-md btn-block btn-neutral  mt-2 "
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="h-full w-full p-6 shadow-md  rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 ">
//         <h1 className="text-3xl font-semibold text-gray-300 text-center">
//           Sign Up <span className="text-blue-500">ChatApp</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label py-2">
//               <span className="text-base label-text">Full Name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Fullname"
//               className="input w-full input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label py-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Username"
//               className="input w-full input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label py-2">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               className="input w-full input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label py-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="input w-full input-bordered h-10"
//             />
//           </div>
//         </form>
//         <GenderCheckBox />
//         <a
//           className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block"
//           href="#"
//         >
//           Already got an account?
//         </a>
//         <div>
//           <button className="btn btn-neutral btn-block btn-md mt-2">
//             Sign Up
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
