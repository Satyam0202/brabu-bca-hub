import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
export default function ScrollToTop() { const [show,setShow]=useState(false); useEffect(()=>{const f=()=>setShow(scrollY>350); addEventListener("scroll",f); return()=>removeEventListener("scroll",f)},[]); return show&&<button onClick={()=>scrollTo({top:0,behavior:"smooth"})} className="focus-ring fixed bottom-5 right-5 z-30 rounded-full bg-blue-600 p-3 text-white shadow-soft" aria-label="Scroll to top"><ArrowUpIcon className="h-5 w-5"/></button>; }
