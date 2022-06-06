import {styleSheet} from "react-native" ;

export const styles = styleSheet.create({
    containerItemList: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
        marginHorizontal: 20,
      },
      itemList: {
        fontSize: 14,
         color: "#6B4E71",
     
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
    });