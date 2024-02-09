import './style.css'

const stepsArray = document.querySelectorAll('.step');
const prevButton = document.getElementById('prevButton')
const nextButton = document.getElementById('nextButton')

let currentStep = 1;

const showProgressBarState = () => {
  stepsArray.forEach((el, i) => {
    if (i < currentStep) {
      el.classList.add('active')
    } else {
      el.classList.remove('active')
    }
  })
}

prevButton.addEventListener('click', () => {
  if (currentStep != 1) {
    currentStep = currentStep - 1
  }
  showProgressBarState()
})

nextButton.addEventListener('click', () => {
  if (currentStep < stepsArray.length) {
    currentStep = currentStep + 1
  }
  showProgressBarState()
})


showProgressBarState();