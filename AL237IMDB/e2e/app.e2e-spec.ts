import { AL237IMDBPage } from './app.po';

describe('al237-imdb App', () => {
  let page: AL237IMDBPage;

  beforeEach(() => {
    page = new AL237IMDBPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
