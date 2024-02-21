import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {stylesheet} from './style';

const GetIdea = () => {
  const styles = stylesheet();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <Image
          style={styles.imgContainer}
          source={require('assets/images/breakfast.jpg')}
        />
        <Text style={styles.text}>Breakfast</Text>
      </View>

      <View style={styles.row}>
        <Image
          style={styles.imgContainer}
          source={require('assets/images/lunch.jpg')}
        />
        <Text style={styles.text}>Lunch</Text>
      </View>

      <View style={styles.row}>
        <Image
          style={styles.imgContainer}
          source={require('assets/images/snacks.jpg')}
        />
        <Text style={styles.text}>Snacks</Text>
      </View>

      <View style={styles.row}>
        <Image
          style={styles.imgContainer}
          source={require('assets/images/dinner3.jpg')}
        />
        <Text style={styles.text}>Dinner</Text>
      </View>

      <View style={styles.row}>
        <Image
          style={styles.imgContainer}
          source={require('assets/images/breakfast1.jpg')}
        />
        <Text style={styles.text}>Breakfast</Text>
      </View>

      <View style={styles.row}>
        <Image
          style={styles.imgContainer}
          source={require('assets/images/lunch.jpg')}
        />
        <Text style={styles.text}>Lunch</Text>
      </View>

      <View style={styles.row}>
        <Image
          style={styles.imgContainer}
          source={require('assets/images/snacks.jpg')}
        />
        <Text style={styles.text}>Snacks</Text>
      </View>

      <View style={styles.row}>
        <Image
          style={styles.imgContainer}
          source={require('assets/images/dinner.jpg')}
        />
        <Text style={styles.text}>Dinner</Text>
      </View>
    </ScrollView>
  );
};

export default GetIdea;
