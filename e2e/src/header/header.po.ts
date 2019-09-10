import { browser, by, element } from 'protractor';

export class AppPageHeader {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getButtonTitle() {
    return element(by.css('header button')).getAttribute('title') as Promise<string>;
  }

  getLogoAlt() {
    return element(by.css('header img')).getAttribute('alt') as Promise<string>;
  }

  openNavigation() {
    return element(by.css('header button')).click() as Promise<void>;
  }

  getNavigationClass() {
    return element(by.css('header nav')).getAttribute('class') as Promise<string>;
  }
}
