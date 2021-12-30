import { IBrowser } from "../../@types/IBrowser";
import { ServiceBuilder } from "selenium-webdriver/firefox";

export class FirefoxNavigator extends IBrowser {
  constructor() {
    super();
    this.builder = new ServiceBuilder();
  }

  get(): void {

  }

  maximize(): void {

  }
}