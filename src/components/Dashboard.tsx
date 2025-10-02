"use client";

import React, { useState } from "react";
import questionsData from "@/data/questions.json";
import { Check, X } from "lucide-react";

interface Question {
  id: number;
  subject: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export default function Dashboard() {
  const [questions] = useState<Question[]>(questionsData);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);

  const currentQuestion = questions[currentQuestionIndex];
  const isAnswered = answeredQuestions.includes(currentQuestion.id);

  const handleAnswerSelect = (answerIndex: number) => {
    if (isAnswered) return;

    setSelectedAnswer(answerIndex);
    setShowResult(true);

    if (answerIndex === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    setAnsweredQuestions([...answeredQuestions, currentQuestion.id]);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions([]);
  };

  const getSubjectColor = (subject: string) => {
    switch (subject.toLowerCase()) {
      case "physics":
        return "bg-blue-100 text-blue-800";
      case "chemistry":
        return "bg-green-100 text-green-800";
      case "mathematics":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const isQuizComplete = answeredQuestions.length === questions.length;

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <div className="mx-auto max-w-4xl px-4 py-20 pt-30 sm:px-6 lg:px-8">
          {/* Quiz Complete Section - Show only when quiz is finished */}
          {isQuizComplete ? (
            <div className="mx-auto max-w-lg pt-10 text-center">
              <h1 className="mb-8 text-3xl font-bold text-gray-900">
                JEE Practice Dashboard
              </h1>
              <div className="rounded-lg bg-gray-400 p-9 shadow-lg">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Quiz Complete!
                </h2>
                <div className="mb-2 text-4xl font-bold text-blue-600">
                  {score}/{questions.length}
                </div>
                <div className="mb-4 text-xl text-gray-600">
                  ({Math.round((score / questions.length) * 100)}%)
                </div>
                <button
                  onClick={resetQuiz}
                  className="cursor-pointer rounded-lg bg-gray-500 px-5 py-2 text-sm text-white transition-colors duration-300 hover:bg-gray-800"
                >
                  Take Quiz Again
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="mb-8 text-center">
                <h1 className="mb-2 text-3xl font-bold text-gray-900">
                  JEE Practice Dashboard
                </h1>
                <p className="text-gray-300">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </p>

                {/* Progress Bar */}
                <div className="mt-4 h-2 w-full rounded-full bg-gray-400">
                  <div
                    className="h-2 rounded-full bg-blue-600 transition-all duration-300"
                    style={{
                      width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
                    }}
                  ></div>
                </div>

                {/* Score Display */}
                <div className="mt-4 text-sm text-gray-300">
                  Score: {score}/{answeredQuestions.length}
                  {answeredQuestions.length > 0 && (
                    <span className="ml-2">
                      ({Math.round((score / answeredQuestions.length) * 100)}%)
                    </span>
                  )}
                </div>
              </div>

              {/* Question Card */}
              <div className="mb-6 rounded-lg bg-gray-200 p-6 shadow-lg">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-medium ${getSubjectColor(currentQuestion.subject)}`}
                    >
                      {currentQuestion.subject}
                    </span>
                  </div>
                </div>

                <h2 className="mb-6 text-xl font-semibold text-gray-900">
                  {currentQuestion.question}
                </h2>

                {/* Options */}
                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => {
                    let optionClass =
                      "w-full p-4 text-left border rounded-lg transition-colors cursor-pointer hover:bg-gray-50";

                    if (isAnswered) {
                      if (index === currentQuestion.correctAnswer) {
                        optionClass +=
                          " bg-green-100 border-green-500 text-green-800";
                      } else if (
                        index === selectedAnswer &&
                        index !== currentQuestion.correctAnswer
                      ) {
                        optionClass +=
                          " bg-red-100 border-red-500 text-red-800";
                      } else {
                        optionClass +=
                          " bg-gray-50 border-gray-300 text-gray-600 cursor-not-allowed";
                      }
                    } else {
                      optionClass +=
                        selectedAnswer === index
                          ? " bg-blue-100 border-blue-500 text-blue-800"
                          : " border-gray-300";
                    }

                    return (
                      <button
                        key={index}
                        className={optionClass}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={isAnswered}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full border-2 border-current text-sm font-medium">
                              {String.fromCharCode(65 + index)}
                            </span>
                            {option}
                          </div>
                          {/* Show icons only after answer is selected */}
                          {showResult && (
                            <div className="ml-4 flex-shrink-0">
                              {index === currentQuestion.correctAnswer && (
                                <span
                                  className="text-2xl text-green-600"
                                  title="Correct Answer"
                                >
                                  <Check />
                                </span>
                              )}
                              {index === selectedAnswer &&
                                index !== currentQuestion.correctAnswer && (
                                  <span
                                    className="text-2xl text-red-600"
                                    title="Your Answer - Incorrect"
                                  >
                                    <X />
                                  </span>
                                )}
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestionIndex === 0}
                  className="cursor-pointer rounded-lg bg-gray-400 px-6 py-2 text-black transition-colors hover:bg-gray-600 disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  Previous
                </button>

                <button
                  onClick={resetQuiz}
                  className="cursor-pointer rounded-lg bg-green-600 px-6 py-2 text-black transition-colors hover:bg-green-700"
                >
                  Reset Quiz
                </button>

                <button
                  onClick={handleNextQuestion}
                  disabled={currentQuestionIndex === questions.length - 1}
                  className="cursor-pointer rounded-lg bg-blue-700 px-6 py-2 text-black transition-colors hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
