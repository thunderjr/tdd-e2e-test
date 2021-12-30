import { IBrowser } from "../../@types/IBrowser";
import { ServiceBuilder } from "selenium-webdriver/chrome";

export class ChromeNavigator extends IBrowser {
  constructor() {
    super();
    this.builder = new ServiceBuilder();
  }

  get(): void {

  }

  maximize(): void {

  }
}