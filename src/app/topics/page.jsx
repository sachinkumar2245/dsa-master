import { useState } from "react";
import Header from "../../components/Header";
import { 
  ArrowRight, 
  Lock, 
  CheckCircle, 
  Play, 
  Clock, 
  BookOpen,
  Crown,
  Star
} from "lucide-react";

export default function TopicsPage() {
  const [upgradeModalOpen, setUpgradeModalOpen] = useState(false);

  const topics = [
    // Free Topics
    {
      id: 1,
      name: "Arrays",
      icon: "📊",
      free: true,
      progress: 45,
      problems: 15,
      estimatedTime: "2-3 hours",
      difficulty: "Beginner",
      description: "Master array manipulation, searching, and sorting algorithms",
      lessons: [
        "Introduction to Arrays",
        "Array Traversal Techniques",
        "Two Pointer Approach",
        "Sliding Window Pattern",
        "Array Rotation Problems"
      ]
    },
    {
      id: 2,
      name: "Strings",
      icon: "🔤",
      free: true,
      progress: 30,
      problems: 12,
      estimatedTime: "2-3 hours",
      difficulty: "Beginner",
      description: "Learn string manipulation, pattern matching, and text processing",
      lessons: [
        "String Basics & Operations",
        "Pattern Matching Algorithms",
        "String Reversal Techniques",
        "Anagram & Palindrome Problems",
        "String Compression"
      ]
    },
    {
      id: 3,
      name: "Linked Lists",
      icon: "🔗",
      free: true,
      progress: 60,
      problems: 18,
      estimatedTime: "3-4 hours",
      difficulty: "Beginner",
      description: "Understand linked list operations, traversal, and manipulation",
      lessons: [
        "Singly Linked Lists",
        "Doubly Linked Lists",
        "Circular Linked Lists",
        "Linked List Reversal",
        "Cycle Detection Algorithms"
      ]
    },
    // Premium Topics
    {
      id: 4,
      name: "Trees",
      icon: "🌲",
      free: false,
      progress: 0,
      problems: 25,
      estimatedTime: "6-8 hours",
      difficulty: "Intermediate",
      description: "Master binary trees, BST, AVL trees, and tree traversal algorithms",
      lessons: [
        "Binary Tree Fundamentals",
        "Tree Traversal Methods",
        "Binary Search Trees",
        "Balanced Trees (AVL, Red-Black)",
        "Tree Construction Problems"
      ]
    },
    {
      id: 5,
      name: "Graphs",
      icon: "🕸️",
      free: false,
      progress: 0,
      problems: 30,
      estimatedTime: "8-10 hours",
      difficulty: "Intermediate",
      description: "Learn graph representation, traversal, and shortest path algorithms",
      lessons: [
        "Graph Representation",
        "DFS & BFS Algorithms",
        "Shortest Path Algorithms",
        "Minimum Spanning Tree",
        "Topological Sorting"
      ]
    },
    {
      id: 6,
      name: "Dynamic Programming",
      icon: "⚡",
      free: false,
      progress: 0,
      problems: 35,
      estimatedTime: "10-12 hours",
      difficulty: "Advanced",
      description: "Master optimization problems using dynamic programming techniques",
      lessons: [
        "DP Fundamentals",
        "1D Dynamic Programming",
        "2D Dynamic Programming",
        "Optimization Problems",
        "Advanced DP Patterns"
      ]
    },
    {
      id: 7,
      name: "Sorting Algorithms",
      icon: "📈",
      free: false,
      progress: 0,
      problems: 20,
      estimatedTime: "4-5 hours",
      difficulty: "Intermediate",
      description: "Understand various sorting techniques and their time complexities",
      lessons: [
        "Bubble & Selection Sort",
        "Insertion & Merge Sort",
        "Quick Sort & Heap Sort",
        "Radix & Counting Sort",
        "External Sorting"
      ]
    },
    {
      id: 8,
      name: "Hash Tables",
      icon: "🔑",
      free: false,
      progress: 0,
      problems: 22,
      estimatedTime: "4-6 hours",
      difficulty: "Intermediate",
      description: "Learn hash functions, collision resolution, and hash table applications",
      lessons: [
        "Hash Function Design",
        "Collision Resolution",
        "Hash Table Implementation",
        "HashSet & HashMap",
        "Consistent Hashing"
      ]
    },
    {
      id: 9,
      name: "Stacks & Queues",
      icon: "📚",
      free: false,
      progress: 0,
      problems: 18,
      estimatedTime: "3-4 hours",
      difficulty: "Beginner",
      description: "Master stack and queue operations and their real-world applications",
      lessons: [
        "Stack Implementation",
        "Queue Implementation",
        "Priority Queues",
        "Deque Operations",
        "Stack & Queue Applications"
      ]
    },
    {
      id: 10,
      name: "Binary Search",
      icon: "🔍",
      free: false,
      progress: 0,
      problems: 16,
      estimatedTime: "3-4 hours",
      difficulty: "Intermediate",
      description: "Learn binary search variations and optimization techniques",
      lessons: [
        "Binary Search Basics",
        "Search in Rotated Arrays",
        "Finding Peak Elements",
        "Search in 2D Matrix",
        "Binary Search on Answer"
      ]
    },
    {
      id: 11,
      name: "Recursion",
      icon: "🔄",
      free: false,
      progress: 0,
      problems: 24,
      estimatedTime: "5-6 hours",
      difficulty: "Intermediate",
      description: "Master recursive thinking and backtracking algorithms",
      lessons: [
        "Recursion Fundamentals",
        "Tail Recursion",
        "Backtracking Algorithms",
        "Tree Recursion",
        "Memoization Techniques"
      ]
    },
    {
      id: 12,
      name: "Greedy Algorithms",
      icon: "💰",
      free: false,
      progress: 0,
      problems: 20,
      estimatedTime: "4-5 hours",
      difficulty: "Advanced",
      description: "Learn greedy approach for optimization and scheduling problems",
      lessons: [
        "Greedy Strategy",
        "Activity Selection",
        "Huffman Coding",
        "Minimum Coin Change",
        "Job Scheduling"
      ]
    }
  ];

  const freeTopics = topics.filter(topic => topic.free);
  const premiumTopics = topics.filter(topic => !topic.free);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner": return "text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400";
      case "Intermediate": return "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "Advanced": return "text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400";
      default: return "text-gray-600 bg-gray-100 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  const handlePremiumClick = () => {
    setUpgradeModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Header currentPage="topics" />
      
      {/* Hero Section */}
      <section className="pt-12 pb-16 px-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <div className="max-w-7xl mx-auto text-center">
          <h1
            className="text-black dark:text-white font-bold mb-4"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            Master Every DSA Topic
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-xl max-w-3xl mx-auto mb-8">
            Comprehensive learning path designed to take you from beginner to interview-ready
          </p>
          
          {/* Progress Overview */}
          <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 max-w-4xl mx-auto border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  3/12
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Topics Unlocked
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                  45
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Problems Solved
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  12h
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Time Spent
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                  85%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Accuracy Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Topics Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2
              className="text-black dark:text-white font-bold"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              🆓 Free Topics
            </h2>
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Full Access</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freeTopics.map((topic) => (
              <div
                key={topic.id}
                className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-4xl">{topic.icon}</div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(topic.difficulty)}`}>
                    {topic.difficulty}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                  {topic.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {topic.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400 flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {topic.problems} Problems
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {topic.estimatedTime}
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600 dark:text-gray-400">Progress</span>
                      <span className="text-purple-600 dark:text-purple-400 font-semibold">{topic.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${topic.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 group-hover:scale-105 flex items-center justify-center gap-2">
                  {topic.progress > 0 ? "Continue Learning" : "Start Learning"}
                  <Play className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Topics Section */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2
              className="text-black dark:text-white font-bold"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              👑 Premium Topics
            </h2>
            <button
              onClick={handlePremiumClick}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:scale-105 flex items-center gap-2"
            >
              <Crown className="w-4 h-4" />
              Upgrade Now
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumTopics.map((topic) => (
              <div
                key={topic.id}
                className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group relative overflow-hidden"
                onClick={handlePremiumClick}
              >
                {/* Blur Overlay */}
                <div className="absolute inset-0 bg-white/70 dark:bg-black/70 backdrop-blur-sm z-10 flex items-center justify-center">
                  <div className="text-center">
                    <Lock className="w-8 h-8 text-gray-600 dark:text-gray-400 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Premium Topic
                    </div>
                    <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold px-4 py-2 rounded-full text-sm hover:scale-105 transition-all duration-200">
                      Unlock Now
                    </button>
                  </div>
                </div>

                <div className="flex items-start justify-between mb-6">
                  <div className="text-4xl">{topic.icon}</div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(topic.difficulty)}`}>
                    {topic.difficulty}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                  {topic.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {topic.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400 flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {topic.problems} Problems
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {topic.estimatedTime}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-black dark:text-white">Lessons Include:</div>
                    <div className="space-y-1">
                      {topic.lessons.slice(0, 3).map((lesson, index) => (
                        <div key={index} className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-2">
                          <CheckCircle className="w-3 h-3" />
                          {lesson}
                        </div>
                      ))}
                      {topic.lessons.length > 3 && (
                        <div className="text-xs text-gray-500 dark:text-gray-500">
                          +{topic.lessons.length - 3} more lessons
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Premium CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                🚀 Unlock All Premium Topics
              </h3>
              <p className="text-lg mb-6 text-white/90">
                Get access to 9 advanced topics, 500+ premium problems, and personalized learning paths
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={handlePremiumClick}
                  className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 flex items-center gap-2"
                >
                  <Crown className="w-5 h-5" />
                  Upgrade to Premium
                </button>
                <a
                  href="/pricing"
                  className="text-white hover:text-yellow-300 font-semibold underline"
                >
                  View Pricing Plans
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upgrade Modal */}
      {upgradeModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 max-w-lg w-full">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                Upgrade to Premium
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Unlock all premium topics and accelerate your learning
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-black dark:text-white">9 Premium Topics</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-black dark:text-white">500+ Premium Problems</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-black dark:text-white">Personalized Learning Path</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-black dark:text-white">Priority Support</span>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="/pricing"
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 text-center"
              >
                View Pricing
              </a>
              <button
                onClick={() => setUpgradeModalOpen(false)}
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-black dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
              >
                Later
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}