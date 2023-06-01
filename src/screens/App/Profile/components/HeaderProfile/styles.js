import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '35%',
    borderBottomColor: '#141414',
    borderBottomWidth: 0.5,
  },
  containerInfo: {
    flex: 1,
    flexDirection: 'row',
  },
  containerData: {
    flex: 1,
    marginLeft: '5%',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  contentHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerNumbers: {
    marginTop: '10%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  contentNumbers: {
    alignItems: 'center',
  },
  contentName: {
    fontSize: 14,
  },
  number: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  containerBio: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bio: {
    fontSize: 12,
  },
});

export default styles;
