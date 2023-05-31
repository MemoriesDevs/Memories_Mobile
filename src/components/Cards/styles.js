import { StyleSheet } from 'react-native';
import COLORS from '../../styles/colors';

const styles = StyleSheet.create({
  CardContainer: {
    height: 90,
    backgroundColor: COLORS.SECONDARY,
    borderRadius: 5,
    marginBottom: '5%',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  CardDate: {
    fontSize: 12,
  },
  TitleCard: {
    marginTop: '2%',
    fontSize: 18,
  },
  ButtonCard: {
    flex: 1,
  },
  CardContent: {
    flex: 1,
    paddingHorizontal: '5%',
    paddingTop: '5%',
  },
  TopContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  BottomContainer: {
    height: 20,
    width: '100%',
  },
  RigthContent: {
    width: '30%',
    alignItems: 'flex-end',
    height: '100%',
  },
  LeftContent: {
    width: '70%',
    height: '100%',
  },
});

export default styles;
