import EStyleSheet from 'react-native-extended-stylesheet';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = EStyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
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

  mainContainer: {
    width: '100%',
    paddingVertical: 25,
    paddingHorizontal: 25,
    backgroundColor: '#000',
  },

  timerContainer: {
    marginTop: 0,
    backgroundColor: '#000',
  },

  buttonContainer: {
    width: '100%',
    marginTop: 15,
    paddingHorizontal: 40,
    backgroundColor: '#000',
  },

  buttons: {
    flex: 1,
  },

  buttonSpacing: {
    marginRight: 15,
  },
});
