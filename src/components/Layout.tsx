import { Link, Outlet, useLocation } from 'react-router-dom';
import { Leaf, Menu, X, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SiteInstrumentation from './SiteInstrumentation';

const navLinks = [
  { name: '首页', path: '/' },
  { name: '产品中心', path: '/products' },
  { name: '食品安全体系', path: '/safety' },
  { name: '渠道能力', path: '/channels' },
  { name: '解决方案', path: '/solutions' },
  { name: '常见问题', path: '/faq' },
];

const ecosystemLinks = [
  { name: '达康控股', desc: '集团总部与资本运作' },
  { name: '达康供应链集团', desc: '全链路仓储物流与分销' },
  { name: '认知黑洞', desc: 'AI与前沿科技赋能' },
];

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <SiteInstrumentation />
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-primary-600 p-2 rounded-xl group-hover:bg-primary-700 transition-colors">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900 tracking-tight">达康食品股份</span>
                <span className="text-[10px] text-primary-600 font-medium tracking-widest">通达天下 康润万家</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                    location.pathname === link.path ? 'text-primary-600' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/solutions"
                className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm hover:shadow-md"
              >
                获取方案
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-600 hover:text-primary-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-slate-100 bg-white overflow-hidden"
            >
              <div className="px-4 py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-base font-medium p-2 rounded-xl transition-colors ${
                      location.pathname === link.path
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/solutions"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-accent-500 text-white px-6 py-3 rounded-xl text-center font-medium mt-4"
                >
                  获取方案
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="bg-primary-600 p-2 rounded-xl">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white tracking-tight">达康食品股份</span>
                  <span className="text-[10px] text-primary-500 font-medium tracking-widest">通达天下 康润万家</span>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                面向家庭零售、学校餐配、医院后勤和连锁餐饮场景，提供可追溯、高标准、稳定交付的食品与食材解决方案。
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-medium text-slate-300">
                <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                隶属于达康控股
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold mb-6">快速导航</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm hover:text-primary-500 transition-colors flex items-center gap-1">
                      <ChevronRight className="w-4 h-4" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ecosystem Links */}
            <div>
              <h3 className="text-white font-bold mb-6">集团生态跳转模块</h3>
              <div className="grid grid-cols-1 gap-3">
                {ecosystemLinks.map((eco) => (
                  <a
                    key={eco.name}
                    href={eco.name === '达康控股' ? '/group/' : eco.name === '达康供应链集团' ? '/' : '/cognivora/'}
                    className="group block p-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-primary-600/50 transition-all"
                    data-analytics-event="ecosystem_nav_click"
                    data-analytics-label={eco.name}
                  >
                    <div className="text-sm font-medium text-white group-hover:text-primary-400 transition-colors">
                      {eco.name}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">{eco.desc}</div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold mb-6">联系我们</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm">
                  <MapPin className="w-5 h-5 text-primary-500 shrink-0" />
                  <span>中国·上海市浦东新区达康控股大厦 88号</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                  <a
                    href="tel:4008888888"
                    className="hover:text-white transition-colors"
                    data-analytics-event="contact_click"
                    data-analytics-channel="phone"
                    data-analytics-label="食品站热线"
                  >
                    400-888-8888
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                  <a
                    href="mailto:contact@dakangfood.com"
                    className="hover:text-white transition-colors"
                    data-analytics-event="contact_click"
                    data-analytics-channel="email"
                    data-analytics-label="食品站邮箱"
                  >
                    contact@dakangfood.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} 达康食品股份有限公司. 保留所有权利.
            </p>
            <div className="flex gap-4 text-sm text-slate-500">
              <a href="#" className="hover:text-white transition-colors">隐私政策</a>
              <a href="#" className="hover:text-white transition-colors">服务条款</a>
              <a href="#" className="hover:text-white transition-colors">营业执照</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
