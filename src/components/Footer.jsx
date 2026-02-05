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
      id="footer"
      className="mt-20 py-12 px-4 text-gray-900 dark:text-white"
      style={{ background: "var(--footer-bg)" }}
    >
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Address */}
          <div data-aos="fade-up" data-aos-delay="100">
            <div
              className="
                p-6 rounded-xl shadow-xl
                bg-gradient-to-br
                from-pink-500 to-pink-600
                dark:from-pink-700 dark:to-pink-800
                hover:scale-105 transition-all duration-500
              "
            >
              <div className="flex justify-center mb-4">
                <FiMapPin className="w-10 h-10 text-amber-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Address</h3>
              <p className="text-sm text-center">
                اصفهان، کاشان
                <br />
                فاز ۲، کوچه بهارستان، پلاک ۱۵
              </p>
            </div>
          </div>

          {/* Email */}
          <div data-aos="fade-up" data-aos-delay="300">
            <div
              className="
                p-6 rounded-xl shadow-xl
                bg-gradient-to-br
                from-pink-500 to-pink-600
                dark:from-pink-700 dark:to-pink-800
                hover:scale-105 transition-all duration-500
              "
            >
              <div className="flex justify-center mb-4">
                <FiMail className="w-10 h-10 text-amber-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Email</h3>
              <a
                href="mailto:amirseyyedi944@gmail.com"
                className="block text-sm text-center hover:text-amber-300"
              >
                amirseyyedi944@gmail.com
              </a>
            </div>
          </div>

          {/* Telegram */}
          <div data-aos="fade-up" data-aos-delay="500">
            <div
              className="
                p-6 rounded-xl shadow-xl
                bg-gradient-to-br
                from-pink-500 to-pink-600
                dark:from-pink-700 dark:to-pink-800
                hover:scale-105 transition-all duration-500
              "
            >
              <div className="flex justify-center mb-4">
                <FiMessageCircle className="w-10 h-10 text-amber-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Telegram</h3>
              <a
                href="https://t.me/amirseyyedi0944"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm flex justify-center items-center gap-1 hover:text-amber-300"
              >
                @amirseyyedi0944 <FiExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 text-center">
          <div className="flex justify-center gap-8 mb-6">
            <a
              href="https://github.com/amir0944"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/amir-seyyedi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://vlog-0944-v8.vercel.app"
              className="hover:text-pink-500 flex items-center gap-1"
            >
              <FiExternalLink className="w-5 h-5" />
              <span className="hidden sm:inline">وبلاگ</span>
            </a>
          </div>

          <a
            href="/resume-amir-seyyedi.pdf"
            download
            className="
              inline-flex items-center gap-2
              bg-pink-600 hover:bg-pink-700
              text-white
              px-6 py-3 rounded-full mb-6
              transition-colors
            "
          >
            <FiDownload /> دانلود رزومه
          </a>

          <p className=" dark:text-pink-400 ">
            © {currentYear} امیرحسین سیدی — توسعه‌دهنده فرانت‌اند با React &
            Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
