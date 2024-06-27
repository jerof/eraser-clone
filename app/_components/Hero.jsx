import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import React from "react";

function Hero() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 lg:flex md:h-screen lg:py-16 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="my-10">
            <Badge
              variant="outline"
              className="text-slate-200 py-2 px-4 font-light bg-[#253A4C]"
            >
              See what’s new
            </Badge>
          </div>
          <h1 className="bg-gradient-to-r from-[#00A8E5] via-blue-700-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Documents & diagrams
            <span className="sm:block text-white"> for engineering teams</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-sm text-slate-300">
            All-in-one markdown editor, collaborative canvas, and
            diagram-as-code builder
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="flex w-full rounded border bg-white px-12 py-3 text-sm font-semibold text-black hover:bg-white/75 hover:text-black focus:outline-none focus:ring active:text-opacity-75 sm:w-auto items-center transition-all duration-300"
              href="#"
            >
              Try Eraser <ArrowRight className="w-4 h-4 ml-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
