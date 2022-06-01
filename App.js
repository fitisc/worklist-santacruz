import React, {useState} from 'react';
import { View, TextInput, Button, Text, TouchableOpacity, FlatList, Modal } from "react-native";
import { TouchableHighlight } from "react-native";
import { styles } from "./styles";

export default function App() {
  const [text, setText] = useState("");	
  const [list, setList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleOnChangeText= (text) => {
    setText(text);
    //console.log(text);
  }

  const addItem = () => {
    if (text !== "") {
    setList((currentList => [...currentList, {id: Math.random(), value: text},
    ]));
    setText("");
    console.log(list);
  }
};


  const onHandleDelete = (id) => {
    setList((currentList) => currentList.filter((item) => item.id !== id));
    setItemSelected({});
    setModalVisible(!modalVisible);
  }

  const onHandleModal = (id) => {
    setItemSelected(list, filter((item) => item.id !== id));
    setModalVisible(!modalVisible);
  }

  const renderItem = ({item}) => (
    <View  style={styles.containerItemList}
    key={item.id}>
      <Text style={styles.itemList}>{item.value}</Text>
      <TouchableOpacity style={styles.buttonDeleteText} onPress={(item) => onHandleModal(item.id)}>
        <Text style={styles.buttonDeleteText}>X</Text>
      </TouchableOpacity>
    </View>
    );
  
    const keyExtractor = (item) => item.id.toString();



  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          placeholder="escribe tu nombre"
          style={styles.input}
          placeholderTextColor="#6B4E71"
          value={text}
          onChangeText={(text) => handleOnChangeText(text)}
        />
        <Button title="ADD" onPress={() => addItem()} color="#6B4E71" />
      </View>
      <View style={styles.header}>
      <FlatList
          data={list}
          renderItem={ renderItem }
          keyExtractor={keyExtractor}
          style={styles.containerList} />
      <Modal
        animationType="slide"
       
        visible={modalVisible}
        onRequestClose={() => null}>
          <TouchableOpacity style={styles.modalContent} onPress={() => setModalVisible(!modalVisible)}>
            <View style={styles.modalTitleContainer}>
              <Text style={styles.modalTitle}>Delete item</Text>
            </View>
            <Text style={styles.modalText}>Are you sure you want to delete this item?</Text>
            <Text style={styles.modalText}>{itemSelected.value}</Text>
            <Button 
            title="OK" 
            onPress={() => onHandleDelete(itemSelected.id)} color="#6B4E71">
            </Button>
            </TouchableOpacity>
        </Modal>
      </View>
  

      <View style={styles.header}>
        <TextInput
          placeholder="item 1"
          style={styles.headerInput}
          placeholderTextColor="#6B4E71"
        />
        <Button title="+" onPress={() => null} color="#6B4E71" />
      </View>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.buttonsItems} onPress={() => null}>
        <Text style={styles.menuText}>Tarea</Text>
        </TouchableOpacity>
        <TouchableHighlight style={styles.buttonsItems} onPress={() => null}>
        <Text style={styles.menuText}>Tarea</Text>
        </TouchableHighlight>
        <TouchableOpacity style={styles.buttonsItems} onPress={() => null}>
        <Text style={styles.menuText}>Tarea</Text>
        </TouchableOpacity>
      </View>   
    </View>
  );
}
