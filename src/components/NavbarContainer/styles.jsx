import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    //backgroundColor: '#161723',
    backgroundColor: '2B2D42',
    position: 'absolute',
    height: 56,
    right: 0,
    left: 0,
    bottom: 0,
  },

  iconContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
  },

  iconText: {
    color: '#edf2f4',
    fontSize: 12,
  },
});

export default styles;
