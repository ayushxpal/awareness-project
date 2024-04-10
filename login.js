const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage'); // Add an element for error messages

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const phoneNumber = document.getElementById('phoneNumber').value;
  const password = document.getElementById('password').value;

  // Basic validation (add more as needed)
  if (!phoneNumber || !password) {
    errorMessage.textContent = 'Please enter both phone number and password.';
    return;  // Exit the function if validation fails
  }

  // Simulate login using console logs (replace with actual authentication logic)
  console.log(`Attempting login with phone number: ${phoneNumber} and password: ${password}`);

  // **Replace with actual login logic:**
  // 1. Send an AJAX request to your server with phone number and password.
  // 2. The server should verify credentials against a database or other secure storage.
  // 3. The server should respond with a success or failure message.
  // 4. Based on the server response, handle login success or display an error message.

  // Example placeholder for successful login (replace with actual logic)
  if (phoneNumber === '1234567890' && password === 'secret') {
    // Login successful, redirect to dashboard or relevant page
    window.location.href = 'dashboard.html';
  } else {
    // Login failed, display error message
    errorMessage.textContent = 'Invalid phone number or password.';
  }
});
