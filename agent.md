# 达康食品 (Dakang Food) UI 设计要点总结

## 1. 技术栈与框架
*   **前端框架**: React 19 + TypeScript + Vite
*   **路由**: React Router DOM (`/food` 作为 basename)
*   **样式方案**: Tailwind CSS v4 + 原生 CSS (`src/index.css`)
*   **图标库**: `lucide-react`
*   **动画库**: `motion/react` (Framer Motion 的后续版本)

## 2. 颜色主题 (Color Palette)
定义在 `src/index.css` 的 Tailwind `@theme` 中：
*   **主色调 (Primary - 绿色系)**:
    *   `primary-50`: `#ecfdf5` (极浅绿，用于背景和悬浮态)
    *   `primary-100`: `#d1fae5` (浅绿，用于次要强调)
    *   `primary-500`: `#10b981` (基础绿)
    *   `primary-600`: `#059669` (品牌主色，用于主要按钮、Logo背景等)
    *   `primary-700`: `#047857` (深绿，用于悬浮加深)
*   **点缀色 (Accent - 橙色系)**:
    *   `accent-500`: `#f97316` (橙色，用于“获取方案”等行动号召按钮)
    *   `accent-600`: `#ea580c` (深橙，用于悬浮加深)
*   **中性色/背景**:
    *   页面背景 (`body`): `#f8fafc` (极浅灰，Slate-50)
    *   主要文本: `#334155` (深灰，Slate-700)
    *   次要文本: `slate-600`, `slate-500`, `slate-400`
    *   深色区块 (如 Footer, 产品页头部): `slate-900`

## 3. 字体与排版 (Typography)
*   **全局字体**: "Noto Sans SC" (思源黑体), `sans-serif`
*   **标题特征**: 粗体 (`font-bold`, `font-black`)，深灰色 (`text-slate-900`)，使用 `tracking-tight` (字间距紧凑) 增强现代感。
*   **正文特征**: 行高宽松 (`leading-relaxed`)，颜色柔和 (`text-slate-600`)。

## 4. UI 组件与布局风格 (Layout & Styling)
*   **圆角 (Border Radius)**: 偏好使用大圆角。按钮多用 `rounded-full` (药丸形)，卡片多用 `rounded-3xl` 或 `rounded-2xl`，输入框/小区块多用 `rounded-xl`。
*   **阴影 (Shadows)**: 使用柔和的阴影。卡片默认 `shadow-sm`，悬浮时增加阴影如 `hover:shadow-md` 或 `hover:shadow-xl`。主按钮有时带有带颜色的阴影 (`shadow-primary-600/30`)。
*   **毛玻璃效果 (Glassmorphism)**: 顶部导航栏 (`bg-white/90 backdrop-blur-md`)，图片上的标签 (`bg-white/90 backdrop-blur-sm`)。
*   **过渡动画 (Transitions)**: 广泛使用 Tailwind 的 `transition-all` 和 `transition-colors` 配合 `hover` 状态。使用 `motion/react` 处理页面切换动画 (`AnimatePresence`, `motion.div`) 和移动端菜单的展开/收起。
*   **卡片设计**: 
    *   产品卡片：顶部图片（Hover时有图片放大效果 `group-hover:scale-105`），内部标签绝对定位，底部文本内容和按钮。
    *   特征卡片：带有特定背景色的图标容器，加上标题和描述。
*   **导航 (Navigation)**:
    *   Sticky 悬浮顶部。
    *   包含 Logo区（主标题+副标题）、居中导航链接、右侧强化的“获取方案”按钮。
    *   移动端抽屉式菜单 (汉堡图标切换)。

## 5. 整体氛围 (Vibe)
*   **现代、健康、安全**：绿色主色调传达了食品行业的健康属性，大圆角和柔和阴影去除了工业感，增加了亲和力。
*   **企业感**：深色 Footer 和大气的留白设计 (`max-w-7xl`, 大 padding) 展现了“达康控股”作为大企业的稳重。