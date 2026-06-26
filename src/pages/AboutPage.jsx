import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaUsers,
  FaAward,
  FaRocket,
} from "react-icons/fa";

export default function AboutPage() {

  const cards = [
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      desc: "We focus on practical learning using modern technologies and industry trends.",
    },
    {
      icon: <FaUsers />,
      title: "Community",
      desc: "Thousands of learners collaborate, grow, and achieve together.",
    },
    {
      icon: <FaAward />,
      title: "Quality",
      desc: "Expert mentors, structured courses and real-world projects.",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="pt-36 pb-24 bg-gradient-to-r from-orange-50 via-white to-purple-50">

        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >

            <span className="bg-orange-100 text-orange-600 px-5 py-2 rounded-full">
              About LearnSphere
            </span>

            <h1 className="text-6xl font-black mt-8">
              Learn Today.
              <br />
              Lead Tomorrow.
            </h1>

            <p className="mt-8 text-gray-600 max-w-3xl mx-auto leading-8">
              LearnSphere is an online learning platform helping students
              develop technical skills through interactive courses,
              live projects and expert mentorship.
            </p>

          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">

            {cards.map((item, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl shadow-xl p-8"
              >

                <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 text-3xl">

                  {item.icon}

                </div>

                <h2 className="text-2xl font-bold mt-6">
                  {item.title}
                </h2>

                <p className="mt-4 text-gray-600 leading-7">
                  {item.desc}
                </p>

              </motion.div>

            ))}

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">

            {[
              ["15K+", "Students"],
              ["120+", "Courses"],
              ["40+", "Mentors"],
              ["98%", "Success"],
            ].map(([num, label], i) => (

              <div
                key={i}
                className="bg-orange-600 rounded-3xl text-white text-center p-8"
              >

                <h2 className="text-4xl font-black">
                  {num}
                </h2>

                <p className="mt-3">
                  {label}
                </p>

              </div>

            ))}

          </div>

          <div className="mt-24 bg-white rounded-[40px] shadow-xl p-10 grid lg:grid-cols-2 gap-10 items-center">

            <div>

              <h2 className="text-4xl font-black">
                Why Choose LearnSphere?
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                We combine structured learning, practical projects,
                mentorship and career guidance to help students
                become job-ready developers.
              </p>

              <div className="space-y-4 mt-8">

                <p>✅ Practical Learning</p>

                <p>✅ Industry Projects</p>

                <p>✅ Career Guidance</p>

                <p>✅ Certification</p>

              </div>

            </div>

            <div className="flex justify-center">

              <div className="w-72 h-72 rounded-full bg-orange-100 flex items-center justify-center">

                <FaRocket className="text-8xl text-orange-600"/>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}
