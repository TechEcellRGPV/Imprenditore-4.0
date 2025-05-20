"use client";
import { useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { set } from "mongoose";
import { toast } from "sonner";
import { User, Mail, Phone, BookUser } from "lucide-react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNo: "",
    collegeName: "",
    enrollment: "",
    branch: "",
    year: "",
  });

  const [loader, setLoader] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success("Registration successful!");
      } else {
        toast.error("Registration failed: " + result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong!");
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8 pt-[10vmax] pb-[5vmax] bg-radial-[at_140%_50%] from-[#2fa444] via-[#0e4319] to-[#02300b] flex flex-col justify-center items-center backdrop-blur-3xl">
        <div className="w-[95%] sm:w-full max-w-xl my-8 sm:my-12 p-6 sm:p-10 rounded-3xl bg-white/10 border border-green-500/40 shadow-lg backdrop-blur-lg">
          <div className="text-center mb-7">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#7DEE92] mb-7 drop-shadow-md">
              Register Now!
            </h1>
            <p className="text-gray-100 text-base sm:text-lg px-0">
            </p>
            <p className="text-gray-50 mt-1 text-lg sm:text-xl font-medium">
              Fill the information carefully
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-8 border-b border-green-400 pb-2">
                Personal Information
              </h2>

              {/* Name */}
              <div className="mb-8">
                <label
                  htmlFor="name"
                  className="text-[#7DEE92] text-md sm:text-[22px] font-semibold mb-2 flex items-center gap-2"
                >
                  <User className="w-5 h-5 sm:w-6 sm:h-6" /> Name{" "}
                  <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-md bg-transparent text-gray-100 placeholder-gray-200 border border-green-500 focus:border-white focus:ring-white focus:outline-none focus:ring-2 transition duration-200 backdrop-blur-2xl"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-8">
                <label
                  htmlFor="email"
                  className="text-[#7DEE92] text-md sm:text-[22px] font-semibold mb-2 flex items-center gap-2"
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" /> Email Address{" "}
                  <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-md bg-transparent text-gray-100 placeholder-gray-200 border border-green-500 focus:border-white focus:ring-white focus:outline-none focus:ring-2 transition duration-200 backdrop-blur-2xl"
                  required
                />
              </div>

              {/* Mobile */}
              <div className="mb-8">
                <label
                  htmlFor="mobileNo"
                  className="text-[#7DEE92] text-md sm:text-[22px] font-semibold mb-2 flex items-center gap-2"
                >
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" /> Mobile Number{" "}
                  <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  id="mobileNo"
                  name="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-md bg-transparent text-gray-100 placeholder-gray-200 border border-green-500 focus:border-white focus:ring-white focus:outline-none focus:ring-2 transition duration-200 backdrop-blur-2xl"
                  required
                />
              </div>

              {/* Enrollment */}
              <div className="mb-10 sm:mb-16">
                <label
                  htmlFor="enrollment"
                  className="text-[#7DEE92] text-md sm:text-[22px] font-semibold mb-2 flex items-center gap-2"
                >
                  <BookUser className="w-5 h-5 sm:w-6 sm:h-6" /> Enrollment No.{" "}
                  <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="enrollment"
                  name="enrollment"
                  value={formData.enrollment}
                  onChange={handleChange}
                  placeholder="Enter your enrollment no."
                  className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-md bg-transparent text-gray-100 placeholder-gray-200 border border-green-500 focus:border-white focus:ring-white focus:outline-none focus:ring-2 transition duration-200 backdrop-blur-2xl"
                  required
                />
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={loader}
                className="bg-[#29754E] hover:bg-green-700 transition duration-300 ease-in-out cursor-pointer text-white py-2 px-6 sm:py-3 sm:px-7 rounded-md text-base sm:text-lg font-bold shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-[#0e4319]"
              >
                {loader ? (
                  <svg
                    className="animate-spin h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 text-white inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RegistrationForm;
