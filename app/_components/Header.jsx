"use client";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="bg-gray-900">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block" href="#">
          <span className="sr-only">Home</span>
          <Image src="/logo.svg" width={100} height={100} alt="logo" />
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-white transition hover:text-white/75"
                  href="#"
                >
                  {" "}
                  Use cases{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-white/75"
                  href="#"
                >
                  {" "}
                  About{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-white/75"
                  href="#"
                >
                  {" "}
                  DiagramGPT{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-white/75"
                  href="#"
                >
                  {" "}
                  Pricing{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-white/75 flex"
                  href="#"
                >
                  {" "}
                  Docs <ArrowUpRight className="w-4 h-4" />{" "}
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <LoginLink className="hidden rounded-md px-5 py-2.5 text-sm font-medium text-white transition hover:text-white/75 sm:block">
                Login
              </LoginLink>
              <RegisterLink className="rounded-sm bg-white px-5 py-2.5 text-sm font-semibold text-black flex items-center">
                Try Eraser <ArrowRight className="w-4 h-4 ml-2" />
              </RegisterLink>
            </div>

            <button className="block rounded bg-black p-2.5 text-slate-400 transition hover:text-slate-400/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
