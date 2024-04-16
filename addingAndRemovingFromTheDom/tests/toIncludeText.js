function toIncludeText(element, string) {
  let message = () => `Expected: "${string}"`;
  let pass = false;

  if (element !== null && element !== undefined) {
    for (let property of ["textContent", "innerHTML", "innerText"]) {
      if (element[property] && element[property].includes(string)) {
        message = () => "";
        pass = true;
        break;
      }
    }
  }

  return { message: message, pass: pass };
}

expect.extend({ toIncludeText });
