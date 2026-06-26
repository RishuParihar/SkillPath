import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureCard from "../components/FeatureCard";
import TestimonialSection from "../components/TestimonialSection";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

import {
  FaLaptopCode,
  FaCertificate,
  FaUsers,
  FaRocket,
} from "react-icons/fa";

export default function LandingPage() {

  const features = [

    {
      icon:<FaLaptopCode/>,
      title:"Interactive Courses",
      description:"Hands-on learning through practical coding."
    },

    {
      icon:<FaUsers/>,
      title:"Expert Mentors",
      description:"Learn directly from industry professionals."
    },

    {
      icon:<FaCertificate/>,
      title:"Certificates",
      description:"Receive certificates after course completion."
    },

    {
      icon:<FaRocket/>,
      title:"Career Growth",
      description:"Build projects and prepare for placements."
    }

  ];

  return (

    <>

      <Navbar/>

      <HeroSection/>

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <span className="bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-semibold">
              Why LearnSphere?
            </span>

            <h2 className="text-5xl font-black mt-6">
              Learn Better. Grow Faster.
            </h2>

            <p className="mt-6 text-gray-600">
              Practical learning with modern technology.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {

              features.map((item,index)=>(

                <FeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                />

              ))

            }

          </div>

        </div>

      </section>

      <TestimonialSection/>

      <CTABanner/>

      <Footer/>

    </>

  )

}
