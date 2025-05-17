"use client";
import { useState } from "react";
import { ListFilter } from "lucide-react";

function Dashboard() {
  const [searchData, setSearchData] = useState("");
  const [filter, setFilter] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    completed: true,
    pending: true,
    failed: true,
  });

  const dummyArray = [
    {
      name: "Grace Hopper",
      email: "grace.hopper@techuni.com",
      mobileNo: "9988776655",
      collegeName: "Pioneering Institute of Technology",
      year: "Final",
      branch: "Computer Engineering",
      paymentStatus: "completed",
    },
    {
      name: "Alan Turing",
      email: "alan.turing@codingacademy.org",
      mobileNo: "8877665544",
      collegeName: "Bletchley Park University",
      year: "Third",
      branch: "Cryptography",
      paymentStatus: "completed",
    },
    {
      name: "Ada Lovelace",
      email: "ada.lovelace@analytics.net",
      mobileNo: "7766554433",
      collegeName: "Algorithm School of Science",
      year: "Second",
      branch: "Mathematical Programming",
      paymentStatus: "pending",
    },
    {
      name: "Charles Babbage",
      email: "charles.babbage@invention.edu",
      mobileNo: "6655443322",
      collegeName: "Difference Engine College",
      year: "First",
      branch: "Mechanical Computation",
      paymentStatus: "completed",
    },
    {
      name: "Dorothy Vaughan",
      email: "dorothy.vaughan@nasa.gov.us",
      mobileNo: "5544332211",
      collegeName: "Langley Research Center",
      year: "Fourth",
      branch: "Mathematics and Computing",
      paymentStatus: "completed",
    },
    {
      name: "Katherine Johnson",
      email: "katherine.johnson@space.center",
      mobileNo: "4433221100",
      collegeName: "West Virginia State College",
      year: "Third",
      branch: "Mathematics",
      paymentStatus: "pending",
    },
    {
      name: "Mary Jackson",
      email: "mary.jackson@engineering.institute",
      mobileNo: "3322110099",
      collegeName: "Hampton Institute",
      year: "Second",
      branch: "Aeronautical Engineering",
      paymentStatus: "failed",
    },
    {
      name: "Tim Berners-Lee",
      email: "tim.lee@www.org",
      mobileNo: "2211009988",
      collegeName: "World Wide Web Consortium",
      year: "Final",
      branch: "Information Technology",
      paymentStatus: "completed",
    },
    {
      name: "Linus Torvalds",
      email: "linus.torvalds@linux.os",
      mobileNo: "1100998877",
      collegeName: "University of Helsinki",
      year: "Third",
      branch: "Software Development",
      paymentStatus: "completed",
    },
    {
      name: "Margaret Hamilton",
      email: "margaret.hamilton@apollo.nasa",
      mobileNo: "0099887766",
      collegeName: "MIT",
      year: "Second",
      branch: "Software Engineering",
      paymentStatus: "pending",
    },
    {
      name: "Isabella Garcia",
      email: "isabella.garcia@artschool.com",
      mobileNo: "9123456780",
      collegeName: "Academy of Fine Arts",
      year: "First",
      branch: "Painting",
      paymentStatus: "pending",
    },
    {
      name: "Ricardo Silva",
      email: "ricardo.silva@engtech.edu",
      mobileNo: "8234567891",
      collegeName: "Technological University of Lisbon",
      year: "Fourth",
      branch: "Electrical Engineering",
      paymentStatus: "completed",
    },
    {
      name: "Sofia Dubois",
      email: "sofia.dubois@literature.org",
      mobileNo: "7345678902",
      collegeName: "Sorbonne University",
      year: "Second",
      branch: "Comparative Literature",
      paymentStatus: "failed",
    },
    {
      name: "Kenji Tanaka",
      email: "kenji.tanaka@osaka-u.ac.jp",
      mobileNo: "6456789013",
      collegeName: "Osaka University",
      year: "Third",
      branch: "Physics",
      paymentStatus: "completed",
    },
    {
      name: "Aisha Khan",
      email: "aisha.khan@islamabaduni.pk",
      mobileNo: "5567890124",
      collegeName: "Quaid-i-Azam University",
      year: "Final",
      branch: "Economics",
      paymentStatus: "pending",
    },
    {
      name: "Pavel Volkov",
      email: "pavel.volkov@moscowstate.ru",
      mobileNo: "4678901235",
      collegeName: "Moscow State University",
      year: "Second",
      branch: "Mathematics",
      paymentStatus: "completed",
    },
    {
      name: "Nadia Benali",
      email: "nadia.benali@casablanca.ma",
      mobileNo: "3789012346",
      collegeName: "Hassan II University of Casablanca",
      year: "First",
      branch: "Computer Science",
      paymentStatus: "pending",
    },
    {
      name: "Javier Rodriguez",
      email: "javier.rodriguez@madriduni.es",
      mobileNo: "2890123457",
      collegeName: "Complutense University of Madrid",
      year: "Third",
      branch: "Law",
      paymentStatus: "completed",
    },
    {
      name: "Mei Lin",
      email: "mei.lin@beijinguni.cn",
      mobileNo: "1901234568",
      collegeName: "Peking University",
      year: "Fourth",
      branch: "International Relations",
      paymentStatus: "failed",
    },
    {
      name: "Samuel Dubois",
      email: "samuel.dubois@lyonuni.fr",
      mobileNo: "0123456789",
      collegeName: "University of Lyon",
      year: "Second",
      branch: "History",
      paymentStatus: "completed",
    },
  ];

  const handleFilterChange = (status) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [status]: !prevFilters[status],
    }));
  };

  const filteredData = dummyArray.filter((data) => {
    const matchSearch = Object.values(data)
      .join(" ")
      .toLowerCase()
      .includes(searchData.toLowerCase());

    const matchPayment = selectedFilters[data.paymentStatus];

    return matchSearch && matchPayment;
  });

  return (
    <div className="overflow-x-auto m-4 rounded-lg shadow-xl">
      <div className="mb-4 flex items-center">
        <input
          type="text"
          placeholder="Search"
          value={searchData}
          onChange={(e) => {
            setSearchData(e.target.value);
          }}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none mr-2"
        />
        <div className="relative">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="p-2 rounded-md hover:bg-gray-200 focus:outline-none"
          >
            <ListFilter className="h-5 w-5" />
          </button>
          {isFilterOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              <h2 className="block px-4 py-2 text-sm">Payment Filter</h2>
              <label className="block px-4 py-2 text-sm">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedFilters.completed}
                  onChange={() => handleFilterChange("completed")}
                />
                Completed
              </label>
              <label className="block px-4 py-2 text-sm">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedFilters.pending}
                  onChange={() => handleFilterChange("pending")}
                />
                Pending
              </label>
              <label className="block px-4 py-2 text-sm">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedFilters.failed}
                  onChange={() => handleFilterChange("failed")}
                />
                Failed
              </label>
            </div>
          )}
        </div>
      </div>
      <table className="min-w-full leading-normal min-h-[250px]">
        <thead className="bg-[#004B0E] text-white">
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
              S. No.
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
              Name
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
              Email
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
              Mobile No.
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
              College Name
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
              Year
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
              Branch
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
              Payment Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-[#f9f9f9] text-[#090a0a]">
          {filteredData.map((data, index) => (
            <tr key={index + 1} className="hover:bg-[#e8eae8]">
              <td className="px-5 py-4 whitespace-nowrap text-sm">
                {index + 1}
              </td>
              <td className="px-5 py-4 whitespace-nowrap text-sm">
                <div className="flex items-center">
                  <div className="ml-2">
                    <div className="text-sm font-medium">{data.name}</div>
                  </div>
                </div>
              </td>
              <td className="px-5 py-3 whitespace-nowrap text-sm">
                {data.email}
              </td>
              <td className="px-5 py-3 whitespace-nowrap text-sm">
                {data.mobileNo}
              </td>
              <td className="px-5 py-3 whitespace-nowrap text-sm">
                {data.collegeName}
              </td>
              <td className="px-5 py-3 whitespace-nowrap text-sm">
                {data.year}
              </td>
              <td className="px-5 py-3 whitespace-nowrap text-sm">
                {data.branch}
              </td>
              <td className="px-5 py-3 whitespace-nowrap text-sm">
                {data.paymentStatus}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Dashboard;
