"use strict";

// main.js

// This file contains the main entry point for the application.
// It initializes the DOM elements, sets up event listeners,
// and kicks off the application by calling the start function.

const $body = $("body");
const $storiesLoadingMsg = $("#stories-loading-msg");
const $allStoriesList = $("#all-stories-list");
const $favoritedStories = $("#favorited-stories");
const $ownStories = $("#my-stories");
const $storiesContainer = $("#stories-container");
const $storiesLists = $(".stories-list");
const $loginForm = $("#login-form");
const $signupForm = $("#signup-form");
const $submitForm = $("#submit-form");
const $navSubmitStory = $("#nav-submit-story");
const $navLogin = $("#nav-login");
const $navUserProfile = $("#nav-user-profile");
const $navLogOut = $("#nav-logout");
const $userProfile = $("#user-profile");

/** Function to hide all page components. */
function hidePageComponents() {
  const components = [
    $storiesLists,
    $submitForm,
    $loginForm,
    $signupForm,
    $userProfile,
  ];
  components.forEach((c) => c.hide());
}

/** Overall function to initialize the app. */
async function start() {
  console.debug("start");

  // Check for a remembered user and log in if credentials are present
  await checkForRememberedUser();
  await getAndShowStoriesOnStart();

  // Update UI if a user is logged in
  if (currentUser) updateUIOnUserLogin();
}

// Initialize the app when the DOM is fully loaded

console.warn(
  "HEY STUDENT: This program sends many debug messages to" +
    " the console. If you don't see the message 'start' below this, you're not" +
    " seeing those helpful debug messages. In your browser console, click on" +
    " menu 'Default Levels' and add Verbose"
);
$(start);
