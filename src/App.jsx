import './App.css'
import { Header, Footer } from './components'

function App() {

  return (
    <>
    <Header/>

    <main>
        {/* <!-- Grid section started --> */}
        <section>
            <div class="grid grid-cols-8 grid-rows-[70px_minmax(70px,_1fr)] gap-2 mt-5 max-[1060px]:w-10/12 max-[768px]:mx-auto">
                {/* <!-- grid main box 1 --> */}
                <div class=" bg-[rgb(29,34,38)] col-[2_/_span_4] rounded-md row-[1_/_span_1] flex items-center justify-between max-[768px]:col-span-8">
                    <p class="ml-5">
                        <span class="text-white font-bold ">Analytics & tools</span><br/> 
                        <span class="text-gray-400 font-bold text-[12px]">Post impressions past 7 days</span>
                        <span class="text-white font-bold text-[12px]">197</span> 
                        <span class="text-green-400 font-bold text-[12px] ml-1"><i class="fa-solid fa-caret-up"></i>19,600%</span>  
                    </p>
                    <i class="fa-sharp fa-solid fa-arrow-right mr-5 text-gray-400"></i>
                </div>
                {/* <!-- grid slider 1 --> */}
                <div class="col-[6_/_span_2] row-[1_/_span_2] bg-[rgb(29,34,38)] rounded-md w-[374px] max-[1060px]:w-[300px] max-[1060px]:h-fit max-[768px]:col-span-8 max-[768px]:row-[6_/_span_1] max-[768px]:w-full">

                    <div class="flex justify-between">
                        <p class="px-4 py-4">
                            <span class="text-white font-bold">Profile language</span><br/>
                            <span class="text-gray-400 font-bold text-[14px]">English</span>
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match mt-2 mr-2 text-gray-400" width="24" height="24" focusable="false">
                        <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                      </svg> 
                    </div>

                      <div>
                        <hr class="w-11/12  h-[1px] border-[#ffffff1f] mx-auto"/>
                      </div>  
                       
                      <div class="flex justify-between">
                        <p class="px-4 py-4 text-white font-bold">
                            <span>Public profile & URL</span><br/>
                            <span class="text-gray-400 text-[14px]">www.linkedin.com/in/abhay-verma- <br/>821699274</span>
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match mt-2 mr-2 text-gray-400" width="24" height="24" focusable="false">
                            <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                          </svg> 
                      </div>
                </div>
                {/* <!-- grid main box 2--> */}
                <div class="col-[2_/_span_4] row-[2_/_span_2] bg-[rgb(29,34,38)] rounded-md max-[768px]:row-[2_/_span_1] max-[768px]:col-span-8">
                    <div>
                        <div>
                            <div class="flex">
                                <img src="https://media.licdn.com/dms/image/D4E16AQHcqQkbmOMmLw/profile-displaybackgroundimage-shrink_350_1400/0/1682890899650?e=1701302400&v=beta&t=qKq2Vfud1OXyod9q1lKQeEr-srAKJAwONCxMRRJ8gR4" alt="" class="h-full w-full rounded-tl-md rounded-tr-md static z-10"/>
                                <div class="-ml-12 mt-5 rounded-full h-8 w-8 bg-[#fff] flex items-center justify-center z-20">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match text-blue-600 w-5 h-5" width="16" height="16" focusable="false">
                                        <path d="M14.13 1.86a3 3 0 00-4.17 0l-7 7L1 15l6.19-2 6.94-7a3 3 0 000-4.16zm-8.36 9.71l-1.35-1.34L9.64 5 11 6.35z"></path>
                                      </svg>
                                </div>
                            </div>
                            <div class="w-36 h-36">
                                <img src="https://media.licdn.com/dms/image/D4E03AQEA660EJG0Pzg/profile-displayphoto-shrink_400_400/0/1682890800244?e=1701302400&v=beta&t=Cu1jKCIhM6Pa-kFBN8X_maEGicPPstVpX-FWdzgoTfE" alt="" class="w-[144px] h-[144px]  -mt-24 ml-3 rounded-full absolute z-20 border-4 border-[rgb(29,34,38)] max-[1060px]:w-24 max-[1060px]:h-24 max-[1060px]:-mt-16"/>
                            </div>
                        </div>
                        <div class="flex justify-between -mt-24">
                            <div class="ml-5">
                                <h1 class="font-bold text-white text-2xl max-[990px]:text-[18px]">Abhay Verma</h1>
                                <p class="text-gray-300 font-medium max-[990px]:text-[13px]">Attended Marwari College</p>
                                <p class="text-gray-400 max-[990px]:text-[13px]">Talks about #webdevelpoment</p>
                                <p class="text-gray-400 max-[990px]:text-[13px]">Ranchi, Jharkhand, India.
                                    <span class="text-blue-600 font-medium max-[990px]:text-[13px]">Contact info</span>
                                </p>
                                <p class="text-blue-600 font-medium max-[990px]:text-[13px]">13 followers .12 connction</p>
                                <div class="mt-2">
                                    <button class="bg-blue-500 rounded-l-full rounded-r-full w-20 h-8">Open to</button>

                                    <button class="text-blue-500 border-blue-500 border rounded-l-full rounded-r-full h-8 w-40 ml-1 max-[951px]:mt-2">Add profile section</button>

                                    <button class="text-white border-white border rounded-l-full rounded-r-full h-8 w-16 ml-1 max-[1060px]:mt-2">More</button>
                                </div>
                            </div>
                            <div class="max-[375px]:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match mb-2 ml-32 max-[1060px]:ml-24 text-gray-400" width="24" height="24" focusable="false">
                                <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                                </svg>
                                <p class="text-white font-bold mr-3 max-[990px]:text-[13px]">Marwari college ranchi</p>  
                            </div>
                        </div>    
                    </div>
                    <div class="mt-9 flex justify-around  flex-wrap mb-5">
                        <div class="flex justify-between max-[1060px]:mx-auto w-[350px] h-[88px] border border-gray-500 rounded-md p-3 max-[1325px]:w-[250px] max-[1325px]:h-full">
                            <p class="text-white text-[14px] font-bold">Show recruiters you’re open to work — you <br/> <span class="text-gray-400">control who sees this.</span> <br/>
                            <span class="text-blue-500">Get started</span>
                        </p>
                         <p><i class="fa-sharp fa-solid fa-xmark text-white text-xl"></i></p>
                        </div>
                        <div class="flex justify-between w-[350px] h-[88px] max-[1060px]:mx-auto max-[1060px]:mt-5 max-[1060px]:mb-5 max-[768px]:mb-0 max-[768px]:mt-0 max-[600px]:mt-5 border border-gray-500 rounded-md p-3 max-[1325px]:w-[250px] max-[1325px]:h-full">
                            <p class="text-white text-[14px] font-bold">Share that you’re hiring and qualified <br/> <span class="text-gray-400">Candidates</span> <br/>
                                <span class="text-blue-500">Get started</span>
                            </p>
                             <p><i class="fa-sharp fa-solid fa-xmark text-white text-xl"></i></p>
                        </div>
                    </div>
                </div>
                {/* <!-- grid slider 2 --> */}
                <div class="col-[6_/_span_2] bg-[rgb(29,34,38)] row-[3_/_span_2] rounded-md w-[374px] max-[1060px]:w-[300px] max-[1060px]:mt-1  max-[768px]:col-span-8 max-[768px]:row-[8_/_span_1]  max-[768px]:w-full">
                    {/* <!-- slider-2-box-1 --> */}
                    <p class="px-8 py-5 text-white font-bold">People also viewed</p>
                    <div class="flex text-white px-8 py-4">
                        <div class="w-[60px] h-[60px] rounded-full"><img src="https://media.licdn.com/dms/image/D5603AQFwgft4Exasaw/profile-displayphoto-shrink_100_100/0/1674972964663?e=1701302400&v=beta&t=MU6-Jb1T83wkfCrYxcANDPv7U-_rZthxsULcR975PuM" alt="" class="w-[60px] h-[60px] rounded-full"/></div>
                        <div class="ml-5">
                            <p>
                                <span class="font-bold">Jobin Anthony</span>
                                <span class="text-gray-400">· 2nd</span>
                                <p class="text-gray-400 text-[14px] font-medium"> zoho school of business (student)</p>
                            </p>
                        </div>
                    </div>
                    <div class="flex justify-center text-white font-bold">
                        <button class="border-2 rounded-l-full rounded-r-full w-40 h-10">
                            <i class="fa-solid fa-user-plus mr-2"></i>Connect
                        </button>
                    </div>
                    <hr class="w-11/12  h-[1px] border-[#ffffff1f] mx-auto mt-6"/>
                    {/* <!-- grid-slider-2-box-2 --> */}
                    <div class="flex text-white px-8 py-4">
                        <div class="w-[60px] h-[60px] rounded-full"><img src="https://media.licdn.com/dms/image/D5603AQHaWowm75pfsA/profile-displayphoto-shrink_100_100/0/1683257704964?e=1701302400&v=beta&t=V9wOTQfMVoUw0baufYU0LVDknjK1bEKHivirWOlyBUA" alt="" class="w-[60px] h-[60px] rounded-full"/></div>
                        <div class="ml-5">
                            <p>
                                <span class="font-bold">Jose Sweety</span>
                                <span class="text-gray-400">· 3rd</span>
                                <p class="text-gray-400 text-[14px] font-medium">Accounts Executive</p>
                            </p>
                        </div>
                    </div>
                    <div class="flex justify-center text-white font-bold">
                        <button class="border-2 rounded-l-full rounded-r-full w-40 h-10">
                            <i class="fa-solid fa-plus mr-2"></i>Connect
                        </button>
                    </div>
                    <hr class="w-11/12  h-[1px] border-[#ffffff1f] mx-auto mt-6"/>
                    {/* <!-- grid-slider-2-box-3 --> */}
                    <div class="flex text-white px-8 py-4">
                        <div class="w-[60px] h-[60px] rounded-full"><img src="https://media.licdn.com/dms/image/D5603AQGiTVLAQ6mwkQ/profile-displayphoto-shrink_100_100/0/1677750634864?e=1701302400&v=beta&t=V87xH6cbxot305UJZiSas4cfw8stG-CebeZQJDibmaY" alt="" class="w-[60px] h-[60px] rounded-full"/></div>
                        <div class="ml-5">
                            <p>
                                <span class="font-bold">A S Bharathi Nesar</span>
                                <span class="text-gray-400">· 2nd</span>
                                <p class="text-gray-400 text-[14px] font-medium w-40">Artificial intelligence Enthusiastic's </p>
                            </p>
                        </div>
                    </div>
                    <div class="flex justify-center text-white font-bold">
                        <button class="border-2 rounded-l-full rounded-r-full w-40 h-10">
                            <i class="fa-solid fa-plus mr-2"></i>Connect
                        </button>
                    </div>
                    <hr class="w-11/12  h-[1px] border-[#ffffff1f] mx-auto mt-6"/>
                    {/* <!-- grid-slider-2-box-4 --> */}
                    <div class="flex text-white px-8 py-4">
                        <div class="w-[60px] h-[60px] rounded-full"><img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR-o6hgJ_xP_VYrdNT2so6fF7YnrifpJS3RTYnASME-qUhYf6Mz"alt="" class="w-[60px] h-[60px] rounded-full"/></div>
                        <div class="ml-5">
                            <p>
                                <span class="font-bold">Deepa Srinivasan</span>
                                <span class="text-gray-400">· 2nd</span>
                                <p class="text-gray-400 text-[14px] font-medium">Assistant Manager</p>
                            </p>
                        </div>
                    </div>
                    <div class="flex justify-center text-white font-bold">
                        <button class="border-2 rounded-l-full rounded-r-full w-40 h-10">
                            <i class="fa-solid fa-user-plus mr-2"></i>Connect
                        </button>
                    </div>
                    <hr class="w-11/12  h-[1px] border-[#ffffff1f] mx-auto mt-6"/>
                    {/* <!-- grid-slider-2-box-5 --> */}
                    <div class="flex text-white px-8 py-4">
                        <div class="w-[60px] h-[60px] rounded-full"><img src="https://media.licdn.com/dms/image/C5103AQETqcuSe4Vm3Q/profile-displayphoto-shrink_100_100/0/1583250770628?e=1693440000&v=beta&t=uLLlMfr3OKjgRJW5Z82Fpz03Y3wf_N-p6L380Mnqz-8" alt="" class="w-[60px] h-[60px] rounded-full"/></div>
                        <div class="ml-5">
                            <p>
                                <span class="font-bold">Mogith P N</span>
                                <span class="text-gray-400">· 3rd</span>
                                <p class="text-gray-400 text-[14px] font-medium">SAA-C03 AWS Certified</p>
                            </p>
                        </div>
                    </div>
                    <div class="flex justify-center text-white font-bold">
                        <button class="border-2 rounded-l-full rounded-r-full w-40 h-10">
                            <i class="fa-solid fa-user-plus mr-2"></i>Connect
                        </button>
                    </div>
                    <hr class="w-11/12  h-[1px] border-[#ffffff1f] mx-auto mt-6"/>
                    <p class="text-center font-bold text-white mt-3 mb-3">Show All</p>
                </div>
                {/* <!-- grid main box 3 --> */}
                <div class="bg-[rgb(29,34,38)] col-[2_/_span_4] row-[4_/_span_1] rounded-md max-[768px]:row-[3_/_span_1]
                max-[768px]:col-span-8 h-fit">
                    <h2 class="text-white text-xl font-bold ml-5">Resourses</h2>
                    <p class="text-gray-400 font-medium ml-5">
                        <i class="fa-solid fa-eye mb-4"></i>Private to you
                    </p>
                    <div>
                        <h2 class="text-white font-bold  ml-5">
                            <i class="fa-sharp fa-solid fa-satellite-dish text-gray-400"></i>Creator mode <span class="px-[8px] bg-green-500 rounded-md text-black">on</span> 
                        </h2>
                        <p class="text-gray-400 font-normal text-[14px] ml-5">
                            Get discovered, showcase content on your profile, and get access to creator tools.</p>
                    </div>
                    <hr class="w-11/12  h-[1px] border-[#ffffff1f] mx-auto mb-2 mt-2"/>
                    <div>
                        <h2 class="text-gray-400 ml-5">
                            <i class="mr-10 fa-solid fa-user-group"></i><span class="text-white font-bold -ml-9">My network</span>
                        </h2>
                        <p class="ml-5 font-normal text-gray-400 text-[14px]">See and manage your connections and intrests.</p>
                    </div>
                    <hr class="w-full  h-[1px] border-[#ffffff1f] mx-auto mb-2 mt-2"/>
                   <p class="mb-2 flex justify-center font-bold text-white"> Show all 5 resourses</p>
                </div>
                {/* <!-- grid main box 4 --> */}
                <div class="bg-[rgb(29,34,38)] col-[2_/_span_4] row-span-4 rounded-md max-[768px]:col-span-8 max-[768px]:row-[4_/_span_1]">
                    <div class="flex justify-between mt-4 mx-4">
                        <div>
                            <h2 class="text-white font-bold text-xl">Activity</h2>
                            <p class="text-blue-500 font-medium">13 followers</p>
                        </div>
                        <div>
                            <div class="flex">
                                <button class="mr-4 text-blue-500 font-medium border border-blue-500 px-2 py-1 rounded-l-full rounded-r-full">Create a post</button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match text-white" width="24" height="24" focusable="false">
                                    <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                                  </svg>
                            </div>
                        </div>
                    </div>
                    <div class="mt-3 mb-2 ml-5">
                        <button class="text-black font-medium bg-green-500 px-2 py-1 rounded-l-full rounded-r-full">Posts</button>
                        <button class="text-white font-medium border border-white px-2 py-1 rounded-l-full rounded-r-full ml-2">Comments</button>
                        <button class="text-white font-medium border border-white px-2 py-1 rounded-l-full rounded-r-full ml-2">Articles</button>
                    </div>
                    <div class="mt-5 ml-5">
                        <p class="text-gray-400 text-[13px] font-medium mb-3">Abhay Verma posted this . 1w</p>
                        <div class="flex ">
                            <div>
                                <img src="https://media.licdn.com/dms/image/D4D12AQHxNf_kv8sh5Q/article-cover_image-shrink_180_320/0/1687594194935?e=1694044800&v=beta&t=5Lr-Di2Xak2dZ1t_p5BWYuKj7N1mPD4KYj4RqB9Zecc" alt="" class="h-[64px] w-[64px] object-cover rounded-md"/>
                            </div>
                            <div class="ml-2">
                                <h2 class="text-white font-bold">How I learned Tailwind CSS</h2>
                                <p class="text-gray-400 font-medium text-[13px]">Abhay Verma posted this . 1w</p>
                            </div>
                        </div>
                    </div>
                    <hr class="w-11/12  h-[1px] border-[#ffffff1f] mx-auto mb-5 mt-5"/>
                    <div class="mt-5 ml-5">
                        <p class="text-gray-400 text-[13px] font-medium mb-3">Abhay Verma posted this . 1 mo</p>
                        <div class="flex ">
                            <div>
                                <img src="https://media.licdn.com/dms/image/D4E12AQFj34INdJZ-Jw/article-cover_image-shrink_180_320/0/1684064760442?e=1694044800&v=beta&t=7DswzzVwn7zRlC72i6RznLIxv7AFUrVawO3r57LIsVE" alt="" class="h-[64px] w-[64px] object-cover rounded-md"/>
                            </div>
                            <div class="ml-2">
                                <h2 class="text-white font-bold">Creating a multi page html website</h2>
                                <p class="text-gray-400 font-medium text-[13px]">Abhay Verma posted this . 1 min read</p>
                            </div>
                        </div>
                    </div>
                    <hr class="w-full  h-[1px] border-[#ffffff1f] mx-auto mb-5 mt-5"/>
                    <p class="mb-2 flex justify-center font-bold text-white"> Show all posts</p>
                </div>
                {/* <!-- grid main box 4 --> */}
                <div class="bg-[rgb(29,34,38)] col-[2_/_span_4] row-span-5 rounded-md max-[768px]:col-span-8 max-[768px]:row-[5_/_span_1]">
                    <div class="flex justify-between mt-5 mx-4 mb-6">
                        <div class="text-white font-bold text-xl">
                            <h2>Skills</h2>
                        </div>
                        <div>
                            <div class="flex items-center">
                                <button class="mr-4 text-blue-500 font-medium border border-blue-500 px-2 py-1 rounded-l-full rounded-r-full">Take skill quiz</button>
                                <i class="fa-solid fa-plus mr-4 text-white"></i>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match text-white" width="24" height="24" focusable="false">
                                <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="ml-4">
                        <div>
                            <div>
                                <h2 class="font-medium text-xl text-white mb-2">Html 5</h2>
                            </div>
                            <div class="flex">
                                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT43Xzff_Z_V_02kJjxjXr70dtEKuG_kgbbrl12KUclVZyKRkZM" alt="" class="w-6 h-6"/>
                                <p class="ml-2 text-white text-[14px]">Marwari college ranchi</p>
                            </div>
                        </div>
                        <hr class="w-[95%]  h-[1px] border-[#ffffff1f] mx-auto mt-7 mb-7"/>
                        <div>
                            <div>
                                <h2 class="font-medium text-xl text-white mb-2">Cascading style sheets (CSS)</h2>
                            </div>
                            <div class="flex">
                                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT43Xzff_Z_V_02kJjxjXr70dtEKuG_kgbbrl12KUclVZyKRkZM" alt="" class="w-6 h-6"/>
                                <p class="ml-2 text-white text-[14px]">Marwari college ranchi</p>
                            </div>
                        </div>
                        <hr class="w-[95%]  h-[1px] border-[#ffffff1f] mx-auto mt-7 mb-7"/>
                        <div class="mb-5">
                            <div>
                                <h2 class="font-medium text-xl text-white mb-2">Tailwind CSS</h2>
                            </div>
                            <div class="flex">
                                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT43Xzff_Z_V_02kJjxjXr70dtEKuG_kgbbrl12KUclVZyKRkZM"class="w-6 h-6"  alt="" />
                                <p class="ml-2 text-white text-[14px]">Marwari college ranchi</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- grid slider 3 --> */}
                <div class="col-[6_/_span_2] row-[5_/_span_2] bg-[rgb(29,34,38)] rounded-md w-[374px] max-[1060px]:w-[300px] max-[768px]:col-span-8 max-[768px]:row-[7_/_span_1]  max-[768px]:w-full">
                    <div class="mt-5 ml-5 mr-14">
                        <h2 class="text-white"><i class="fa-brands fa-linkedin"></i><span class="ml-2 font-semibold">LEARNING</span></h2>
                        <p class="text-white font-semibold mt-2">Add new skills with these courses, free for 24 hours</p>
                    </div>
                    {/* <!-- slider-3-box-1 --> */}
                    <div class="flex mt-5 mx-6">
                        <img src="https://media.licdn.com/dms/image/C4E0DAQGLB7B8YW2Fmg/learning-public-crop_60_100/0/1611610348863?e=1688882400&v=beta&t=LV0KRd4KwAN7SdoFNMA2Gjdc1MnriM51OSdXbuSUPeo" alt="" class="w-[100px] h-[60px]"/>
                        <p class="w-40 overflow-hidden text-ellipsis whitespace-nowrap ml-3 text-white font-medium" >Create a Quick, Clean, <br/> and Cheap Website with</p>
                    </div>
                    <hr class="w-11/12  h-[1px] border-[#ffffff1f] mx-auto mb-4 mt-4"/>
                    {/* <!-- slider-3-box-2 --> */}
                    <div class="flex mt-5 mx-6">
                        <img src="https://media.licdn.com/dms/image/C4D0DAQHG3oWZOpVl0Q/learning-public-crop_60_100/0/1605130201130?e=1688882400&v=beta&t=H5-bDZbiXpmbC0gAXrNrh_9CfpGNvSjkGSRnrVemniw" alt="" class="w-[100px] h-[60px]"/>
                        <p class="w-40 overflow-hidden text-ellipsis whitespace-nowrap ml-3 text-white font-medium" >Creating flowcharts for <br/>Beginners</p>
                    </div>
                    <hr class="w-11/12  h-[1px] border-[#ffffff1f] mx-auto mb-4 mt-4"/>
                    {/* <!-- slider-3-box-3 --> */}
                    <div class="flex mt-5 mx-6">
                        <img src="https://media.licdn.com/dms/image/C4E0DAQGWqNJbTO18sA/learning-public-crop_60_100/0/1601574383805?e=1688882400&v=beta&t=NdikUdvynP9GIojFcKMDrY_eGWMqgZoe65e8t3-OJMY" alt="" class="w-[100px] h-[60px]"/>
                        <p class="w-40 overflow-hidden text-ellipsis whitespace-nowrap ml-3 text-white font-medium" >CSS: print style sheets</p>
                    </div>
                    <hr class="w-11/12  h-[1px] border-[#ffffff1f] mx-auto mb-4 mt-4"/>
                    <p class="mb-2 flex justify-center font-bold text-white"> See my recommendations</p>
                </div>
              </div>
        </section>
        {/* <!-- Grid section end --> */}
    </main>
      
    <Footer/>
    </>
  )
}

export default App
