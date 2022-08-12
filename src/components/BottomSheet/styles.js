import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  bottomSheetContainer: {
    position: 'absolute',
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#ffff',
    width: Dimensions.get('window').width,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: 200,
    bottom: 0,
  },
});
