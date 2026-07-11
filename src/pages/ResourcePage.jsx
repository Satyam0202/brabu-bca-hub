import SectionTitle from "../components/SectionTitle";

export default function ResourcePage({ title }) {
  return <section className="page-shell grid min-h-[55vh] place-items-center py-12 text-center">
    <div className="max-w-lg rounded-3xl bg-white p-10 shadow-soft dark:bg-slate-900">
      <p className="text-sm font-bold uppercase tracking-widest text-blue-600">{title}</p>
      <h1 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">Sorry, we are working on this.</h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300">This section will be available soon. Please check the PYQ section while we prepare more useful resources for BRABU BCA students.</p>
    </div>
  </section>;
}
