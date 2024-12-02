import { validCredentials } from './env.js';

export async function login(page) {
  // Navigate to login page and perform login
  await page.goto(`${validCredentials.baseURL}/login`);
  await page.getByPlaceholder('Email').fill(validCredentials.username);
  await page.getByPlaceholder('*******').fill(validCredentials.password);
  await page.getByRole('button', { name: 'Login' }).click();
}
