import {StyleSheet} from 'react-native';

const stylesheet = () => {
  return StyleSheet.create({
    container: {
      padding: 20,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },

    grid: {
      width: '45%',
      backgroundColor: '#ffff',
      marginBottom: 20,
      borderRadius: 5,
    },

    gridImg: {height: 150, width: '100%', borderRadius: 5},

    gridText: {textAlign: 'center', padding: 5},

    dialogBox: {
      flex: 1,
      height: '110%',
      width: '115%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00000080',
      position: 'absolute',
      zIndex: 90,
    },

    dialogBoxContent: {
      width: '80%',
      backgroundColor: '#ffffff',
      padding: 20,
      borderRadius: 5,
    },

    closeBtn: {alignSelf: 'flex-end', fontWeight: 'bold', marginTop: 10},
  });
};

export {stylesheet};
