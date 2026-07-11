import { ArrowDownTrayIcon, CalendarDaysIcon, DocumentTextIcon, EyeIcon, FolderOpenIcon } from "@heroicons/react/24/outline";
import { Link, useParams } from "react-router-dom";
import Button from "../components/Button";
import { getLocalPaperUrl, getSemesterSession } from "../utils/drive";

export default function DriveFolderPage() {
  const { semester, sessionId } = useParams();
  const session = getSemesterSession(semester, sessionId);
  if (!session) return null;

  return <section className="page-shell py-10 sm:py-14">
    <Link to={`/semester/${semester}`} className="focus-ring inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100 dark:bg-blue-950/60 dark:text-blue-300 dark:hover:bg-blue-900/60">← Back to Semester {semester}</Link>

    <div className="relative mt-6 overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-7 text-white shadow-soft sm:p-10">
      <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" /><div className="absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-cyan-300/15 blur-2xl" />
      <div className="relative flex items-end justify-between gap-6"><div><div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-50 ring-1 ring-white/20"><CalendarDaysIcon className="h-4 w-4" />Semester {semester} · Session</div><h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">{session.label}</h1><p className="mt-2 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">{session.files.length} papers stored directly in this website. Preview or download any file below.</p></div><FolderOpenIcon className="h-12 w-12 text-white/70" /></div>
    </div>

    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {session.files.map((file) => { const url = getLocalPaperUrl(file.path); const isPdf = file.name.toLowerCase().endsWith(".pdf"); return <article key={file.path} className="rounded-2xl bg-white p-5 shadow-soft dark:bg-slate-900"><DocumentTextIcon className="h-8 w-8 text-red-500" /><h2 className="mt-4 break-words font-bold text-slate-900 dark:text-white">{file.name.replace(/^.*\//, "").replace(/\.(pdf|docx)$/i, "")}</h2><p className="mt-2 text-xs text-slate-500">Stored in website folder</p><div className="mt-5 flex gap-2">{isPdf && <Button href={url} variant="secondary" className="flex-1 px-3"><EyeIcon className="h-4 w-4" />Preview</Button>}<a href={url} download className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"><ArrowDownTrayIcon className="h-4 w-4" />Download</a></div></article>; })}
    </div>
  </section>;
}
