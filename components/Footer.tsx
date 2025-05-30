"use client";

import { useEffect, useRef } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";

export default function Footer() {
  const linkRefs = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    linkRefs.current.forEach((link) => {
      const underline = link.querySelector("span");
      if (!underline) return;

      link.addEventListener("mouseenter", () => {
        gsap.to(underline, {
          width: "100%",
          duration: 0.3,
          ease: "power2.out",
        });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(underline, { width: "0%", duration: 0.3, ease: "power2.in" });
      });
    });
  }, []);

  const addLinkRef = (el: HTMLAnchorElement | null) => {
    if (el && !linkRefs.current.includes(el)) {
      linkRefs.current.push(el);
    }
  };

  return (
    <footer className="z-50 min-h-screen text-black px-10 py-16 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl font-light mb-12">
            Trip’s over. See you next time.
          </h2>
          <Image
            src="/logo.png"
            alt="Logo"
            className="h-56 w-auto"
            width={200}
            height={200}
          />
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
              <Link href="#" className="underline">
                Privacy Policy
              </Link>
              .
            </p>
          </form>

          <div className="grid grid-cols-2 gap-20 mt-24 ml-40">
            <div>
              <h4 className="text-base font-bold mb-4 uppercase">Explore</h4>
              <ul className="space-y-2">
                {["Destinations", "Stories", "Guides", "Specials"].map(
                  (text, i) => (
                    <li key={i}>
                      <Link
                        href="#"
                        ref={addLinkRef}
                        className="relative inline-block group text-sm text-black"
                      >
                        {text}
                        <span className="absolute left-0 bottom-0 h-[2px] bg-black w-0" />
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-base font-bold mb-4 uppercase">About</h4>
              <ul className="space-y-2">
                {["Our Mission", "Join the Community", "Press & Media"].map(
                  (text, i) => (
                    <li key={i}>
                      <Link
                        href="#"
                        ref={addLinkRef}
                        className="relative inline-block group text-sm text-black"
                      >
                        {text}
                        <span className="absolute left-0 bottom-0 h-[2px] bg-black w-0" />
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center text-xs">
        <div className="flex flex-wrap gap-4 text-center md:text-left">
          <span>Copyright © 2025 Wanderwise. All rights reserved.</span>

          <Link
            href="#"
            ref={addLinkRef}
            className="relative inline-block group text-black"
          >
            Privacy Policy
            <span className="absolute left-0 bottom-0 h-[2px] bg-black w-0" />
          </Link>

          <Link
            href="#"
            ref={addLinkRef}
            className="relative inline-block group text-black"
          >
            Terms of Service
            <span className="absolute left-0 bottom-0 h-[2px] bg-black w-0" />
          </Link>

          <span>Crafted by HLABS</span>
        </div>

        <div className="flex gap-4 mt-4 md:mt-0 text-lg">
          <Link href="#" aria-label="Facebook">
            <FaFacebookF />
          </Link>
          <Link href="#" aria-label="Instagram">
            <FaInstagram />
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <FaLinkedinIn />
          </Link>
          <Link href="#" aria-label="YouTube">
            <FaYoutube />
          </Link>
        </div>
      </div>
    </footer>
  );
}
