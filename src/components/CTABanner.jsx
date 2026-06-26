import { Link } from "react-router-dom";

export default function CTABanner() {
  return (
    <section className="py-24 bg-gradient-to-r from-orange-500 to-purple-600">

      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-white rounded-[40px] shadow-2xl p-12 text-center">

          <span className="bg-orange-100 text-orange-600 px-5 py-2 rounded-full">
            🚀 Join Today
          </span>

          <h2 className="text-5xl font-black mt-8 text-gray-900">
            Start Your Learning Journey
          </h2>

          <p className="mt-6 text-gray-600 leading-8 max-w-2xl mx-auto">
            Build real-world projects, learn from experts and
            become industry ready with LearnSphere.
          </p>

          <div className="flex justify-center gap-5 mt-10 flex-wrap">

            <Link
              to="/contact"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-semibold transition"
            >
              Get Started
            </Link>

            <Link
              to="/about"
              className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-full font-semibold transition"
            >
              Learn More
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}
