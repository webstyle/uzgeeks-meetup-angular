import { UzgeeksMeetupAngularPage } from './app.po';

describe('uzgeeks-meetup-angular App', () => {
  let page: UzgeeksMeetupAngularPage;

  beforeEach(() => {
    page = new UzgeeksMeetupAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
