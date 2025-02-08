"use client";
import React from "react";
import {
  FaCamera,
  FaPaintBrush,
  FaMagic,
  FaFileImage,
  FaCropAlt,
  FaSync,
  FaAdjust,
  FaGlobe,
  FaUserTie,
  FaCogs,
  FaClock,
  FaDollarSign,
  FaSmile,
} from "react-icons/fa";

import { useState, useEffect } from "react";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
const banners = [
  "/img_3.jpeg",
  "/img_2.jpeg",
  "/img_1.jpeg", // Replace with actual image paths
];
import { Geist, Geist_Mono } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const features = [
  {
    id: 1,
    icon: <FaUserTie />,
    title: "Professionalism",
    description:
      "With years of experience in the industry, our team of skilled photo editors is dedicated to delivering superior results with every project.",
  },
  {
    id: 2,
    icon: <FaCogs />,
    title: "Customization",
    description:
      "We understand that every photo is unique, which is why we offer personalized solutions tailored to your specific requirements and preferences.",
  },
  {
    id: 3,
    icon: <FaClock />,
    title: "Quick Turnaround",
    description:
      "Time is of the essence, especially in today's fast-paced world. We pride ourselves on our quick turnaround times, ensuring you receive your edited photos promptly without sacrificing quality.",
  },
  {
    id: 4,
    icon: <FaDollarSign />,
    title: "Affordability",
    description:
      "Quality shouldn't come at a premium. Our competitive pricing ensures that professional photo editing services are accessible to individuals and businesses of all sizes.",
  },
  {
    id: 5,
    icon: <FaSmile />,
    title: "Customer Satisfaction",
    description:
      "Your satisfaction is our top priority. We work closely with you throughout the editing process to ensure we meet and exceed your expectations every step of the way.",
  },
];
const portfolioImages = [
  "/portfolio1.jpg",
  "/portfolio2.jpg",
  "/portfolio3.jpg",
  "/portfolio4.jpg",
  "/portfolio5.jpg",
  "/portfolio6.jpg",
];

// Define banner images

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexs, setCurrentIndexs] = useState(0);

  const nextSlides = () => {
    setCurrentIndexs((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prevSlides = () => {
    setCurrentIndexs((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Next Slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  // Previous Slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };
  const services = [
    {
      id: 1,
      icon: <FaCamera />,
      title: "Retouching",
      description:
        "Our Retouching service focuses on enhancing the overall appearance of your photos. From adjusting brightness and contrast to removing minor imperfections, we'll make sure your images look polished and professional",
    },
    {
      id: 2,
      icon: <FaPaintBrush />,
      title: "Advance Editing",
      description:
        "For those seeking a more intricate touch, our advanced editing service offers a comprehensive range of enhancements. Whether it's background removal, object manipulation, or creative effects, our team has the expertise to bring your ideas to life.",
    },
    {
      id: 3,
      icon: <FaMagic />,
      title: "Portrait Retouching",
      description:
        "Perfect for portraits and headshots, our portrait retouching service emphasizes natural beauty while minimizing flaws. From smoothing skin and whitening teeth to enhancing facial features, we'll ensure your subjects look their absolute best.",
    },
    {
      id: 4,
      icon: <FaFileImage />,
      title: "Product Enhancement",
      description:
        "In today's competitive market, high-quality product images are essential for attracting customers. Our product enhancement service focuses on optimizing your product photos for e-commerce platforms, catalogs, and marketing materials, helping you showcase your offerings in the best possible light.",
    },
    {
      id: 5,
      icon: <FaCropAlt />,
      title: "Color Correction",
      description:
        "Color correction in image editing refers to the process of adjusting and balancing the colors in an image to achieve a desired appearance or to correct issues with the color balance. This process is essential for ensuring that the colors in the image accurately represent the scene as perceived by the human eye or to achieve a specific artistic or stylistic effect. Following is the color correction we do: White balance adjustment, exposure adjustment, color adjustment, tone mapping, color grading, selective color correction",
    },
    {
      id: 6,
      icon: <FaSync />,
      title: "Product Shadow",
      description:
        "Creating or enhancing product shadows is a crucial technique to add realism, depth, and context to product photos. For eg. Creating natural shadows,drop shadows, reflection shadows,layering and masking, adjusting shadow intensity and color.",
    },
    {
      id: 7,
      icon: <FaAdjust />,
      title: "Ghost Mennequine",
      description:
        "For clothing and apparel, the 'ghost mannequin' technique is commonly used to create a seamless and professional appearance without the distraction of a visible model or mannequin.",
    },
    {
      id: 8,
      icon: <FaGlobe />,
      title: "Clipping path ",
      description:
        "Image cut out or isolating a specific portion of an image from its background.    Background removal and background adjustment.",
    },
  ];

  // Go to specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="main_font font-serif">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-purple-800">
                <Image src="/icon_1.png" alt="Logo" width={120} height={32} />
              </span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-black-800 hover:text-orange-500">
                Home
              </a>
              <a href="#" className="text-black-800 hover:text-orange-500">
                About
              </a>
              <a href="#" className="text-black-800 hover:text-orange-500">
                Services
              </a>
              <a href="#" className="text-black-800 hover:text-orange-500">
                Portfolio
              </a>
              <a href="#" className="text-black-800 hover:text-orange-500">
                Our Team
              </a>
              <a href="#" className="text-black-800 hover:text-orange-500">
                Contact
              </a>
            </div>
            <div className="hidden md:flex">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-3xl font-semibold hover:bg-purple-600">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section Carousel */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Image Slider */}
        <div className="w-full h-full relative">
          {banners.map((image, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-3 rounded-full hover:bg-white/50 transition"
        >
          <ChevronLeft size={30} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-3 rounded-full hover:bg-white/50 transition"
        >
          <ChevronRight size={30} />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-5 w-full flex justify-center gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Side: About Us Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-orange-500">About Us</h2>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-500 drop-shadow-lg">
              Welcome to <span className="text-gray-900">Hinsola</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-500 font-medium">
              Your Premier Destination for{" "}
              <span className="font-bold">
                Professional Photo Editing Services
              </span>
            </p>
            <p className="mt-4 text-gray-700">
              We understand the power of captivating visuals. Whether you're a
              professional photographer, a business owner, or an individual
              looking to enhance your personal photos, we're here to turn your
              visions into stunning realities.
            </p>
            <p className="mt-4 text-gray-700">
              With our team of skilled photo editors and cutting-edge
              technology, we offer a wide range of services tailored to meet
              your specific needs.
            </p>
          </div>

          {/* Right Side: Image */}
          <div className="md:w-1/2 relative flex justify-center">
            <div className="relative">
              {/* Main Image */}
              <Image
                src="/imgs_2.jpg" // Replace with actual image path
                alt="About Us"
                width={500}
                height={350}
                className="rounded-lg shadow-lg transform rotate-3"
              />
              {/* Decorative Smaller Image */}
              <Image
                src="/camera_img.avif" // Replace with actual image path
                alt="Photo Editing"
                width={180}
                height={120}
                className="absolute top-[-20px] right-[-30px] rounded-lg shadow-md transform rotate-6"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-orange-500 mb-6">
            Our Services
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-12">
            We offer a wide range of professional photo editing services
            tailored to your needs.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center transform transition duration-300 hover:scale-105"
              >
                <div className="text-orange-500 text-5xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center mt-2">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-orange-400 to-orange-600 text-white relative">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold mb-4 text-shadow-xl drop-shadow-lg">
              Why Choose Us?
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-white/90">
              Experience top-quality photo editing with a professional touch,
              tailored solutions, and quick delivery.
            </p>
          </div>

          {/* Carousel Wrapper */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="min-w-full flex flex-col items-center bg-white text-gray-900 p-10 rounded-3xl shadow-2xl mx-4 transform transition duration-300 hover:scale-110 hover:shadow-3xl hover:bg-orange-50"
                >
                  {/* Icon */}
                  <div className="text-orange-500 text-7xl mb-6">
                    {feature.icon}
                  </div>
                  {/* Title */}
                  <h3 className="text-3xl font-semibold mb-4">
                    {feature.title}
                  </h3>
                  {/* Description */}
                  <p className="text-gray-700 text-center text-lg">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-white text-orange-600 p-4 rounded-full shadow-xl hover:bg-orange-100 transition duration-300"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-white text-orange-600 p-4 rounded-full shadow-xl hover:bg-orange-100 transition duration-300"
          >
            ❯
          </button>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-orange-500 mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              At <span className="font-bold text-orange-500">Hinsola</span>, we
              combine <span className="font-semibold">creativity</span> and{" "}
              <span className="font-semibold">precision</span> to transform your
              visuals into stunning masterpieces.
            </p>
            <ul className="text-gray-700 text-lg mb-6 space-y-2">
              <li>✔️ Photo Retouching</li>
              <li>✔️ Color Correction</li>
              <li>✔️ Background Removal</li>
              <li>✔️ Cut-outs & Masking</li>
              <li>✔️ Image Manipulation</li>
              <li>✔️ Product Shadow & Jewelry Retouching</li>
              <li>✔️ Food Editing & More</li>
            </ul>
            <p className="text-lg text-gray-700 italic">
              We ensure **seamless collaboration, secure cloud storage, and
              tailored solutions** for photographers, businesses, and e-commerce
              brands.
            </p>
          </div>

          {/* Right Visuals - Interactive Layout */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="w-30 h-30 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg transform hover:scale-105 transition">
                <img
                  src="/do_1.jpg"
                  alt="Photo Editing"
                  className="w-20 h-20"
                />
              </div>
              <div className="w-36 h-36 bg-white rounded-lg flex items-center justify-center shadow-lg transform hover:scale-105 transition">
                <img
                  src="/do_2.jpg"
                  alt="Background Removal"
                  className="w-20 h-20"
                />
              </div>
              <div className="w-36 h-36 bg-white rounded-lg flex items-center justify-center shadow-lg transform hover:scale-105 transition">
                <img
                  src="/do_3.jpg"
                  alt="Color Correction"
                  className="w-20 h-20"
                />
              </div>
              <div className="w-36 h-36 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg transform hover:scale-105 transition">
                <img
                  src="/do_4.avif"
                  alt="Product Shadow"
                  className="w-20 h-20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
              Get Started Today
            </h2>
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              Ready to elevate your photos to the next level? Simply upload your
              images, specify your requirements, and let our team work their
              magic.
            </p>
            <p className="text-xl font-semibold italic mb-8">
              "Transform your photos. Transform your world."
            </p>
            <button className="bg-white text-orange-600 font-bold py-3 px-6 rounded-full text-lg shadow-lg hover:bg-orange-100 transition duration-300">
              Get Started Now →
            </button>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
            <div className="relative w-80 h-80">
              <img
                src="/start_today.jpg"
                alt="Photo Editing Example"
                className="rounded-3xl shadow-2xl object-cover w-full h-full"
              />
              {/* Floating Effect */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-white text-orange-500 flex items-center justify-center text-4xl font-bold rounded-full shadow-lg animate-bounce">
                ✨
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center space-x-6">
          {/* Left Side - Image with Overlay */}
          <div className="md:w-1/2 relative mb-10 md:mb-0">
            <div className="relative w-full h-[400px] overflow-hidden rounded-3xl shadow-lg">
              <img
                src="/who_we_are.jpeg"
                alt="Who We Are"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-orange-500 bg-opacity-40"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="md:w-1/2 text-gray-800">
            <h2 className="text-4xl font-extrabold text-orange-500 mb-6">
              Who We Are
            </h2>
            <p className="text-lg mb-4 leading-relaxed">
              At <span className="font-bold text-orange-500">Hinsola</span>, we
              are a **team of dedicated image editors** committed to delivering
              the highest quality work while ensuring seamless **collaboration
              and workflow management**.
            </p>

            <ul className="text-gray-700 text-lg space-y-3">
              <li>✔️ **Seamless Team Collaboration & Workflow Tracking**</li>
              <li>✔️ **Secure Cloud Storage & Backup Solutions**</li>
              <li>✔️ **Ethical Commitment to Transparency & Integrity**</li>
              <li>✔️ **Client-Centric Approach & Artistic Vision**</li>
              <li>
                ✔️ **Eco-Friendly Digital Practices to Reduce Carbon Footprint**
              </li>
            </ul>

            <p className="text-lg text-gray-700 italic mt-6">
              **Trust Hinsola for reliability, security, and exceptional quality
              in every project.**
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Section Heading */}
          <h2 className="text-4xl font-extrabold text-orange-500 mb-4">
            Portfolio
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
            Hinsola provides exceptional creative and editing solutions,
            partnering with engaged clients to deliver results on time and to
            the highest standards. We are committed to fostering a harmonious
            and professional relationship with unwavering dedication to your
            needs.
          </p>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {portfolioImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={image}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white font-semibold text-lg">
                    View Project
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100 flex justify-center items-center">
        <div className="max-w-2xl w-full px-6">
          {/* Section Title */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-gray-900">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-700 mt-2">
              Have questions? Reach out and let’s create something amazing
              together!
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white shadow-lg rounded-lg relative overflow-hidden">
            {/* Right Orange Line */}
            <div className="absolute right-0 top-0 h-full w-2 bg-orange-500"></div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8">
              {/* Name */}
              <div className="mb-6">
                <label className="block font-semibold text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label className="block font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label className="block font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-orange-600 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <footer className="bg-gradient-to-r from-orange-400 to-orange-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold mb-4 text-white">
              Stay Connected
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-white/90">
              Sign up for our newsletter and get the latest updates and offers
              directly in your inbox.
            </p>
            <div className="flex justify-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 w-72 rounded-md text-black focus:outline-none"
              />
              <button className="bg-white text-orange-600 p-3 rounded-md hover:bg-orange-100 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>

          <div className="border-t border-white/30 py-8">
            <p className="text-sm">
              © Copyright <span className="font-bold">Hinsola</span> All Rights
              Reserved
            </p>
            <div className="flex justify-center gap-8 mt-4">
              <a
                href="#"
                className="text-white hover:text-orange-100 transition duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white hover:text-orange-100 transition duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-white hover:text-orange-100 transition duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
