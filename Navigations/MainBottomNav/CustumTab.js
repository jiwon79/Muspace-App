import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import styleGuide from '../../utils/styleGuide';
import MySpaceIcon from '../../assets/icon/MySpace.svg'
import MySpaceIcon_white from '../../assets/icon/MySpace_white.svg'
import SpaceJourney from '../../assets/icon/SpaceJourney.svg'
import SpaceJourney_white from '../../assets/icon/SpaceJourney_white.svg'

function CustumTab({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        
        const isFocused = state.index === index;
        
        const icon = 
          route.name === 'MySpace'
            ? isFocused ? <MySpaceIcon_white/> : <MySpaceIcon/>
            : route.name === 'SpaceJourney'
            ? isFocused ? <SpaceJourney_white/> : <SpaceJourney/>
            :  undefined;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={route.name}
            style={[styles.tabItem, { 
              backgroundColor: isFocused ? EStyleSheet.value('$darkGray') : EStyleSheet.value('$white')
            }]}
          >
            <View style={styles.tabcIon}>
              {icon}
            </View>
            <Text style={[styleGuide.display_08, styles.tabLabel, { color: isFocused ? '#fff' : '#000' }]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  tabItem: {
    flex: 1,
    height: 60,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  tabcIon: {
    marginTop: 9
  },
  tabLabel: {
    marginBottom: 6
  }
})

export default CustumTab