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
    
  }

  const addItem = () => {
    if (text !== "") {
    setList((currentList => [...currentList, {id: Math.random(), value: text},
    ]));
    setText("");
    
  }
};


  const onHandlerDelete = (id) => {
    setList((currentList) => currentList.filter((item) => item.id !== id));
    setItemSelected({});
    setModalVisible(!modalVisible);
  }

  const onHandlerModal = (id) => {
    setItemSelected(list.filter((item) => item.id !== id)[0]);
    setModalVisible(!modalVisible);
  }

  const renderItem = ({item}) => (
    <View style={styles.containerItemList}
    key={item.id}>
      <Text style={styles.itemList}>{item.value}</Text>
      <TouchableOpacity style={styles.buttonDelete} onPress={(item) => onHandlerModal(item.id)}>
        <Text style={styles.buttonDeleteText}>X</Text>
      </TouchableOpacity>
    </View>
    );
  
    const keyExtractor = (item) => item.id.toString();



  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          placeholder="New Task"
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

        <View style={styles.modalContent}>
            <View style={styles.modalTitleContainer}>
              <Text style={styles.modalTitle}>Delete item</Text>
              <TouchableOpacity 
              style={styles.buttonDelete} 
              onPress={() => setModalVisible(!modalVisible)}>
                <Text>X</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.modalText}>Are you sure?</Text>
            <Text style={styles.modalMessage}>{itemSelected.value}</Text>  
            <Button 
            title="OK" 
            onPress={() => onHandlerDelete(itemSelected.id)} color="#6B4E71">
            </Button>
        </View>
      </Modal>
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
