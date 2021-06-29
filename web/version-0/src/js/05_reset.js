/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable strict */

function updateForm() {
  formData.name = "";
  formData.job = "";
  formData.email = "";
  formData.phone = "";
  formData.linkedin = "";
  formData.github = "";
  formData.photo = "";
  formData.pallete = "1";
  console.log(formData);
}

function updatePreview() {
  namePreview.innerHTML = "Nombre Apellido";
  jobPreview.innerHTML = "Front-end developer";
  profileImage.style.backgroundImage = "url(./assets/images/listen-logo.png)";
  profilePreview.style.backgroundImage = "url(./assets/images/listen-logo.png)";
  mailPreview.href = "mailto:";
  telPreview.href = "tel:+34";
  linkedinPreview.href = "https://www.linkedin.com/in/";
  gitHubPreview.href = "https://github.com/";
}

function updateInputs() {
  inputName.value = "";
  inputJob.value = "";
  inputPhone.value = "";
  inputEmail.value = "";
  inputGitHub.value = "";
  inputLinkedin.value = "";
}

function resetpalletes() {
  const checkedpallete = document.querySelector(".js-colorOption:checked");
  checkedpallete.checked = false;
  const palleteDefault = document.querySelector(".js-palleteDefault");
  palleteDefault.checked = true;
  const cardElement = document.querySelector(".js-cardElement");

  cardElement.classList.remove("opt1", "opt2", "opt3");
  cardElement.classList.add("opt1");
}

function handleReset() {
  updateForm();
  updatePreview();
  updateInputs();
  resetpalletes();

  localStorage.clear();
  responseElement.innerHTML = "";
}

resetButton.addEventListener("click", handleReset);
