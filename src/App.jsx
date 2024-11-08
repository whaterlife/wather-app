import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./pages/home";
import LeakReportForm from "./pages/home/LeakReportForm";
import PlumbersChecklist from "./pages/plist/PlumbersCheckList";
import Dashboard from "./pages/plumber-dashboard/index";
import UserSignup from "./pages/user/UserSignUp";
import LogIn from "./pages/user/UserLogin";
import UserOther from "./pages/user/UserOther";
import Plumbersignup from "./pages/plumber/PlumberSignUp";
import PlumberLogin from "./pages/plumber/PlumberLogin";
import PlumberList from "./pages/plist/PlumberList";
import Statistics from "./pages/statistics";
import LeakageReportList from "./pages/home/ReportleakageList";
import AdminDashboard from "./pages/admin-dashboard";
import AdminLogin from "./pages/admin-dashboard/login";
import Resources from "./pages/resources";
import ResourcesAd from "./pages/admin-dashboard/resourcesad";


function App() {
  const router = createBrowserRouter([
    {
      path: '/log',
      element: <LogIn />,
    },
    {
      path: '/',
      element: <Hero />,
    },
    {
      path: '/sign',
      element: <UserSignup/>,
    },
     
    {
      path: '/list',
      element: <PlumberList/>
    },
    {
      path: '/checklist',
      element: <PlumbersChecklist />,
    },
    {
      path: '/dash',
      element: <Dashboard />,
    },

    {
      path: '/useother',
      element: <UserOther />,
    },
    {
      path: '/plumber',
      element: <Plumbersignup />,
    },
    {
      path: '/plogin',
      element: <PlumberLogin />,
    },
    {
      path: '/leak',
      element: <LeakReportForm />,
    },
    {
      path: '/stat',
      element: <Statistics/>,
    },
    {
      path: 'reportlist',
      element: <LeakageReportList />,
    },

    {
      path: 'admin',
      element: <AdminDashboard />,
    },
    {
      path: '/adlog',
      element: <AdminLogin/>,
    },
    {
      path: '/adres',
      element: <ResourcesAd/>,
    },
    {
      path: '/res',
      element: <Resources/>,
    },
     



  ]);

  return <RouterProvider router={router} />;
}

export default App;
