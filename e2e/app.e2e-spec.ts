import { EzPasswordHelperPage } from './app.po';

describe('ez-password-helper App', function() {
  let page: EzPasswordHelperPage;

  beforeEach(() => {
    page = new EzPasswordHelperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
