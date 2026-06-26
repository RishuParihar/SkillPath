import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Frontend Developer",
    review:
      "LearnSphere completely transformed my coding journey. The projects were practical and easy to follow.",
  },
  {
    name: "Priya Singh",
    role: "UI Designer",
    review:
      "The mentors were supportive and helped me improve my frontend skills.",
  },
  {
    name: "Aman Gupta",
    role: "Software Engineer",
    review:
      "One of the best learning platforms for beginners and college students.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-orange-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="bg-orange-100 text-orange-600 px-5 py-2 rounded-full">
            Testimonials
          </span>

          <h2 className="text-5xl font-black mt-6">
            What Our Students Say
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >

              <div className="text-yellow-500 text-2xl">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="mt-6 text-gray-600 leading-7">
                "{item.review}"
              </p>

              <h3 className="mt-8 font-bold text-xl">
                {item.name}
              </h3>

              <p className="text-orange-600">
                {item.role}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
