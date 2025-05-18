import Footer from "../../components/footer";
import Header from "../../components/header";

function RegistrationForm() {
  return (
    <>
    <Header/>
    <div className="min-h-screen pt:[6vmax] sm:pt-[2vmax] bg-radial-[at_110%_45%] from-[#20c53e] via-[#0e4319] to-[#02300b] flex flex-col  justify-center items-center">
      <div className="w-full max-w-xl p-8 py-27 rounded-lg">
        <div className="text-center m-8">
          <h1 className="text-4xl font-bold text-green-300 mb-2">
            Register Now!
          </h1>
          <p className="text-gray-200 text-sm">to be part of the event.</p>
          <p className="text-gray-100 mt-3 text-lg">Fill the information carefully.</p>
        </div>

        <form className="">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">
              Personal Information
            </h2>

            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 mb-1">
                Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full px-3 py-2 rounded bg-white text-gray-800"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 mb-1">
                Email Address <span className="text-red-400">*</span>
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded bg-white text-gray-800"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="mobile" className="block text-gray-300 mb-1">
                Mobile Number <span className="text-red-400">*</span>
              </label>

              <input
                type="number"
                id="mobile"
                name="mobile"
                placeholder="Enter mobile number"
                className="w-full px-3 py-2 rounded bg-white text-gray-800"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="college" className="block text-gray-300 mb-1">
                College Name <span className="text-red-400">*</span>
              </label>

              <input
                type="text"
                id="college"
                name="college"
                placeholder="Enter college name"
                className="w-full px-3 py-2 rounded bg-white text-gray-800"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="enrollment" className="block text-gray-300 mb-1">
                Enrollment No. <span className="text-red-400">*</span>
              </label>

              <input
                type="text"
                id="enrollment"
                name="enrolement"
                placeholder="Enter your enrollment no."
                className="w-full px-3 py-2 rounded bg-white text-gray-800"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="branch" className="block text-gray-300 mb-1">
                Branch <span className="text-red-400">*</span>
              </label>

              <input
                type="text"
                id="branch"
                name="branch"
                placeholder="Enter branch"
                className="w-full px-3 py-2 rounded bg-white text-gray-800"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="year" className="block text-gray-300 mb-1">
                Year <span className="text-red-400">*</span>
              </label>

              <select
                id="year"
                name="year"
                className="w-full px-3 py-2 rounded bg-white text-gray-800"
                defaultValue=""
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
              <button className="bg-green-600 text-white py-2 px-6 rounded">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default RegistrationForm;
