import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardHome.css';
const DashboardHome = () => {
    return (
        <div  className="container">
             <h1 className="text-center fw-bolder py-2">
              Dashboard
          </h1>
               <div className="row g-4">
               <div className="col-lg-6">
                    <div className="text-center d-inline-block border border-3 p-4 dashbord-box  w-100">
                        <h2>Total Projects</h2>
                        <h1>03</h1>
                        <Link to="/dashboard/manageprojects">
                        <button className="codepickjs-btn">Manage All Projects</button>
                        </Link>
                       
                    </div>    
                </div>
                <div className="col-lg-6">
                    <div className="text-center d-inline-block border border-3 p-4 dashbord-box  w-100">
                        <h2>Total Team Members</h2>
                        <h1>03</h1>
                        <Link to="/dashboard/manageteam">
                        <button className="codepickjs-btn">Manage All Team Members</button>
                        </Link>
                       
                    </div>    
                </div>
                <div className="col-lg-6">
                    <div className="text-center d-inline-block border border-3 p-4 dashbord-box  w-100">
                        <h2>Total Users</h2>
                        <h1>03</h1>
                        <Link to="/dashboard/manageusers">
                        <button className="codepickjs-btn">Manage All Users</button>
                        </Link>
                       
                    </div>    
                </div>
                <div className="col-lg-6">
                    <div className="text-center d-inline-block border border-3 p-4 dashbord-box  w-100">
                        <h2>Total Reviews</h2>
                        <h1>03</h1>
                        <Link to="/dashboard/managereviews">
                        <button className="codepickjs-btn">Manage All Reviews</button>
                        </Link>
                       
                    </div>    
                </div>
               </div>


            
        </div>
    );
};

export default DashboardHome;