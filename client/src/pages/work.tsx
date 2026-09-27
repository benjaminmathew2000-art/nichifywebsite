import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SlidePreview, VideoPreview } from '@/components/case-study-preview';
import { ArrowLeft, Download, ExternalLink } from 'lucide-react';
import { Link } from 'wouter';
import californiaBurritoPdf from '@assets/QUESADILA_FRENZY_-_A_Nichify_Case_Study_1766139538734.pdf';
import collaborativeExcellencePdf from '@assets/Collaborative_Excellence_by_Nichify_1766139547440.pdf';

// Slides are pre-rendered from the case study PDFs (one JPG per page) so they load fast in the browser.
const slideImages = import.meta.glob<string>('@assets/slides/*.jpg', { eager: true, import: 'default' });
const slidesFor = (prefix: string) =>
  Object.keys(slideImages)
    .filter((path) => path.includes(`/slides/${prefix}-`))
    .sort()
    .map((path) => slideImages[path]);

export default function Work() {
  const caseStudies = [
    {
      id: 'california-burrito',
      title: 'Quesadilla Frenzy',
      client: 'California Burrito',
      category: 'Social Campaign',
      summary: 'How Nichify turned an iconic quesadilla into a youth-culture moment, reaching 20K+ impressions in 2 days.',
      pdfUrl: californiaBurritoPdf,
      slides: slidesFor('quesadilla-frenzy')
    },
    {
      id: 'collaborative-excellence',
      title: 'Collaborative Excellence',
      client: 'CrazyFlora × BRIGADE × Craft Culture',
      category: 'Brand Partnership',
      summary: 'How Nichify brought three brands together into one campaign with a shared creative vision.',
      pdfUrl: collaborativeExcellencePdf,
      slides: slidesFor('collaborative-excellence')
    },
    {
      id: 'memorable',
      title: 'You Talk. We Remember.',
      client: 'Memorable',
      category: 'Product Marketing',
      summary: 'How Nichify turned an AI memory app into a simple promise: you talk, we remember.',
      postUrl: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7446823821069791232/',
      embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7446823821069791232?compact=1'
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
          <div className="mb-14 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <h1 className="text-5xl md:text-6xl font-black" data-testid="work-title">Our Work</h1>
            <p className="text-lg text-gray-500 max-w-sm">
              Case studies showcasing how we transform brands through focused creativity and strategic storytelling.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-14 mb-20">
            {caseStudies.map((study) => (
              <article key={study.id} className="flex flex-col" data-testid={`case-study-${study.id}`}>
                {/* Preview */}
                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                  {study.slides ? (
                    <SlidePreview slides={study.slides} title={study.title} />
                  ) : study.embedUrl ? (
                    <VideoPreview embedUrl={study.embedUrl} title={`${study.client}: ${study.title}`} />
                  ) : null}
                </div>

                <div className="pt-5 px-1">
                  <p className="text-sm text-gray-400 mb-2">
                    {study.category} <span className="mx-1">•</span> {study.client}
                  </p>
                  <h2 className="text-xl font-bold mb-2">{study.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{study.summary}</p>

                  {'pdfUrl' in study ? (
                    <a
                      href={study.pdfUrl}
                      download
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-black hover:underline underline-offset-4"
                      data-testid={`download-${study.id}`}
                    >
                      <Download className="w-4 h-4" />
                      Download case study
                    </a>
                  ) : (
                    <a
                      href={study.postUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-black hover:underline underline-offset-4"
                      data-testid={`view-${study.id}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open on LinkedIn
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
