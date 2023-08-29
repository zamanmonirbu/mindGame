import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Card from "../component/Card";
import Color from "../constant/Color";
import Input from "../component/Input";
import NumberContainer from "../component/NumberContainer";

const StartGameScreen = (props) => {
  const [enterValue, setEnterValue] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [selectNumber, setSelectNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEnterValue(inputText.replace(/[^0-9]/g, ""));
  };
  const restHandler = () => {
    setEnterValue("");
    setConfirm(false);
  };
  const confirmHandler = () => {
    const choseNumber = parseInt(enterValue);
    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert("Invite Input", "Please Select another Number", [
        { text: "Okay", style: "destructive", onPress:restHandler },
      ]);
      return;
    }

    setConfirm(true);
    setSelectNumber(choseNumber);
    setEnterValue("");
    Keyboard.dismiss()
  };

  let confirmOutput;
  if (confirm) {
    confirmOutput = (
      <Card style={styles.summaryContainer}>
        <Text>Chosen number: </Text>
        <NumberContainer>{selectNumber}</NumberContainer>
        <Button title="START GAME" onPress={()=>props.onStartGame({selectNumber})} />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start A New Game</Text>
        <Card>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enterValue}
          />
          <View style={styles.buttonContainer}>
            <Button title="Reset" onPress={restHandler} color={Color.accent} />
            <Button
              title="Confirm"
              onPress={confirmHandler}
              color={Color.primary}
            />
          </View>
        </Card>
        {confirmOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  inputContainer: {
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 30,
    backgroundColor: "white",
    padding: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginLeft:'25%'
  },
  input: {
    width: 50,
    marginLeft:'55%'
  },
  summaryContainer: {
    marginTop: 10,
    alignItems: "center",
  },
});

export default StartGameScreen;
