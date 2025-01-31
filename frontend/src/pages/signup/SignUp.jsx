import GenderCheckBox from "./GenderCheckBox";
const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full w-full p-6 shadow-md  rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 ">
        <h1 className="text-3xl font-semibold text-gray-300 text-center">
          Sign Up <span className="text-blue-500">ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label py-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Fullname"
              className="input w-full input-bordered h-10"
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
            />
          </div>
        </form>
        <GenderCheckBox />
        <a
          className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block"
          href="#"
        >
          Already got an account?
        </a>
        <div>
          <button className="btn btn-neutral btn-block btn-md mt-2">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

// import GenderCheckBox from "./GenderCheckBox";
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
