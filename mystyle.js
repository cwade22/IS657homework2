import {Platform, StatusBar, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection:"column",
    backgroundColor: "#CBE1F5",
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    borderWidth: 10,
    borderStyle: "solid",
    borderColor: "#000000",
  
  },

  column: {
    width: 250,
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderStyle: "solid",
    borderWidth: 5,
    borderColor: "#000000",
    backgroundColor: "#DADBDB",
  },
  innerbox: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#000000",
    backgroundColor: "#BFBFBF"
  },
  row: {
    width: 400,
    height: 250,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderStyle: "solid",
    borderWidth: 5,
    borderColor: "#000000",
    backgroundColor: "#DADBDB",
  },
});