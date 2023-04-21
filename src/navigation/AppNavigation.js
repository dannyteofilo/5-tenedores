import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import {RestaurantStack} from './RestaurantStack'
import {FavoritesStack} from "./Favoritesstack";
import RankingScreen from "../screens/RankingScreen";
import AccountScreen from "../screens/AccountScreen";
import { screen } from "../utils/index";
import SearchsScreen from "../screens/SearchsScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown:false,
        tabBarActiveTintColor: "#00a680",
        tabBarInactiveTintColor: "#646464",
        tabBarIcon: ({ color, size }) => sceenOption(route, color, size),
      })}
    >
      <Tab.Screen
        name={screen.restaurant.tab}
        component={RestaurantStack}
        options={{ title: "Restaurantes" }}
      />
      <Tab.Screen
        name={screen.favorites.tab}
        component={FavoritesStack}
        options={{ title: "Favoritos" }}
      />
      <Tab.Screen
        name={screen.ranking.tab}
        component={RankingScreen}
        options={{ title: "Ranking" }}
      />
      <Tab.Screen
        name={screen.search.tab}
        component={SearchsScreen}
        options={{ title: "Buscar" }}
      />
      <Tab.Screen
        name={screen.account.tab}
        component={AccountScreen}
        options={{ title: "Cuenta" }}
      />
    </Tab.Navigator>
  );
}

function sceenOption(route, color, size) {
  const icons = {
    RestaurantsTab: "compass-outline",
    FavoritesTab: "heart-outline",
    RankingTab: "star-outline",
    SearchTab: "magnify",
    AccountTab: "home-outline",
  };

  const iconName = icons[route.name];
  if (!iconName) {
    return null;
  }

  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
}
