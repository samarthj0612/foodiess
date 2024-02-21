import {StyleSheet} from 'react-native';

const stylesheet = () => {
  return StyleSheet.create({
    container: {paddingHorizontal: 20},

    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
      backgroundColor: '#E5D1FA',
      padding: 10,
      borderRadius: 10,
    },

    imgContainer: {
      height: 85,
      width: 85,
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 100,
    },

    text: {fontSize: 25, marginLeft: 20, color: '#20262E'},
  });
};

export {stylesheet};
