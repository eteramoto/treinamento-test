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

}
