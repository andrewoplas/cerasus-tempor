import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { TouchableHighlight } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { RFValue } from 'react-native-responsive-fontsize';
import AntdIcon from 'react-native-vector-icons/AntDesign';
import { LinearLayout, Text } from '../elements';
import { Sidebar } from './Sidebar';

const styles = EStyleSheet.create({
  container: {
    marginTop: 25,
    marginBottom: 25,
    width: '100%',
    paddingHorizontal: '$paddingHorizontal',
  },

  containerHomeScreen: {
    position: 'absolute',
    top: 0,
  },

  icon: {
    fontSize: RFValue(20),
    color: '#fff',
  },

  title: {
    fontSize: RFValue(22),
    color: '#fff',
  },
});

export const MainHeader = () => {
  const [sidebarModalVisibility, setSidebarModalVisibility] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <LinearLayout
      orientation="horizontal"
      alignItems="center"
      justifyContent="space-between"
      style={[styles.container, styles.containerHomeScreen]}
    >
      <Text align="center" fontWeight="bold" style={styles.title}>
        Cerasus Tempor
      </Text>

      <TouchableHighlight
        underlayColor="transparent"
        onPress={() => setSidebarModalVisibility(true)}
      >
        <AntdIcon name="menu-unfold" style={[styles.icon]} />
      </TouchableHighlight>

      <Sidebar
        isVisible={sidebarModalVisibility}
        onItemPress={(screen) => {
          navigation.navigate(screen);
          setSidebarModalVisibility(false);
        }}
        currentScreen={route?.name}
        onClose={() => setSidebarModalVisibility(false)}
      />
    </LinearLayout>
  );
};
