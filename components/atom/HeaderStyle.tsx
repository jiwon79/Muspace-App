import EStyleSheet from "react-native-extended-stylesheet";

const HeaderStyle = EStyleSheet.create({
  header: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: '#fff'
  },
  icon: {
    transform: [{
      scale: 4/3
    }]
  }
})

export default HeaderStyle