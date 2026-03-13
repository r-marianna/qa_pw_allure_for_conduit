import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page, user, logger }) => {
  await signUpUser(page, user);
});

test('Update username from settings', async ({
  homePage,
  settingsPage,
}) => {
  const username = faker.internet.username().toLowerCase();

  await homePage.clickSettingsLink();

  await settingsPage.fillUsername(username);
  await settingsPage.clickUpdateSettingsButton();
  await homePage.clickSettingsLink();
  await settingsPage.assertUsername(username);
});

test('Update email from settings', async ({
  homePage,
  settingsPage,
}) => {
  const email = faker.internet.email().toLowerCase();

  await homePage.clickSettingsLink();

  await settingsPage.fillEmail(email);
  await settingsPage.clickUpdateSettingsButton();
  await homePage.clickSettingsLink();
  await settingsPage.assertEmail(email);
});

test('Update password from settings', async ({
  homePage,
  signInPage,
  settingsPage,
  user
}) => {
  const password = faker.internet.password();

  await homePage.clickSettingsLink();

  await settingsPage.fillPassword(password);
  await settingsPage.clickUpdateSettingsButton();

  await homePage.clickSettingsLink();
  await settingsPage.clickLogoutButton();

  await signInPage.open();
  await signInPage.fillEmailField(user.email);
  await signInPage.fillPasswordField(password);
  await signInPage.clickSignInButton();

  await homePage.assertYourFeedTabIsVisible();
});


