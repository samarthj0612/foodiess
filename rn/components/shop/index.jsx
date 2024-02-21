import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {stylesheet} from './style';

const Shop = () => {
  const styles = stylesheet();
  const cards = [
    {
      headText: 'Special Thali',
      headDesc: 'Dinner',
      image:
        'https://img.freepik.com/premium-photo/indian-hindu-veg-thali-food-platter-selective-focus_466689-35126.jpg',
      desc: 'a grain: rice or flatbread made with wheat, millet, etc. lentils: dal or sambar. vegetables: a seasonal preparation. chutney: a condiment made with fruit, herbs, spices, and even vegetables and fish.',
    },
    {
      headText: 'Salad',
      headDesc: 'Lunch',
      image:
        'https://www.acouplecooks.com/wp-content/uploads/2019/05/Chopped-Salad-001_1.jpg',
      desc: 'A salad is a dish consisting of mixed ingredients, frequently vegetables. They are typically served chilled or at room temperature, though some can be served warm.',
    },
    {
      headText: 'Veg Kothe',
      headDesc: 'Fast food',
      image:
        'https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/priyanka-purohit20171113210801164.jpeg',
      desc: 'Veg Kothe is a popular vegetarian snack, It is a type of dumpling made from a mixture of finely chopped vegetables and spices, which are shaped into small round balls and then deep-fried until crispy and golden brown.',
    },
    {
      headText: 'Soup',
      headDesc: 'Dinner',
      image:
        'https://kristineskitchenblog.com/wp-content/uploads/2022/02/minestrone-soup-recipe-22.jpg',
      desc: 'Hot soups are additionally characterized by boiling solid ingredients in liquids in a pot until the flavors are extracted, forming a broth.',
    },
    {
      headText: 'Burger',
      headDesc: 'Snacks',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/640px-Hamburger_%28black_bg%29.jpg',
      desc: 'A hamburger, or simply burger, is a food consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll.',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} style={styles.fullWidth}>
        {cards.map((card, key) => {
          return (
            <View key={key} style={styles.content}>
              <Text style={styles.headText}>{card.headText}</Text>
              <Text style={styles.headDesc}>{card.headDesc}</Text>

              <View style={styles.card}>
                <Image
                  style={styles.cardImg}
                  source={{
                    uri: card.image,
                  }}
                />

                <Text style={styles.cardTitle}>{card.desc}</Text>

                <View style={styles.separator} />

                <View style={styles.cardBar}>
                  <Image
                    style={styles.cardBarIcon}
                    source={require('assets/icons/clock.png')}
                  />
                  <Image
                    style={styles.cardBarIcon}
                    source={require('assets/icons/heart.png')}
                  />
                  <Image
                    style={styles.cardBarIcon}
                    source={require('assets/icons/share.png')}
                  />
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>

      <TouchableOpacity>
        <View style={styles.addIconContainer}>
          <Image
            style={styles.addIcon}
            source={require('assets/icons/plus.png')}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Shop;
