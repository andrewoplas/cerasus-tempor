import EStyleSheet from 'react-native-extended-stylesheet';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: '$paddingHorizontal',
  },

  divider: {
    color: '#fff',
    fontSize: RFValue(70),
    marginRight: 10,
    marginBottom: 18,
  },

  buttonContainer: {
    width: '100%',
    marginTop: 30,
  },
});
