import { StyleSheet } from 'react-native';
import COLORS from '../../../../../styles/colors';

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: '10%',
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
});

export default styles;
