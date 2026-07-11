import { Link } from "react-router-dom";
const styles = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-white text-blue-700 ring-1 ring-blue-200 hover:bg-blue-50 dark:bg-slate-800 dark:text-blue-300 dark:ring-slate-700",
  ghost: "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
};
export default function Button({ children, to, href, variant = "primary", className = "", ...props }) {
  const classes = `focus-ring inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${styles[variant]} ${className}`;
  if (to) return <Link to={to} className={classes} {...props}>{children}</Link>;
  if (href) return <a href={href} target="_blank" rel="noreferrer" className={classes} {...props}>{children}</a>;
  return <button className={classes} {...props}>{children}</button>;
}
