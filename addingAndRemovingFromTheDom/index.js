function activity() {
  // 1. Anchor code here
  let anchorReference = document.querySelector("p a");
  anchorReference.textContent = "DOM Manipulation";

  // 2. List Item code here
  let ul = document.querySelector("ul");
  let lastLi = document.querySelector("li:nth-child(4)")
  ul.removeChild(lastLi);

  // 3. Form code here
  let labelSection = document.createElement('label');
  labelSection.textContent = "Name:";
  let formSection = document.getElementById("page-form");
  formSection.prepend(labelSection)

  // 4. Paragraph code here
  let ultimateAnswer = document.createElement("p");
  ultimateAnswer.textContent = "42";
  let ultimateQuestion = document.getElementById("question")
  ultimateQuestion.append(ultimateAnswer);
  
}

activity();