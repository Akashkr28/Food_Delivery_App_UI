import * as Linking from 'expo-linking';

export const linking = {
  prefixes: [Linking.createURL('/'), 'foodapp://'],
  config: {
    screens: {
      MainApp: {
        screens: {
          HomeTabs: {
            screens: {
              HomeTab: {
                screens: {
                  RestaurantDetail: 'restaurant/:restaurantId'
                }
              }
            }
          }
        }
      }
    }
  }
};
