import {View, Text, Image} from 'react-native';
import React from 'react';
import {stylesheet} from './style';

const RecipeOfTheDay = () => {
  const styles = stylesheet();
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Special Thali</Text>
      <Text style={styles.title}>Dinner</Text>

      <View style={styles.card}>
        <Image
          style={styles.cardImg}
          source={require('assets/images/dinner3.jpg')}
        />

        <Text style={styles.cardTitle}> Special Thali </Text>

        <View style={styles.separator} />

        <View style={styles.cardTabBar}>
          <Image
            style={styles.tabBarIcon}
            source={require('assets/icons/clock.png')}
          />
          <Image
            style={styles.tabBarIcon}
            source={require('assets/icons/heart.png')}
          />
          <Image
            style={styles.tabBarIcon}
            source={require('assets/icons/share.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default RecipeOfTheDay;
