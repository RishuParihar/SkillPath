import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function NotFoundPage() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-orange-50 via-white to-purple-50 flex items-center justify-center px-6">

      <div className="bg-white rounded-[40px] shadow-2xl p-12 text-center max-w-xl">

        <h1 className="text-8xl font-black text-orange-600">
          404
        </h1>

        <h2 className="text-4xl font-bold mt-6">
          Oops!
        </h2>

        <p className="text-gray-600 mt-6 leading-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-3 mt-10 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-semibold transition"
        >
          <FaHome />
          Back Home
        </Link>

      </div>

    </section>
  );
}
