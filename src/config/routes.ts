/**
 * Route configuration for staged deployment
 *
 * When ready to go live, change BASE_PATH from '/preview' to ''
 */
export const BASE_PATH = '/preview';

/**
 * Helper to create full paths with the base path prefix
 */
export function path(route: string): string {
  if (route === '/') {
    return BASE_PATH || '/';
  }
  return `${BASE_PATH}${route}`;
}

/**
 * Navigation links used in Header
 */
export const navLinks = [
  { label: 'Services', href: path('/services') },
  { label: 'About', href: path('/about') },
  { label: 'FAQ', href: path('/faq') },
  { label: 'Contact', href: path('/contact') },
];

/**
 * Service links used in Footer and Services components
 */
export const serviceLinks = [
  { label: 'Interior Painting', href: path('/services/interior-painting') },
  { label: 'Exterior Painting', href: path('/services/exterior-painting') },
  { label: 'Cabinet Refinishing', href: path('/services/cabinet-refinishing') },
  { label: 'Commercial Painting', href: path('/services/commercial-painting') },
];

/**
 * Home path (the preview homepage or root when live)
 */
export const HOME_PATH = path('/');
