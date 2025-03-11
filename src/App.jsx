import "./App.css";
import { Header, Footer } from "./components";

function App() {
  return (
    <>
      <Header />

      <main>
        {/* <!-- Grid section started --> */}
        <section>
          <div className="gap-2 grid grid-cols-8 grid-rows-[70px_minmax(70px,_1fr)] max-[768px]:mx-auto mt-5 max-[1060px]:w-10/12">
            {/* <!-- grid main box 1 --> */}
            <div className="flex justify-between items-center max-[768px]:col-span-8 bg-[rgb(29,34,38)] rounded-md row-[1_/_span_1] col-[2_/_span_4]">
              <p className="ml-5">
                <span className="font-bold text-white">Analytics & tools</span>
                <br />
                <span className="font-bold text-[12px] text-gray-400">
                  Post impressions past 7 days
                </span>
                <span className="font-bold text-[12px] text-white">197</span>
                <span className="ml-1 font-bold text-[12px] text-green-400">
                  <i className="fa-caret-up fa-solid"></i>19,600%
                </span>
              </p>
              <i className="fa-arrow-right mr-5 text-gray-400 fa-sharp fa-solid"></i>
            </div>
            {/* <!-- grid slider 1 --> */}
            <div className="max-[768px]:col-span-8 bg-[rgb(29,34,38)] rounded-md row-[1_/_span_2] w-[374px] max-[1060px]:w-[300px] max-[768px]:row-[6_/_span_1] max-[768px]:w-full max-[1060px]:h-fit col-[6_/_span_2]">
              <div className="flex justify-between">
                <p className="px-4 py-4">
                  <span className="font-bold text-white">Profile language</span>
                  <br />
                  <span className="font-bold text-[14px] text-gray-400">
                    English
                  </span>
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mt-2 mr-2 text-gray-400 mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                </svg>
              </div>

              <div>
                <hr className="mx-auto border-[#ffffff1f] w-11/12 h-[1px]" />
              </div>

              <div className="flex justify-between">
                <p className="px-4 py-4 font-bold text-white">
                  <span>Public profile & URL</span>
                  <br />
                  <span className="text-[14px] text-gray-400">
                    www.linkedin.com/in/abhay-verma- <br />
                    821699274
                  </span>
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mt-2 mr-2 text-gray-400 mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                </svg>
              </div>
            </div>
            {/* <!-- grid main box 2--> */}
            <div className="max-[768px]:col-span-8 bg-[rgb(29,34,38)] rounded-md row-[2_/_span_2] max-[768px]:row-[2_/_span_1] col-[2_/_span_4]">
              <div>
                <div>
                  <div className="flex">
                    <img
                      src="https://media.licdn.com/dms/image/D4E16AQHcqQkbmOMmLw/profile-displaybackgroundimage-shrink_350_1400/0/1682890899650?e=1701302400&v=beta&t=qKq2Vfud1OXyod9q1lKQeEr-srAKJAwONCxMRRJ8gR4"
                      alt=""
                      className="z-10 static rounded-tl-md rounded-tr-md w-full h-full"
                    />
                    <div className="z-20 flex justify-center items-center bg-[#fff] mt-5 -ml-12 rounded-full w-8 h-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        data-supported-dps="16x16"
                        fill="currentColor"
                        className="w-5 h-5 text-blue-600 mercado-match"
                        width="16"
                        height="16"
                        focusable="false"
                      >
                        <path d="M14.13 1.86a3 3 0 00-4.17 0l-7 7L1 15l6.19-2 6.94-7a3 3 0 000-4.16zm-8.36 9.71l-1.35-1.34L9.64 5 11 6.35z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="w-36 h-36">
                    <img
                      src="https://media.licdn.com/dms/image/D4E03AQEA660EJG0Pzg/profile-displayphoto-shrink_400_400/0/1682890800244?e=1701302400&v=beta&t=Cu1jKCIhM6Pa-kFBN8X_maEGicPPstVpX-FWdzgoTfE"
                      alt=""
                      className="z-20 absolute -mt-24 max-[1060px]:-mt-16 ml-3 border-[rgb(29,34,38)] border-4 rounded-full w-[144px] max-[1060px]:w-24 h-[144px] max-[1060px]:h-24"
                    />
                  </div>
                </div>
                <div className="flex justify-between -mt-24">
                  <div className="ml-5">
                    <h1 className="font-bold text-white max-[990px]:text-[18px] text-2xl">
                      Abhay Verma
                    </h1>
                    <p className="font-medium text-gray-300 max-[990px]:text-[13px]">
                      Attended Marwari College
                    </p>
                    <p className="text-gray-400 max-[990px]:text-[13px]">
                      Talks about #webdevelpoment
                    </p>
                    <p className="text-gray-400 max-[990px]:text-[13px]">
                      Ranchi, Jharkhand, India.
                      <span className="font-medium text-blue-600 max-[990px]:text-[13px]">
                        Contact info
                      </span>
                    </p>
                    <p className="font-medium text-blue-600 max-[990px]:text-[13px]">
                      13 followers .12 connction
                    </p>
                    <div className="mt-2">
                      <button className="bg-blue-500 rounded-r-full rounded-l-full w-20 h-8">
                        Open to
                      </button>

                      <button className="max-[951px]:mt-2 ml-1 border border-blue-500 rounded-r-full rounded-l-full w-40 h-8 text-blue-500">
                        Add profile section
                      </button>

                      <button className="max-[1060px]:mt-2 ml-1 border border-white rounded-r-full rounded-l-full w-16 h-8 text-white">
                        More
                      </button>
                    </div>
                  </div>
                  <div className="max-[375px]:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      className="mb-2 ml-32 max-[1060px]:ml-24 text-gray-400 mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                    </svg>
                    <p className="mr-3 font-bold text-white max-[990px]:text-[13px]">
                      Marwari college ranchi
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-around mt-9 mb-5">
                <div className="flex justify-between max-[1060px]:mx-auto p-3 border border-gray-500 rounded-md w-[350px] max-[1325px]:w-[250px] h-[88px] max-[1325px]:h-full">
                  <p className="font-bold text-[14px] text-white">
                    Show recruiters you’re open to work — you <br />{" "}
                    <span className="text-gray-400">
                      control who sees this.
                    </span>{" "}
                    <br />
                    <span className="text-blue-500">Get started</span>
                  </p>
                  <p>
                    <i className="text-white text-xl fa-sharp fa-solid fa-xmark"></i>
                  </p>
                </div>
                <div className="flex justify-between max-[1060px]:mx-auto max-[1060px]:mt-5 max-[600px]:mt-5 max-[768px]:mt-0 max-[1060px]:mb-5 max-[768px]:mb-0 p-3 border border-gray-500 rounded-md w-[350px] max-[1325px]:w-[250px] h-[88px] max-[1325px]:h-full">
                  <p className="font-bold text-[14px] text-white">
                    Share that you’re hiring and qualified <br />{" "}
                    <span className="text-gray-400">Candidates</span> <br />
                    <span className="text-blue-500">Get started</span>
                  </p>
                  <p>
                    <i className="text-white text-xl fa-sharp fa-solid fa-xmark"></i>
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- grid slider 2 --> */}
            <div className="max-[768px]:col-span-8 bg-[rgb(29,34,38)] max-[1060px]:mt-1 rounded-md row-[3_/_span_2] w-[374px] max-[1060px]:w-[300px] max-[768px]:row-[8_/_span_1] max-[768px]:w-full col-[6_/_span_2]">
              {/* <!-- slider-2-box-1 --> */}
              <p className="px-8 py-5 font-bold text-white">
                People also viewed
              </p>
              <div className="flex px-8 py-4 text-white">
                <div className="rounded-full w-[60px] h-[60px]">
                  <img
                    src="https://media.licdn.com/dms/image/D5603AQFwgft4Exasaw/profile-displayphoto-shrink_100_100/0/1674972964663?e=1701302400&v=beta&t=MU6-Jb1T83wkfCrYxcANDPv7U-_rZthxsULcR975PuM"
                    alt=""
                    className="rounded-full w-[60px] h-[60px]"
                  />
                </div>
                <div className="ml-5">
                  <p>
                    <span className="font-bold">Jobin Anthony</span>
                    <span className="text-gray-400">· 2nd</span>
                    <p className="font-medium text-[14px] text-gray-400">
                      {" "}
                      zoho school of business (student)
                    </p>
                  </p>
                </div>
              </div>
              <div className="flex justify-center font-bold text-white">
                <button className="border-2 rounded-r-full rounded-l-full w-40 h-10">
                  <i className="mr-2 fa-solid fa-user-plus"></i>Connect
                </button>
              </div>
              <hr className="mx-auto mt-6 border-[#ffffff1f] w-11/12 h-[1px]" />
              {/* <!-- grid-slider-2-box-2 --> */}
              <div className="flex px-8 py-4 text-white">
                <div className="rounded-full w-[60px] h-[60px]">
                  <img
                    src="https://media.licdn.com/dms/image/D5603AQHaWowm75pfsA/profile-displayphoto-shrink_100_100/0/1683257704964?e=1701302400&v=beta&t=V9wOTQfMVoUw0baufYU0LVDknjK1bEKHivirWOlyBUA"
                    alt=""
                    className="rounded-full w-[60px] h-[60px]"
                  />
                </div>
                <div className="ml-5">
                  <p>
                    <span className="font-bold">Jose Sweety</span>
                    <span className="text-gray-400">· 3rd</span>
                    <p className="font-medium text-[14px] text-gray-400">
                      Accounts Executive
                    </p>
                  </p>
                </div>
              </div>
              <div className="flex justify-center font-bold text-white">
                <button className="border-2 rounded-r-full rounded-l-full w-40 h-10">
                  <i className="mr-2 fa-solid fa-plus"></i>Connect
                </button>
              </div>
              <hr className="mx-auto mt-6 border-[#ffffff1f] w-11/12 h-[1px]" />
              {/* <!-- grid-slider-2-box-3 --> */}
              <div className="flex px-8 py-4 text-white">
                <div className="rounded-full w-[60px] h-[60px]">
                  <img
                    src="https://media.licdn.com/dms/image/D5603AQGiTVLAQ6mwkQ/profile-displayphoto-shrink_100_100/0/1677750634864?e=1701302400&v=beta&t=V87xH6cbxot305UJZiSas4cfw8stG-CebeZQJDibmaY"
                    alt=""
                    className="rounded-full w-[60px] h-[60px]"
                  />
                </div>
                <div className="ml-5">
                  <p>
                    <span className="font-bold">A S Bharathi Nesar</span>
                    <span className="text-gray-400">· 2nd</span>
                    <p className="w-40 font-medium text-[14px] text-gray-400">
                      Artificial intelligence Enthusiastic's{" "}
                    </p>
                  </p>
                </div>
              </div>
              <div className="flex justify-center font-bold text-white">
                <button className="border-2 rounded-r-full rounded-l-full w-40 h-10">
                  <i className="mr-2 fa-solid fa-plus"></i>Connect
                </button>
              </div>
              <hr className="mx-auto mt-6 border-[#ffffff1f] w-11/12 h-[1px]" />
              {/* <!-- grid-slider-2-box-4 --> */}
              <div className="flex px-8 py-4 text-white">
                <div className="rounded-full w-[60px] h-[60px]">
                  <img
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR-o6hgJ_xP_VYrdNT2so6fF7YnrifpJS3RTYnASME-qUhYf6Mz"
                    alt=""
                    className="rounded-full w-[60px] h-[60px]"
                  />
                </div>
                <div className="ml-5">
                  <p>
                    <span className="font-bold">Deepa Srinivasan</span>
                    <span className="text-gray-400">· 2nd</span>
                    <p className="font-medium text-[14px] text-gray-400">
                      Assistant Manager
                    </p>
                  </p>
                </div>
              </div>
              <div className="flex justify-center font-bold text-white">
                <button className="border-2 rounded-r-full rounded-l-full w-40 h-10">
                  <i className="mr-2 fa-solid fa-user-plus"></i>Connect
                </button>
              </div>
              <hr className="mx-auto mt-6 border-[#ffffff1f] w-11/12 h-[1px]" />
              {/* <!-- grid-slider-2-box-5 --> */}
              <div className="flex px-8 py-4 text-white">
                <div className="rounded-full w-[60px] h-[60px]">
                  <img
                    src="https://media.licdn.com/dms/image/C5103AQETqcuSe4Vm3Q/profile-displayphoto-shrink_100_100/0/1583250770628?e=1693440000&v=beta&t=uLLlMfr3OKjgRJW5Z82Fpz03Y3wf_N-p6L380Mnqz-8"
                    alt=""
                    className="rounded-full w-[60px] h-[60px]"
                  />
                </div>
                <div className="ml-5">
                  <p>
                    <span className="font-bold">Mogith P N</span>
                    <span className="text-gray-400">· 3rd</span>
                    <p className="font-medium text-[14px] text-gray-400">
                      SAA-C03 AWS Certified
                    </p>
                  </p>
                </div>
              </div>
              <div className="flex justify-center font-bold text-white">
                <button className="border-2 rounded-r-full rounded-l-full w-40 h-10">
                  <i className="mr-2 fa-solid fa-user-plus"></i>Connect
                </button>
              </div>
              <hr className="mx-auto mt-6 border-[#ffffff1f] w-11/12 h-[1px]" />
              <p className="mt-3 mb-3 font-bold text-white text-center">
                Show All
              </p>
            </div>
            {/* <!-- grid main box 3 --> */}
            <div
              className="max-[768px]:col-span-8 bg-[rgb(29,34,38)] rounded-md row-[4_/_span_1] max-[768px]:row-[3_/_span_1] h-fit col-[2_/_span_4]"
            >
              <h2 className="ml-5 font-bold text-white text-xl">Resourses</h2>
              <p className="ml-5 font-medium text-gray-400">
                <i className="mb-4 fa-solid fa-eye"></i>Private to you
              </p>
              <div>
                <h2 className="ml-5 font-bold text-white">
                  <i className="text-gray-400 fa-sharp fa-solid fa-satellite-dish"></i>
                  Creator mode{" "}
                  <span className="bg-green-500 px-[8px] rounded-md text-black">
                    on
                  </span>
                </h2>
                <p className="ml-5 font-normal text-[14px] text-gray-400">
                  Get discovered, showcase content on your profile, and get
                  access to creator tools.
                </p>
              </div>
              <hr className="mx-auto mt-2 mb-2 border-[#ffffff1f] w-11/12 h-[1px]" />
              <div>
                <h2 className="ml-5 text-gray-400">
                  <i className="fa-user-group mr-10 fa-solid"></i>
                  <span className="-ml-9 font-bold text-white">My network</span>
                </h2>
                <p className="ml-5 font-normal text-[14px] text-gray-400">
                  See and manage your connections and intrests.
                </p>
              </div>
              <hr className="mx-auto mt-2 mb-2 border-[#ffffff1f] w-full h-[1px]" />
              <p className="flex justify-center mb-2 font-bold text-white">
                {" "}
                Show all 5 resourses
              </p>
            </div>
            {/* <!-- grid main box 4 --> */}
            <div className="max-[768px]:col-span-8 row-span-4 bg-[rgb(29,34,38)] rounded-md max-[768px]:row-[4_/_span_1] col-[2_/_span_4]">
              <div className="flex justify-between mx-4 mt-4">
                <div>
                  <h2 className="font-bold text-white text-xl">Activity</h2>
                  <p className="font-medium text-blue-500">13 followers</p>
                </div>
                <div>
                  <div className="flex">
                    <button className="mr-4 px-2 py-1 border border-blue-500 rounded-r-full rounded-l-full font-medium text-blue-500">
                      Create a post
                    </button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      className="text-white mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-3 mb-2 ml-5">
                <button className="bg-green-500 px-2 py-1 rounded-r-full rounded-l-full font-medium text-black">
                  Posts
                </button>
                <button className="ml-2 px-2 py-1 border border-white rounded-r-full rounded-l-full font-medium text-white">
                  Comments
                </button>
                <button className="ml-2 px-2 py-1 border border-white rounded-r-full rounded-l-full font-medium text-white">
                  Articles
                </button>
              </div>
              <div className="mt-5 ml-5">
                <p className="mb-3 font-medium text-[13px] text-gray-400">
                  Abhay Verma posted this . 1w
                </p>
                <div className="flex">
                  <div>
                    <img
                      src="https://media.licdn.com/dms/image/D4D12AQHxNf_kv8sh5Q/article-cover_image-shrink_180_320/0/1687594194935?e=1694044800&v=beta&t=5Lr-Di2Xak2dZ1t_p5BWYuKj7N1mPD4KYj4RqB9Zecc"
                      alt=""
                      className="rounded-md w-[64px] h-[64px] object-cover"
                    />
                  </div>
                  <div className="ml-2">
                    <h2 className="font-bold text-white">
                      How I learned Tailwind CSS
                    </h2>
                    <p className="font-medium text-[13px] text-gray-400">
                      Abhay Verma posted this . 1w
                    </p>
                  </div>
                </div>
              </div>
              <hr className="mx-auto mt-5 mb-5 border-[#ffffff1f] w-11/12 h-[1px]" />
              <div className="mt-5 ml-5">
                <p className="mb-3 font-medium text-[13px] text-gray-400">
                  Abhay Verma posted this . 1 mo
                </p>
                <div className="flex">
                  <div>
                    <img
                      src="https://media.licdn.com/dms/image/D4E12AQFj34INdJZ-Jw/article-cover_image-shrink_180_320/0/1684064760442?e=1694044800&v=beta&t=7DswzzVwn7zRlC72i6RznLIxv7AFUrVawO3r57LIsVE"
                      alt=""
                      className="rounded-md w-[64px] h-[64px] object-cover"
                    />
                  </div>
                  <div className="ml-2">
                    <h2 className="font-bold text-white">
                      Creating a multi page html website
                    </h2>
                    <p className="font-medium text-[13px] text-gray-400">
                      Abhay Verma posted this . 1 min read
                    </p>
                  </div>
                </div>
              </div>
              <hr className="mx-auto mt-5 mb-5 border-[#ffffff1f] w-full h-[1px]" />
              <p className="flex justify-center mb-2 font-bold text-white">
                {" "}
                Show all posts
              </p>
            </div>
            {/* <!-- grid main box 4 --> */}
            <div className="max-[768px]:col-span-8 row-span-5 bg-[rgb(29,34,38)] rounded-md max-[768px]:row-[5_/_span_1] col-[2_/_span_4]">
              <div className="flex justify-between mx-4 mt-5 mb-6">
                <div className="font-bold text-white text-xl">
                  <h2>Skills</h2>
                </div>
                <div>
                  <div className="flex items-center">
                    <button className="mr-4 px-2 py-1 border border-blue-500 rounded-r-full rounded-l-full font-medium text-blue-500">
                      Take skill quiz
                    </button>
                    <i className="mr-4 text-white fa-solid fa-plus"></i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      className="text-white mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="ml-4">
                <div>
                  <div>
                    <h2 className="mb-2 font-medium text-white text-xl">
                      Html 5
                    </h2>
                  </div>
                  <div className="flex">
                    <img
                      src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT43Xzff_Z_V_02kJjxjXr70dtEKuG_kgbbrl12KUclVZyKRkZM"
                      alt=""
                      className="w-6 h-6"
                    />
                    <p className="ml-2 text-[14px] text-white">
                      Marwari college ranchi
                    </p>
                  </div>
                </div>
                <hr className="mx-auto mt-7 mb-7 border-[#ffffff1f] w-[95%] h-[1px]" />
                <div>
                  <div>
                    <h2 className="mb-2 font-medium text-white text-xl">
                      Cascading style sheets (CSS)
                    </h2>
                  </div>
                  <div className="flex">
                    <img
                      src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT43Xzff_Z_V_02kJjxjXr70dtEKuG_kgbbrl12KUclVZyKRkZM"
                      alt=""
                      className="w-6 h-6"
                    />
                    <p className="ml-2 text-[14px] text-white">
                      Marwari college ranchi
                    </p>
                  </div>
                </div>
                <hr className="mx-auto mt-7 mb-7 border-[#ffffff1f] w-[95%] h-[1px]" />
                <div className="mb-5">
                  <div>
                    <h2 className="mb-2 font-medium text-white text-xl">
                      Tailwind CSS
                    </h2>
                  </div>
                  <div className="flex">
                    <img
                      src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT43Xzff_Z_V_02kJjxjXr70dtEKuG_kgbbrl12KUclVZyKRkZM"
                      className="w-6 h-6"
                      alt=""
                    />
                    <p className="ml-2 text-[14px] text-white">
                      Marwari college ranchi
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- grid slider 3 --> */}
            <div className="max-[768px]:col-span-8 bg-[rgb(29,34,38)] rounded-md row-[5_/_span_2] w-[374px] max-[1060px]:w-[300px] max-[768px]:row-[7_/_span_1] max-[768px]:w-full col-[6_/_span_2]">
              <div className="mt-5 mr-14 ml-5">
                <h2 className="text-white">
                  <i className="fa-brands fa-linkedin"></i>
                  <span className="ml-2 font-semibold">LEARNING</span>
                </h2>
                <p className="mt-2 font-semibold text-white">
                  Add new skills with these courses, free for 24 hours
                </p>
              </div>
              {/* <!-- slider-3-box-1 --> */}
              <div className="flex mx-6 mt-5">
                <img
                  src="https://media.licdn.com/dms/image/C4E0DAQGLB7B8YW2Fmg/learning-public-crop_60_100/0/1611610348863?e=1688882400&v=beta&t=LV0KRd4KwAN7SdoFNMA2Gjdc1MnriM51OSdXbuSUPeo"
                  alt=""
                  className="w-[100px] h-[60px]"
                />
                <p className="ml-3 w-40 overflow-hidden font-medium text-white text-ellipsis whitespace-nowrap">
                  Create a Quick, Clean, <br /> and Cheap Website with
                </p>
              </div>
              <hr className="mx-auto mt-4 mb-4 border-[#ffffff1f] w-11/12 h-[1px]" />
              {/* <!-- slider-3-box-2 --> */}
              <div className="flex mx-6 mt-5">
                <img
                  src="https://media.licdn.com/dms/image/C4D0DAQHG3oWZOpVl0Q/learning-public-crop_60_100/0/1605130201130?e=1688882400&v=beta&t=H5-bDZbiXpmbC0gAXrNrh_9CfpGNvSjkGSRnrVemniw"
                  alt=""
                  className="w-[100px] h-[60px]"
                />
                <p className="ml-3 w-40 overflow-hidden font-medium text-white text-ellipsis whitespace-nowrap">
                  Creating flowcharts for <br />
                  Beginners
                </p>
              </div>
              <hr className="mx-auto mt-4 mb-4 border-[#ffffff1f] w-11/12 h-[1px]" />
              {/* <!-- slider-3-box-3 --> */}
              <div className="flex mx-6 mt-5">
                <img
                  src="https://media.licdn.com/dms/image/C4E0DAQGWqNJbTO18sA/learning-public-crop_60_100/0/1601574383805?e=1688882400&v=beta&t=NdikUdvynP9GIojFcKMDrY_eGWMqgZoe65e8t3-OJMY"
                  alt=""
                  className="w-[100px] h-[60px]"
                />
                <p className="ml-3 w-40 overflow-hidden font-medium text-white text-ellipsis whitespace-nowrap">
                  CSS: print style sheets
                </p>
              </div>
              <hr className="mx-auto mt-4 mb-4 border-[#ffffff1f] w-11/12 h-[1px]" />
              <p className="flex justify-center mb-2 font-bold text-white">
                {" "}
                See my recommendations
              </p>
            </div>
          </div>
        </section>
        {/* <!-- Grid section end --> */}
      </main>

      <Footer />
    </>
  );
}

export default App;
