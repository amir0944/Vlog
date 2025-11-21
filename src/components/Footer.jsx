import React from "react";
import {
  FiMapPin,
  FiMail,
  FiMessageCircle,
  FiDownload,
  FiExternalLink,
} from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="Footer"
      className="bg-gradient-to-t from-gray-900 to-gray-800 text-white py-12 px-4 mt-20"
    >
      <div className="container mx-auto">
        <hr className="border-t border-pink-500 mb-10 opacity-50" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="bg-gradient-to-br from-pink-600 to-pink-700 p-6 rounded-xl shadow-xl hover:scale-105 transition-all duration-500">
              <div className="flex justify-center mb-4">
                <FiMapPin className="w-10 h-10 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Address</h3>
              <p className="text-sm">
                اصفهان، کاشان
                <br />
                فاز ۲، کوچه بهارستان، پلاک ۱۵
              </p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <div className="bg-gradient-to-br from-pink-600 to-pink-700 p-6 rounded-xl shadow-xl hover:scale-105 transition-all duration-500">
              <div className="flex justify-center mb-4">
                <FiMail className="w-10 h-10 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Email</h3>
              <a
                href="mailto:amirseyyedi944@gmail.com"
                className="text-sm hover:text-amber-300"
              >
                amirseyyedi944@gmail.com
              </a>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="500">
            <div className="bg-gradient-to-br from-pink-600 to-pink-700 p-6 rounded-xl shadow-xl hover:scale-105 transition-all duration-500">
              <div className="flex justify-center mb-4">
                <FiMessageCircle className="w-10 h-10 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Telegram</h3>
              <a
                href="https://t.me/amirseyyedi0944"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-amber-300 flex items-center gap-1"
              >
                @amirseyyedi0944 <FiExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-pink-500/30 pt-8 text-center">
          <div className="flex justify-center gap-8 mb-6">
            <a
              href="https://github.com/amir0944"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/amir-seyyedi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://vlog-0944-v8.vercel.app"
              className="hover:text-pink-400 flex items-center gap-1"
            >
              <FiExternalLink className="w-5 h-5" />{" "}
              <span className="hidden sm:inline">وبلاگ</span>
            </a>
          </div>

          <a
            href="/resume-amir-seyyedi.pdf"
            download
            className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-full mb-6"
          >
            <FiDownload /> دانلود رزومه
          </a>

          <p className="text-pink-300 text-xs">
            © {currentYear} امیرحسین سیدی — توسعه‌دهنده فرانت‌اند با React &
            Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
