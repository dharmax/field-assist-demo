import "./styles.css";
import { populateFields, collectValues, getFieldAndValue } from "field-assist";

const values = {
  name: "Albert Einstein",
  generalBio: "I was a cool genius",
  preferredLanguage: "German"
};

const consoleDiv = document.getElementById("console");
const errorDiv = document.getElementById("errors");

populateFields(document.body, values);
showErrors();

function showErrors() {
  // this is errors display example
  const errors = collectValues(document.body)._errors;
  if (errors) {
    errorDiv.parentElement.style.visibility = "visible";
    errorDiv.textContent = JSON.stringify(errors, undefined, 2);
  } else errorDiv.parentElement.style.visibility = "hidden";
}

document.body.oninput = (event) => {
  // this option used to update a single field - just what was changed
  const { field, value } = getFieldAndValue(event);
  console.dir({ [field]: value });
  consoleDiv.textContent = JSON.stringify({ [field]: value });

  showErrors();
};
document.body.querySelector("button").onclick = () => {
  const allFields = collectValues(document.body);
  console.dir(allFields);
  consoleDiv.textContent = JSON.stringify(allFields);
};
