import { StyleSheet } from 'react-native';
import COLORS from '../../styles/colors';

const styles = StyleSheet.create({
  memorieContainer: {
    flex: 1,
    marginTop: '5%',
    backgroundColor: COLORS.SECONDARY,
    borderRadius: 5,
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
    paddingTop: '5%',
    flexDirection: 'row',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  closeButton: {
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    width: 20,
    borderRadius: 20,
  },
  closeSymbol: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.VIOLET,
  },
  containerIcon: {
    backgroundColor: COLORS.VIOLET,
    height: 20,
    width: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
