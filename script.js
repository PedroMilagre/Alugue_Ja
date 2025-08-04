// Rental Functionality
document.querySelectorAll('.rent-btn').forEach((btn) => {
  btn.addEventListener('click', function () {
    const model = this.getAttribute('data-model');
    const daily = this.getAttribute('data-daily');
    const kmrate = this.getAttribute('data-kmrate');

    document.getElementById('modalContent').innerHTML = `
            <p><strong>Veículo:</strong> ${model}</p>
            <p><strong>Diária:</strong> R$ ${daily}/dia</p>
            <p><strong>KM:</strong> R$ ${kmrate}/km</p>
        `;
    document.getElementById('rentalModal').classList.remove('hidden');
  });
});

document.getElementById('cancelRental').addEventListener('click', function () {
  document.getElementById('rentalModal').classList.add('hidden');
  clearRentalForm(); // Clear the form when cancelled
});

document.getElementById('rentalForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert(
    'Aluguel confirmado! Entraremos em contato para finalizar os detalhes.'
  );
  document.getElementById('rentalModal').classList.add('hidden');
  clearRentalForm(); // Clear the form after submission
});

// Function to clear the rental form
function clearRentalForm() {
  document.getElementById('rentalForm').reset(); // Reset the form fields
}

// Calculator Functionality
document.getElementById('calculateBtn').addEventListener('click', function () {
  const carModel = document.getElementById('carModel').value;
  const days = parseInt(document.getElementById('days').value);
  const km = parseInt(document.getElementById('km').value);
  const insurance = document.getElementById('insurance').value;

  let dailyRate, kmRate;

  switch (carModel) {
    case 'economy':
      dailyRate = 120;
      kmRate = 0.8;
      break;
    case 'intermediate':
      dailyRate = 150;
      kmRate = 0.9;
      break;
    case 'premium':
      dailyRate = 250;
      kmRate = 1.5;
      break;
    case 'suv':
      dailyRate = 220;
      kmRate = 1.2;
      break;
    default:
      dailyRate = 0;
      kmRate = 0;
  }

  const basePrice = dailyRate * days;
  const kmPrice = kmRate * km;
  const insurancePrice = insurance === 'basic' ? 20 * days : 40 * days;
  const totalPrice = basePrice + kmPrice + insurancePrice;

  // Update results
  document.getElementById('basePrice').textContent = `R$ ${basePrice
    .toFixed(2)
    .replace('.', ',')}`;
  document.getElementById('kmPrice').textContent = `R$ ${kmPrice
    .toFixed(2)
    .replace('.', ',')}`;
  document.getElementById('insurancePrice').textContent = `R$ ${insurancePrice
    .toFixed(2)
    .replace('.', ',')}`;
  document.getElementById('totalPrice').textContent = `R$ ${totalPrice
    .toFixed(2)
    .replace('.', ',')}`;

  // Show results
  document.getElementById('result').classList.remove('hidden');
});
