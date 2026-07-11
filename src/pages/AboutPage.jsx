import SectionTitle from "../components/SectionTitle";
import profilePhoto from "../assets/me.jpeg";

export default function AboutPage() {
  return <section className="page-shell py-12">
    <SectionTitle eyebrow="About us" title="Welcome to BRABU BCA Hub!" text="A free educational platform created to help students of Babasaheb Bhimrao Ambedkar Bihar University (BRABU)." />
    <div className="grid gap-8 lg:grid-cols-[1fr_260px]">
      <div className="space-y-6 text-slate-600 dark:text-slate-300">
        <p>Our goal is to make academic resources easily accessible in one place. Currently, our primary focus is providing Previous Year Question Papers (PYQs) for all BCA semesters. In the future, we plan to add notes, syllabus, important questions, practical files, exam updates and results.</p>
        <article><h2 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h2><p className="mt-2">To save students' time by providing reliable and organized study materials on a single platform. Every student should have free access to quality academic resources.</p></article>
        <article><h2 className="text-xl font-bold text-slate-900 dark:text-white">What You Can Find Here</h2><ul className="mt-2 grid list-disc gap-1 pl-5 sm:grid-cols-2"><li>Semester-wise PYQs</li><li>Latest syllabus</li><li>Study notes</li><li>Important questions</li><li>Practical resources</li><li>Exam updates and results</li></ul></article>
        <article><h2 className="text-xl font-bold text-slate-900 dark:text-white">Why Choose BRABU BCA Hub?</h2><p className="mt-2">Free to use, simple and fast, mobile-friendly, well-organized and regularly updated with useful student resources.</p></article>
        <article className="rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-5 dark:bg-blue-950/30"><h2 className="font-bold text-slate-900 dark:text-white">Disclaimer</h2><p className="mt-2 text-sm">This website is an independent educational resource and is not officially affiliated with Babasaheb Bhimrao Ambedkar Bihar University (BRABU). All study materials are shared only for educational purposes.</p></article>
      </div>
      <aside className="rounded-2xl bg-white p-5 shadow-soft dark:bg-slate-900"><img src={profilePhoto} alt="BRABU BCA Hub developer" className="aspect-square w-full rounded-xl object-cover"/><p className="mt-4 text-center font-bold">BRABU BCA Hub</p><p className="mt-1 text-center text-sm text-slate-500">Free educational resources for BCA students</p></aside>
    </div>
  </section>;
}
