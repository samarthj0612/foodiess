import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import GetIdea from 'components/getIdea/index.jsx';
import RecipeOfTheDay from 'components/recipeOfTheDay/index.jsx';
import Popular from 'components/popular/index.jsx';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Get Idea" component={GetIdea} />
      <Tab.Screen name="Today's" component={RecipeOfTheDay} />
      <Tab.Screen name="Popular" component={Popular} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
