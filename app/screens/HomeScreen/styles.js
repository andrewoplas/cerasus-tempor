import EStyleSheet from 'react-native-extended-stylesheet';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = EStyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: '$paddingHorizontal',
    alignItems: 'center',
    justifyContent: 'flex-end',
    resizeMode: 'cover',
  },

  divider: {
    color: '#fff',
    fontSize: RFValue(70),
    marginRight: 10,
    marginBottom: 18,
  },

  timerContainer: {
    marginTop: 0,
  },

  buttonContainer: {
    width: '100%',
    marginTop: 15,
    marginBottom: 50,
    paddingHorizontal: 40,
  },

  buttons: {
    flex: 1,
  },

  buttonSpacing: {
    marginRight: 15,
  },
});
