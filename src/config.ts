import type { PostHideElements } from '~/content/config';

export const Site = 'https://weilv-D.github.io';
export const SiteLanguage = 'zh';
export const SiteTitle = '未来回忆录';
export const SiteDescription = '我的时空褶皱';
export const FooterDescription = '给时光以生命';
export const PageSize = 15;

// socialPlatform => userName
// check components/Header.astro socialConfig for more info
export const Socials: Record<string, Record<string, string>> = {
	mail: { url: 'weilv@mail.com' },
	github: { url: 'https://github.com/Weilv-D' },
	wechat: { url: '' },
	qq: { url: '' },
};

// doc: https://giscus.app
// data-theme is auto changed between noborder_light / noborder_gray
export const GiscusConfig: Record<string, string> = {
  'data-repo': 'Weilv-D/weilv-D.github.io',
  'data-repo-id': 'R_kgDONCNoHA',
  'data-category': 'Announcements',
  'data-category-id': 'DIC_kwDONCNoHM4CjhB3',
  'data-mapping': 'pathname',
  'data-strict': '0',
  'data-reactions-enabled': '1',
  'data-emit-metadata': '0',
  'data-input-position': 'top',
  'data-lang': 'zh-CN',
  'data-loading': 'lazy',
  crossorigin: 'anonymous',
  async: '',
};

export type HideElements =
	| PostHideElements
	| 'logo'
	| 'search'
	| 'themeToggler'
	| 'siteDescription'
	| 'footerDescription';
// Always hide elements from site
export const Hide: HideElements[] = [];

export const DefaultAuthor = 'Weilv';
export const CopyrightYear = '2024';
