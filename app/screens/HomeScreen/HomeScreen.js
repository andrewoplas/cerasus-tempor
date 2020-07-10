import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, LinearLayout, Text } from '../../components/elements';
import { actions } from '../../ducks/time';
import { TIMER_INTERVAL } from '../../globals/variables';
import { SaveModal } from './components/SaveModal';
import { TimeNumber } from './components/TimeNumber';
import { styles } from './styles';

const HomeScreen = ({ saveNow, saveLater, navigation }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setTimerRunning] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Modal
  const [saveModalVisible, setSaveModalVisible] = useState(false);
  const [generatedTitle, setGeneratedTitle] = useState('');
  const [title, setTitle] = useState('');

  const timerTimeOut = useRef(null);

  const onStartTimer = () => {
    setTimerRunning(true);
    setStartDate(new Date());

    timerTimeOut.current = setInterval(() => {
      setSeconds((previousSeconds) => {
        const currentSeconds = previousSeconds + 1;

        if (currentSeconds === 60) {
          setMinutes((previousMinutes) => {
            const currentMinutes = previousMinutes + 1;

            if (currentMinutes === 60) {
              setHours((previousHours) => previousHours + 1);
            }

            return currentMinutes % 60;
          });
        }

        return currentSeconds % 60;
      });
    }, TIMER_INTERVAL);
  };

  const onEndTimer = () => {
    setEndDate(new Date());
    setTimerRunning(false);
    setHasEnded(true);
    setGeneratedTitle(moment().format('MMDDYYYY'));

    if (timerTimeOut.current) {
      clearTimeout(timerTimeOut.current);
    }
  };

  const onReset = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setStartDate(null);
    setEndDate(null);
    setTimerRunning(false);
    setHasEnded(false);

    setSaveModalVisible(false);
    setGeneratedTitle('');
    setTitle('');
  };

  const onSave = () => {
    setSaveModalVisible(true);
  };

  const onSaveNow = () => {
    saveNow(createTimeData());
    onReset();
    navigation.navigate('SaveNowScreen');
  };

  const onSaveLater = () => {
    saveLater(createTimeData());
    onReset();
    navigation.navigate('SaveLaterScreen');
  };

  const createTimeData = () => ({
    id: moment().valueOf(),
    title: title.length > 0 ? title : generatedTitle,
    time: { hours, minutes, seconds },
    startDate,
    endDate,
  });

  return (
    <LinearLayout alignItems="center" justifyContent="center" style={styles.container}>
      <LinearLayout orientation="horizontal" alignItems="flex-end">
        <TimeNumber label="HRS" time={hours} main />
        <Text fontWeight="bold" align="center" style={styles.divider}>
          :
        </Text>
        <TimeNumber label="MINUTES" time={minutes} main />
        <TimeNumber time={seconds} />
      </LinearLayout>

      {hasEnded ? (
        <LinearLayout orientation="horizontal">
          <Button text="Reset" onPress={onReset} />
          <Button text="Save" onPress={onSave} />
        </LinearLayout>
      ) : (
        <LinearLayout style={styles.buttonContainer}>
          {isTimerRunning ? (
            <Button text="End" onPress={onEndTimer} />
          ) : (
            <Button text="Start" onPress={onStartTimer} />
          )}
        </LinearLayout>
      )}

      <SaveModal
        isVisible={saveModalVisible}
        inputValue={title}
        inputGeneratedValue={generatedTitle}
        onChangeText={(value) => setTitle(value.trimLeft())}
        onSaveNow={onSaveNow}
        onSaveLater={onSaveLater}
        onClose={() => setSaveModalVisible(false)}
      />
    </LinearLayout>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  saveNow: PropTypes.func.isRequired,
  saveLater: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ saveNow: actions.saveNow, saveLater: actions.saveLater }, dispatch),
});

export default connect(null, mapDispatchToProps)(HomeScreen);
