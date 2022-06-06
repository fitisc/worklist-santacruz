import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    marginHorizontal: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#6B4E71",
    flex: 0.85,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
    marginHorizontal: 20,

  },

  menu: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 85,
    borderRadius: 10,
    marginVertical: 30,
    marginHorizontal: 20,
    padding: 60,
    
    backgroundColor: "#c5c1c5",
    borderRadius: 15,
    
  },
  buttonsItems: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderLineColor: "#1b1a1b",
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 30,
    backgroundColor: "#926892",
    
  },
  menuText: {
    fontSize: 20,
  },
  itemList: {
   fontSize: 14,
    color: "#6B4E71",

  },
  containerList: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
   
  },
  containerItemList: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 20,
  },

  buttonDelete:{
    backgroundColor: "#926892",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonDeleteText:{
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  modalContent: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",

  },
  modalTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6B4E71",
    marginHorizontal: 20,
    marginVertical: 10,

  },
  modalText: {
    fontSize: 20,
    color: "#6B4E71",
    marginHorizontal: 20,
    marginVertical: 10,
    
  },
  modalMessage: {
    fontSize: 20,
    color: "#6B4E71",
    marginHorizontal: 20,
    fontWeight: "bold",
  },
  

});