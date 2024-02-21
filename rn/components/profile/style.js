import {StyleSheet} from 'react-native';

const stylesheet = () => {
  return StyleSheet.create({
    scroller: {flex: 1, width: '100%', padding: 20},

    container: {width: '100%', alignItems: 'center', paddingBottom: 30},

    profilePic: {height: 120, width: 120, borderRadius: 100},

    username: {fontSize: 25, fontWeight: 'bold'},

    detailRow: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#E5D1FA',
      padding: 10,
      marginVertical: 10,
      borderRadius: 10,
    },

    icon: {height: 28, width: 28, marginHorizontal: 10},

    editBtn: {
      color: '#3991F7',
      paddingHorizontal: 30,
      paddingVertical: 10,
      borderRadius: 20,
    },

    moreOptionRow: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 0.4,
      borderColor: '#9BA4B5',
      padding: 10,
      marginVertical: 10,
      borderRadius: 10,
    },

    separator: {
      width: '80%',
      borderWidth: 0.5,
      marginVertical: 20,
      borderBottomColor: '#00000000',
    },

    moreOptionContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },

    grid: {
      width: '30%',
      backgroundColor: '#ffff',
      marginBottom: 20,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      borderWidth: 1,
      borderColor: '#111111',
      opacity: 0.8,
    },

    gridImg: {height: 45, width: 45, borderRadius: 5, margin: 15},

    gridText: {textAlign: 'center', padding: 5},
  });
};

export {stylesheet};
