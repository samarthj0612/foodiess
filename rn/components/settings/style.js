import {StyleSheet} from 'react-native';

const stylesheet = () => {
  return StyleSheet.create({
    container: {padding: 10, alignItems: 'center'},

    settingRow: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 0.6,
      borderColor: '#222222',
      borderRadius: 10,
      backgroundColor: 'white',
      marginVertical: 10,
      padding: 15,
    },

    rowIcon: {height: 30, width: 30},

    rowText: {fontSize: 16, marginLeft: 20},

    logoutBtn: {
      marginVertical: 20,
      paddingHorizontal: 40,
      paddingVertical: 5,
      borderRadius: 50,
      borderWidth: 1,
      borderColor: 'red',
      marginBottom: 50,
    },

    logoutBtnText: {color: 'red', fontSize: 14},

    fullWidth: {width: '100%'},
  });
};
export {stylesheet};
