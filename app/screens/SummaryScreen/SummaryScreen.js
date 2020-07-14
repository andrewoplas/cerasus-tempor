import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import secondsImage from '../../assets/images/bermuda-no-comments.png';
import minutesImage from '../../assets/images/bermuda-no-message.png';
import hoursImage from '../../assets/images/bermuda-page-under-construction.png';
import { Container, LinearLayout, Text } from '../../components/elements';
import { Header } from '../../components/Header/Header';
import { selectors } from '../../ducks/time';
import { styles } from './styles';

const SummaryScreen = ({ times }) => {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [totalHours, setTotalHours] = useState(0);

  useEffect(() => {
    let seconds = 0;

    times.forEach(({ time }) => {
      seconds += (time?.hours || 0) * 3600;
      seconds += (time?.minutes || 0) * 60;
      seconds += time?.seconds || 0;
    });

    setTotalSeconds(seconds);
    setTotalMinutes(seconds / 60);
    setTotalHours(seconds / 3600);
  }, [times]);

  return (
    <Container styleBackground={{ backgroundColor: EStyleSheet.value('$themeDarkBlue') }}>
      <Header title="Summary" />
      <ScrollView>
        <LinearLayout style={styles.container}>
          <Text fontWeight="bold" style={styles.header}>
            Since using this app...
          </Text>

          <LinearLayout orientation="horizontal" alignItems="center" style={styles.itemContainer}>
            <Image source={secondsImage} style={[styles.itemImage, styles.itemImageLeft]} />
            <LinearLayout style={{ flexShrink: 1 }}>
              <Text fontWeight="bold" style={styles.itemHeader}>
                WASTED SECONDS
              </Text>

              <Text style={styles.itemDescription}>
                {totalSeconds.toFixed(2)} seconds of your life has been wasted.
              </Text>
            </LinearLayout>
          </LinearLayout>

          <LinearLayout orientation="horizontal" alignItems="center" style={styles.itemContainer}>
            <LinearLayout style={{ flexShrink: 1 }}>
              <Text fontWeight="bold" style={styles.itemHeader}>
                WASTED MINUTES
              </Text>

              <Text style={styles.itemDescription}>
                {totalMinutes.toFixed(2)} minutes of your life has been wasted.
              </Text>
            </LinearLayout>
            <Image source={minutesImage} style={[styles.itemImage, styles.itemImageRight]} />
          </LinearLayout>

          <LinearLayout orientation="horizontal" alignItems="center" style={styles.itemContainer}>
            <Image source={hoursImage} style={[styles.itemImage, styles.itemImageLeft]} />
            <LinearLayout style={{ flexShrink: 1 }}>
              <Text fontWeight="bold" style={styles.itemHeader}>
                WASTED HOURS
              </Text>

              <Text style={styles.itemDescription}>
                {totalHours.toFixed(2)} hours of your life has been wasted.
              </Text>
            </LinearLayout>
          </LinearLayout>
        </LinearLayout>
      </ScrollView>
    </Container>
  );
};

SummaryScreen.propTypes = {
  times: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  times: selectors.selectTimes(),
});

export default connect(mapStateToProps, null)(SummaryScreen);
