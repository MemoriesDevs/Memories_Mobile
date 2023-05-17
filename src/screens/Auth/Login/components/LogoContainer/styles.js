import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContent: {
    fontSize: 28,
  },
  iconContent: {
    width: 250,
    height: 250,
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
