import {StyleSheet} from 'react-native';

const stylesheet = () => {
  return StyleSheet.create({
    container: {
      padding: 20,
      alignItems: 'center',
    },

    content: {width: 350, alignItems: 'center'},

    headText: {fontSize: 30, color: '#301E67'},

    headDesc: {fontSize: 16},

    card: {
      width: '90%',
      alignItems: 'center',
      marginVertical: 20,
      borderWidth: 0.6,
      borderColor: 'black',
      borderRadius: 20,
      overflow: 'hidden',
      backgroundColor: '#FCE9F1',
    },

    cardImg: {height: 350, width: '100%'},

    cardTitle: {
      fontSize: 14,
      padding: 10,
      color: 'black',
      textAlign: 'justify',
    },

    cardBar: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },

    cardBarIcon: {height: 20, width: 20},

    addIconContainer: {
      padding: 8,
      borderWidth: 4,
      borderRadius: 50,
      marginTop: 10,
    },

    addIcon: {
      height: 20,
      width: 20,
    },

    fullWidth: {width: '100%'},

    separator: {
      width: '100%',
      borderBottomWidth: 0.2,
      borderColor: 'black',
    },
  });
};

export {stylesheet};
