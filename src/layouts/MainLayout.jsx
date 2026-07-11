import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
export default function MainLayout({ darkMode, setDarkMode }) { return <div className="flex min-h-screen flex-col"><Navbar darkMode={darkMode} setDarkMode={setDarkMode}/><main className="flex-1"><Outlet/></main><Footer/><ScrollToTop/></div>; }
