import { StyleSheet } from 'react-native';
import COLORS from '../../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dropdownButton: {
    backgroundColor: COLORS.SECONDARY,
    width: '37%',
  },
  dropdownText: {
    color: COLORS.TEXT,
  },
  containerInfo: {
    flex: 1,
  },
});

export default styles;
