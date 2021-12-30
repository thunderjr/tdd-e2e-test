import { IBrowser } from "../../@types/IBrowser";
import { ServiceBuilder } from "selenium-webdriver/edge";

export class EdgeNavigator extends IBrowser {
  constructor() {
    super();
    this.builder = new ServiceBuilder();
  }

  get(): void {

  }

  maximize(): void {

  }
}