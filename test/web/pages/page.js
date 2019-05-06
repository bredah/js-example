export default class Page {
  /**
   * Access the path
   * @param {string} path Path from page
   */
  open(path) {
    browser.url(path);
  }
}
