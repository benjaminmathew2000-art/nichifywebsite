import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ArrowLeft, Download, ExternalLink } from 'lucide-react';
import { Link } from 'wouter';
import californiaBurritoPdf from '@assets/QUESADILA_FRENZY_-_A_Nichify_Case_Study_1766139538734.pdf';
import collaborativeExcellencePdf from '@assets/Collaborative_Excellence_by_Nichify_1766139547440.pdf';

export default function Work() {
  const caseStudies = [
    {
      id: 'california-burrito',
      title: 'Quesadilla Frenzy',
      client: 'California Burrito × Nichify',
      tagline: '"What\'s your next bite?"',
      tags: ['#FoodStorytelling', '#SocialBuzz', '#YouthCulture', '#NicheMarketing'],
      question: 'How do you take an iconic quesadilla and make it feel new to a young, restless audience that is always craving the next big thing?',
      challenge: 'The challenge wasn\'t just about food. It was about capturing the sources of youth culture and transforming a simple meal into a cultural moment.',
      results: [
        { metric: '20K+', label: 'Impressions' },
        { metric: '2', label: 'Days to viral momentum' },
        { metric: '100%', label: 'Success Rate' }
      ],
      services: ['Content Strategy', 'Social Media Consulting', 'Video Production', 'Creative Consultancy'],
      takeaway: 'Success lies in transformation: turning a simple food item into a cultural moment that resonates with youth, creates lasting engagement, and builds authentic brand connections.',
      pdfUrl: californiaBurritoPdf
    },
    {
      id: 'collaborative-excellence',
      title: 'Collaborative Excellence',
      client: 'CrazyFlora × BRIGADE × Craft Culture × Nichify',
      tagline: 'Strategic Partnership Success',
      tags: ['#Collaboration', '#Excellence', '#Strategy', '#Impact'],
      question: 'How do we create meaningful partnerships that deliver exceptional results?',
      challenge: 'Building collaborative frameworks that align creative vision with business objectives.',
      results: [
        { metric: 'Strategic', label: 'Partnership' },
        { metric: 'Creative', label: 'Excellence' },
        { metric: 'Measurable', label: 'Impact' }
      ],
      services: ['Strategy', 'Creative Direction', 'Brand Development', 'Campaign Execution'],
      takeaway: 'True excellence emerges when creative vision meets strategic collaboration, delivering results that exceed expectations.',
      pdfUrl: collaborativeExcellencePdf
    },
    {
      id: 'memorable',
      title: 'Product Marketing Case Study',
      client: 'Memorable × Nichify',
      tagline: '"You talk. We remember."',
      tags: ['#ProductMarketing', '#GenAI', '#AppleEcosystem', '#SecondBrain'],
      question: 'How do you make an AI memory companion feel instantly useful to people whose brains already have too many tabs open?',
      challenge: 'Conversations, ideas and decisions happen in real time and disappear just as fast. The job was to turn an abstract AI product into a simple, relatable promise for iPhone and Apple Watch users.',
      results: [
        { metric: 'Talk', label: 'Captured in real time' },
        { metric: 'Remember', label: 'AI summaries' },
        { metric: 'Recall', label: 'Anything, anytime' }
      ],
      services: ['Product Marketing', 'Messaging & Positioning', 'Launch Content', 'Social Media'],
      takeaway: 'A complex AI product lands when it is reduced to a promise people already want: you talk, we remember, you recall anything, anytime.',
      postUrl: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7446823821069791232/'
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/">
            <button className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-10" data-testid="back-home">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </button>
          </Link>

          {/* Page Header */}
          <div className="mb-12 border-b border-gray-200 pb-10">
            <h1 className="text-5xl md:text-6xl font-black mb-3" data-testid="work-title">Our Work</h1>
            <p className="text-lg text-gray-500 max-w-xl">
              Case studies showcasing how we transform brands through focused creativity and strategic storytelling.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {caseStudies.map((study) => (
              <article
                key={study.id}
                className="flex flex-col border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
                data-testid={`case-study-${study.id}`}
              >
                {/* Card Header */}
                <div className="bg-black text-white px-6 pt-6 pb-5">
                  <h2 className="text-2xl font-bold leading-tight mb-1">{study.title}</h2>
                  <p className="text-sm text-gray-400">{study.client}</p>
                </div>

                {/* Results Bar */}
                <div className="grid grid-cols-3 divide-x divide-gray-200 border-b border-gray-200 bg-gray-50">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="py-4 text-center">
                      <p className="text-xl font-black text-black">{result.metric}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{result.label}</p>
                    </div>
                  ))}
                </div>

                {/* Card Body */}
                <div className="flex flex-col flex-1 px-6 py-5 gap-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">The Question</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{study.question}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">The Challenge</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{study.challenge}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">Services</p>
                    <div className="flex flex-wrap gap-2">
                      {study.services.map((service) => (
                        <span key={service} className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-l-2 border-black pl-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">Takeaway</p>
                    <p className="text-sm text-gray-700 italic leading-relaxed">{study.takeaway}</p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 pb-6">
                  {'pdfUrl' in study ? (
                    <a
                      href={study.pdfUrl}
                      download
                      className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg text-sm hover:bg-gray-800 transition-colors"
                      data-testid={`download-${study.id}`}
                    >
                      <Download className="w-4 h-4" />
                      Download Case Study
                    </a>
                  ) : (
                    <a
                      href={study.postUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg text-sm hover:bg-gray-800 transition-colors"
                      data-testid={`view-${study.id}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View on LinkedIn
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Social Section */}
          <section className="pt-10 border-t border-gray-200">
            <h2 className="text-xl font-bold mb-1">More Videos & Content</h2>
            <p className="text-gray-500 text-sm mb-5">
              Follow us on social media for more case studies, behind-the-scenes content, and creative inspiration.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/company/nichify"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0077B5] text-white px-5 py-2.5 rounded-lg text-sm hover:bg-[#005885] transition-colors"
                data-testid="linkedin-link"
              >
                <ExternalLink className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/nichify.marketing/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-5 py-2.5 rounded-lg text-sm hover:opacity-90 transition-opacity"
                data-testid="instagram-link"
              >
                <ExternalLink className="w-4 h-4" />
                Instagram
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
