import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user, logger }) => {
  await signUpUser(page, user);
});

test('Log out user', async ({
  homePage,
  settingsPage,
}) => {
  await homePage.clickSettingsLink();

  await settingsPage.clickLogoutButton();
  await homePage.assertYourFeedTabIsHidden();
});
