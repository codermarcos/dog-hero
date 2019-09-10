import { AppPageHeader } from './header.po';
import { browser, logging } from 'protractor';

describe(
  'workspace-project App',
  () => {
    let page: AppPageHeader;

    beforeEach(
      () => {
        page = new AppPageHeader();
      }
    );

    it(
      'should display button title',
      () => {
        page.navigateTo();
        expect(page.getButtonTitle()).toEqual('Abrir o menu de navegação');
      }
    );

    it(
      'should display have correct alt',
      () => {
        page.navigateTo();
        expect(page.getLogoAlt()).toEqual('Logo Dog Hero');
      }
    );

    it(
      'should display open navigation',
      () => {
        page.navigateTo();
        page.openNavigation();
        expect(page.getNavigationClass()).toEqual('open');
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
