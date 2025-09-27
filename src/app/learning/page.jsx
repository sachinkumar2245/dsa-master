import { useState } from "react";
import Header from "../../components/Header";
import { 
  ChevronDown, 
  ChevronRight,
  CheckCircle, 
  Clock, 
  BookOpen,
  Target,
  Star,
  ArrowRight,
  Lightbulb,
  Code,
  Brain,
  Zap
} from "lucide-react";

export default function LearningPage() {
  const [expandedSteps, setExpandedSteps] = useState([0]); // First step expanded by default
  const [completedSteps, setCompletedSteps] = useState([]);

  const problemSolvingSteps = [
    {
      id: 0,
      title: "1. Understand the Problem",
      description: "Before writing any code, make sure you fully understand what the problem is asking",
      timeEstimate: "2-3 minutes",
      keyPoints: [
        "Read the problem statement carefully, twice if needed",
        "Identify the input and expected output",
        "Look for constraints and edge cases",
        "Understand the examples given"
      ],
      example: {
        problem: "Find the maximum element in an array",
        input: "[3, 1, 4, 1, 5, 9, 2, 6]",
        output: "9",
        constraints: "Array size: 1 ≤ n ≤ 10^5, Elements: -10^9 ≤ arr[i] ≤ 10^9"
      },
      tips: [
        "Don't rush into coding immediately",
        "Ask clarifying questions if something is unclear",
        "Make sure you understand what constitutes a valid solution"
      ]
    },
    {
      id: 1,
      title: "2. Break Down the Problem",
      description: "Decompose the complex problem into smaller, manageable subproblems",
      timeEstimate: "3-5 minutes",
      keyPoints: [
        "Identify the main components of the problem",
        "Think about what data structures might be helpful",
        "Consider if the problem is similar to any known patterns",
        "Break it into logical steps"
      ],
      example: {
        problem: "Two Sum: Find two numbers that add up to target",
        breakdown: [
          "Need to check pairs of numbers",
          "For each number, find its complement (target - number)",
          "Store numbers we've seen for quick lookup",
          "Return indices when complement is found"
        ]
      },
      tips: [
        "Draw diagrams or flowcharts if it helps",
        "Think about the problem at a high level first",
        "Consider what the brute force solution would look like"
      ]
    },
    {
      id: 2,
      title: "3. Choose the Right Approach",
      description: "Select the most appropriate algorithm or data structure for the problem",
      timeEstimate: "2-4 minutes",
      keyPoints: [
        "Consider time and space complexity requirements",
        "Think about different algorithmic approaches",
        "Choose the simplest solution that meets requirements",
        "Consider trade-offs between time and space"
      ],
      approaches: [
        {
          name: "Brute Force",
          when: "Small input size, need simple solution first",
          pros: "Easy to implement, less chance of bugs",
          cons: "Usually not optimal time complexity"
        },
        {
          name: "Hash Tables",
          when: "Need fast lookups, checking membership",
          pros: "O(1) average lookup time",
          cons: "Extra space complexity"
        },
        {
          name: "Two Pointers",
          when: "Sorted array, need to find pairs/triplets",
          pros: "O(1) space, often O(n) time",
          cons: "Only works with sorted data"
        },
        {
          name: "Sliding Window",
          when: "Subarray/substring problems",
          pros: "O(n) time for many problems",
          cons: "Limited to specific problem types"
        }
      ],
      tips: [
        "Start with brute force if unsure",
        "Think about which data structure fits the problem",
        "Consider if sorting the input would help"
      ]
    },
    {
      id: 3,
      title: "4. Plan Your Solution",
      description: "Create a step-by-step plan before writing code",
      timeEstimate: "3-5 minutes",
      keyPoints: [
        "Write pseudocode or outline the algorithm",
        "Identify the main variables you'll need",
        "Plan the flow of your program",
        "Consider edge cases and how to handle them"
      ],
      example: {
        problem: "Find Two Sum using Hash Map",
        pseudocode: `1. Create empty hash map
2. For each number in array:
   a. Calculate complement = target - current number
   b. If complement exists in hash map:
      - Return [hash_map[complement], current_index]
   c. Otherwise:
      - Store current number and index in hash map
3. Return empty array if no solution found`
      },
      tips: [
        "Don't skip this step - it saves time debugging later",
        "Think about variable names that make sense",
        "Consider what happens at the boundaries"
      ]
    },
    {
      id: 4,
      title: "5. Implement Your Solution",
      description: "Write clean, readable code following your plan",
      timeEstimate: "10-15 minutes",
      keyPoints: [
        "Follow your planned algorithm step by step",
        "Use meaningful variable names",
        "Add comments for complex logic",
        "Handle edge cases as you code"
      ],
      codeExample: `def twoSum(nums, target):
    # Hash map to store number -> index mapping
    seen = {}
    
    for i, num in enumerate(nums):
        complement = target - num
        
        # Check if complement exists
        if complement in seen:
            return [seen[complement], i]
        
        # Store current number
        seen[num] = i
    
    return []  # No solution found`,
      tips: [
        "Write code incrementally, test small parts",
        "Don't try to optimize too early",
        "Make sure your code matches your plan"
      ]
    },
    {
      id: 5,
      title: "6. Test Your Solution",
      description: "Verify your solution works correctly with various test cases",
      timeEstimate: "3-5 minutes",
      keyPoints: [
        "Test with the given examples first",
        "Try edge cases (empty input, single element, etc.)",
        "Test with larger inputs if possible",
        "Verify the output format matches requirements"
      ],
      testCases: [
        {
          type: "Normal Case",
          input: "nums = [2,7,11,15], target = 9",
          expected: "[0,1]",
          reason: "2 + 7 = 9"
        },
        {
          type: "Edge Case",
          input: "nums = [3,3], target = 6",
          expected: "[0,1]",
          reason: "Same number used twice"
        },
        {
          type: "No Solution",
          input: "nums = [1,2,3], target = 7",
          expected: "[]",
          reason: "No pair adds up to 7"
        }
      ],
      tips: [
        "Always test edge cases",
        "Walk through your code with test inputs",
        "Make sure you understand why each test case works"
      ]
    },
    {
      id: 6,
      title: "7. Analyze & Optimize",
      description: "Review your solution's complexity and see if it can be improved",
      timeEstimate: "2-3 minutes",
      keyPoints: [
        "Calculate time and space complexity",
        "Look for redundant operations",
        "Consider if there's a more efficient approach",
        "Think about scalability"
      ],
      analysis: {
        timeComplexity: "O(n) - single pass through array",
        spaceComplexity: "O(n) - hash map stores up to n elements",
        canOptimize: "This is already optimal for general case",
        alternatives: "Two pointers approach if array was sorted (O(1) space)"
      },
      tips: [
        "Big O analysis is crucial for interviews",
        "Don't optimize prematurely, but understand the complexity",
        "Be ready to discuss trade-offs"
      ]
    }
  ];

  const toggleStep = (stepId) => {
    setExpandedSteps(prev => 
      prev.includes(stepId) 
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId]
    );
  };

  const markStepComplete = (stepId) => {
    setCompletedSteps(prev => 
      prev.includes(stepId) 
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId]
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Header currentPage="learning" />
      
      {/* Hero Section */}
      <section className="pt-12 pb-16 px-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <div className="max-w-6xl mx-auto text-center">
          <h1
            className="text-black dark:text-white font-bold mb-4"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            Problem-Solving Methodology
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-xl max-w-3xl mx-auto mb-8">
            Learn our proven 7-step approach to solve any DSA problem systematically and efficiently
          </p>
          
          {/* Progress Overview */}
          <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 max-w-2xl mx-auto border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-black dark:text-white">Your Progress</h3>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {completedSteps.length} of {problemSolvingSteps.length} steps completed
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${(completedSteps.length / problemSolvingSteps.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Steps */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Master the Art of Problem Solving</h2>
                <p className="text-lg text-white/90 leading-relaxed">
                  This methodology has helped thousands of students succeed in technical interviews. 
                  Follow these 7 steps systematically, and you'll develop the confidence to tackle any DSA problem.
                </p>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-6">
            {problemSolvingSteps.map((step, index) => (
              <div
                key={step.id}
                className={`bg-white dark:bg-[#1E1E1E] rounded-2xl border transition-all duration-300 ${
                  expandedSteps.includes(step.id) 
                    ? "border-blue-500 dark:border-blue-400 shadow-lg" 
                    : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                }`}
              >
                {/* Step Header */}
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => toggleStep(step.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${
                        completedSteps.includes(step.id)
                          ? "bg-green-500 text-white"
                          : expandedSteps.includes(step.id)
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                      }`}>
                        {completedSteps.includes(step.id) ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          step.id + 1
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-black dark:text-white">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {step.timeEstimate}
                      </span>
                      {expandedSteps.includes(step.id) ? (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Step Content */}
                {expandedSteps.includes(step.id) && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                      
                      {/* Key Points */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-black dark:text-white mb-4 flex items-center gap-2">
                          <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          Key Points to Remember
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {step.keyPoints.map((point, pointIndex) => (
                            <div key={pointIndex} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 dark:text-gray-300 text-sm">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Example Section */}
                      {step.example && (
                        <div className="mb-8">
                          <h4 className="text-lg font-semibold text-black dark:text-white mb-4 flex items-center gap-2">
                            <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                            Example
                          </h4>
                          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                            {step.example.problem && (
                              <div className="mb-3">
                                <span className="font-semibold text-gray-700 dark:text-gray-300">Problem: </span>
                                <span className="text-gray-600 dark:text-gray-400">{step.example.problem}</span>
                              </div>
                            )}
                            {step.example.input && (
                              <div className="mb-3">
                                <span className="font-semibold text-gray-700 dark:text-gray-300">Input: </span>
                                <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-mono text-sm">
                                  {step.example.input}
                                </code>
                              </div>
                            )}
                            {step.example.output && (
                              <div className="mb-3">
                                <span className="font-semibold text-gray-700 dark:text-gray-300">Output: </span>
                                <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-mono text-sm">
                                  {step.example.output}
                                </code>
                              </div>
                            )}
                            {step.example.breakdown && (
                              <div>
                                <span className="font-semibold text-gray-700 dark:text-gray-300">Breakdown:</span>
                                <ul className="mt-2 space-y-1">
                                  {step.example.breakdown.map((item, itemIndex) => (
                                    <li key={itemIndex} className="text-gray-600 dark:text-gray-400 text-sm">
                                      • {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {step.example.pseudocode && (
                              <div>
                                <span className="font-semibold text-gray-700 dark:text-gray-300">Pseudocode:</span>
                                <pre className="mt-2 text-sm text-gray-600 dark:text-gray-400 font-mono whitespace-pre-wrap">
                                  {step.example.pseudocode}
                                </pre>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Approaches Section */}
                      {step.approaches && (
                        <div className="mb-8">
                          <h4 className="text-lg font-semibold text-black dark:text-white mb-4 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                            Common Approaches
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {step.approaches.map((approach, approachIndex) => (
                              <div key={approachIndex} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                                <h5 className="font-semibold text-black dark:text-white mb-2">{approach.name}</h5>
                                <div className="space-y-2 text-sm">
                                  <div>
                                    <span className="font-medium text-gray-700 dark:text-gray-300">When to use: </span>
                                    <span className="text-gray-600 dark:text-gray-400">{approach.when}</span>
                                  </div>
                                  <div>
                                    <span className="font-medium text-green-700 dark:text-green-400">Pros: </span>
                                    <span className="text-gray-600 dark:text-gray-400">{approach.pros}</span>
                                  </div>
                                  <div>
                                    <span className="font-medium text-red-700 dark:text-red-400">Cons: </span>
                                    <span className="text-gray-600 dark:text-gray-400">{approach.cons}</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Code Example */}
                      {step.codeExample && (
                        <div className="mb-8">
                          <h4 className="text-lg font-semibold text-black dark:text-white mb-4">Code Example</h4>
                          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-green-400 font-mono text-sm whitespace-pre">
                              {step.codeExample}
                            </pre>
                          </div>
                        </div>
                      )}

                      {/* Test Cases */}
                      {step.testCases && (
                        <div className="mb-8">
                          <h4 className="text-lg font-semibold text-black dark:text-white mb-4">Test Cases</h4>
                          <div className="space-y-3">
                            {step.testCases.map((testCase, testIndex) => (
                              <div key={testIndex} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                                <div className="flex items-start justify-between mb-2">
                                  <span className="font-semibold text-gray-700 dark:text-gray-300">{testCase.type}</span>
                                </div>
                                <div className="space-y-1 text-sm">
                                  <div>
                                    <span className="font-medium">Input: </span>
                                    <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">{testCase.input}</code>
                                  </div>
                                  <div>
                                    <span className="font-medium">Expected: </span>
                                    <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">{testCase.expected}</code>
                                  </div>
                                  <div>
                                    <span className="font-medium">Reason: </span>
                                    <span className="text-gray-600 dark:text-gray-400">{testCase.reason}</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Analysis */}
                      {step.analysis && (
                        <div className="mb-8">
                          <h4 className="text-lg font-semibold text-black dark:text-white mb-4">Complexity Analysis</h4>
                          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <span className="font-semibold text-blue-800 dark:text-blue-300">Time Complexity: </span>
                                <span className="text-blue-700 dark:text-blue-300">{step.analysis.timeComplexity}</span>
                              </div>
                              <div>
                                <span className="font-semibold text-blue-800 dark:text-blue-300">Space Complexity: </span>
                                <span className="text-blue-700 dark:text-blue-300">{step.analysis.spaceComplexity}</span>
                              </div>
                            </div>
                            <div className="mt-3">
                              <span className="font-semibold text-blue-800 dark:text-blue-300">Can we optimize? </span>
                              <span className="text-blue-700 dark:text-blue-300">{step.analysis.canOptimize}</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Tips */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-black dark:text-white mb-4 flex items-center gap-2">
                          <Lightbulb className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                          Pro Tips
                        </h4>
                        <div className="space-y-2">
                          {step.tips.map((tip, tipIndex) => (
                            <div key={tipIndex} className="flex items-start gap-2">
                              <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 dark:text-gray-300 text-sm">{tip}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Mark Complete Button */}
                      <div className="flex justify-between items-center">
                        <button
                          onClick={() => markStepComplete(step.id)}
                          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                            completedSteps.includes(step.id)
                              ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 cursor-default"
                              : "bg-blue-600 hover:bg-blue-700 text-white hover:scale-105"
                          }`}
                        >
                          <CheckCircle className="w-4 h-4" />
                          {completedSteps.includes(step.id) ? "Completed" : "Mark as Complete"}
                        </button>

                        {index < problemSolvingSteps.length - 1 && (
                          <button
                            onClick={() => toggleStep(step.id + 1)}
                            className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                          >
                            Next Step
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Completion Message */}
          {completedSteps.length === problemSolvingSteps.length && (
            <div className="mt-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 text-white text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Congratulations! 🎉</h2>
              <p className="text-lg text-white/90 mb-6">
                You've completed the problem-solving methodology. You're now ready to tackle any DSA problem with confidence!
              </p>
              <a
                href="/practice"
                className="bg-white text-green-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 inline-flex items-center gap-2"
              >
                Start Practicing
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}