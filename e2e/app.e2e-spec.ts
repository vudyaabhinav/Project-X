import { ProjectXPage } from './app.po';

describe('project-x App', () => {
  let page: ProjectXPage;

  beforeEach(() => {
    page = new ProjectXPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
