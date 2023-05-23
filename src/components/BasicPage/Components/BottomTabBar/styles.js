import { StyleSheet } from 'react-native';
import COLORS from '../../../../styles/colors';

const styles = StyleSheet.create({
  tabContainer: {
    height: 100,
    backgroundColor: COLORS.SECONDARY,
    paddingBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.7,
    shadowRadius: 16.00,
  },
});

export default styles;
