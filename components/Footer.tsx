import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className=" z-50 min-h-screen text-black px-10 py-16 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl font-light mb-12">
            Trip’s over. See you next time.
          </h2>
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Logo"
              className="h-56 w-auto"
              width={200}
              height={200}
            />
          </div>
        </div>

        <div className="flex flex-col items-start">
          <form className="w-full max-w-md ml-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent border-b border-black placeholder-black text-black px-2 py-2 focus:outline-none mb-4"
            />
            <button
              type="submit"
              className="border border-black px-8 py-2 rounded-full hover:bg-black hover:text-white transition"
            >
              Stay in the loop
            </button>
            <p className="text-xs mt-4">
              Subscribe to get the latest travel stories, hidden gems, and
              destination highlights. By signing up, you agree to our{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
              .
            </p>
          </form>

          <div className="grid grid-cols-2 gap-20 mt-24 ml-40">
            <div>
              <h4 className="text-base font-bold mb-4 uppercase">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Destinations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Specials
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-bold mb-4 uppercase">About</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Join the Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Press & Media
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center text-xs">
        <div className="flex flex-wrap gap-4 text-center md:text-left">
          <span>Copyright © 2025 Wanderwise. All rights reserved.</span>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <span>Crafted by HLABS</span>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0 text-lg">
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="#" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}
