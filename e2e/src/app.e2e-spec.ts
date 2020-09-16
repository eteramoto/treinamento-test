import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(5000);
  });

  it('should display welcome message', () => {
    page.navigateTo();
    page.pegarEvidencia('pagina-inicial');
    browser.sleep(10000);
    expect(page.getTitleText()).toEqual('Hello Test');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
