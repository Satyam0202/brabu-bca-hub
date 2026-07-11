import { FolderIcon } from "@heroicons/react/24/outline";
import { Link, useParams } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { getSemester } from "../utils/content";
import { getSemesterSessions } from "../utils/drive";

export default function SemesterPage() {
  const { semester } = useParams();
  const data = getSemester(semester);
  if (!data) return null;
  const sessions = getSemesterSessions(semester);
  const hasSessions = sessions.length > 0;

  return <section className="page-shell py-12">
    <Link to="/pyq" className="text-sm font-semibold text-blue-600">← All semesters</Link>
    <div className="mt-5"><SectionTitle eyebrow="Previous year papers" title={data.title} text={hasSessions ? "Choose your session to browse its files." : "Select a subject to open available question papers."} /></div>
    {hasSessions ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{sessions.map(session => <Link key={session.id} to={`/semester/${semester}/session/${session.id}`} className="group rounded-2xl bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:ring-2 hover:ring-blue-500 dark:bg-slate-900"><FolderIcon className="h-9 w-9 text-blue-600" /><h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">{session.label}</h3><p className="mt-2 text-sm text-slate-500">View question papers in this session</p><p className="mt-5 text-sm font-semibold text-blue-600">Open folder →</p></Link>)}</div> : <div className="grid gap-5 md:grid-cols-2">{data.subjects.map(subject => <Link key={subject.id} to={`/semester/${semester}/subject/${subject.id}`} className="rounded-2xl bg-white p-6 shadow-soft transition hover:-translate-y-1 dark:bg-slate-900"><h3 className="font-bold text-slate-900 dark:text-white">{subject.subject}</h3><p className="mt-2 text-sm text-slate-500">{subject.description}</p><p className="mt-5 text-sm font-semibold text-blue-600">View papers →</p></Link>)}</div>}
  </section>;
}
