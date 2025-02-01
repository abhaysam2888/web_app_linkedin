import React from 'react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50">   
        <nav className="w-full h-14  bg-[#1d222c]  text-[#d3d3d3]">
            {/* <!-- navbar search box & icon --> */}
            <div className="flex justify-between mx-auto items-center text-center h-14 ml-52 max-[828px]:ml-20 max-[711px]:ml-10 max-[675px]:ml-20 max-[591px]:ml-16 max-[528px]:ml-4 max-[474px]:h-24 max-[474px]:pb-10">
                <div className="flex">
                    <div className="w-[35px] h-14 flex items-center">
                        <i className="fa-brands fa-linkedin text-[40px] w-[35px]"></i>
                    </div>
                    <div className="w-52 flex h-14 items-center"> 
                        <div className="flex bg-slate-600 h-[36px] max-[1387px]:w-[136px] mx-2 rounded-[3px] max-[963px]:bg-[#1d222c]">
                            <i className="fa-solid fa-magnifying-glass p-3 max-[963px]:ml-2"></i>
                            <input className="bg-transparent w-52 rounded-r-md outline-none max-[1387px]:w-24 max-[963px]:hidden" type="search" name="" placeholder="Search" id=""/>
                        </div>
                    </div>
                </div>
            {/* <!-- navbar center links -->   */}
                <div className="flex justify-evenly h-14 items-center mr-52 max-[1387px]:mr-[385px] max-[963px]:-ml-[135px]"> 
                    <div>
                        <div><i className="mr-10 fa-solid fa-house"></i></div>
                        <div className="mr-10 text-[12px] max-[1387px]:hidden">Home</div>
                    </div>
                    <div>
                        <div><i className="mr-10 fa-solid fa-user-group"></i></div>
                        <div className="mr-10 text-[12px] max-[1387px]:hidden">My Network</div>
                    </div>
                    <div className=" max-[328px]:hidden">
                        <div><i className="mr-10 fa-solid fa-briefcase"></i></div>
                        <div className="mr-10 text-[12px] max-[1387px]:hidden">Jobs</div>
                    </div>
                    <div className=" max-[376px]:hidden">
                        <div><i className="mr-10 fa-solid fa-comment-dots"></i></div>
                        <div className="mr-10 text-[12px] max-[1387px]:hidden">Messaging</div>
                    </div>
                    <div className=" max-[474px]:hidden">
                        <div><i className="mr-10 fa-sharp fa-solid fa-bell"></i></div>
                        <div className="mr-10 text-[12px] max-[1387px]:hidden">Notification</div>
                    </div>
                    <div>
                        <div className="w-[24px] h-[24px] mr-2 max-[474px]:hidden">
                          <img src="https://media.licdn.com/dms/image/D4E03AQEA660EJG0Pzg/profile-displayphoto-shrink_100_100/0/1682890800244?e=1693440000&v=beta&t=dHy7ggs9_9OnmgDXIn3rgjBTym_iI8ZdBIpyinZi_Os" alt="" className="mr-2 rounded-full w-[24px] h-[24px] max-[474px]:hidden"/>
                        </div>
                        <div className="text-[12px] max-[1387px]:hidden">Me<i className="mr-2 fa-solid fa-caret-down"></i></div>
                    </div>
                {/* <!-- nav-right-link --> */}
                <div className="flex border border-[#1d222c] border-l-gray-500 h-14 items-center max-[675px]:hidden">
                        <div className="flex flex-col items-center ml-2 w-[80px]">
                            <p className="h-[20px]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                                    </svg>
                                    <div className="text-[12px]">For Business
                                        <i className="fa-solid fa-caret-down"></i>
                                    </div>
                            </p>
                        </div>
                        <div className="text-[#e7a33e] w-24 text-[12px] flex items-center ml-2 h-[36px]">
                            <u><p className=" h-[36px] w-24">Network Smarter, Try Premium Free</p></u> 
                        </div>
                    </div>    
                    <div className="ml-2  max-[474px]:-ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match hidden max-[675px]:block" width="24" height="24" focusable="false">
                        <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
                        </svg>
                    </div>
                </div>    
            </div>                
        </nav>
    </header>

  )
}
