"use client";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { setCookie } from "cookies-next";
import axios from "axios";

const LoginForm = () => {

  const payload = {
    email: "jo.hn.msme1@gmail.com",
    password: "000A-b!!!",
    product: "purse",
  };


  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/login",payload);
      const result = response.data;
      console.log("<<<<<<<<<<<<<<<<result>>>>>>>>>>>>>>>>");
      console.log(result);
      // console.log("<<<<<result?.data?.statusCode>>>>>");
      // console.log(result?.data?.statusCode);
      // settkn(result.data.token)

      if (result?.data?.statusCode == "00") {
        setCookie("_otstat", result.data.otp_enabled, {
          maxAge: 60 * 60 * 12,
          domain: "localhost",
        });

        const _data = result.data.data;

        // Encrypt the access token before storing it in local storage
        const accessToken = _data?.accessToken;
        const userData = _data?.user;
        const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;

        localStorage.getItem("_prd");
        setTimeout(() => {
          setCookie("_us", "22ewksdfoksdkodsffs2332e232", {
            maxAge: 60 * 60 * 12,
            domain: "localhost",
          });
          setCookie("_user_", JSON.stringify(userData), {
            maxAge: 60 * 60 * 12,
            domain: "localhost",
          });
          setCookie("_tkn_", accessToken, {
            maxAge: 60 * 60 * 12,
            domain: "localhost",
          });

          // Store the encrypted token in local storage
          // localStorage.setItem("encryptedAccessToken", encryptedToken);
          localStorage.setItem("userData", JSON.stringify(userData));

        
          window.location.href = "/dashboard";
        }, 1000);
      } else {
        console.log(resp.message);
      }
    } catch (error) {
      console.log(`${error.message} <br/> Please again later!`);
    }
    // e.preventDefault();

    window.location.href = "/dashboard";
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

    //  useEffect(() =>{
    //    handleSubmit();
    //  }, [])

     console.log(payload);
     
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#FFD900]">
          Welcome To Tulu Purse
        </h2>
        <p className="opacity-70 py-3 leading-36">
          Want to get started? <br />
          Input your username and password to start making seamless financial
          payments using our Tulu Purse platform
        </p>
        <form className="pt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              // value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6 relative">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              // value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 px-3 top-6 text-black flex items-center text-sm leading-5"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-[#FFD900] hover:bg-yellow-500 text-black font-500 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
