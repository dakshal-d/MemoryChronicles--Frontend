import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/config";

export default function SignupPage() {
  const nav = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const handleSignup = async () => {
    let data = await axios.post(BASE_URL + "/user/register", {
      name, email, password
    })
    let { message, status } = data.data
    if (status === 1) {
      alert(message)
      nav("/login")
    } else {
      alert(message)
    }
  }


  return <section className="bg-white h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">

    <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        aria-hidden="true"
      >

        <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <div className="max-w-sm py-12">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image" />
      </div>

      <div className="md:w-1/3 max-w-sm py-8">
        <div className="text-center ">
          <label className="mr-1 font-semibold text-white">Sign-Up / Register</label>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">

        </div>
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded " value={name} type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />

        <input className="mt-4 text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" value={email} type="text" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" value={password} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span className="text-white">Remember Me</span>
          </label>
          <a className="text-blue-300 hover:text-blue-100 hover:underline-offset-4" href="/">Forgot Password?</a>
        </div>
        <div className="text-center md:text-left">
          <button className="mt-4 bg-purple-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit" onClick={handleSignup}>Sign-Up</button>
        </div>
      </div>

    </div>


  </section>
}