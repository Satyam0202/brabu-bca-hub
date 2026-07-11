import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { semesters } from "../utils/content";

const colors = ["from-emerald-700 to-emerald-900", "from-blue-700 to-slate-700", "from-violet-700 to-slate-700", "from-amber-700 to-stone-700", "from-pink-800 to-rose-900", "from-cyan-700 to-blue-900"];

export default function PyqPage() {
  return <section className="page-shell py-12">
    <SectionTitle eyebrow="Previous Year Questions" title="BCA PYQ — semester-wise" text="Select a semester to access all available previous year question papers." />
    <div className="grid gap-6 lg:grid-cols-2">
      {semesters.map((semester, index) => <Link key={semester.number} to={`/semester/${semester.number}`} className={`group relative min-h-72 overflow-hidden rounded-2xl bg-gradient-to-br p-7 text-white shadow-soft transition hover:-translate-y-1 ${colors[index]}`}>
        <span className="rounded-lg bg-black/40 px-3 py-1 text-xs font-semibold text-blue-100">Previous Year Questions</span>
        <p className="mt-7 text-2xl font-bold">BCA <span className="text-sm">[ {semester.title} ]</span></p>
        <p className="mt-3 font-semibold">Subjects covered in this PYQ:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/95">{semester.subjects.map(subject => <li key={subject.id}>{subject.subject}</li>)}</ul>
        <p className="mt-5 font-semibold">Covered sessions:</p>
        <p className="text-sm text-white/90">{semester.sessions.join(", ")}</p>
        <span className="mt-5 inline-flex items-center gap-2 font-semibold">View PYQ <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" /></span>
        <span className="pointer-events-none absolute -bottom-10 right-5 text-[12rem] font-black leading-none text-white/10">{semester.number}</span>
      </Link>)}
    </div>
  </section>;
}
