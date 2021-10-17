import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from 'react-native';

EStyleSheet.build({
  $screenWidth: Dimensions.get('window').width,
  $primary_Main: '#170E30',
  $primary_02: '#321E6A',
  $primary_03: '#4C2BA9',
  $primary_04: '#673BE7',
  $primary_05: '#161A4B',
  $sub: '#525C90',
  $sub2: '#1E243D',

  $white: '#ffffff',
  $grayscale_01: '#F2F2F2',
  $grayscale_02: '#E3E3E3',
  $grayscale_03: '#CFCFCF',
  $black: '#000000',

  $secondary_Secondary: '#FC6F23',
  $secondary_02: '#FF9155',
  $secondary_03: '#FFB188',
  $secondary_04: '#FFCFB6'
})

const styleGuide = EStyleSheet.create({
  display_01: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 40,
    lineHeight: 52,
    letterSpacing: -0.6
  },
  display_02: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 36,
    lineHeight: 46,
    letterSpacing: -0.6
  },
  display_03: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 36,
    lineHeight: 46,
    letterSpacing: -0.6
  },
  display_04: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 24,
    lineHeight: 34,
    letterSpacing: -0.6
  },
  display_05: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: -0.6
  },
  display_06: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -0.6
  },
  display_07: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.6
  },
  display_08: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: -0.6
  },

  text_1: {
    fontFamily: 'NotoSansKR',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.6
  },
  text_02: {
    fontFamily: 'NotoSansKR',
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: -0.6
  },
  text_03: {
    fontFamily: 'NotoSansKR',
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: -0.6
  },
  font_light: {
    fontFamily: 'NotoSansKR-Light'
  },
})

export default styleGuide