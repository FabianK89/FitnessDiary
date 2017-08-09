import { FitnessDiaryPage } from './app.po';

describe('fitness-diary App', () => {
  let page: FitnessDiaryPage;

  beforeEach(() => {
    page = new FitnessDiaryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
