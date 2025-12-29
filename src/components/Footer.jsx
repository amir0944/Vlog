import React, { useEffect, useRef, useMemo, useCallback } from "react";
import {
  Scene,
  OrthographicCamera,
  WebGLRenderer,
  PlaneGeometry,
  ShaderMaterial,
  Mesh,
  Vector2,
  Vector3,
  Color,
} from "three";
import {
  FiMapPin,
  FiMail,
  FiMessageCircle,
  FiDownload,
  FiExternalLink,
} from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const vertexShader = `
void main() {
  gl_Position = vec4(position, 1.0);
}
`;

const fragmentShader = `
precision mediump float;

uniform float uTime;
uniform vec2 uResolution;
uniform float uFlakeSize;
uniform float uMinFlakeSize;
uniform float uPixelResolution;
uniform float uSpeed;
uniform float uDepthFade;
uniform float uFarPlane;
uniform vec3 uColor;
uniform float uBrightness;
uniform float uGamma;
uniform float uDensity;
uniform float uVariant;
uniform float uDirection;

#define PI 3.14159265
#define PI_OVER_6 0.5235988
#define PI_OVER_3 1.0471976
#define INV_SQRT3 0.57735027
#define M1 1597334677U
#define M2 3812015801U
#define M3 3299493293U
#define F0 2.3283064e-10

#define hash(n) (n * (n ^ (n >> 15)))
#define coord3(p) (uvec3(p).x * M1 ^ uvec3(p).y * M2 ^ uvec3(p).z * M3)

const vec3 camK = vec3(0.57735027, 0.57735027, 0.57735027);
const vec3 camI = vec3(0.70710678, 0.0, -0.70710678);
const vec3 camJ = vec3(-0.40824829, 0.81649658, -0.40824829);
const vec2 b1d = vec2(0.574, 0.819);

vec3 hash3(uint n) {
  uvec3 hashed = hash(n) * uvec3(1U, 511U, 262143U);
  return vec3(hashed) * F0;
}

float snowflakeDist(vec2 p) {
  float r = length(p);
  float a = atan(p.y, p.x);
  a = abs(mod(a + PI_OVER_6, PI_OVER_3) - PI_OVER_6);
  vec2 q = r * vec2(cos(a), sin(a));
  float dMain = max(abs(q.y), max(-q.x, q.x - 1.0));
  float b1t = clamp(dot(q - vec2(0.4, 0.0), b1d), 0.0, 0.4);
  float dB1 = length(q - vec2(0.4, 0.0) - b1t * b1d);
  float b2t = clamp(dot(q - vec2(0.7, 0.0), b1d), 0.0, 0.25);
  float dB2 = length(q - vec2(0.7, 0.0) - b2t * b1d);
  return min(dMain, min(dB1, dB2)) * 10.0;
}

void main() {
  float invPixelRes = 1.0 / uPixelResolution;
  float pixelSize = max(1.0, floor(0.5 + uResolution.x * invPixelRes));
  float invPixelSize = 1.0 / pixelSize;
  
  vec2 fragCoord = floor(gl_FragCoord.xy * invPixelSize);
  vec2 res = uResolution * invPixelSize;
  float invResX = 1.0 / res.x;

  vec3 ray = normalize(vec3((fragCoord - res * 0.5) * invResX, 1.0));
  ray = ray.x * camI + ray.y * camJ + ray.z * camK;

  float timeSpeed = uTime * uSpeed;
  float windX = cos(uDirection) * 0.4;
  float windY = sin(uDirection) * 0.4;
  vec3 camPos = (windX * camI + windY * camJ + 0.1 * camK) * timeSpeed;
  vec3 pos = camPos;

  vec3 absRay = max(abs(ray), vec3(0.001));
  vec3 strides = 1.0 / absRay;
  vec3 raySign = step(ray, vec3(0.0));
  vec3 phase = fract(pos) * strides;
  phase = mix(strides - phase, phase, raySign);

  float rayDotCamK = dot(ray, camK);
  float invRayDotCamK = 1.0 / rayDotCamK;
  float invDepthFade = 1.0 / uDepthFade;
  float halfInvResX = 0.5 * invResX;
  vec3 timeAnim = timeSpeed * 0.1 * vec3(7.0, 8.0, 5.0);

  float t = 0.0;
  for (int i = 0; i < 128; i++) {
    if (t >= uFarPlane) break;
    
    vec3 fpos = floor(pos);
    uint cellCoord = coord3(fpos);
    float cellHash = hash3(cellCoord).x;

    if (cellHash < uDensity) {
      vec3 h = hash3(cellCoord);
      vec3 sinArg1 = fpos.yzx * 0.073;
      vec3 sinArg2 = fpos.zxy * 0.27;
      vec3 flakePos = 0.5 - 0.5 * cos(4.0 * sin(sinArg1) + 4.0 * sin(sinArg2) + 2.0 * h + timeAnim);
      flakePos = flakePos * 0.8 + 0.1 + fpos;

      float toIntersection = dot(flakePos - pos, camK) * invRayDotCamK;
      
      if (toIntersection > 0.0) {
        vec3 testPos = pos + ray * toIntersection - flakePos;
        float testX = dot(testPos, camI);
        float testY = dot(testPos, camJ);
        vec2 testUV = abs(vec2(testX, testY));
        
        float depth = dot(flakePos - camPos, camK);
        float flakeSize = max(uFlakeSize, uMinFlakeSize * depth * halfInvResX);
        
        float dist;
        if (uVariant < 0.5) {
          dist = max(testUV.x, testUV.y);
        } else if (uVariant < 1.5) {
          dist = length(testUV);
        } else {
          float invFlakeSize = 1.0 / flakeSize;
          dist = snowflakeDist(vec2(testX, testY) * invFlakeSize) * flakeSize;
        }

        if (dist < flakeSize) {
          float flakeSizeRatio = uFlakeSize / flakeSize;
          float intensity = exp2(-(t + toIntersection) * invDepthFade) *
                           min(1.0, flakeSizeRatio * flakeSizeRatio) * uBrightness;
          gl_FragColor = vec4(uColor * pow(vec3(intensity), vec3(uGamma)), 1.0);
          return;
        }
      }
    }

    float nextStep = min(min(phase.x, phase.y), phase.z);
    vec3 sel = step(phase, vec3(nextStep));
    phase = phase - nextStep + strides * sel;
    t += nextStep;
    pos = mix(pos + ray * nextStep, floor(pos + ray * nextStep + 0.5), sel);
  }

  gl_FragColor = vec4(0.0);
}
`;

const Footer = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(0);
  const isVisibleRef = useRef(true);
  const rendererRef = useRef(null);
  const materialRef = useRef(null);
  const resizeTimeoutRef = useRef(null);

  const flakeSize = 0.008;
  const minFlakeSize = 0.8;
  const pixelResolution = 150;
  const speed = 0.8;
  const depthFade = 6;
  const farPlane = 15;
  const brightness = 0.9;
  const gamma = 0.5;
  const density = 0.25;
  const variantValue = 2.0;
  const direction = (135 * Math.PI) / 180;
  const color = "#ffffff";

  const colorVector = useMemo(() => {
    const c = new Color(color);
    return new Vector3(c.r, c.g, c.b);
  }, [color]);

  const handleResize = useCallback(() => {
    if (resizeTimeoutRef.current) {
      clearTimeout(resizeTimeoutRef.current);
    }
    resizeTimeoutRef.current = setTimeout(() => {
      const container = containerRef.current;
      const renderer = rendererRef.current;
      const material = materialRef.current;
      if (!container || !renderer || !material) return;

      const w = container.offsetWidth;
      const h = container.offsetHeight;
      renderer.setSize(w, h);
      material.uniforms.uResolution.value.set(w, h);
    }, 100);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new Scene();
    const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new WebGLRenderer({
      antialias: false,
      alpha: true,
      premultipliedAlpha: false,
      powerPreference: "high-performance",
      stencil: false,
      depth: false,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const material = new ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: {
          value: new Vector2(container.offsetWidth, container.offsetHeight),
        },
        uFlakeSize: { value: flakeSize },
        uMinFlakeSize: { value: minFlakeSize },
        uPixelResolution: { value: pixelResolution },
        uSpeed: { value: speed },
        uDepthFade: { value: depthFade },
        uFarPlane: { value: farPlane },
        uColor: { value: colorVector.clone() },
        uBrightness: { value: brightness },
        uGamma: { value: gamma },
        uDensity: { value: density },
        uVariant: { value: variantValue },
        uDirection: { value: direction },
      },
      transparent: true,
    });
    materialRef.current = material;

    const geometry = new PlaneGeometry(2, 2);
    scene.add(new Mesh(geometry, material));

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(container);

    const handleResizeFn = () => {
      const w = container.offsetWidth;
      const h = container.offsetHeight;
      renderer.setSize(w, h);
      material.uniforms.uResolution.value.set(w, h);
    };

    window.addEventListener("resize", handleResizeFn);

    const startTime = performance.now();
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      if (isVisibleRef.current) {
        material.uniforms.uTime.value = (performance.now() - startTime) * 0.001;
        renderer.render(scene, camera);
      }
    };
    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResizeFn);
      observer.disconnect();
      if (resizeTimeoutRef.current) clearTimeout(resizeTimeoutRef.current);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="Footer"
      className="bg-black text-white py-12 px-4 mt-20 relative overflow-hidden"
    >
      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      <div className="container mx-auto relative z-10">
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

        <div className="pt-8 text-center">
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
