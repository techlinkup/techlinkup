import AnchorLink from 'react-anchor-link-smooth-scroll-v2';

export interface AnchorLink extends React.HTMLProps<HTMLAnchorElement>{
  offset?: string | number | (() => number) | undefined;
}