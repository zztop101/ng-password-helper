import { NgPasswordHelperPage } from './app.po';

describe('ng-password-helper App', function() {
  let page: NgPasswordHelperPage;

  beforeEach(() => {
    page = new NgPasswordHelperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
