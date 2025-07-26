import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Main Content */}
      <main className="pt-32">
        {/* Hero Section - Pitch Black with Dense Dotted Grid */}
        <section className="min-h-screen relative overflow-hidden dense-dotted-grid deep-sea-gradient-patch">
          <div className="container mx-auto px-6 lg:px-12 py-0">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 text-white leading-tight">
                Investing in the Future of{' '}
                <span className=" ">Creative Collaboration</span>
              </h1>
              <p className="text-lg sm:text-xl max-w-4xl mx-auto text-white/70 leading-relaxed mb-12">
                Creative agencies operate in a state of controlled chaos. They juggle massive files, fragmented feedback, and iterative workflows that break traditional project management tools. This operational friction isn't just an inconvenience—it's a direct assault on profitability, leading to wasted hours, costly rework, and delayed projects.
              </p>
              
              {/* Mission Statement Card */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
                <p className="text-lg text-white/90 leading-relaxed">
                  We are building the solution: the first project management platform for video agencies that provides true, Git-powered version control for the entire creative workflow, seamlessly integrated with the Google Drive they already use.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Opportunity Section - Pure White */}
        <section className="py-32 px-6 lg:px-12 bg-white text-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 text-black">
                The Market Opportunity
              </h2>
              <p className="text-lg max-w-3xl mx-auto text-gray-600 leading-relaxed">
                The market for tools that empower creative and collaborative work is massive and sustained. We are targeting a highly valuable and underserved segment of this market.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black text-white rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                <h3 className="text-3xl font-bold text-white mb-2">$27.1B</h3>
                <p className="text-white/80 font-medium">Total Addressable Market (TAM)</p>
                <p className="text-sm text-white/60 mt-2">Global collaboration applications market</p>
              </div>
              <div className="bg-black text-white rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                <h3 className="text-3xl font-bold text-white mb-2">$540M</h3>
                <p className="text-white/80 font-medium">Serviceable Addressable Market (SAM)</p>
                <p className="text-sm text-white/60 mt-2">Small-to-mid-sized media agencies</p>
              </div>
              <div className="bg-black text-white rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                <h3 className="text-3xl font-bold text-white mb-2">$16.2M</h3>
                <p className="text-white/80 font-medium">Serviceable Obtainable Market (SOM)</p>
                <p className="text-sm text-white/60 mt-2">3-5 year target market share</p>
              </div>
            </div>
          </div>
        </section>

        {/* Unique Selling Proposition - Pitch Black with Dense Dotted Grid */}
        <section className="py-32 px-6 lg:px-12 dense-dotted-grid deep-sea-gradient-patch">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 text-white">
                Why We Will Win: Our{' '}
                <span className=" ">Unique Selling Proposition</span>
              </h2>
              <p className="text-lg max-w-3xl mx-auto text-white/70 leading-relaxed">
                Our strategic advantage is built on a superior technical foundation that competitors cannot easily replicate.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">1. True Version Control</h3>
                <p className="text-white/80 leading-relaxed">
                  We go beyond simple file versioning (<code className="bg-white/10 px-2 py-1 rounded text-sm">final_v3.mp4</code>). By leveraging Git, we offer branching, merging, and a complete commit history, bringing developer-grade discipline to the creative process.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">2. Unified Workspace</h3>
                <p className="text-white/80 leading-relaxed">
                  We eliminate the need for agencies to juggle Google Drive for storage, Frame.io for review, and Asana for tasks. Our platform is a single, cohesive source of truth.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">3. Leverage Existing Tools</h3>
                <p className="text-white/80 leading-relaxed">
                  There is no painful data migration. We plug directly into our customers' existing Google Drive infrastructure, making adoption frictionless.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Landscape - Pure White */}
        <section className="py-32 px-6 lg:px-12 bg-white text-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 text-black">
                Competitive Landscape
              </h2>
              <p className="text-lg max-w-3xl mx-auto text-gray-600 leading-relaxed">
                The market for creative project management is fractured between generic tools that are ill-suited for video and specialized tools that only solve part of the problem. Here's how we stack up against the competition:
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-black text-white rounded-2xl overflow-hidden">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left p-6 font-bold text-white">Feature</th>
                    <th className="text-left p-6 font-bold text-white">Your Product (MVP)</th>
                    <th className="text-left p-6 font-bold text-white/70">Frame.io (Team Plan)</th>
                    <th className="text-left p-6 font-bold text-white/70">Filestage (Basic Plan)</th>
                    <th className="text-left p-6 font-bold text-white/70">Asana (Starter Plan)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="p-6 font-medium text-white">Git-Powered Version Control</td>
                    <td className="p-6 text-green-400 font-bold">Yes (Core Differentiator)</td>
                    <td className="p-6 text-red-400">No</td>
                    <td className="p-6 text-red-400">No</td>
                    <td className="p-6 text-red-400">No</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-6 font-medium text-white">Frame-Accurate Video Review</td>
                    <td className="p-6 text-green-400">Yes</td>
                    <td className="p-6 text-green-400">Yes</td>
                    <td className="p-6 text-green-400">Yes</td>
                    <td className="p-6 text-red-400">No</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-6 font-medium text-white">Google Drive Integration</td>
                    <td className="p-6 text-green-400 font-bold">Native (Core Architecture)</td>
                    <td className="p-6 text-green-400">Yes (Integration)</td>
                    <td className="p-6 text-green-400">Yes (Integration)</td>
                    <td className="p-6 text-green-400">Yes (Integration)</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-6 font-medium text-white">Basic Task Management</td>
                    <td className="p-6 text-green-400">Yes</td>
                    <td className="p-6 text-yellow-400">Limited</td>
                    <td className="p-6 text-red-400">No</td>
                    <td className="p-6 text-green-400">Yes</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-6 font-medium text-white">Resource Planning</td>
                    <td className="p-6 text-yellow-400">No (Roadmap)</td>
                    <td className="p-6 text-red-400">No</td>
                    <td className="p-6 text-red-400">No</td>
                    <td className="p-6 text-yellow-400">No (Advanced Plan)</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-6 font-medium text-white">Pricing Model</td>
                    <td className="p-6 text-white">Hybrid (Team + Usage)</td>
                    <td className="p-6 text-white">Per-User</td>
                    <td className="p-6 text-white">Team-Based</td>
                    <td className="p-6 text-white">Per-User</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium text-white">Starting Price (Annual)</td>
                    <td className="p-6 text-green-400 font-bold">~$600/year (Team)</td>
                    <td className="p-6 text-white">$4,320/year (15 users)</td>
                    <td className="p-6 text-white">$1,308/year</td>
                    <td className="p-6 text-white">~$1,320/year (10 users)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Growth Roadmap - Pitch Black with Dense Dotted Grid */}
        <section className="py-32 px-6 lg:px-12 dense-dotted-grid deep-sea-gradient-patch">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 text-white">
                Our 18-Month{' '}
                <span className=" ">Growth Roadmap</span>
              </h2>
              <p className="text-lg max-w-3xl mx-auto text-white/70 leading-relaxed">
                Our post-funding plan is designed to de-risk the business and demonstrate a clear path to scalable growth.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">Months 0-6 (Achieve Product-Market Fit)</h3>
                <ul className="space-y-4 text-white/80">
                  <li className="flex items-start">
                    <span className="text-white mr-4 mt-2 text-xl">•</span>
                    Ship Adobe Creative Cloud integration and advanced collaboration features.
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-4 mt-2 text-xl">•</span>
                    Onboard over 500 active free users and convert at least 20 into paying customers.
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-4 mt-2 text-xl">•</span>
                    Achieve a minimum of <span className="font-bold text-white">$2,500 in Monthly Recurring Revenue (MRR)</span>.
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">Months 6-12 (Build the Growth Engine)</h3>
                <ul className="space-y-4 text-white/80">
                  <li className="flex items-start">
                    <span className="text-white mr-4 mt-2 text-xl">•</span>
                    Release resource management and project budgeting features.
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-4 mt-2 text-xl">•</span>
                    Scale user acquisition through our content marketing engine.
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-4 mt-2 text-xl">•</span>
                    Grow MRR to <span className="font-bold text-white">$10,000</span>.
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">Months 12-18 (Prepare for Scale)</h3>
                <ul className="space-y-4 text-white/80">
                  <li className="flex items-start">
                    <span className="text-white mr-4 mt-2 text-xl">•</span>
                    Show consistent month-over-month growth of <span className="font-bold text-white">15% or more</span>.
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-4 mt-2 text-xl">•</span>
                    Achieve or exceed <span className="font-bold text-white">$25,000 in MRR</span>.
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-4 mt-2 text-xl">•</span>
                    Demonstrate a healthy and improving LTV-to-CAC ratio, trending above the industry benchmark of 3:1.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion - Pure White */}
        <section className="py-32 px-6 lg:px-12 bg-white text-black">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-black text-white rounded-2xl p-12">
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                We are building a platform that solves a foundational problem for a valuable market. Join us in defining the new standard for creative project management.
              </p>
              <p className="text-2xl font-bold text-white">
                To request our full pitch deck and financial model, please contact us.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section - Pitch Black with Dense Dotted Grid */}
        <section className="py-32 px-6 lg:px-12 dense-dotted-grid deep-sea-gradient-patch">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-accent-primary/20 backdrop-blur-sm rounded-2xl p-12 border border-accent-primary/30">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
                Get in Touch
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
                <div className="flex items-center space-x-4">
                  <span className="text-white/70 font-medium">Email:</span>
                  <a 
                    href={`mailto:${process.env.NEXT_PUBLIC_ADMIN_EMAIL}?subject=Investment Inquiry - rKivee`} 
                    className="text-white hover:text-white-hover font-bold text-xl transition-colors"
                  >
                       {process.env.NEXT_PUBLIC_ADMIN_EMAIL}
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-white/70 font-medium">Subject:</span>
                  <span className="text-white font-medium">Investment Inquiry - rKivee</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 