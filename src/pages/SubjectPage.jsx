import { LinkIcon } from "@heroicons/react/24/outline";
import { Link, useParams } from "react-router-dom";
import Button from "../components/Button";
import { getSemester, getSubject } from "../utils/content";

export default function SubjectPage() {
  const { semester, subjectId } = useParams();
  const subject = getSubject(semester, subjectId);
  const data = getSemester(semester);
  if (!subject) return null;
  const copy = () => navigator.clipboard.writeText(location.href);

  return <section className="page-shell py-12">
    <Link to={`/semester/${semester}`} className="text-sm font-semibold text-blue-600">← {data.title}</Link>
    <div className="mt-5 rounded-3xl bg-white p-8 shadow-soft dark:bg-slate-900"><p className="text-sm font-bold uppercase tracking-widest text-blue-600">{data.title}</p><h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">{subject.subject}</h1><p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">{subject.description}</p><Button onClick={copy} variant="secondary" className="mt-5"><LinkIcon className="h-4 w-4" />Copy page link</Button></div>
    <div className="mt-10 rounded-2xl bg-white p-6 shadow-soft dark:bg-slate-900"><h2 className="text-2xl font-bold">Question papers</h2><p className="mt-2 text-slate-600 dark:text-slate-300">Papers for this semester will appear here after they are added to the website folder.</p></div>
  </section>;
}
