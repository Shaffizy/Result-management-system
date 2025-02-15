import React from 'react';
import SideBar from './Component/SideBar';
import Header from './Component/Header';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import StudentLevels from './Sections/SchoolLevel';

const studentData = [
  { level: '100', count: 150 },
  { level: '200', count: 130 },
  { level: '300', count: 120 },
  { level: '400', count: 100 },
];

const StudentApp = () => {
  return (
    <div>
      <div className="flex h-screen bg-gray-200 font-poppins">
        <SideBar/>
        <main className="flex-1 flex flex-col ">
          <Header/>
          <h1 className="px-10 text-2xl font-medium pt-[170px] md:pt-4 "> Admin Dashboard</h1>          
          <div className="flex flex-row gap-1 px-10 pt-2 pb-8 text-base text-gray-700">
            <p>Home</p>
            <Link to="/" className="flex flex-row gap-1 hover:text-purple-400">
              <IoIosArrowForward size={23} className="pt-1" />
              Admin
            </Link>
            <Link to="/student" className="flex flex-row gap-1 text-purple-700">
              <IoIosArrowForward size={23} className="pt-1" />
              Student Level
            </Link>
          </div>
          <StudentLevels data={studentData} title="Student Levels"  count="Number of Student" view="/view"/>
        </main>
      </div>
    </div>
  );
};

export default StudentApp;