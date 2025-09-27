import { useState } from "react";
import Header from "../components/Header";
import { 
  ArrowRight, 
  BookOpen, 
  Code, 
  Target, 
  Users, 
  Trophy, 
  CheckCircle,
  Lock,
  Star
} from "lucide-react";

export default function HomePage() {
  const [emailSignupOpen, setEmailSignupOpen] = useState(false);

  const topics = [
    { name: "Arrays", icon: "📊", free: true, progress: 0 },
    { name: "Strings", icon: "🔤", free: true, progress: 0 },
    { name: "Linked Lists", icon: "🔗", free: true, progress: 0 },
    { name: "Trees", icon: "🌲", free: false, progress: 0 },
    { name: "Graphs", icon: "🕸️", free: false, progress: 0 },
    { name: "Dynamic Programming", icon: "⚡", free: false, progress: 0 },
    { name: "Sorting Algorithms", icon: "📈", free: false, progress: 0 },
    { name: "Hash Tables", icon: "🔑", free: false, progress: 0 },
    { name: "Stacks & Queues", icon: "📚", free: false, progress: 0 },
    { name: "Binary Search", icon: "🔍", free: false, progress: 0 },
    { name: "Recursion", icon: "🔄", free: false, progress: 0 },
    { name: "Greedy Algorithms", icon: "💰", free: false, progress: 0 },
  ];

  const stats = [
    { number: "10,000+", label: "Students Trained" },
    { number: "95%", label: "Interview Success Rate" },
    { number: "500+", label: "Problems Solved" },
    { number: "50+", label: "Companies Hiring" },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at Google",
      content: "DSA Master helped me crack my Google interview. The step-by-step approach is fantastic!",
      rating: 5
    },
    {
      name: "Rahul Kumar",
      role: "SDE at Amazon",
      content: "The practice problems are exactly what you need for FAANG interviews. Highly recommended!",
      rating: 5
    },
    {
      name: "Anita Singh",
      role: "Developer at Microsoft",
      content: "From zero DSA knowledge to Microsoft offer in 3 months. This platform works!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Header currentPage="home" />
      
      {/* Hero Section */}
      <section
        className="pt-16 pb-20 px-6 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            {/* Main Headline */}
            <h1
              className="text-white font-bold leading-[1.1] mb-6"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Master Data Structures &<br />
              Algorithms for Your<br />
              <span className="text-yellow-300">Dream Job</span>
            </h1>

            {/* Subheadline */}
            <p className="text-white/90 text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Land your dream tech job with our comprehensive DSA course. 
              From beginner to interview-ready in just 8 weeks.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={() => setEmailSignupOpen(true)}
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-xl flex items-center gap-2"
              >
                Start Learning Free
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="/pricing"
                className="bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 backdrop-blur-sm border border-white/20"
              >
                View Pricing Plans
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-white/80 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/20"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-white/10"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/5"></div>
        </div>
      </section>

      {/* Topics Overview */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-black dark:text-white font-bold mb-4"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Master Every Topic
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-xl max-w-3xl mx-auto">
              Comprehensive coverage of all DSA topics with hands-on practice and real interview questions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {topics.map((topic, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-[#1E1E1E] rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-200 dark:border-gray-700 relative ${
                  !topic.free ? 'opacity-75' : ''
                }`}
              >
                {!topic.free && (
                  <div className="absolute top-2 right-2">
                    <Lock className="w-4 h-4 text-gray-400" />
                  </div>
                )}
                
                <div className="text-3xl mb-4">{topic.icon}</div>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                  {topic.name}
                </h3>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {topic.free ? 'Free' : 'Premium'}
                </div>
                
                {topic.free && (
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${topic.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {topic.progress}% Complete
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/topics"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-xl inline-flex items-center gap-2"
            >
              Explore All Topics
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white dark:bg-[#121212]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-black dark:text-white font-bold mb-4"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Why Choose DSA Master?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Structured Learning",
                description: "Step-by-step curriculum designed by industry experts"
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Interactive Practice",
                description: "Code in real-time with instant feedback and hints"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Interview Focus",
                description: "Practice with actual questions from top tech companies"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Community Support",
                description: "Join thousands of learners and get help when stuck"
              },
              {
                icon: <Trophy className="w-8 h-8" />,
                title: "Track Progress",
                description: "Monitor your improvement with detailed analytics"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Placement Support",
                description: "Resume review and mock interview preparation"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-[#1E1E1E] rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="text-purple-600 dark:text-purple-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-black dark:text-white font-bold mb-4"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Success Stories
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-xl">
              Hear from students who landed their dream jobs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#1E1E1E] rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-black dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 px-6 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2
            className="text-white font-bold mb-6"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who have successfully landed jobs at top tech companies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setEmailSignupOpen(true)}
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-xl"
            >
              Start Free Trial
            </button>
            <a
              href="/pricing"
              className="bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 backdrop-blur-sm border border-white/20"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Email Signup Modal */}
      {emailSignupOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              Start Learning for Free
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Get instant access to our free DSA topics and start your journey today.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-[#2a2a2a] text-black dark:text-white"
              />
              <input
                type="password"
                placeholder="Create a password"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-[#2a2a2a] text-black dark:text-white"
              />
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                >
                  Get Started
                </button>
                <button
                  type="button"
                  onClick={() => setEmailSignupOpen(false)}
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-black dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}