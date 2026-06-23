import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import faqContent from '../data/faq.json';

type FaqItem = {
  q: string;
  a: string;
};

export default function FAQ() {
  const content = faqContent as {
    hero: { title: string; description: string };
    items: FaqItem[];
    contact: { title: string; description: string; buttonText: string };
  };
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pb-20">
      <div className="bg-slate-50 py-24 relative overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <HelpCircle className="w-16 h-16 text-slate-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{content.hero.title}</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {content.hero.description}
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: content.items.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a
              }
            }))
          })}
        </script>

        <div className="space-y-4">
          {content.items.map((faq, idx) => (
            <div
              key={faq.q}
              className={`bg-white rounded-2xl border transition-all duration-300 ${
                openIndex === idx ? 'border-primary-500 shadow-md' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className={`font-bold text-lg ${openIndex === idx ? 'text-primary-700' : 'text-slate-800'}`}>
                  {faq.q}
                </span>
                {openIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-primary-500 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary-50 rounded-3xl p-8 text-center border border-primary-100">
          <h3 className="text-xl font-bold text-slate-900 mb-3">{content.contact.title}</h3>
          <p className="text-slate-600 mb-6">{content.contact.description}</p>
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-bold transition-colors shadow-sm">
            {content.contact.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
