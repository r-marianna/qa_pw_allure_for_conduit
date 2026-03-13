import { expect, testStep } from '../../../common/helpers/pw';

export class SettingsPage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.profilePictureField = page.getByPlaceholder("URL of profile picture");
    this.usernameField = page.getByPlaceholder("Username");
    this.bioField = page.getByPlaceholder("Short bio about you");
    this.emailField = page.getByPlaceholder("Email");
    this.passwordField = page.getByPlaceholder("New Password");
    this.updateBtn = page.getByRole("button", { name: 'Update Settings' });
    this.logoutBtn = page.getByRole("button",
      { name: 'Or click here to logout.' });
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async fillUsername(username) {
    await this.step(`Fill in the Username field`, async () => {
      await this.usernameField.fill(username);
    });
  }

  async fillPassword(password) {
    await this.step(`Fill in the Password field`, async () => {
      await this.passwordField.fill(password);
    });
  }

  async fillEmail(email) {
    await this.step(`Fill in the Email field`, async () => {
      await this.emailField.fill(email);
    });
  }

  async fillBio(bio) {
    await this.step(`Fill in the Bio field`, async () => {
      await this.bioField.fill(bio);
    });
  }

  async fillProfilePicture(url) {
    await this.step(`Fill in the Profile Picture field`, async () => {
      await this.profilePictureField.fill(url);
    });
  }

  async clickUpdateSettingsButton() {
    await this.step(`Click on the Update Settings button`, async () => {
      await this.updateBtn.click();
    });
  }

  async clickLogoutButton() {
    await this.step(`Click on the Logout button`, async () => {
      await this.logoutBtn.click();
    });
  }

  async assertUsername(username) {
    await this.step(`Assert the Username field has correct text`, async () => {
      await expect(this.usernameField).toHaveValue(username);
    });
  }

  async assertPassword(password) {
    await this.step(`Assert the Password field has correct text`, async () => {
      await expect(this.passwordField).toHaveValue(password);
    });
  }

  async assertEmail(email) {
    await this.step(`Assert the Email field has correct text`, async () => {
      await expect(this.emailField).toHaveValue(email);
    });
  }

  async assertBio(bio) {
    await this.step(`Assert the Bio field has correct text`, async () => {
      await expect(this.bioField).toHaveValue(bio);
    });
  }

  async assertProfilePicture(url) {
    await this.step(`Assert the Profile Picture field has correct text`,
      async () => {
        await expect(this.profilePictureField).toHaveValue(url);
      });
  }
}