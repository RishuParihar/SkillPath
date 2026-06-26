import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        <div>

          <h2 className="text-3xl font-black text-orange-500">
            LearnSphere
          </h2>

          <p className="mt-5 text-gray-400 leading-7">
            Learn modern technologies through practical projects,
            expert mentors and career-focused learning.
          </p>

        </div>

        <div>

          <h3 className="font-bold text-xl mb-5">
            Quick Links
          </h3>

          <div className="space-y-3">

            <Link
              to="/"
              className="block hover:text-orange-500"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="block hover:text-orange-500"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="block hover:text-orange-500"
            >
              Contact
            </Link>

          </div>

        </div>

        <div>

          <h3 className="font-bold text-xl mb-5">
            Resources
          </h3>

          <div className="space-y-3">

            <p>Courses</p>

            <p>Projects</p>

            <p>Certificates</p>

            <p>Community</p>

          </div>

        </div>

        <div>

          <h3 className="font-bold text-xl mb-5">
            Follow Us
          </h3>

          <div className="flex gap-4">

            <div className="w-11 h-11 rounded-full bg-slate-800 hover:bg-orange-500 duration-300 flex items-center justify-center cursor-pointer">
              <FaFacebookF />
            </div>

            <div className="w-11 h-11 rounded-full bg-slate-800 hover:bg-pink-500 duration-300 flex items-center justify-center cursor-pointer">
              <FaInstagram />
            </div>

            <div className="w-11 h-11 rounded-full bg-slate-800 hover:bg-blue-500 duration-300 flex items-center justify-center cursor-pointer">
              <FaLinkedinIn />
            </div>

            <div className="w-11 h-11 rounded-full bg-slate-800 hover:bg-gray-500 duration-300 flex items-center justify-center cursor-pointer">
              <FaGithub />
            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-slate-700 py-6 text-center text-gray-400">
        © 2026 LearnSphere. All Rights Reserved.
      </div>

    </footer>
  );
}
