import { ArrowDownTrayIcon, CalendarDaysIcon, FolderOpenIcon } from "@heroicons/react/24/outline";
import { Link, useParams } from "react-router-dom";
import Button from "../components/Button";
import { getEmbeddedFolderUrl, getFolderDownloadUrl, getSemesterSession } from "../utils/drive";

export default function DriveFolderPage() {
  const { semester, sessionId } = useParams();
  const session = getSemesterSession(semester, sessionId);
  if (!session) return null;

  return <section className="page-shell py-10 sm:py-14">
    <Link to={`/semester/${semester}`} className="focus-ring inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100 dark:bg-blue-950/60 dark:text-blue-300 dark:hover:bg-blue-900/60">← Back to Semester {semester}</Link>

    <div className="relative mt-6 overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-7 text-white shadow-soft sm:p-10">
      <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" /><div className="absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-cyan-300/15 blur-2xl" />
      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div><div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-50 ring-1 ring-white/20"><CalendarDaysIcon className="h-4 w-4" />Semester {semester} · Session</div><h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">{session.label}</h1><p className="mt-2 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">Browse all question papers below. Open any file for preview or download individual papers directly from the list.</p></div>
        <Button href={getFolderDownloadUrl(session.folderId)} className="bg-white text-blue-700 shadow-lg hover:bg-blue-50"><ArrowDownTrayIcon className="h-4 w-4" />Download session</Button>
      </div>
    </div>

    <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-4 dark:border-slate-800"><div className="grid h-10 w-10 place-items-center rounded-xl bg-red-50 text-red-500 dark:bg-red-950/40"><FolderOpenIcon className="h-5 w-5" /></div><div><h2 className="font-bold text-slate-900 dark:text-white">Session files</h2><p className="text-xs text-slate-500 dark:text-slate-400">Google Drive preview</p></div></div>
      <iframe title={`Semester ${semester} ${session.label} files`} src={getEmbeddedFolderUrl(session.folderId)} className="h-[62vh] min-h-[480px] w-full border-0" allow="clipboard-read; clipboard-write" />
    </div>
  </section>;
}
