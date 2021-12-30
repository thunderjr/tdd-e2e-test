import { INavigator } from "../@types/INavigator";
import { ITestingCore } from "../@types/ITestingCore";

export class TestingCore implements ITestingCore {
  constructor(private readonly navigator: INavigator) {}
}