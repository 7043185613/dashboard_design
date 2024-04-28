import React from 'react';
import logo from '../../Logo.png';
import avtar from '../../assests/Avatar.png';
import dropdown from '../../assests/chevron-down.png';
import drawer from '../../assests/layout-sidebar-right-expand.png';


function index() {
  return (


    <div className="w-full">
      <div className="flex flex-col top-0 left-0 bg-white h-full border-r ">
        <div className="flex items-center justify-evenly h-14 space-x-8">
          <img src={logo} alt="logo" />
          <img src={drawer} alt="drawericon" />
        </div>

        <div className="flex items-center justify-evenly h-14 ">
          <img src={avtar} alt="logo" />
          <span className="ml-2 text-sm tracking-wide truncate pr-20">Prakash</span>
          <img src={dropdown} alt="drawericon" />
        </div>

        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">BUILD & MANAGE</div>
              </div>
            </li>
            <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 4H17M14 1V7M1 2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H6C6.26522 1 6.51957 1.10536 6.70711 1.29289C6.89464 1.48043 7 1.73478 7 2V6C7 6.26522 6.89464 6.51957 6.70711 6.70711C6.51957 6.89464 6.26522 7 6 7H2C1.73478 7 1.48043 6.89464 1.29289 6.70711C1.10536 6.51957 1 6.26522 1 6V2ZM1 12C1 11.7348 1.10536 11.4804 1.29289 11.2929C1.48043 11.1054 1.73478 11 2 11H6C6.26522 11 6.51957 11.1054 6.70711 11.2929C6.89464 11.4804 7 11.7348 7 12V16C7 16.2652 6.89464 16.5196 6.70711 16.7071C6.51957 16.8946 6.26522 17 6 17H2C1.73478 17 1.48043 16.8946 1.29289 16.7071C1.10536 16.5196 1 16.2652 1 16V12ZM11 12C11 11.7348 11.1054 11.4804 11.2929 11.2929C11.4804 11.1054 11.7348 11 12 11H16C16.2652 11 16.5196 11.1054 16.7071 11.2929C16.8946 11.4804 17 11.7348 17 12V16C17 16.2652 16.8946 16.5196 16.7071 16.7071C16.5196 16.8946 16.2652 17 16 17H12C11.7348 17 11.4804 16.8946 11.2929 16.7071C11.1054 16.5196 11 16.2652 11 16V12Z" stroke="#666D80" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Applications</span>
              </a>
            </li>
            <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 5C9.46957 5 8.96086 4.78929 8.58579 4.41421C8.21071 4.03914 8 3.53043 8 3C8 2.46957 8.21071 1.96086 8.58579 1.58579C8.96086 1.21071 9.46957 1 10 1C10.5304 1 11.0391 1.21071 11.4142 1.58579C11.7893 1.96086 12 2.46957 12 3C12 3.53043 11.7893 4.03914 11.4142 4.41421C11.0391 4.78929 10.5304 5 10 5ZM10 5V13M10 13C10.5304 13 11.0391 13.2107 11.4142 13.5858C11.7893 13.9609 12 14.4696 12 15C12 15.5304 11.7893 16.0391 11.4142 16.4142C11.0391 16.7893 10.5304 17 10 17C9.46957 17 8.96086 16.7893 8.58579 16.4142C8.21071 16.0391 8 15.5304 8 15C8 14.4696 8.21071 13.9609 8.58579 13.5858C8.96086 13.2107 9.46957 13 10 13ZM4.316 9.496L8.684 4.504M15.684 9.496L11.318 4.506M5 11C5 10.4696 4.78929 9.96086 4.41421 9.58579C4.03914 9.21071 3.53043 9 3 9C2.46957 9 1.96086 9.21071 1.58579 9.58579C1.21071 9.96086 1 10.4696 1 11C1 11.5304 1.21071 12.0391 1.58579 12.4142C1.96086 12.7893 2.46957 13 3 13C3.53043 13 4.03914 12.7893 4.41421 12.4142C4.78929 12.0391 5 11.5304 5 11ZM19 11C19 10.4696 18.7893 9.96086 18.4142 9.58579C18.0391 9.21071 17.5304 9 17 9C16.4696 9 15.9609 9.21071 15.5858 9.58579C15.2107 9.96086 15 10.4696 15 11C15 11.5304 15.2107 12.0391 15.5858 12.4142C15.9609 12.7893 16.4696 13 17 13C17.5304 13 18.0391 12.7893 18.4142 12.4142C18.7893 12.0391 19 11.5304 19 11Z" stroke="#666D80" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Omni Channel</span>
              </a>
            </li>
            <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 8C18.7956 8 19.5587 8.31607 20.1213 8.87868C20.6839 9.44129 21 10.2044 21 11C21 11.7956 20.6839 12.5587 20.1213 13.1213C19.5587 13.6839 18.7956 14 18 14M10 8V19C10 19.2652 9.89464 19.5196 9.70711 19.7071C9.51957 19.8946 9.26522 20 9 20H8C7.73478 20 7.48043 19.8946 7.29289 19.7071C7.10536 19.5196 7 19.2652 7 19V14M12 7.99999L16.524 4.22999C16.6555 4.1205 16.8154 4.05075 16.9851 4.0289C17.1548 4.00705 17.3271 4.03402 17.482 4.10664C17.6369 4.17927 17.7679 4.29454 17.8597 4.43894C17.9514 4.58335 18.0001 4.75091 18 4.92199V17.078C18.0001 17.2491 17.9514 17.4166 17.8597 17.561C17.7679 17.7055 17.6369 17.8207 17.482 17.8933C17.3271 17.966 17.1548 17.9929 16.9851 17.9711C16.8154 17.9492 16.6555 17.8795 16.524 17.77L12 14H4C3.73478 14 3.48043 13.8946 3.29289 13.7071C3.10536 13.5196 3 13.2652 3 13V8.99999C3 8.73478 3.10536 8.48042 3.29289 8.29289C3.48043 8.10535 3.73478 7.99999 4 7.99999H12Z" stroke="#666D80" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Campaign</span>
              </a>
            </li>
            <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 14H11M6 5L5 1M12 5L13 1M4 5H14C14.5304 5 15.0391 5.21071 15.4142 5.58579C15.7893 5.96086 16 6.46957 16 7V8L17 9V12L16 13V16C16 16.5304 15.7893 17.0391 15.4142 17.4142C15.0391 17.7893 14.5304 18 14 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V13L1 12V9L2 8V7C2 6.46957 2.21071 5.96086 2.58579 5.58579C2.96086 5.21071 3.46957 5 4 5ZM6 9.5C6 9.77614 5.77614 10 5.5 10C5.22386 10 5 9.77614 5 9.5C5 9.22386 5.22386 9 5.5 9C5.77614 9 6 9.22386 6 9.5ZM13 9.5C13 9.77614 12.7761 10 12.5 10C12.2239 10 12 9.77614 12 9.5C12 9.22386 12.2239 9 12.5 9C12.7761 9 13 9.22386 13 9.5Z" stroke="#666D80" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Bot Configuration</span>
                <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide "> <img src={dropdown} alt="drawericon" /></span>
              </a>
            </li>
            <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 9H9.51M14.5 9H14.51M9.5 13C9.82588 13.3326 10.2148 13.5968 10.6441 13.7772C11.0734 13.9576 11.5344 14.0505 12 14.0505C12.4656 14.0505 12.9266 13.9576 13.3559 13.7772C13.7852 13.5968 14.1741 13.3326 14.5 13M4 21V8C4 7.20435 4.31607 6.44129 4.87868 5.87868C5.44129 5.31607 6.20435 5 7 5H17C17.7956 5 18.5587 5.31607 19.1213 5.87868C19.6839 6.44129 20 7.20435 20 8V14C20 14.7956 19.6839 15.5587 19.1213 16.1213C18.5587 16.6839 17.7956 17 17 17H8L4 21Z" stroke="#666D80" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Live Chat</span>
              </a>
            </li>
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">Quick Links</div>
              </div>
            </li>
            <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 19V13C9 12.7348 8.89464 12.4804 8.70711 12.2929C8.51957 12.1054 8.26522 12 8 12H4C3.73478 12 3.48043 12.1054 3.29289 12.2929C3.10536 12.4804 3 12.7348 3 13V19C3 19.2652 3.10536 19.5196 3.29289 19.7071C3.48043 19.8946 3.73478 20 4 20M9 19C9 19.2652 8.89464 19.5196 8.70711 19.7071C8.51957 19.8946 8.26522 20 8 20H4M9 19C9 19.2652 9.10536 19.5196 9.29289 19.7071C9.48043 19.8946 9.73478 20 10 20H14C14.2652 20 14.5196 19.8946 14.7071 19.7071C14.8946 19.5196 15 19.2652 15 19M9 19V9C9 8.73478 9.10536 8.48043 9.29289 8.29289C9.48043 8.10536 9.73478 8 10 8H14C14.2652 8 14.5196 8.10536 14.7071 8.29289C14.8946 8.48043 15 8.73478 15 9V19M4 20H18M15 19C15 19.2652 15.1054 19.5196 15.2929 19.7071C15.4804 19.8946 15.7348 20 16 20H20C20.2652 20 20.5196 19.8946 20.7071 19.7071C20.8946 19.5196 21 19.2652 21 19V5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H16C15.7348 4 15.4804 4.10536 15.2929 4.29289C15.1054 4.48043 15 4.73478 15 5V19Z" stroke="#666D80" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Analytics</span>
              </a>
            </li>
            <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 5H21M13 9H18M13 15H21M13 19H18M3 5C3 4.73478 3.10536 4.48043 3.29289 4.29289C3.48043 4.10536 3.73478 4 4 4H8C8.26522 4 8.51957 4.10536 8.70711 4.29289C8.89464 4.48043 9 4.73478 9 5V9C9 9.26522 8.89464 9.51957 8.70711 9.70711C8.51957 9.89464 8.26522 10 8 10H4C3.73478 10 3.48043 9.89464 3.29289 9.70711C3.10536 9.51957 3 9.26522 3 9V5ZM3 15C3 14.7348 3.10536 14.4804 3.29289 14.2929C3.48043 14.1054 3.73478 14 4 14H8C8.26522 14 8.51957 14.1054 8.70711 14.2929C8.89464 14.4804 9 14.7348 9 15V19C9 19.2652 8.89464 19.5196 8.70711 19.7071C8.51957 19.8946 8.26522 20 8 20H4C3.73478 20 3.48043 19.8946 3.29289 19.7071C3.10536 19.5196 3 19.2652 3 19V15Z" stroke="#666D80" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Logs</span>
              </a>
            </li>
            <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.325 2.317C8.751 0.561 11.249 0.561 11.675 2.317C11.7389 2.5808 11.8642 2.82578 12.0407 3.032C12.2172 3.23822 12.4399 3.39985 12.6907 3.50375C12.9414 3.60764 13.2132 3.65085 13.4838 3.62987C13.7544 3.60889 14.0162 3.5243 14.248 3.383C15.791 2.443 17.558 4.209 16.618 5.753C16.4769 5.98466 16.3924 6.24634 16.3715 6.51677C16.3506 6.78721 16.3938 7.05877 16.4975 7.30938C16.6013 7.55999 16.7627 7.78258 16.9687 7.95905C17.1747 8.13553 17.4194 8.26091 17.683 8.325C19.439 8.751 19.439 11.249 17.683 11.675C17.4192 11.7389 17.1742 11.8642 16.968 12.0407C16.7618 12.2172 16.6001 12.4399 16.4963 12.6907C16.3924 12.9414 16.3491 13.2132 16.3701 13.4838C16.3911 13.7544 16.4757 14.0162 16.617 14.248C17.557 15.791 15.791 17.558 14.247 16.618C14.0153 16.4769 13.7537 16.3924 13.4832 16.3715C13.2128 16.3506 12.9412 16.3938 12.6906 16.4975C12.44 16.6013 12.2174 16.7627 12.0409 16.9687C11.8645 17.1747 11.7391 17.4194 11.675 17.683C11.249 19.439 8.751 19.439 8.325 17.683C8.26108 17.4192 8.13578 17.1742 7.95929 16.968C7.7828 16.7618 7.56011 16.6001 7.30935 16.4963C7.05859 16.3924 6.78683 16.3491 6.51621 16.3701C6.24559 16.3911 5.98375 16.4757 5.752 16.617C4.209 17.557 2.442 15.791 3.382 14.247C3.5231 14.0153 3.60755 13.7537 3.62848 13.4832C3.64942 13.2128 3.60624 12.9412 3.50247 12.6906C3.3987 12.44 3.23726 12.2174 3.03127 12.0409C2.82529 11.8645 2.58056 11.7391 2.317 11.675C0.561 11.249 0.561 8.751 2.317 8.325C2.5808 8.26108 2.82578 8.13578 3.032 7.95929C3.23822 7.7828 3.39985 7.56011 3.50375 7.30935C3.60764 7.05859 3.65085 6.78683 3.62987 6.51621C3.60889 6.24559 3.5243 5.98375 3.383 5.752C2.443 4.209 4.209 2.442 5.753 3.382C6.753 3.99 8.049 3.452 8.325 2.317Z" stroke="#666D80" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10Z" stroke="#666D80" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>


                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Settings</span>
              </a>
            </li>

          </ul>
        </div>
      </div>
    </div>

  )
}

export default index
