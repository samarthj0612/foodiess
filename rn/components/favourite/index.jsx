import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {stylesheet} from './style';

const Favourite = () => {
  const [showDialogBox, setShowDialogBox] = useState(false);
  const [selected, setSelected] = useState('');

  const styles = stylesheet();

  const grids = [
    {
      title: 'Special Thali',
      img: require('assets/images/specialThali.jpg'),
      desc: 'a grain: rice or flatbread made with wheat, millet, etc. lentils: dal or sambar. vegetables: a seasonal preparation. chutney: a condiment made with fruit, herbs, spices, and even vegetables and fish.',
    },
    {
      title: 'Salad',
      img: require('assets/images/salad.jpg'),
      desc: 'A salad is a dish consisting of mixed ingredients, frequently vegetables. They are typically served chilled or at room temperature, though some can be served warm.',
    },
    {
      title: 'Veg Kothe',
      img: require('assets/images/vegKothe.jpg'),
      desc: 'Veg Kothe is a popular vegetarian snack, It is a type of dumpling made from a mixture of finely chopped vegetables and spices, which are shaped into small round balls and then deep-fried until crispy and golden brown.',
    },
    {
      title: 'Soup',
      img: require('assets/images/soup.jpg'),
      desc: 'Hot soups are additionally characterized by boiling solid ingredients in liquids in a pot until the flavors are extracted, forming a broth.',
    },
    {
      title: 'Burger',
      img: require('assets/images/burger.jpg'),
      desc: 'A hamburger, or simply burger, is a food consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll.',
    },
  ];

  const dialogBoxHandler = data => {
    setShowDialogBox(true);
    setSelected(data);
  };

  const closeHandler = () => {
    setShowDialogBox(false);
    setSelected('');
  };

  return (
    <View style={styles.container}>
      {grids.map((grid, key) => {
        return (
          <TouchableOpacity
            key={key}
            style={styles.grid}
            onPress={() => dialogBoxHandler(grid.desc)}>
            <Image style={styles.gridImg} source={grid.img} />
            <Text style={styles.gridText}>{grid.title}</Text>
          </TouchableOpacity>
        );
      })}
      {showDialogBox ? (
        <View style={styles.dialogBox}>
          <View style={styles.dialogBoxContent}>
            <Text>{selected}</Text>
            <TouchableOpacity onPress={closeHandler}>
              <Text style={styles.closeBtn}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default Favourite;
