import { browser, by, element } from 'protractor';

const fs = require('fs');

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root span.titulo-site')).getText() as Promise<string>;
  }

  pegarEvidencia(nome_arquivo: string) {
    browser.takeScreenshot().then((screenshot) => {
      fs.writeFile('./evidencias/' + nome_arquivo +'.png', screenshot, 'base64', (err) => {
        if (err) throw err;
      });
    });
  }

  getMenuElements() {
    return {
      menuAdmin: element(by.linkText('Dashboard')),
      menuSair: element(by.linkText('Sair'))
    }
  }

  getLoginElements() {
    return {
      campoUsuario: element(by.css('input[name=usuario]')),
      campoSenha: element(by.css('input[name=senha]')),
      botaoLogin: element(by.buttonText('login'))
    }
  }

  getAdminDashboardElements() {
    return {
      paragrafo: element(by.css('p'))
    }
  }

}
