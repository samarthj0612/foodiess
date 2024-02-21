import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {stylesheet} from './style';

const Popular = () => {
  const styles = stylesheet();

  return (
    <View style={styles.container}>
      <Image
        style={styles.popularImg}
        source={require('assets/images/dinner.jpg')}
      />

      <View style={styles.content}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerText}>Focaccia Bread</Text>
            <View style={styles.rowCenter}>
              <Text>Recipie</Text>
              <Image
                style={styles.starIcon}
                source={require('assets/icons/favourite.png')}
              />
              <Text>4.5</Text>
            </View>
          </View>

          <View style={styles.rowCenter}>
            <Image
              style={styles.headerIcon}
              source={require('assets/icons/clock.png')}
            />
            <Image
              style={styles.headerIcon}
              source={require('assets/icons/share.png')}
            />
          </View>
        </View>

        <View style={styles.optionsBar}>
          <Text style={styles.bold}>Ingredients</Text>
          <Text>Preparation</Text>
          <Text>Nutrition</Text>
        </View>

        <Text style={styles.justify}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          fuga ipsam itaque ratione ullam magnam modi, explicabo, soluta sit
          tenetur cumque obcaecati atque necessitatibus laborum, qui vero enim
          nostrum impedit. Sunt, enim eaque placeat ex officiis laborum natus
          aspernatur quis minus repellat unde ut error totam ab modi voluptate
          quasi?
        </Text>

        <View style={styles.separator} />

        <View style={styles.rowBetween}>
          <Text>Total Time : 30 Min</Text>
          <Text>Serving : 2 Person</Text>
        </View>

        <TouchableOpacity>
          <Text style={styles.orderBtn}>Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Popular;
