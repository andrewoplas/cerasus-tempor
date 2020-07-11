import EStyleSheet from 'react-native-extended-stylesheet';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = EStyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: '$paddingHorizontal',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
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
    paddingHorizontal: 40,
  },

  buttons: {
    flex: 1,
  },

  buttonSpacing: {
    marginRight: 5,
  },
});
