<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      background-color: #FFD580; /* Orange background color */
    }
  </style>
</head>

<body>
  <script>
    document.body.innerHTML = `
      <form id="resetForm" style="width: 300px; padding: 20px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); background-color: white;">
        <h2>Password Reset</h2>
        <p>Enter your email address to reset your password.</p>
    
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
    
        <button type="button" onclick="resetPassword()">Reset Password</button>
        <button type="button" onclick="goToLogin()">Back to Login</button>
      </form>
    `;

    function resetPassword() {
      const email = document.getElementById('email').value;
      console.log(`Password reset request for ${email}`);
      alert('Password reset request submitted. Check your email for further instructions.');
      // Navigate to the Login page after successful reset
      goToLogin();
    }

    function goToLogin() {
      // Replace 'AccountPage' with the actual screen you want to navigate to after login
      alert('Navigating to Login page');
      // Redirect or navigate to your login page
      // window.location.href = 'login.html';
    }
  </script>
</body>

</html>
