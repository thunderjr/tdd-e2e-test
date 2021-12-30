import { IElement } from '../@types/IElement';

export class PageElement implements IElement {
  click(): void {}

  sendKeys(): void {}

  getText(): string {
    return '';
  }
}