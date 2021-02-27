import React, { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Todo from "./Todo";

const Todolist = () => {
  const [title, setTitle] = useState("TodoList");
  const [text, setText] = useState("");
  const [list, setList] = useState(["Hello Word"]);

  const addItems = () => {
    const upDatedList = list;
    upDatedList.push(text);
    setList(upDatedList);
    setText("");
  };

  return (
    <View style={styles.content}>
      <Text style={styles.text}>{title}</Text>
      <ScrollView>
        {list.map((x, index) => (
          <Todo key={index} item={x} index={index} />
        ))}
      </ScrollView>
      <View>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Button title="Add Item" onPress={addItems} />
      </View>
    </View>
  );
};

export default Todolist;

const styles = StyleSheet.create({
  content: {
    width: "90%",
    marginBottom: 20,
  },
  text: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    padding: 8,
    marginBottom: 8,
  },
});
