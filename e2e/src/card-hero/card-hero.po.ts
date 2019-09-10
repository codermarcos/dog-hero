import { browser, by, element } from 'protractor';

export class AppPageCardHero {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  searchHeros() {
    return element(by.css('main form button:last-child')).click() as Promise<void>;
  }


  getHerosListLength() {
    return element(by.css('main ul.list-heros')).all(by.css('li[appcardhero]')).count() as Promise<number>;
  }
}
