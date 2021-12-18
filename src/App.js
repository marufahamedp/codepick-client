import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Register/Register/Register';
import Projects from './Pages/Projects/Projects/Projects';
import Blogs from './Pages/Blogs/Blogs/Blogs';
import About from './Pages/About/About/About';
import Contact from './Pages/Contact/Contact/Contact';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ManageProjects from './Pages/Dashboard/ManageProjects/ManageProjects/ManageProjects';
import ManageUsers from './Pages/Dashboard/ManageUsers/ManageUsers/ManageUsers';
import ManageReviews from './Pages/Dashboard/ManageReviews/ManageReviews/ManageReviews';
import AddProjects from './Pages/Dashboard/AddProjects/AddProjects/AddProjects';
import ManageTeam from './Pages/Dashboard/ManageTeam/ManageTeam/ManageTeam';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome/DashboardHome';
import ProjectDetails from './Pages/Shared/ProjectDetails/ProjectDetails';
import ManageServices from './Pages/Dashboard/ManageServices/ManageServices/ManageServices';
import AddService from './Pages/Dashboard/AddService/AddService';
import Services from './Pages/Home/Services/Services/Services';
import ServiceDetails from './Pages/Shared/ServiceDetails/ServiceDetails';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import AddBlogs from './Pages/Dashboard/AddBlogs/AddBlogs';
import BlogsDetails from './Pages/Shared/BlogsDetails/BlogsDetails';
import Orders from './Pages/Dashboard/Orders/Orders/Orders';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders/ManageAllOrders/ManageAllOrders';

function App() {
  return (
    <div className="App">
     <AuthProvider>
        <Router>
          <Routes>
            <Route path="/home" element={<Home />}>
            </Route>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/projects" element={<Projects />}>
            </Route>
            <Route path="/services" element={<Services />}>
            </Route>
            <Route path="/projects/:peojectID" element={<ProjectDetails />}>
            </Route>
            <Route path="/services/:serviceID" element={<ServiceDetails />}>
            </Route>
            <Route path="/blogs" element={<Blogs />}>
            </Route>
            <Route path="/blogs/:blogID" element={<BlogsDetails />}>
            </Route>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/contact" element={<Contact />}>
            </Route>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/register" element={<Register />}>
            </Route>
            <Route path="/dashboard" element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>}>
            <Route path="/dashboard" element={<DashboardHome />} /> 
            <Route path="/dashboard/manageprojects" element={<ManageProjects />} /> 
            <Route path="/dashboard/manageusers" element={<ManageUsers />} />
            <Route path="/dashboard/managereviews" element={<ManageReviews />} />
            <Route path="/dashboard/addprojects" element={<AddProjects />} />
            <Route path="/dashboard/manageteam" element={<ManageTeam />} />
            <Route path="/dashboard/manageservices" element={<ManageServices />} />
            <Route path="/dashboard/addservice" element={<AddService />} />
            <Route path="/dashboard/addreview" element={<AddReview />} />
            <Route path="/dashboard/addblog" element={<AddBlogs />} />
            <Route path="/dashboard/orders" element={<Orders />} />
            <Route path="/dashboard/manageallorderes" element={<ManageAllOrders />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
