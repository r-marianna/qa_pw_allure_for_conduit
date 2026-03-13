import { test } from '../../_fixtures/fixtures';
import { generateNewArticleData } from '../../../src/common/testData/generateNewArticleData';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { faker } from '@faker-js/faker';

let article;

const user = {
  username: faker.internet.username().toLowerCase(),
  password: faker.internet.password(),
  email: faker.internet.email().toLowerCase()
}

test.beforeEach(async ({ page, user, logger }) => {
  article = generateNewArticleData(logger);

  await signUpUser(page, user);
});

test('Update username from settings', async ({
  homePage,
  settingsPage,
}) => {
  await homePage.clickSettingsLink();

  await settingsPage.fillUsername(user.username);
  await settingsPage.clickUpdateSettingsButton();
  await homePage.clickSettingsLink();
  await settingsPage.assertUsername(user.username);
});

test('Update email from settings', async ({
  homePage,
  settingsPage,
}) => {
  await homePage.clickSettingsLink();

  await settingsPage.fillEmail(user.email);
  await settingsPage.clickUpdateSettingsButton();
  await homePage.clickSettingsLink();
  await settingsPage.assertEmail(user.email);
});

test('Update password from settings', async ({
  homePage,
  signInPage,
  settingsPage,
}) => {
  await homePage.clickSettingsLink();

  await settingsPage.fillEmail(user.email);
  await settingsPage.fillPassword(user.password);
  await settingsPage.clickUpdateSettingsButton();

  await homePage.clickSettingsLink();
  await settingsPage.clickLogoutButton();

  await signInPage.open();
  await signInPage.fillEmailField(user.email);
  await signInPage.fillPasswordField(user.password);
  await signInPage.clickSignInButton();

  await homePage.assertYourFeedTabIsVisible();
});


