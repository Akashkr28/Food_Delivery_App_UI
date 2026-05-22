# Food Delivery Navigation App

A React Native Expo food delivery UI built to practice React Navigation patterns in one complete assignment app. It includes auth gating, onboarding, nested stacks, bottom tabs, a profile drawer, route params, badges, deep linking, and programmatic navigation.

TLDraw notes reviewed: [Mobile Development Cohort 2026 board](https://www.tldraw.com/f/mQeviE3IZLi8quAUEoGja?d=v-1305.24961.1834.1128.page)

## Submission Links

- Public GitHub repository: Add your GitHub repo link here.
- 2-minute demo video: Add your demo video link here.

## Tech Stack

- Expo SDK 55
- React Native 0.83
- React Navigation 6
- Native Stack Navigator
- Bottom Tab Navigator
- Drawer Navigator
- AsyncStorage for mock auth persistence
- Expo Linking for deep links
- Expo Vector Icons
- React Native Worklets for Reanimated 4 support

## How to Run Locally

```bash
npm install
npm start
```

Then open the app with Expo Go, an Android emulator, or an iOS simulator.

Useful commands:

```bash
npm run android
npm run ios
npm run web
```

## Navigation Structure

```text
NavigationContainer
├── Unauthenticated
│   └── LoginFlow Stack
│       └── Login
└── Authenticated
    └── Main Drawer
        ├── HomeTabs
        │   ├── HomeTab
        │   │   └── Restaurant Stack
        │   │       ├── Onboarding
        │   │       ├── HomeList
        │   │       ├── RestaurantDetail
        │   │       └── Cart
        │   ├── Search
        │   ├── Orders
        │   └── Profile
        ├── My Orders
        ├── Settings
        └── Help
```

## Project Structure

```text
App.js
src/
├── components/
│   ├── AppButton.js
│   ├── CustomDrawerContent.js
│   └── Screen.js
├── constants/
│   └── storage.js
├── context/
│   ├── AuthContext.js
│   ├── CartContext.js
│   └── OrderContext.js
├── data/
│   └── restaurants.js
├── hooks/
│   └── useLogout.js
├── navigation/
│   ├── AuthNavigator.js
│   ├── MainDrawerNavigator.js
│   ├── MainTabsNavigator.js
│   ├── RestaurantStackNavigator.js
│   ├── RootNavigator.js
│   └── linking.js
├── screens/
│   ├── CartScreen.js
│   ├── HomeScreen.js
│   ├── LoginScreen.js
│   ├── OnboardingScreen.js
│   ├── OrdersScreen.js
│   ├── ProfileScreen.js
│   ├── RestaurantDetailScreen.js
│   └── SearchScreen.js
├── styles/
│   └── sharedStyles.js
└── theme/
    └── colors.js
```

## Implemented Navigation Requirements

- Conditional auth flow shows `LoginFlow` until mock login is saved in AsyncStorage.
- Auth state persists with the key `foodapp.mockAuth`.
- Onboarding uses `navigation.replace('HomeList')`.
- Home opens Restaurant Detail with `navigation.navigate('RestaurantDetail', { restaurantId, name, price })`.
- Restaurant Detail reads `name` and `price` params and can navigate to Cart.
- Restaurant Detail has a `goBack` button.
- Cart uses `CommonActions.reset` after placing an order.
- Bottom tabs include Home, Search, Orders, and Profile with vector icons.
- Orders tab badge appears when the shared cart context has items.
- Restaurant Stack is nested inside the Home tab.
- Tab bar is hidden on Restaurant Detail and Cart screens.
- Profile opens the parent drawer with `DrawerActions.openDrawer()`.
- Drawer includes My Orders, Settings, Help, and a custom Logout item.
- Custom drawer content displays an avatar and user name.
- Native stack screen animations are configured for smooth transitions.

## Deep Linking

The app scheme is configured in `app.json`:

```json
{
  "scheme": "foodapp"
}
```

The linking config maps:

```text
foodapp://restaurant/123
```

to:

```text
MainApp → HomeTabs → HomeTab → RestaurantDetail
```

Example test command:

```bash
npx uri-scheme open foodapp://restaurant/123 --android
```

or for iOS:

```bash
npx uri-scheme open foodapp://restaurant/123 --ios
```

## Demo Checklist

- Login/auth flow
- Onboarding to Home flow
- Bottom tabs
- Restaurant Detail navigation with params
- Cart navigation
- Drawer from Profile
- Orders badge after adding a cart item
- Deep link opening Restaurant Detail
- Reload after login to show persisted auth state

## Assumptions

- The login is intentionally mocked for navigation practice.
- Cart data is kept in memory; only auth persistence is required by the assignment.
- The direct deep link opens Restaurant Detail using the restaurant id and falls back to local mock restaurant data when name and price are not passed as route params.
- Screenshots should be added after running the app on your target emulator/device.
