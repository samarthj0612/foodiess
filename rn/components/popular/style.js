import {StyleSheet} from 'react-native';

const stylesheet = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },

    popularImg: {
      height: 200,
      width: '100%',
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
    },

    content: {padding: 20, width: '100%'},

    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },

    headerText: {fontSize: 20},

    headerIcon: {height: 20, width: 20, marginHorizontal: 10},

    optionsBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 0.6,
      borderColor: 'black',
      marginVertical: 20,
      paddingVertical: 10,
    },

    orderBtn: {
      backgroundColor: 'blue',
      width: '34%',
      textAlign: 'center',
      color: '#ffffff',
      paddingVertical: 6,
      marginVertical: 30,
      alignSelf: 'flex-end',
      borderRadius: 20,
    },

    starIcon: {height: 15, width: 15, marginHorizontal: 5},

    bold: {fontWeight: 'bold'},

    justify: {textAlign: 'justify'},

    separator: {
      borderBottomWidth: 0.8,
      borderColor: 'black',
      marginVertical: 15,
    },

    rowBetween: {flexDirection: 'row', justifyContent: 'space-between'},

    rowCenter: {flexDirection: 'row', alignItems: 'center'},
  });
};

export {stylesheet};
