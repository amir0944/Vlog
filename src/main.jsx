// src/main.jsx یا src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// اضافه کن این دو خط
import AOS from "aos";
import "aos/dist/aos.css"; // استایل‌های AOS

// این رو بعد از رندر اضافه کن
AOS.init({
  duration: 800, // مدت انیمیشن
  easing: "ease", // نوع حرکت
  once: true, // فقط یکبار انیمیشن بزنه
  offset: 100, // کمی زودتر شروع بشه
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
