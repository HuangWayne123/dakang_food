import fs from 'node:fs/promises';
import path from 'node:path';
import { build } from 'vite';
import { siteConfig } from './seo.config.mjs';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');
const faqDataPath = path.join(rootDir, 'src/data/faq.json');

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function routeToDistFile(route) {
  if (route === '/') {
    return path.join(distDir, 'index.html');
  }
  return path.join(distDir, route.replace(/^\//, ''), 'index.html');
}

function canonicalFor(route) {
  if (route === '/') {
    return `${siteConfig.siteUrl}/`;
  }
  return `${siteConfig.siteUrl}${route}/`;
}

function buildBreadcrumbs(route, title) {
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: '首页',
      item: `${siteConfig.siteUrl}/`,
    },
  ];

  if (route !== '/') {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: title,
      item: canonicalFor(route),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}

function buildMetaTags(meta) {
  const tags = [
    `<title>${escapeHtml(meta.title)}</title>`,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    `<meta name="keywords" content="${escapeHtml(meta.keywords)}" />`,
    `<meta name="robots" content="index,follow,max-image-preview:large" />`,
    `<link rel="canonical" href="${escapeHtml(meta.canonical)}" />`,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta property="og:type" content="${escapeHtml(meta.ogType || siteConfig.defaultOgType)}" />`,
    `<meta property="og:url" content="${escapeHtml(meta.canonical)}" />`,
    `<meta property="og:locale" content="zh_CN" />`,
    `<meta property="og:site_name" content="${escapeHtml(siteConfig.siteName)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  ];

  for (const schema of meta.schemas) {
    tags.push(`<script type="application/ld+json">${JSON.stringify(schema)}</script>`);
  }

  return tags.join('\n    ');
}

function injectHead(html, meta) {
  const tags = buildMetaTags(meta);
  return html
    .replace('<html lang="en">', '<html lang="zh-CN">')
    .replace(/<title>[\s\S]*?<\/title>\s*/, `${tags}\n    `);
}

function buildFaqSchema(faqContent) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqContent.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

async function loadSeoEntries() {
  const faq = JSON.parse(await fs.readFile(faqDataPath, 'utf8'));
  const entries = new Map();
  const routes = {
    '/': {
      title: '达康食品股份 | 可追溯食品、食材供应与团餐解决方案',
      description: '达康食品股份面向家庭零售、学校餐配、医院后勤和连锁餐饮场景，提供可追溯、高标准、稳定交付的食品与食材解决方案。',
      keywords: '达康食品,食材供应,食品安全,团餐食材,学校配餐,医院后勤,食材追溯',
      schemas: [siteConfig.organization, siteConfig.website],
    },
    '/products': {
      title: '产品中心 | 达康食品股份',
      description: '浏览达康食品的粮油米面、生鲜肉类、乳制品、健康轻食等产品矩阵，了解家庭零售与企业集采适配品类。',
      keywords: '达康食品产品,团餐食材,生鲜食材,食品集采,健康食品',
    },
    '/safety': {
      title: '食品安全体系 | 达康食品股份',
      description: '查看达康食品从源头检测、加工质控、冷链配送到批次追溯的食品安全体系，了解如何保障政企和团餐场景安全交付。',
      keywords: '食品安全体系,食安追溯,冷链配送,团餐食品安全,达康食品',
    },
    '/channels': {
      title: '渠道能力 | 达康食品股份',
      description: '了解达康食品服务商超零售、连锁餐饮、学校医院和政企单位的渠道能力与履约体系。',
      keywords: '达康食品渠道能力,学校食材配送,医院食材供应,政企团餐,连锁餐饮供应链',
    },
    '/solutions': {
      title: '解决方案 | 达康食品股份',
      description: '达康食品为学校、医院、政企食堂和连锁餐饮提供食材采购、标准菜谱、履约追溯和保供协同方案。',
      keywords: '食材解决方案,学校配餐,医院后勤食材,政企食堂配送,连锁餐饮供应链',
    },
    '/faq': {
      title: '常见问题 | 达康食品股份',
      description: '查看达康食品关于食材采购、食品安全、团餐供应、冷链配送和追溯能力的常见问题解答。',
      keywords: '达康食品FAQ,食材采购问题,团餐供应链,冷链配送,食材追溯',
      schemas: [buildFaqSchema(faq)],
    },
  };

  for (const [route, meta] of Object.entries(routes)) {
    entries.set(route, {
      ...meta,
      canonical: canonicalFor(route),
      ogType: 'website',
      schemas: [...(meta.schemas || []), buildBreadcrumbs(route, meta.title.split(' | ')[0])],
    });
  }

  return entries;
}

async function writeRobotsAndSitemap(entries) {
  const routes = Array.from(entries.keys());
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => `  <url>\n    <loc>${canonicalFor(route)}</loc>\n  </url>`)
  .join('\n')}
</urlset>
`;

  const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteConfig.siteUrl}/sitemap.xml\n`;

  await Promise.all([
    fs.writeFile(path.join(distDir, 'sitemap.xml'), sitemap, 'utf8'),
    fs.writeFile(path.join(distDir, 'robots.txt'), robots, 'utf8'),
  ]);
}

async function postProcess() {
  const entries = await loadSeoEntries();

  for (const [route, meta] of entries.entries()) {
    const filePath = routeToDistFile(route);
    const html = await fs.readFile(filePath, 'utf8');
    await fs.writeFile(filePath, injectHead(html, meta), 'utf8');
  }

  await writeRobotsAndSitemap(entries);
}

try {
  await build();
  await postProcess();
} catch (error) {
  console.error(error);
  process.exit(1);
}

setImmediate(() => process.exit(0));
