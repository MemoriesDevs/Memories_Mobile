import { StyleSheet } from 'react-native';
import COLORS from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.VIOLET,
    borderRadius: 5,
    height: 50,
    width: 135,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,

    elevation: 13,
  },
  Title: {
    color: COLORS.SECONDARY,
    fontSize: 18,
  },
});

export default styles;
