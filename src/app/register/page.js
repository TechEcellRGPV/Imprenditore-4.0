"use client";
import { useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { set } from "mongoose";
import { toast } from "sonner";

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
      <div className="min-h-screen pt:[6vmax] sm:pt-[2vmax] bg-radial-[at_110%_45%] from-[#20c53e] via-[#0e4319] to-[#02300b] flex flex-col justify-center items-center">
        <div className="w-full max-w-xl p-8 py-27 rounded-lg">
          <div className="text-center m-8">
            <h1 className="text-4xl font-bold text-green-300 mb-2">Register Now!</h1>
            <p className="text-gray-200 text-sm">to be part of the event.</p>
            <p className="text-gray-100 mt-3 text-lg">Fill the information carefully.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-4">Personal Information</h2>

              {/** Name */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 mb-1">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 rounded bg-white text-gray-800"
                  required
                />
              </div>

              {/** Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 mb-1">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded bg-white text-gray-800"
                  required
                />
              </div>

              {/** Mobile */}
              <div className="mb-4">
                <label htmlFor="mobileNo" className="block text-gray-300 mb-1">
                  Mobile Number <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  id="mobileNo"
                  name="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  className="w-full px-3 py-2 rounded bg-white text-gray-800"
                  required
                />
              </div>

              {/** College */}
              <div className="mb-4">
                <label htmlFor="collegeName" className="block text-gray-300 mb-1">
                  College Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="collegeName"
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={handleChange}
                  placeholder="Enter college name"
                  className="w-full px-3 py-2 rounded bg-white text-gray-800"
                  required
                />
              </div>

              {/** Enrollment */}
              <div className="mb-4">
                <label htmlFor="enrollment" className="block text-gray-300 mb-1">
                  Enrollment No. <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="enrollment"
                  name="enrollment"
                  value={formData.enrollment}
                  onChange={handleChange}
                  placeholder="Enter your enrollment no."
                  className="w-full px-3 py-2 rounded bg-white text-gray-800"
                  required
                />
              </div>

              {/** Branch */}
              <div className="mb-4">
                <label htmlFor="branch" className="block text-gray-300 mb-1">
                  Branch <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="branch"
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  placeholder="Enter branch"
                  className="w-full px-3 py-2 rounded bg-white text-gray-800"
                  required
                />
              </div>

              {/** Year */}
              <div className="mb-4">
                <label htmlFor="year" className="block text-gray-300 mb-1">
                  Year <span className="text-red-400">*</span>
                </label>
                <select
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded bg-white text-gray-800"
                  required
                >
                  <option value="" disabled>
                    Select your year
                  </option>
                  <option>1st year</option>
                  <option>2nd year</option>
                  <option>3rd year</option>
                  <option>4th year</option>
                </select>
              </div>

              <div className="text-center">
                <button type="submit" className="bg-green-600 cursor-pointer text-white py-2 px-6 rounded">
                  {loader ? (
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white inline-block"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 1a11 11 0 1 0 11 11A11.012 11.012 0 0 0 12 1zm0 20a9 9 0 1 1 9-9A9.01 9.01 0 0 1 12 21z"
                      />
                    </svg>
                  ) : (
                  "Submit"
                  )}
                 
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RegistrationForm;
