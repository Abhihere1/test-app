import { FeatureCard } from "./components/FeatureCard";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
      title: "Automated Testing",
      description:
        "Run automated tests across multiple browsers and devices with our comprehensive testing framework.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
      title: "Real-time Analytics",
      description:
        "Monitor test results in real-time with detailed analytics and reporting dashboards.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Lightning Fast",
      description:
        "Experience blazing fast test execution with our distributed testing infrastructure.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      title: "Secure & Reliable",
      description:
        "Enterprise-grade security with SOC2 compliance and 99.99% uptime guarantee.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
      ),
      title: "CI/CD Integration",
      description:
        "Seamlessly integrate with your existing CI/CD pipelines for automated testing workflows.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "24/7 Support",
      description:
        "Round-the-clock support from our team of testing experts to help you succeed.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-32 dark:bg-zinc-950" data-testid="hero-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            {/* Hero Content */}
            <div className="flex flex-col justify-center text-center md:text-left">
              <h1
                className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-6xl"
                data-testid="hero-heading"
              >
                Build Better Software <br />
                <span className="text-indigo-600 dark:text-indigo-400">
                  With Confidence
                </span>
              </h1>
              <p
                className="mb-8 text-lg text-gray-600 dark:text-gray-300 md:text-xl"
                data-testid="hero-subheading"
              >
                The all-in-one testing platform that helps developers and QA teams
                deliver high-quality software faster. Join thousands of companies
                that trust test-app for their testing needs.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                <Link
                  href="/signup"
                  className="rounded-full bg-indigo-600 px-8 py-4 text-lg font-semibold text-white hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20"
                  data-testid="hero-get-started-btn"
                >
                  Get Started for Free
                </Link>
                <Link
                  href="/demo"
                  className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-gray-700 ring-1 ring-gray-200 hover:bg-gray-50 dark:bg-zinc-900 dark:text-gray-200 dark:ring-gray-700 dark:hover:bg-zinc-800 transition-colors"
                  data-testid="hero-try-demo-btn"
                >
                  Watch Demo
                </Link>
              </div>
              <p className="mt-6 text-sm text-gray-500 dark:text-gray-400" data-testid="hero-no-cc-text">
                No credit card required &middot; 14-day free trial
              </p>
            </div>

            {/* Hero Visual */}
            <div className="relative" data-testid="hero-visual-container">
              <div className="absolute -inset-4 -z-10 h-full w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-20 blur-2xl"></div>
              <div className="relative rounded-2xl bg-gray-100 dark:bg-zinc-900 p-8 shadow-2xl">
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-48 w-full rounded-lg bg-gray-200 dark:bg-zinc-800 flex items-center justify-center">
                    <span className="text-gray-400 dark:text-zinc-600">Dashboard Preview</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-24 rounded-lg bg-gray-200 dark:bg-zinc-800"></div>
                    <div className="h-24 rounded-lg bg-gray-200 dark:bg-zinc-800"></div>
                    <div className="h-24 rounded-lg bg-gray-200 dark:bg-zinc-800"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-16 bg-gray-50 dark:bg-zinc-900"
        data-testid="features-section"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl"
              data-testid="features-heading"
            >
              Everything You Need to Test
            </h2>
            <p
              className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400"
              data-testid="features-subheading"
            >
              Powerful features designed to streamline your testing workflow and
              improve your software quality.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" data-testid="features-grid">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 bg-white dark:bg-zinc-950"
        data-testid="about-section"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1" data-testid="about-visual-container">
              <div className="relative rounded-2xl bg-gray-100 dark:bg-zinc-900 p-8 shadow-xl">
                <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-indigo-100 dark:bg-indigo-900/30"></div>
                <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-purple-100 dark:bg-purple-900/30"></div>
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                      10K+
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Active Users</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">10,000+</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xl">
                      99%
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Uptime</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">99.99%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl">
                      24/7
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Support</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2" data-testid="about-content">
              <h2
                className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl"
                data-testid="about-heading"
              >
                Trusted by Leading Companies
              </h2>
              <p
                className="mb-6 text-lg text-gray-600 dark:text-gray-300"
                data-testid="about-description"
              >
                We&apos;ve helped thousands of companies improve their software quality
                and delivery speed. From startups to enterprise, our platform
                scales to meet your needs.
              </p>
              <ul className="space-y-4 mb-8" data-testid="about-list">
                {[
                  "Easy integration with existing tools",
                  "Comprehensive test coverage",
                  "Detailed reporting and analytics",
                  "Collaborative team features",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3" data-testid={`about-list-item-${index}`}>
                    <svg
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
                data-testid="about-read-more-btn"
              >
                Learn more about us
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-16 bg-gray-50 dark:bg-zinc-900"
        data-testid="pricing-section"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl"
              data-testid="pricing-heading"
            >
              Simple, Transparent Pricing
            </h2>
            <p
              className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400"
              data-testid="pricing-subheading"
            >
              Choose the plan that&apos;s right for your team. No hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3" data-testid="pricing-cards">
            {/* Free Plan */}
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 dark:bg-zinc-950 dark:ring-gray-800" data-testid="pricing-free-card">
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white" data-testid="pricing-free-title">
                Free
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">$0</span>
                <span className="text-gray-600 dark:text-gray-400">/month</span>
              </div>
              <p className="mb-6 text-gray-600 dark:text-gray-400" data-testid="pricing-free-description">
                Perfect for individuals and small projects.
              </p>
              <ul className="mb-8 space-y-3" data-testid="pricing-free-features">
                {["5 test runs/month", "Basic reporting", "Community support", "1 user"].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3" data-testid={`pricing-free-feature-${index}`}>
                    <svg
                      className="h-5 w-5 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className="block w-full rounded-full border border-gray-300 bg-white px-6 py-3 text-center font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-zinc-900 dark:text-gray-300 dark:hover:bg-zinc-800"
                data-testid="pricing-free-btn"
              >
                Get Started
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="relative rounded-2xl bg-white p-8 shadow-xl ring-2 ring-indigo-600 dark:bg-zinc-950 dark:ring-indigo-600" data-testid="pricing-pro-card">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold text-white" data-testid="pricing-pro-badge">
                Popular
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white" data-testid="pricing-pro-title">
                Pro
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">$29</span>
                <span className="text-gray-600 dark:text-gray-400">/month</span>
              </div>
              <p className="mb-6 text-gray-600 dark:text-gray-400" data-testid="pricing-pro-description">
                For growing teams and startups.
              </p>
              <ul className="mb-8 space-y-3" data-testid="pricing-pro-features">
                {["Unlimited test runs", "Advanced reporting", "Priority support", "5 team members", "CI/CD integration"].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3" data-testid={`pricing-pro-feature-${index}`}>
                    <svg
                      className="h-5 w-5 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className="block w-full rounded-full bg-indigo-600 px-6 py-3 text-center font-semibold text-white hover:bg-indigo-700"
                data-testid="pricing-pro-btn"
              >
                Start Free Trial
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 dark:bg-zinc-950 dark:ring-gray-800" data-testid="pricing-enterprise-card">
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white" data-testid="pricing-enterprise-title">
                Enterprise
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">Custom</span>
              </div>
              <p className="mb-6 text-gray-600 dark:text-gray-400" data-testid="pricing-enterprise-description">
                For large organizations with specific needs.
              </p>
              <ul className="mb-8 space-y-3" data-testid="pricing-enterprise-features">
                {["Unlimited everything", "Custom integrations", "Dedicated support", "Unlimited team members", "SSO & advanced security"].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3" data-testid={`pricing-enterprise-feature-${index}`}>
                    <svg
                      className="h-5 w-5 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block w-full rounded-full border border-gray-300 bg-white px-6 py-3 text-center font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-zinc-900 dark:text-gray-300 dark:hover:bg-zinc-800"
                data-testid="pricing-enterprise-btn"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 dark:bg-indigo-900" data-testid="cta-section">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="mb-6 text-3xl font-bold text-white md:text-4xl"
            data-testid="cta-heading"
          >
            Ready to Get Started?
          </h2>
          <p
            className="mb-8 text-lg text-indigo-100 md:text-xl"
            data-testid="cta-subheading"
          >
            Join thousands of developers and QA teams who trust test-app to deliver
            high-quality software.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center" data-testid="cta-buttons">
            <Link
              href="/signup"
              className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-indigo-600 hover:bg-gray-100 transition-colors"
              data-testid="cta-get-started-btn"
            >
              Get Started for Free
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-indigo-500 px-8 py-4 text-lg font-semibold text-white hover:bg-indigo-400 transition-colors"
              data-testid="cta-contact-btn"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
