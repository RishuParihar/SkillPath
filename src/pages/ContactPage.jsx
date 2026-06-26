import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactPage() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.subject ||
      !form.message
    ) {
      alert("Please fill all fields");
      return;
    }

    setSuccess("✅ Message Sent Successfully!");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  };

  return (
    <>
      <Navbar />

      <section className="pt-36 pb-24 bg-gradient-to-r from-orange-50 via-white to-purple-50">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14">

          <div>

            <span className="bg-orange-100 text-orange-600 px-5 py-2 rounded-full">
              Contact Us
            </span>

            <h1 className="text-5xl font-black mt-8">
              We'd Love
              <br />
              To Hear From You
            </h1>

            <p className="mt-6 text-gray-600 leading-8">
              Have questions? Need help?
              Contact our support team anytime.
            </p>

            <div className="space-y-8 mt-12">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-orange-600 text-2xl"/>
                support@learnsphere.com
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-orange-600 text-2xl"/>
                +91 9876543210
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-orange-600 text-2xl"/>
                Noida, India
              </div>

            </div>

          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-[40px] p-10 space-y-5"
          >

            <input
              className="w-full border rounded-xl p-4"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
            />

            <input
              className="w-full border rounded-xl p-4"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />

            <input
              className="w-full border rounded-xl p-4"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
            />

            <textarea
              rows="5"
              className="w-full border rounded-xl p-4"
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
            />

            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl font-semibold">
              Send Message
            </button>

            {success && (
              <p className="text-green-600 font-semibold text-center">
                {success}
              </p>
            )}

          </form>

        </div>

      </section>

      <Footer />

    </>
  );
}
