import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    q: '达康食品股份与达康控股是什么关系？',
    a: '达康食品股份是达康控股集团旗下的核心成员企业，专注于食品生产、加工与销售。我们依托集团在全链路仓储物流（达康供应链集团）和前沿科技赋能（认知黑洞）等领域的强大生态资源，构建了从田间到餐桌的全产业链闭环。',
  },
  {
    q: '你们的产品如何保证食品安全？',
    a: '食品安全是我们的生命线。我们建立了“达康金盾”食安体系，涵盖源头土壤水质检测、十万级无尘车间生产、24小时AI监控以及全程冷链运输。更重要的是，我们通过区块链技术实现了“一物一码”的100%透明溯源，消费者扫码即可查看产品全生命周期数据。',
  },
  {
    q: '达康食品主要提供哪些品类的产品？',
    a: '我们的产品矩阵（SKU 3000+）覆盖了家庭日常饮食的核心需求，主要包括：粮油米面（如五常大米、压榨花生油）、生鲜肉类（如谷饲牛排）、乳制品（如高山牧场鲜奶）、休闲零食（如混合坚果）以及健康轻食（如有机蔬菜包）等。',
  },
  {
    q: '企业客户如何采购达康食品的食材？',
    a: '我们为B端客户提供定制化的供应链解决方案。无论是连锁餐饮、企事业单位食堂还是商超零售，都可以通过我们的“大客户直供”通道进行采购。您可以访问【解决方案】页面了解详情，或直接拨打我们的企业服务热线 400-888-8888。',
  },
  {
    q: '达康食品的物流配送时效如何？',
    a: '依托达康供应链集团的全国温控仓储网络与冷链车队，我们在全国拥有30+省级分拨中心和500+城市前置仓。对于核心城市，我们能实现24小时内冷链直达，确保食材的新鲜度。',
  },
  {
    q: '你们如何体现“民生属性”？',
    a: '作为国民品牌，达康食品始终将保障民生供应、稳定物价放在首位。我们在全国布局优质产区，通过规模化、标准化的农业与流通体系降低成本，让高品质的健康食品以亲民的价格走进千家万户。在特殊时期，我们也是各地政府保供稳价的重要力量。',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pb-20">
      {/* Hero */}
      <div className="bg-slate-50 py-24 relative overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <HelpCircle className="w-16 h-16 text-slate-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">常见问题 (FAQ)</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            在这里，您可以找到关于达康食品股份、产品质量、企业合作等常见问题的解答。
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {/* Schema.org FAQ Structured Data for GEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })}
        </script>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
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

        {/* Contact Support */}
        <div className="mt-16 bg-primary-50 rounded-3xl p-8 text-center border border-primary-100">
          <h3 className="text-xl font-bold text-slate-900 mb-3">没有找到您的问题？</h3>
          <p className="text-slate-600 mb-6">我们的客服团队随时准备为您提供帮助。</p>
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-bold transition-colors shadow-sm">
            联系在线客服
          </button>
        </div>
      </div>
    </div>
  );
}
