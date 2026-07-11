import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
const links = [["Home","/"],["PYQ","/pyq"],["Notes","/notes"],["Syllabus","/syllabus"],["Practical","/practical"],["Important Links","/important-links"],["About","/about"]];
export default function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);
  const item = ({isActive}) => `rounded-lg px-3 py-2 text-sm font-medium ${isActive ? "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300" : "text-slate-600 hover:text-blue-600 dark:text-slate-300"}`;
  return <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90"><div className="page-shell flex h-16 items-center justify-between">
    <Link to="/" className="flex items-center gap-2 font-bold text-slate-900 dark:text-white"><span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-600 text-white">B</span>BRABU BCA Hub</Link>
    <nav className="hidden items-center gap-1 lg:flex">{links.map(([name,path])=><NavLink key={path} to={path} className={item}>{name}</NavLink>)}</nav>
    <div className="flex items-center gap-1"><button onClick={()=>setDarkMode(!darkMode)} className="focus-ring rounded-lg p-2 text-slate-600 dark:text-slate-300" aria-label="Toggle dark mode">{darkMode?<SunIcon className="h-5 w-5"/>:<MoonIcon className="h-5 w-5"/>}</button><button onClick={()=>setOpen(!open)} className="focus-ring rounded-lg p-2 lg:hidden" aria-label="Toggle menu">{open?<XMarkIcon className="h-6 w-6"/>:<Bars3Icon className="h-6 w-6"/>}</button></div>
  </div>{open&&<nav className="page-shell flex flex-col gap-1 border-t border-slate-100 py-3 lg:hidden dark:border-slate-800">{links.map(([name,path])=><NavLink key={path} onClick={()=>setOpen(false)} to={path} className={item}>{name}</NavLink>)}</nav>}</header>;
}
