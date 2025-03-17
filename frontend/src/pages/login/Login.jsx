import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin.js";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showEye, setShowEye] = useState(false);
  const { loading, login } = useLogin();
  const handleEye = () => {
    setShowEye(!showEye);
  };
  const onSubmitHandle = async (e) => {
    e.preventDefault();
    console.log(username, password);
    await login(username, password);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full w-full p-6 shadow-md  rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login <span className="text-blue-500">ChatApp</span>
        </h1>
        <form onSubmit={onSubmitHandle}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            {" "}
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <div className="w-full input input-bordered h-10">
              {" "}
              <input
                type={showEye ? "text" : "password"}
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="cursor-pointer" onClick={handleEye}>
                {showEye ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?{" "}
          </Link>
          <div>
            <button
              className="btn btn-block btn-neutral btn-md rounded-md mt-2"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// Starter Code for this page
// import { FaEye } from "react-icons/fa6";
// import { FaEyeSlash } from "react-icons/fa6";
// import { useState } from "react";
// const Login = () => {
//   const [showEye, setShowEye] = useState(false);
//   const handleEye = () => {
//     setShowEye(!showEye);
//   };
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="h-full w-full p-6 shadow-md  rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 ">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Login <span className="text-blue-500">ChatApp</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Username"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             {" "}
//             <label className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <div className="w-full input input-bordered h-10">
//               {" "}
//               <input
//                 type={showEye ? "text" : "password"}
//                 placeholder="Enter Password"
//               />
//               <button className="cursor-pointer" onClick={handleEye}>
//                 {showEye ? <FaEyeSlash /> : <FaEye />}
//               </button>
//             </div>
//           </div>
//           <a
//             href="#"
//             className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
//           >
//             {"Don't"} have an account?{" "}
//           </a>
//           <div>
//             <button className="btn btn-block btn-md rounded-md mt-2">
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
