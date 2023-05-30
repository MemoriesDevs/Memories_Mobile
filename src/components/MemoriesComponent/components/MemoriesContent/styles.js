import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    marginTop: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContent: {
    fontSize: 14,
  },
  imageContent: {
    width: 275,
    height: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default styles;
