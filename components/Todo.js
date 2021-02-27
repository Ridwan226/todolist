import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Todo = (props) => {
  return (
    <View style={styles.content}>
      <Text>{props.item}</Text>
      <Button
        title="Del"
        color={"red"}
        onPress={() => props.delete(props.item)}
      />
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "whitesmoke",
    margin: 8,
    padding: 8,
  },
});
