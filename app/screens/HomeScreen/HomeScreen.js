import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import backgroundImage from '../../assets/images/background.png';
import { Button, Container, LinearLayout, Text } from '../../components/elements';
import { actions } from '../../ducks/time';
import { TIMER_INTERVAL } from '../../globals/variables';
import { SaveModal } from './components/SaveModal';
import { TimeNumber } from './components/TimeNumber';
import { styles } from './styles';
import { Header } from '../../components/Header/Header';

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

  // Ref
  const timerTimeOut = useRef(null);
  const TimerRef = useRef(null);

  const onStartTimer = () => {
    setTimerRunning(true);
    setStartDate(new Date());

    // eslint-disable-next-line no-unused-expressions
    TimerRef?.current?.bounce();

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

  const onStopTimer = () => {
    clearTimeout(timerTimeOut.current);
    setTimerRunning(false);
    setHasEnded(true);
    setEndDate(new Date());
    setGeneratedTitle(moment().format('MMDDYYYY'));

    // eslint-disable-next-line no-unused-expressions
    TimerRef?.current?.flash().then(() => {
      setTimerRunning(false);
      setHasEnded(true);
    });
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
    id: moment().valueOf().toString(),
    title: title.length > 0 ? title : generatedTitle,
    time: { hours, minutes, seconds },
    startDate,
    endDate,
  });

  return (
    <Container style={{ flex: 1 }}>
      <ImageBackground source={backgroundImage} style={styles.container}>
        <Header title="" homeScreen />

        <Animatable.View ref={TimerRef}>
          <LinearLayout orientation="horizontal" alignItems="flex-end">
            <TimeNumber label="HOURS" time={hours} main />
            <Text fontWeight="bold" align="center" style={styles.divider}>
              :
            </Text>
            <TimeNumber label="MINUTES" time={minutes} main />
            <TimeNumber time={seconds} />
          </LinearLayout>
        </Animatable.View>

        {hasEnded ? (
          <LinearLayout orientation="horizontal" style={styles.buttonContainer}>
            <Button
              text="Reset"
              onPress={onReset}
              touchableStyle={[styles.buttons, styles.buttonSpacing]}
            />
            <Button text="Save" onPress={onSave} touchableStyle={styles.buttons} />
          </LinearLayout>
        ) : (
          <LinearLayout style={styles.buttonContainer}>
            {isTimerRunning ? (
              <Button text="Stop" onPress={onStopTimer} />
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
      </ImageBackground>
    </Container>
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
