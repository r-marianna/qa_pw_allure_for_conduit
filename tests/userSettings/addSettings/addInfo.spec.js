import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page, user, logger }) => {
  await signUpUser(page, user);
});

test('Add profile picture URL from settings', async ({
  homePage,
  settingsPage,
}) => {
  const urlProfile = 'https://imgflip.com/s/meme/Futurama-Fry.jpg';

  await homePage.clickSettingsLink();

  await settingsPage.fillProfilePicture(urlProfile);
  await settingsPage.clickUpdateSettingsButton();
  await homePage.clickSettingsLink();
  await settingsPage.assertProfilePicture(urlProfile);
});

test('Add short bio from settings', async ({
  homePage,
  settingsPage,
}) => {
  const bio = faker.person.bio();

  await homePage.clickSettingsLink();

  await settingsPage.fillBio(bio);
  await settingsPage.clickUpdateSettingsButton();
  await homePage.clickSettingsLink();
  await settingsPage.assertBio(bio);
});
