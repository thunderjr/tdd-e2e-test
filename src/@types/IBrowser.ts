import { Capabilities } from "selenium-webdriver";
import { DriverService } from "selenium-webdriver/remote";

export abstract class IBrowser {
  builder: DriverService.Builder;
  options: Capabilities;

  constructor() {
    this.options = new Capabilities();
  }

  abstract get(): void;
  abstract maximize(): void;
}