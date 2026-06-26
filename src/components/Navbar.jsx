
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar(){

const [open,setOpen]=useState(false);

return(

<header className="fixed top-0 w-full bg-white shadow z-50">

<div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6">

<Link
to="/"
className="text-3xl font-black text-orange-600"
>

LearnSphere

</Link>

<nav className="hidden md:flex gap-8">

<NavLink to="/">Home</NavLink>

<NavLink to="/about">About</NavLink>

<NavLink to="/contact">Contact</NavLink>

</nav>

<button

className="md:hidden"

onClick={()=>setOpen(!open)}

>

{

open?

<HiX size={30}/>

:

<HiMenu size={30}/>

}

</button>

</div>

{

open&&(

<div className="md:hidden bg-white">

<NavLink

to="/"

className="block p-4"

>

Home

</NavLink>

<NavLink

to="/about"

className="block p-4"

>

About

</NavLink>

<NavLink

to="/contact"

className="block p-4"

>

Contact

</NavLink>

</div>

)

}

</header>

)

}
