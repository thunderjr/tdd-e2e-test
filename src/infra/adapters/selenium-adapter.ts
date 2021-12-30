import { IBrowser } from "../../@types/IBrowser";
import { INavigator } from "../../@types/INavigator";

export class SeleniumAdapter implements INavigator {
  constructor(private readonly browser: IBrowser) {}

  public navigateTo(url: string): void {
    this.browser
  }
}