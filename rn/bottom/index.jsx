import React from 'react';
import {Image} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Recipe from 'components/recipe/index';
import Favourite from 'components/favourite/index';
import Shop from 'components/shop/index';
import Profile from 'components/profile/index';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Recipe"
      activeColor="#301E67"
      sceneAnimationType="shifting">
      <Tab.Screen
        name="Recipe"
        component={Recipe}
        options={{tabBarIcon: recipeTabIcon}}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{tabBarIcon: favouriteTabIcon}}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{tabBarIcon: shopTabIcon}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{tabBarIcon: profileTabIcon}}
      />
    </Tab.Navigator>
  );
};

const recipeTabIcon = () => {
  return (
    <Image style={styles.tabIcon} source={require('assets/icons/recipe.png')} />
  );
};
const favouriteTabIcon = () => {
  return (
    <Image
      style={styles.tabIcon}
      source={require('assets/icons/favourite.png')}
    />
  );
};
const shopTabIcon = () => {
  return (
    <Image style={styles.tabIcon} source={require('assets/icons/shop.png')} />
  );
};
const profileTabIcon = () => {
  return (
    <Image style={styles.tabIcon} source={require('assets/icons/avatar.png')} />
  );
};

const styles = {
  tabIcon: {height: 32, width: 32},
};

export default BottomNavigator;
