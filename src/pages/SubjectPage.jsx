import { ArrowDownTrayIcon, EyeIcon, LinkIcon } from "@heroicons/react/24/outline";
import { Link, useParams } from "react-router-dom";
import Button from "../components/Button";
import { getSemester, getSubject } from "../utils/content";
import { semester1DownloadUrl, semester1PreviewUrl } from "../utils/drive";

export default function SubjectPage() {
  const { semester, subjectId } = useParams();
  const subject = getSubject(semester, subjectId);
  const data = getSemester(semester);
  if (!subject) return null;
  const copy = () => navigator.clipboard.writeText(location.href);
  const isSemester1 = Number(semester) === 1;

  return <section className="page-shell py-12">
    <Link to={`/semester/${semester}`} className="text-sm font-semibold text-blue-600">← {data.title}</Link>
    <div className="mt-5 rounded-3xl bg-white p-8 shadow-soft dark:bg-slate-900"><p className="text-sm font-bold uppercase tracking-widest text-blue-600">{data.title}</p><h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">{subject.subject}</h1><p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">{subject.description}</p><Button onClick={copy} variant="secondary" className="mt-5"><LinkIcon className="h-4 w-4" />Copy page link</Button></div>
    <h2 className="mt-10 text-2xl font-bold">Question papers</h2>
    <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{subject.papers.map(paper => <div key={paper.year} className="rounded-2xl bg-white p-5 shadow-soft dark:bg-slate-900"><span className="font-bold">{paper.year}</span><div className="mt-4 flex gap-2">{isSemester1 ? <><Button href={semester1PreviewUrl} variant="secondary" className="flex-1 px-3"><EyeIcon className="h-4 w-4" />Preview</Button><Button href={semester1DownloadUrl} className="flex-1 px-3"><ArrowDownTrayIcon className="h-4 w-4" />Download</Button></> : <Button href={paper.link} className="w-full"><ArrowDownTrayIcon className="h-4 w-4" />Open paper</Button>}</div></div>)}</div>
  </section>;
}
