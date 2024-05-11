document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('multi-step-form');
  const fieldsets = form.querySelectorAll('fieldset');
  const steps = document.querySelectorAll('.step');

  let currentFieldset = 0;

  function showFieldset(index) {
      fieldsets.forEach((fieldset, i) => {
          if (i === index) {
              fieldset.style.display = 'block';
          } else {
              fieldset.style.display = 'none';
          }
      });

      updateStepProgress(index);
  }

  function updateStepProgress(index) {
      steps.forEach((step, i) => {
          if (i <= index) {
              step.classList.add('active');
          } else {
              step.classList.remove('active');
          }
      });

      updateStepConnectors();
  }

  function updateStepConnectors() {
      const activeSteps = document.querySelectorAll('.step.active');
      const stepConnectors = document.querySelectorAll('.step-connector');

      stepConnectors.forEach((connector, index) => {
          if (index < activeSteps.length - 1) {
              connector.style.backgroundColor = '#007bff';
          } else {
              connector.style.backgroundColor = '#ccc';
          }
      });
  }

  function goToNext() {
      if (currentFieldset < fieldsets.length - 1) {
          currentFieldset++;
          showFieldset(currentFieldset);
      }
  }

  function goToPrev() {
      if (currentFieldset > 0) {
          currentFieldset--;
          showFieldset(currentFieldset);
      }
  }

  form.addEventListener('submit', function(event) {
      event.preventDefault();
      // Here you can handle form submission
      alert('Form submitted successfully!');
  });

  const nextButtons = document.querySelectorAll('.next');
  const prevButtons = document.querySelectorAll('.prev');

  nextButtons.forEach(button => {
      button.addEventListener('click', function() {
          goToNext();
      });
  });

  prevButtons.forEach(button => {
      button.addEventListener('click', function() {
          goToPrev();
      });
  });

  showFieldset(currentFieldset);
});
