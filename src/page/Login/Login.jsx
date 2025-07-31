import { useState } from "react";
import { Link } from "react-router";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import backgroundPattern from "../../assets/background/login-pattern.png";

export default function Login() {
  const [showPassword, setShowPassword] = useState(true);
  const [formData, setFormData] = useState({});

  const handleOnChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div
      className={`flex justify-center items-center min-h-screen`}
      style={{ backgroundImage: `url(${backgroundPattern})` }}
    >
      <div className="bg-white m-5 p-8 space-y-5 border border-[#ddd] rounded-md shadow-md w-[400px] max-w-[400px]">
        <h2 className="text-center text-3xl font-semibold pb-3">Login</h2>

        {/* social login buttons  */}
        <div>
          <button className="flex justify-center items-center gap-2 shadow-sm border border-[#ddd] py-3 w-full rounded-lg cursor-pointer">
            <FcGoogle />
            <span>Google</span>
          </button>
        </div>

        {/* devider  */}
        <div className="flex items-center justify-center gap-5">
          <hr className="bg-[#343A40] max-w-[20%] w-[20%]" />
          <p>Or</p>
          <hr className="bg-[#343A40] max-w-[20%] w-[20%]" />
        </div>

        {/* register form  */}
        <form>
          {/* email field */}
          <div className="relative float-label-input pb-4">
            <input
              type="email"
              name="email"
              placeholder="Enter Your Emnail"
              value={formData?.email}
              className="shadow-sm block w-full bg-transparent focus:outline-none focus:shadow-outline border border-[#ddd] rounded-md py-3 px-4 appearance-none leading-normal"
              onChange={(e) => handleOnChange("email", e.target.value)}
            />
          </div>

          {/* password field  */}
          <div className="relative float-label-input pb-4">
            <input
              type={showPassword ? "password" : "text"}
              name="password"
              placeholder="Enter Your Password"
              value={formData?.password}
              className="shadow-sm block w-full bg-transparent focus:outline-none focus:shadow-outline border border-[#ddd] rounded-md py-3 px-4 appearance-none leading-normal"
            />

            <p
              className="cursor-pointer absolute right-4 top-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              <small>
                {showPassword ? (
                  <FaRegEye className="text-2xl" />
                ) : (
                  <FaRegEyeSlash className="text-2xl" />
                )}
              </small>
            </p>
          </div>

          {/* register button  */}
          <button
            type="submit"
            className="bg-[#FFBA00] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
          >
            Login
          </button>

          {/* redirect login page  */}
          <p className="text-gray-400 text-center mt-3">
            <small>
              New to Tools-Bazaar?{" "}
              <Link
                className="underline font-semibold text-[#ffc20aa2] hover:text-[#ffc10a]"
                to={"/register"}
              >
                Register
              </Link>
            </small>
          </p>
        </form>
      </div>
    </div>
  );
}
