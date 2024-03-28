To run a React Native iPhone application after downloading the source code from GitHub, you'll need to follow these steps:

Install Node.js and npm: Ensure you have Node.js installed on your machine, as React Native relies on it. You can download and install it from the official website: Node.js.

Install Watchman (Optional): Watchman is a tool by Facebook for watching changes in the filesystem. While it's optional, it can improve performance in some cases. You can install it using Homebrew (for macOS) or your system's package manager.


brew install watchman
Install React Native CLI: Install the React Native command-line interface globally using npm.


npm install -g react-native-cli
Install Xcode: If you're developing for iOS, you'll need Xcode, which is available for download from the Mac App Store. Install it and make sure to open it at least once to accept the license agreement and complete the installation.

Install CocoaPods (for iOS): If the React Native project you've downloaded uses CocoaPods for managing dependencies, you'll need to install it. You can do this with RubyGems:


sudo gem install cocoapods
Navigate to the project directory: Open Terminal or your command prompt, navigate to the directory where you've downloaded the React Native project.

Install dependencies: Use npm or yarn to install the project dependencies.


npm install
or


yarn install
Link native dependencies (if necessary): Some React Native libraries may require manual linking. If so, you'll typically see instructions in the library's documentation.

Start the Metro Bundler: The Metro Bundler is a JavaScript bundler that compiles your JavaScript code and serves it to your app.


npx react-native start
Run the app on iOS simulator: Open a new terminal window or tab, navigate to your project directory, and run:


npx react-native run-ios
This command will build your React Native app for iOS and launch it in the iOS Simulator.

Run the app on a physical device (Optional): If you want to run the app on a physical iOS device, you'll need to have Xcode set up for development and follow additional steps to configure your device for development. You can find detailed instructions on the React Native website.

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
