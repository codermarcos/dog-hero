import { AppPageCardHero } from './card-hero.po';
import { browser, logging } from 'protractor';

describe(
  'App CardHero',
  () => {
    let page: AppPageCardHero;

    beforeEach(
      () => {
        page = new AppPageCardHero();
      }
    );

    it(
      'should should list hero cards with correct pagination',
      () => {
        page.navigateTo();
        page.searchHeros();
        expect(page.getHerosListLength()).toEqual(4);
      }
    );

    afterEach(
      async () => {
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
          level: logging.Level.SEVERE,
        } as logging.Entry));
      }
    );
  }
);
