# tiktok-expo clone 👋

## Version

Using latest version as of July, 2025

Expo : 53, React 19,

## Get started

```bash
npx create-expo-app
npm install
# -c will clear the cache to prevent some annoying errors
npx expo start -c

git checkout -b clean
git add .
git commit -m "clean commit"
git checkout main
git merge clean
git push
git checkout -b add-native-wind

# Adding nativewind
npm install nativewind react-native-reanimated@~3.17.4 react-native-safe-area-context@5.4.0
npm install -D tailwindcss@^3.4.17 prettier-plugin-tailwindcss@^0.5.11

npx tailwindcss init

# Add the following line to tailwind.config.js
# content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],

# Add nativewind types to nativewind-env.d.ts
# /// <reference types="nativewind/types" />
```

### Create or modify `./assets/global.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Create or modify `babel.config.js`

```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```

### Create or modify `metro.config.js`

```javascript
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./assets/global.css" });
```

### Modify `./app/_layout.tsx`

```javascript
// Add css import
import "../assets/global.css";
```

## Try nativewind

```javascript
<View className="flex-1 items-center justify-center">
  <Text className="text-red-400 text-3xl font-bold">Home Screen!</Text>
</View>
```

```bash
git add .
git commit -m "nativewind added"
git push --set-upstream origin add-native-wind
```
