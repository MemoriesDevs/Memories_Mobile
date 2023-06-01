import { StyleSheet } from 'react-native';
import COLORS from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '5%',
    backgroundColor: COLORS.SECONDARY,
    borderRadius: 5,
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
    paddingTop: '5%',
    width: '100%',
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
