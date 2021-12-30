import { TestingCore } from "../core/testing-core";
import { SeleniumAdapter } from "../infra/adapters/selenium-adapter";
import { ChromeNavigator, EdgeNavigator, FirefoxNavigator } from "../infra/browsers";

const chrome = new ChromeNavigator();
const edge = new EdgeNavigator();
const firefox = new FirefoxNavigator();

const seleniumAdapter = new SeleniumAdapter(firefox);

const testingCore = new TestingCore(seleniumAdapter);