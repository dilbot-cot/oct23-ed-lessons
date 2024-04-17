module.exports = function indexFile() {
  return `
  <header id="user-actions">
          <button id="dark-mode">Dark Mode</button>
    <button id="light-mode">Light Mode</button>
  </header>
  <h1>Welcome</h1>
  <p>This page is used for practicing DOM manipulation</p>
      <p>Open a web preview in another tab for this to work.</p>
  <section>
    <p>We will be learning</p>
    <ul>
      <li class="odd">Adding To The DOM</li>
      <li>Querying The DOM</li>
      <li class="odd">Changing The DOM</li>
      <li>Event Listeners</li>
    </ul>
  </section>
  <form id="page-form">
    <input type="text" />
    <input type="submit" value="Click Me" />
  </form>
`;
};
