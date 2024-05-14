// Really don't know how it works...
document.getElementById('trueButton').addEventListener('click', function() {
  showAlert('success', 'You think Porsche is the best!');
});

document.getElementById('falseButton').addEventListener('click', function() {
  showAlert('danger', 'You do not think Porsche is the best!');
});

function showAlert(type, message) {
  const alertPlaceholder = document.getElementById('alertPlaceholder');
  alertPlaceholder.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      ${message}
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  `;
}
