import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { AppRoutes, foodRoutes } from './routes';

export function prerender({ url }: { url: string }) {
  const normalizedUrl = url === '/' ? '/food/' : `/food${url}`;
  const html = renderToString(
    <StaticRouter basename="/food" location={normalizedUrl}>
      <AppRoutes />
    </StaticRouter>
  );

  return {
    html,
    links: new Set(foodRoutes)
  };
}
