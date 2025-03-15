import Link from "next/link"
import Image from "next/image"
import { FileText, BookOpen, HelpCircle, FileQuestion } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
          Resources
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Access documentation, guides, case studies, and support to help you get the most out of our communication platform.
        </p>
      </div>

      {/* Resource Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {/* Documentation */}
        <Link 
          href="/resources/documentation" 
          className="group block p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all"
        >
          <div className="flex items-start">
            <div className="w-12 h-12 rounded-xl bg-[#40196D]/10 flex items-center justify-center mr-4">
              <FileText className="w-6 h-6 text-[#40196D]" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-[#40196D] transition-colors">Documentation</h2>
              <p className="text-gray-600 mb-4">
                Comprehensive guides and API references to help you implement and use our platform effectively.
              </p>
              <span className="text-[#40196D] font-medium flex items-center">
                Browse documentation
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </Link>

        {/* Blog */}
        <Link 
          href="/resources/blog" 
          className="group block p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all"
        >
          <div className="flex items-start">
            <div className="w-12 h-12 rounded-xl bg-[#40196D]/10 flex items-center justify-center mr-4">
              <BookOpen className="w-6 h-6 text-[#40196D]" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-[#40196D] transition-colors">Blog</h2>
              <p className="text-gray-600 mb-4">
                Stay up-to-date with the latest industry trends, product updates, and best practices.
              </p>
              <span className="text-[#40196D] font-medium flex items-center">
                Read our blog
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </Link>

        {/* Case Studies */}
        <Link 
          href="/resources/case-studies" 
          className="group block p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all"
        >
          <div className="flex items-start">
            <div className="w-12 h-12 rounded-xl bg-[#40196D]/10 flex items-center justify-center mr-4">
              <FileQuestion className="w-6 h-6 text-[#40196D]" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-[#40196D] transition-colors">Case Studies</h2>
              <p className="text-gray-600 mb-4">
                Discover how other businesses have successfully implemented our solutions to solve their challenges.
              </p>
              <span className="text-[#40196D] font-medium flex items-center">
                Explore case studies
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </Link>

        {/* Help Center */}
        <Link 
          href="/resources/help-center" 
          className="group block p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all"
        >
          <div className="flex items-start">
            <div className="w-12 h-12 rounded-xl bg-[#40196D]/10 flex items-center justify-center mr-4">
              <HelpCircle className="w-6 h-6 text-[#40196D]" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-[#40196D] transition-colors">Help Center</h2>
              <p className="text-gray-600 mb-4">
                Find answers to common questions, troubleshooting guides, and support resources.
              </p>
              <span className="text-[#40196D] font-medium flex items-center">
                Get help
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* Featured Articles */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((article, index) => (
            <Link 
              key={index}
              href={article.href} 
              className="group block bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all"
            >
              <div className="relative h-[160px] w-full">
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="text-sm text-[#40196D] font-medium mb-2">{article.category}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#40196D] transition-colors">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{article.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link 
            href="/resources/blog" 
            className="inline-block px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </div>

      {/* Developer Resources */}
      <div className="mb-20 bg-gray-50 rounded-3xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Developer Resources</h2>
            <p className="text-lg text-gray-600 mb-6">
              Everything you need to integrate our communication platform into your applications.
            </p>
            <div className="space-y-4 mb-6">
              {developerResources.map((resource, index) => (
                <Link 
                  key={index}
                  href={resource.href} 
                  className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#40196D]/10 flex items-center justify-center mr-3">
                    {resource.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold">{resource.title}</h3>
                    <p className="text-sm text-gray-600">{resource.description}</p>
                  </div>
                </Link>
              ))}
            </div>
            <Link 
              href="/resources/documentation" 
              className="inline-block px-6 py-3 bg-[#40196D] text-white rounded-lg hover:bg-[#40196D]/90 transition-colors"
            >
              Explore Developer Docs
            </Link>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="font-mono text-sm bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                <pre><code>{`// Example API request
const response = await fetch('https://api.brivas.com/v1/messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    to: '+1234567890',
    from: 'Brivas',
    content: 'Hello from Brivas API!'
  })
});

const data = await response.json();
console.log(data);`}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support Options */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Need Additional Help?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Our support team is ready to assist you with any questions or issues you may have.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/contact" 
            className="px-6 py-3 bg-[#40196D] text-white rounded-lg hover:bg-[#40196D]/90 transition-colors"
          >
            Contact Support
          </Link>
          <Link 
            href="/resources/help-center" 
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Visit Help Center
          </Link>
        </div>
      </div>
    </div>
  )
}

// Featured articles data
const featuredArticles = [
  {
    title: "10 Best Practices for SMS Marketing Campaigns",
    excerpt: "Learn how to create effective SMS marketing campaigns that drive engagement and conversions.",
    category: "Marketing",
    date: "May 15, 2023",
    readTime: "5 min read",
    image: "/placeholder.svg?height=160&width=320",
    href: "/resources/blog/sms-marketing-best-practices"
  },
  {
    title: "Implementing Two-Factor Authentication with Brivas",
    excerpt: "A step-by-step guide to adding secure 2FA to your applications using our verification API.",
    category: "Development",
    date: "April 28, 2023",
    readTime: "8 min read",
    image: "/placeholder.svg?height=160&width=320",
    href: "/resources/blog/implementing-2fa"
  },
  {
    title: "The Future of Business Communication in 2023",
    excerpt: "Explore emerging trends and technologies shaping the future of business communication.",
    category: "Industry Insights",
    date: "June 2, 2023",
    readTime: "6 min read",
    image: "/placeholder.svg?height=160&width=320",
    href: "/resources/blog/future-business-communication"
  }
]

// Developer resources data
const developerResources = [
  {
    title: "API Reference",
    description: "Complete documentation of our REST API endpoints and parameters.",
    icon: <svg className="w-5 h-5 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>,
    href: "/resources/documentation/api-reference"
  },
  {
    title: "SDKs & Libraries",
    description: "Official client libraries for popular programming languages.",
    icon: <svg className="w-5 h-5 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>,
    href: "/resources/documentation/sdks"
  },
  {
    title: "Code Examples",
    description: "Sample code and tutorials for common integration scenarios.",
    icon: <svg className="w-5 h-5 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    href: "/resources/documentation/examples"
  }
] 