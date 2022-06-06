import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import {styles} from './styles';

const ListItem = ({item, onPress }) => {
    return (
        <View style={styles.containerItemList}
        key={item.id}>
          <Text style={styles.itemList}>{item.value}</Text>
          <TouchableOpacity style={styles.buttonDelete} 
          onPress={() => onPress(item.id)}>
            <Text style={styles.buttonDeleteText}>X</Text>
          </TouchableOpacity>
        </View>
    )
}

export default ListItem;