// login.js
class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByPlaceholder('Email'); // Placeholder for email field
    this.passwordInput = page.getByPlaceholder('*******'); // Placeholder for password field
    this.loginButton = page.getByRole('button', { name: 'Login' }); // Button role with "Sign In"
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

export default LoginPage;
