import { StyleSheet } from 'react-native';
import COLORS from '../../../../../styles/colors';

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: '2%',
    backgroundColor: COLORS.PRIMARY,
    padding: '5%',
  },
  buttonsContainer: {
    marginTop: '25%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  mark: {
    marginTop: 'auto',
    alignSelf: 'center',
  },
  logoContainer: {
    marginBottom: '5%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logoContent: {
    fontSize: 20,
  },
  iconContent: {
    width: 110,
    height: 110,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
  },
});

export default styles;
