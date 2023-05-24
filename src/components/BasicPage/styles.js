import { StyleSheet } from 'react-native';
import COLORS from '../../styles/colors';

const styles = StyleSheet.create({
  ContainerPage: {
    flex: 1,
    backgroundColor: COLORS.SECONDARY,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 500,
    color: COLORS.SECONDARY,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  ContainerChild: {
    flex: 1,
    padding: '5%',
  },
  contentPage: {
    flex: 1,
  },
});

export default styles;
