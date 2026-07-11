import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Footer() {
  return <footer className="mt-20 border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
    <div className="page-shell grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-3">
      <div><p className="font-bold">BRABU BCA Hub</p><p className="mt-2 text-sm text-slate-500">Everything a BRABU BCA Student Needs.</p></div>
      <div><p className="font-semibold">Useful links</p><div className="mt-2 flex flex-col gap-1 text-sm text-slate-500"><Link to="/pyq">Question papers</Link><Link to="/syllabus">Syllabus</Link><Link to="/important-links">Official links</Link></div></div>
      <div><p className="font-semibold">Developer</p><a className="mt-2 inline-flex items-center gap-2 text-sm text-blue-600" href="mailto:m4740600@gmail.com"><EnvelopeIcon className="h-4 w-4"/>m4740600@gmail.com</a><p className="mt-3 text-xs text-slate-500">© {new Date().getFullYear()} BRABU BCA Hub.</p></div>
    </div>
  </footer>;
}
