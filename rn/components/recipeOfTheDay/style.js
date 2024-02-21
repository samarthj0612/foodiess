import {StyleSheet} from 'react-native';

const stylesheet = () => {
  return StyleSheet.create({
    container: {alignItems: 'center', flex: 1, padding: 20},

    headText: {fontSize: 30, color: '#301E67'},

    title: {fontSize: 16},

    card: {
      width: '100%',
      alignItems: 'center',
      marginVertical: 20,
      borderWidth: 0.6,
      borderColor: 'black',
      borderRadius: 20,
      overflow: 'hidden',
      backgroundColor: '#FCE9F1',
    },

    cardImg: {height: 380, width: '100%'},

    cardTitle: {fontSize: 18, padding: 10, color: 'black'},

    separator: {
      width: '100%',
      borderBottomWidth: 0.2,
      borderColor: 'black',
    },

    cardTabBar: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },

    tabBarIcon: {height: 20, width: 20},
  });
};

export {stylesheet};
