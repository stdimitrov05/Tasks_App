import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Button,
  Linking,
  Platform
} from "react-native";
import Task from "./components/Taks";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.tasksWrapper}>
          <View>
            <TouchableOpacity
              style={styles.gitHub}
              onPress={() => Linking.openURL("https://github.com/stdimitrov05")}
              underlayColor="#fff"
            >
              <Text style={styles.githubText}> 💬 GitHub: St_d05 </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.Instagram}
              onPress={() =>
                Linking.openURL("https://www.instagram.com/st_d05/")
              }
              underlayColor="#fff"
            >
              <Text style={styles.instagramText}>Instagram: St_d05</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.sectionTitle}>Today's tasks</Text>
          <Text style={styles.creator}>Creator St_d05</Text>
          <View style={styles.items}>
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completeTask(index)}
                >
                  <Task text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  gitHub: {
    left: -140,
    position: "absolute",
    margin:5,
    marginLeft: 130,
    marginRight: 90,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  githubText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  Instagram: {
    left: 100,
    margin: 5,
    marginLeft: 130,
    marginRight: 90,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  instagramText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  creator: {
    textAlign: "center",
    color: "#FAFAFA",
  },
  container: {
    flex: 1,
    backgroundColor: "#ff4d4d",
  },
  tasksWrapper: {
    paddingTop: 25,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Arial",
    fontWeight: "bold",
    color: "#FAFAFA",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
});
