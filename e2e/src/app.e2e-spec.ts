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


  it('deve clicar no link do admin', () => {
    browser.waitForAngularEnabled(true);
    let linkAdmin = page.getMenuElements().menuAdmin;
    linkAdmin.click();
    let loginClomponent = page.getLoginElements();
    loginClomponent.campoUsuario.sendKeys('preenchido pelo teste');
    page.pegarEvidencia('botao-login-inativo_1');

    loginClomponent.campoSenha.sendKeys('12345');
    page.pegarEvidencia('botao-login-ativo_1');
    // browser.sleep(10000);
    loginClomponent.botaoLogin.click();
    browser.waitForAngular();

    let componenteLogado = page.getAdminDashboardElements().paragrafo;
    expect(componenteLogado.getText()).toBe('dashboard works!');
    page.pegarEvidencia('texto do componente dashboard');
    browser.sleep(10000);

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
