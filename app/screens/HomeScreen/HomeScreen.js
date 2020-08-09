import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { AppState, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import backgroundImage from '../../assets/images/background.jpg';
import { Button, Container, LinearLayout, Text } from '../../components/elements';
import { MainHeader } from '../../components/Header/MainHeader';
import { actions } from '../../ducks/time';
import { TIMER_INTERVAL } from '../../globals/variables';
import { SaveModal } from './components/SaveModal';
import { TimeNumber } from './components/TimeNumber';
import { styles } from './styles';

const HomeScreen = ({ saveTime, navigation }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setTimerRunning] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const [isPaused, setPause] = useState(false);

  // Modal
  const [saveModalVisible, setSaveModalVisible] = useState(false);
  const [generatedTitle, setGeneratedTitle] = useState('');
  const [title, setTitle] = useState('');

  // Ref
  const timerTimeOut = useRef(null);
  const TimerRef = useRef(null);
  const appState = useRef(AppState.currentState);
  const startDate = useRef(null);
  const endDate = useRef(null);

  // App state listener
  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, [isTimerRunning, startDate]);

  const handleAppStateChange = (nextAppState) => {
    if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
      onAppForeground();
    }

    appState.current = nextAppState;
  };

  // On Focus
  const onAppForeground = () => {
    if (isTimerRunning && startDate.current) {
      // Pause for a while
      setPause(true);

      // Calculate time difference
      let diffSeconds = (new Date().getTime() - startDate.current.getTime()) / 1000; // Total seconds
      const diffHours = diffSeconds / 3600; // Hours
      diffSeconds %= 3600;
      const diffMinutes = diffSeconds / 60; // Minutes
      diffSeconds %= 60;

      setHours(Math.floor(diffHours));
      setMinutes(Math.floor(diffMinutes));
      setSeconds(Math.floor(diffSeconds));

      // Continue timer
      setPause(false);
    }
  };

  const onStartTimer = () => {
    setTimerRunning(true);
    startDate.current = new Date();

    // eslint-disable-next-line no-unused-expressions
    TimerRef?.current?.bounce();

    timerTimeOut.current = setInterval(() => {
      if (!isPaused) {
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
      }
    }, TIMER_INTERVAL);
  };

  const onStopTimer = () => {
    clearTimeout(timerTimeOut.current);
    setTimerRunning(false);
    setHasEnded(true);
    endDate.current = new Date();
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
    startDate.current = null;
    endDate.current = null;
    setTimerRunning(false);
    setHasEnded(false);

    setSaveModalVisible(false);
    setGeneratedTitle('');
    setTitle('');
  };

  const onSave = () => {
    setSaveModalVisible(true);
  };

  const onSaveSubmit = () => {
    saveTime(createTimeData());
    onReset();
    navigation.navigate('SaveScreen');
  };

  const createTimeData = () => ({
    id: moment().valueOf().toString(),
    title: title?.length ? title : generatedTitle,
    time: { hours, minutes, seconds },
    startDate: startDate.current,
    endDate: endDate.current,
  });

  return (
    <Container style={{ flex: 1 }}>
      <ImageBackground source={backgroundImage} style={styles.container}>
        <MainHeader />

        <LinearLayout alignItems="center" style={styles.mainContainer}>
          <Animatable.View ref={TimerRef}>
            <LinearLayout
              orientation="horizontal"
              alignItems="flex-end"
              style={styles.timerContainer}
            >
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
        </LinearLayout>

        <SaveModal
          isVisible={saveModalVisible}
          inputValue={title}
          inputGeneratedValue={generatedTitle}
          onChangeText={(value) => setTitle(value.trimLeft())}
          onSave={onSaveSubmit}
          onClose={() => setSaveModalVisible(false)}
        />
      </ImageBackground>
    </Container>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  saveTime: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ saveTime: actions.saveTime }, dispatch),
});

export default connect(null, mapDispatchToProps)(HomeScreen);
