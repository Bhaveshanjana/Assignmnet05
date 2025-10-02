import React from "react";
import { ChartNoAxesCombined, CircleCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <main className="flex-grow">
        <div className="border-b-2 border-[#7b6868b1]">
          <div className="mx-auto max-w-7xl px-4 py-10 pt-44 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mb-6 bg-gradient-to-b from-[#0d0d0b] bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
                Master JEE with Confidence
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-neutral-400">
                Practice. Learn. Improve. Repeat. Learn from every question and
                move one step ahead each day.
              </p>
              <Link
                href="/dashboard"
                className="group relative cursor-pointer overflow-hidden rounded-lg bg-[#4b5563] px-6 py-3 text-neutral-300 shadow-md transition-colors duration-300 hover:bg-[#6b7280]"
              >
                <span className="absolute top-0 left-1/2 h-[1px] w-1/2 -translate-x-1/2 bg-gray-400 opacity-60 group-hover:bg-gray-800"></span>
                <span className="absolute bottom-0 left-1/2 h-[1px] w-1/2 -translate-x-1/2 bg-gray-400 opacity-60 group-hover:bg-gray-800"></span>
                Start Practicing
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="border-b-2 border-[#ab8b8b7d] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-2 bg-gradient-to-t from-[#050505] bg-clip-text text-4xl font-semibold text-transparent">
                Why Choose Our Platform?
              </h2>
              <p className="text-[16px] text-gray-700">
                Everything you need to succeed in JEE preparation
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg border-t border-b border-[#8c6e6e] p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center">
                  <CircleCheck className="size-8 text-pink-900" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Instant Feedback</h3>
                <p className="text-sm text-gray-600">
                  Get immediate results with detailed explanations for each
                  question
                </p>
              </div>

              <div className="rounded-lg border-t border-b border-[#8c6e6e] p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center">
                  <Zap className="size-8 text-green-800" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">
                  Quality Questions
                </h3>
                <p className="text-sm text-gray-600">
                  Carefully curated questions covering all JEE topics and
                  difficulty levels
                </p>
              </div>

              <div className="rounded-lg border-t border-b border-[#8c6e6e] p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center">
                  <ChartNoAxesCombined className="size-8 text-blue-400" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Track Progress</h3>
                <p className="text-sm text-gray-600">
                  Monitor your performance and identify areas for improvement
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
