import { useState, useEffect } from "react";
import Header from "../../components/Header";
import { 
  ArrowRight, 
  ArrowLeft,
  CheckCircle, 
  XCircle,
  Clock, 
  BookOpen,
  Target,
  TrendingUp,
  Star,
  Play,
  RotateCcw,
  Lightbulb,
  Award
} from "lucide-react";

export default function PracticePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showHint, setShowHint] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [timerActive, setTimerActive] = useState(true);

  // Timer effect
  useEffect(() => {
    let interval = null;
    if (timerActive) {
      interval = setInterval(() => {
        setTimeElapsed(time => time + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const questions = [
    {
      id: 1,
      topic: "Arrays",
      difficulty: "Easy",
      title: "Two Sum",
      problem: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      example: `Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].`,
      options: [
        "Brute force: Check all pairs O(n²)",
        "Hash map: Store complements O(n)",
        "Sort and two pointers O(n log n)",
        "Binary search for each element O(n log n)"
      ],
      correctAnswer: 1,
      explanation: "The optimal solution uses a hash map to store complements. For each number, we check if (target - current number) exists in the hash map. This gives us O(n) time complexity.",
      hint: "Think about what you need to find for each number to reach the target."
    },
    {
      id: 2,
      topic: "Strings",
      difficulty: "Easy",
      title: "Valid Parentheses",
      problem: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      example: `Input: s = "()[]{}"
Output: true

Input: s = "([)]"
Output: false`,
      options: [
        "Use a counter for each bracket type",
        "Use a stack to match opening and closing brackets",
        "Use recursion to check nested brackets",
        "Check if length is even and count brackets"
      ],
      correctAnswer: 1,
      explanation: "A stack is perfect for this problem. Push opening brackets onto the stack, and for closing brackets, check if the top of the stack has the matching opening bracket.",
      hint: "What data structure is good for keeping track of the most recent unmatched item?"
    },
    {
      id: 3,
      topic: "Linked Lists",
      difficulty: "Easy",
      title: "Reverse Linked List",
      problem: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
      example: `Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]`,
      options: [
        "Use recursion to reverse from the tail",
        "Use iterative approach with three pointers",
        "Convert to array, reverse, then rebuild list",
        "Use a stack to store nodes then rebuild"
      ],
      correctAnswer: 1,
      explanation: "The iterative approach with three pointers (prev, curr, next) is most efficient. We reverse the direction of each link while traversing the list once.",
      hint: "You need to keep track of the previous node to reverse the link direction."
    }
  ];

  const progressStats = {
    totalSolved: 45,
    accuracy: 85,
    streak: 7,
    timeSpent: "12h 30m"
  };

  const difficultyColors = {
    "Easy": "text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400",
    "Medium": "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400",
    "Hard": "text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400"
  };

  const handleAnswerSelect = (answerIndex) => {
    if (showExplanation) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    const newAnswer = {
      questionId: questions[currentQuestion].id,
      selectedAnswer,
      correct: isCorrect,
      timeSpent: timeElapsed
    };
    
    setUserAnswers([...userAnswers, newAnswer]);
    setShowExplanation(true);
    setTimerActive(false);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setShowHint(false);
      setTimeElapsed(0);
      setTimerActive(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setShowHint(false);
      setTimeElapsed(0);
      setTimerActive(true);
    }
  };

  const resetQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    setShowHint(false);
    setTimeElapsed(0);
    setTimerActive(true);
  };

  const question = questions[currentQuestion];
  const isAnswered = selectedAnswer !== null && showExplanation;
  const isCorrect = isAnswered && selectedAnswer === question.correctAnswer;

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Header currentPage="practice" />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Question Panel - Left Side */}
          <div className="lg:col-span-2">
            {/* Question Header */}
            <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-gray-200 dark:border-gray-700 mb-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[question.difficulty]}`}>
                      {question.difficulty}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {question.topic}
                    </span>
                  </div>
                  <h1 className="text-2xl font-bold text-black dark:text-white mb-2">
                    {currentQuestion + 1}. {question.title}
                  </h1>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span className="font-mono">{formatTime(timeElapsed)}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 dark:text-gray-400">
                    Progress: {currentQuestion + 1} of {questions.length}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Problem Statement */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-3">
                    Problem
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {question.problem}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-3">
                    Example
                  </h3>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <pre className="text-sm text-gray-700 dark:text-gray-300 font-mono whitespace-pre-wrap">
                      {question.example}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-6">
                {!showExplanation && (
                  <button
                    onClick={() => setShowHint(!showHint)}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                  >
                    <Lightbulb className="w-4 h-4" />
                    {showHint ? "Hide Hint" : "Show Hint"}
                  </button>
                )}
                <button
                  onClick={resetQuestion}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset
                </button>
              </div>

              {/* Hint */}
              {showHint && (
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-1">
                        Hint
                      </h4>
                      <p className="text-blue-700 dark:text-blue-300">
                        {question.hint}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Answer Options */}
            <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-black dark:text-white mb-6">
                Choose the best approach:
              </h3>
              
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showExplanation}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                      selectedAnswer === index
                        ? showExplanation
                          ? index === question.correctAnswer
                            ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                            : "border-red-500 bg-red-50 dark:bg-red-900/20"
                          : "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                        : showExplanation && index === question.correctAnswer
                        ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                        : "border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                    } ${showExplanation ? "cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedAnswer === index && showExplanation
                          ? index === question.correctAnswer
                            ? "border-green-500 bg-green-500"
                            : "border-red-500 bg-red-500"
                          : selectedAnswer === index
                          ? "border-purple-500 bg-purple-500"
                          : showExplanation && index === question.correctAnswer
                          ? "border-green-500 bg-green-500"
                          : "border-gray-300 dark:border-gray-600"
                      }`}>
                        {showExplanation && (
                          (selectedAnswer === index && index !== question.correctAnswer) ? (
                            <XCircle className="w-4 h-4 text-white" />
                          ) : (index === question.correctAnswer) ? (
                            <CheckCircle className="w-4 h-4 text-white" />
                          ) : null
                        )}
                        {!showExplanation && selectedAnswer === index && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {option}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Submit/Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestion === 0}
                  className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </button>
                
                {!showExplanation ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={selectedAnswer === null}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 disabled:cursor-not-allowed"
                  >
                    Submit Answer
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    disabled={currentQuestion === questions.length - 1}
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 disabled:cursor-not-allowed"
                  >
                    {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Explanation */}
              {showExplanation && (
                <div className="mt-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      isCorrect ? "bg-green-100 dark:bg-green-900/30" : "bg-red-100 dark:bg-red-900/30"
                    }`}>
                      {isCorrect ? (
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                      )}
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-2 ${
                        isCorrect ? "text-green-800 dark:text-green-300" : "text-red-800 dark:text-red-300"
                      }`}>
                        {isCorrect ? "Correct!" : "Incorrect"}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {question.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Progress Sidebar - Right Side */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Progress Stats */}
              <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-black dark:text-white mb-6">
                  Your Progress
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      <span className="text-gray-600 dark:text-gray-400">Solved</span>
                    </div>
                    <span className="font-semibold text-black dark:text-white">
                      {progressStats.totalSolved}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                      <span className="text-gray-600 dark:text-gray-400">Accuracy</span>
                    </div>
                    <span className="font-semibold text-black dark:text-white">
                      {progressStats.accuracy}%
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                      <span className="text-gray-600 dark:text-gray-400">Streak</span>
                    </div>
                    <span className="font-semibold text-black dark:text-white">
                      {progressStats.streak} days
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span className="text-gray-600 dark:text-gray-400">Time</span>
                    </div>
                    <span className="font-semibold text-black dark:text-white">
                      {progressStats.timeSpent}
                    </span>
                  </div>
                </div>
              </div>

              {/* Question Navigation */}
              <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                  Questions
                </h3>
                
                <div className="grid grid-cols-3 gap-2">
                  {questions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentQuestion(index);
                        setSelectedAnswer(null);
                        setShowExplanation(false);
                        setShowHint(false);
                        setTimeElapsed(0);
                        setTimerActive(true);
                      }}
                      className={`w-10 h-10 rounded-lg font-semibold transition-all duration-200 ${
                        index === currentQuestion
                          ? "bg-purple-600 text-white"
                          : userAnswers.find(a => a.questionId === questions[index].id)
                          ? userAnswers.find(a => a.questionId === questions[index].id)?.correct
                            ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                            : "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Study Tips */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-6 border border-yellow-200 dark:border-yellow-800">
                <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                  💡 Study Tips
                </h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Read the problem twice before choosing an answer
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Think about time and space complexity
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Use hints when you're stuck
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}