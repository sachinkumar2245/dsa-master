import { useState } from "react";
import Header from "../../components/Header";
import { 
  Check, 
  X,
  Crown,
  Star,
  Zap,
  Shield,
  Users,
  Clock,
  BookOpen,
  Trophy,
  Target,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function PricingPage() {
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      id: "pdf-guide",
      name: "PDF Guide",
      subtitle: "Essential Learning",
      price: {
        monthly: 799,
        yearly: 799
      },
      popular: false,
      description: "Perfect for self-learners who want comprehensive study material",
      features: [
        "200-page comprehensive DSA guide",
        "All 12 topics covered in detail",
        "Practice problems with solutions",
        "Big O complexity analysis",
        "Interview tips and strategies",
        "Lifetime access to PDF",
        "Free updates for 1 year"
      ],
      notIncluded: [
        "Interactive coding practice",
        "Video explanations",
        "Mentoring sessions",
        "Mock interviews",
        "Community access",
        "Progress tracking"
      ],
      cta: "Download Guide",
      color: "from-blue-600 to-blue-700",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      id: "interview-prep",
      name: "Interview Prep",
      subtitle: "2-Month Intensive",
      price: {
        monthly: 1299,
        yearly: 1299
      },
      popular: true,
      description: "Complete preparation with daily mentoring for interview success",
      features: [
        "Everything in PDF Guide",
        "Interactive coding platform",
        "500+ practice problems",
        "Video explanations for all topics",
        "Daily 30-min mentoring sessions",
        "Weekly progress assessments",
        "Custom study plan",
        "Resume review & optimization",
        "Interview preparation checklist",
        "Job referral assistance",
        "Priority email support"
      ],
      notIncluded: [
        "Mock interviews with feedback",
        "Extended mentoring beyond 2 months",
        "Salary negotiation guidance"
      ],
      cta: "Start Prep Course",
      color: "from-purple-600 to-pink-600",
      icon: <Target className="w-6 h-6" />
    },
    {
      id: "complete-package",
      name: "Complete Package",
      subtitle: "Ultimate Success",
      price: {
        monthly: 1999,
        yearly: 1999
      },
      popular: false,
      description: "Everything you need for guaranteed interview success and career growth",
      features: [
        "Everything in Interview Prep",
        "Weekly 1-hour mock interviews",
        "Detailed feedback on performance",
        "Company-specific preparation",
        "System design fundamentals",
        "Behavioral interview training",
        "Salary negotiation guidance",
        "3-month extended mentoring",
        "Lifetime community access",
        "Job guarantee program*",
        "Career counseling sessions",
        "LinkedIn profile optimization",
        "Industry networking opportunities"
      ],
      notIncluded: [],
      cta: "Get Complete Package",
      color: "from-yellow-500 to-orange-500",
      icon: <Crown className="w-6 h-6" />
    }
  ];

  const faqs = [
    {
      question: "What if I don't get a job after completing the course?",
      answer: "Our Complete Package includes a job guarantee program. If you don't receive a job offer within 6 months of completing the course (following our guidelines), we'll provide a full refund."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Yes! You can upgrade to a higher tier at any time. You'll only pay the difference between your current plan and the new plan."
    },
    {
      question: "How does the mentoring work?",
      answer: "Mentoring sessions are conducted via video calls with experienced software engineers from top tech companies. Sessions are scheduled at your convenience and focus on your specific learning needs."
    },
    {
      question: "Is there a refund policy?",
      answer: "We offer a 7-day money-back guarantee for all plans. If you're not satisfied, contact us within 7 days for a full refund."
    },
    {
      question: "What programming languages are supported?",
      answer: "Our platform supports Python, Java, C++, and JavaScript. All examples and solutions are provided in these languages."
    },
    {
      question: "How long do I have access to the content?",
      answer: "PDF Guide has lifetime access. Interview Prep includes 6 months of platform access. Complete Package includes lifetime access to all materials and community."
    }
  ];

  const testimonials = [
    {
      name: "Arjun Patel",
      role: "Software Engineer at Google",
      content: "The Complete Package was worth every rupee. Got my Google offer in 3 months!",
      plan: "Complete Package",
      image: "👨‍💻"
    },
    {
      name: "Sneha Reddy",
      role: "SDE at Amazon",
      content: "Daily mentoring sessions made all the difference. Highly recommend the Interview Prep.",
      plan: "Interview Prep",
      image: "👩‍💻"
    },
    {
      name: "Vikram Singh",
      role: "Developer at Microsoft",
      content: "Started with PDF Guide, then upgraded. Great progression and amazing results!",
      plan: "Complete Package",
      image: "👨‍💼"
    }
  ];

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setPaymentModalOpen(true);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Header currentPage="pricing" />
      
      {/* Hero Section */}
      <section className="pt-12 pb-16 px-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20">
        <div className="max-w-6xl mx-auto text-center">
          <h1
            className="text-black dark:text-white font-bold mb-4"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            Choose Your Path to Success
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-xl max-w-3xl mx-auto mb-8">
            From basic study material to complete interview preparation with mentoring - find the perfect plan for your career goals
          </p>

          {/* Billing Toggle */}
          <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-2 inline-flex border border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-xl font-semibold transition-all duration-200 ${
                billingCycle === "monthly"
                  ? "bg-purple-600 text-white"
                  : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              }`}
            >
              One-time Payment
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-xl font-semibold transition-all duration-200 ${
                billingCycle === "yearly"
                  ? "bg-purple-600 text-white"
                  : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              }`}
            >
              Annual Plans
              <span className="ml-2 text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white dark:bg-[#1E1E1E] rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl relative ${
                  plan.popular 
                    ? "border-purple-500 dark:border-purple-400" 
                    : "border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center text-white mx-auto mb-4`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {plan.subtitle}
                    </p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-black dark:text-white">
                        {formatPrice(plan.price[billingCycle])}
                      </span>
                      {billingCycle === "yearly" && plan.id !== "pdf-guide" && (
                        <div className="text-sm text-gray-500 dark:text-gray-400 line-through">
                          {formatPrice(plan.price.monthly * 12)}
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-black dark:text-white flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      What's Included:
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {plan.notIncluded.length > 0 && (
                      <div className="mt-6">
                        <h4 className="font-semibold text-gray-600 dark:text-gray-400 flex items-center gap-2 mb-3">
                          <X className="w-4 h-4" />
                          Not Included:
                        </h4>
                        <ul className="space-y-2">
                          {plan.notIncluded.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <X className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-500 dark:text-gray-500 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handlePlanSelect(plan)}
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                        : "bg-gradient-to-r " + plan.color + " hover:shadow-lg text-white"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Additional Info */}
                  <div className="mt-4 text-center">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      7-day money-back guarantee
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Note */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-bold text-black dark:text-white mb-4">
                🎯 Not sure which plan is right for you?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                Start with our PDF Guide if you prefer self-study, choose Interview Prep for structured learning with mentoring, 
                or go with Complete Package for guaranteed success with comprehensive support.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600 dark:text-gray-400">Money-back guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span className="text-gray-600 dark:text-gray-400">Expert mentors</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Trophy className="w-4 h-4 text-yellow-500" />
                  <span className="text-gray-600 dark:text-gray-400">Proven results</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
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
              Real results from real students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-black dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                      {testimonial.plan}
                    </div>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-black dark:text-white font-bold mb-4"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-xl">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-lg font-semibold text-black dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Still have questions?
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105">
              Contact Support
            </button>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {paymentModalOpen && selectedPlan && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 max-w-md w-full">
            <div className="text-center mb-6">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${selectedPlan.color} flex items-center justify-center text-white mx-auto mb-4`}>
                {selectedPlan.icon}
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                {selectedPlan.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {selectedPlan.subtitle}
              </p>
              <div className="text-3xl font-bold text-black dark:text-white">
                {formatPrice(selectedPlan.price[billingCycle])}
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span className="text-green-700 dark:text-green-300 text-sm">
                  Secure payment • 7-day money-back guarantee
                </span>
              </div>
              
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-[#2a2a2a] text-black dark:text-white"
                />
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-[#2a2a2a] text-black dark:text-white"
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-[#2a2a2a] text-black dark:text-white"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-200 bg-gradient-to-r ${selectedPlan.color} text-white hover:scale-105`}
              >
                Pay Now
              </button>
              <button
                onClick={() => setPaymentModalOpen(false)}
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-black dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
              >
                Cancel
              </button>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                By proceeding, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}