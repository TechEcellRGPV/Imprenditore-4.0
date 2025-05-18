"use client";

import { KeyRound } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

function AdminLogin() {
  const [passkey, setPasskey] = useState("");
  const [loader, setLoader] = useState(false);

  const handleAccess = (e) =>{
    e.preventDefault();
    setLoader(true);
    if(passkey==process.env.NEXT_PUBLIC_ADMIN_PASSKEY){
      sessionStorage.setItem("adminAccess", true);
      window.location.href = "/admin/dashboard";
    }
    else{
      toast.error("Invalid Passkey");
      setPasskey("");
      setLoader(false);
    }
  }

  return (
    <div className="bg-[#121212] min-h-screen flex items-center justify-center px-4 py-8 text-white">
      <div className="w-full sm:max-w-md">
        <div className="bg-[#004B0E] rounded-xl shadow-md p-8">
          <h1 className="text-2xl font-semibold text-[#fbfffd] text-center mb-6">
            Admin Access
          </h1>

          <form className="space-y-6">
            <div>
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="passkey"
              >
                Enter Your Passkey
              </label>
              <div className="relative">
                <KeyRound
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#82bca1]"
                  size={20}
                />
                <input
                  type="text"
                  id="passkey"
                  value={passkey}
                  onChange={(e) => setPasskey(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-600 bg-[#2c2c2c] text-white placeholder-gray-400 font-medium focus:outline-none focus:ring-2 focus:ring-[#a7f3d0]"
                  placeholder="Your Passkey"
                />
              </div>
            </div>
            <div>
              <button onClick={handleAccess}
                disabled={!passkey}
                type="submit"
                className="w-full bg-[#f6f6f6] text-[#121212] font-semibold rounded-md py-3 hover:bg-[#86efac] focus:outline-none focus:ring-2 focus:ring-[#a7f3d0] focus:ring-offset-2 transition-colors duration-200"
              >{loader ? (
                <svg
                  className="animate-spin h-5 w-5 mx-auto text-[#121212]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    strokeWidth="4"
                    stroke="#121212"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="#82bca1"
                    d="M4 12a8 8 0 018-8v2a6 6 0 100 12v2a8 8 0 01-8-8z"
                  />
                </svg>
              ) : (
                "Log In"
              )}
              
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
