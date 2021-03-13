import * as React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
  Alert,
} from "react-native";
import db from "../config";
import firebase from "firebase";

export default class LoginSignUpScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  userLogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        return Alert.alert("User logged in sucessfully");
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };

  userSignUp = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        return Alert.alert("User added sucessfully");
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };

  render() {
    return (
      <View>
        <KeyboardAvoidingView>
        <TextInput
          style={styles.loginBox}
          placeholder={"abc@example.com"}
          keyboardType={"email-address"}
          onChangeText={(txt) => {
            this.setState({
              email: txt,
            });
          }}
        />

        <TextInput
          style={styles.loginBox}
          placeholder={"Enter password"}
          secureTextEntry={true}
          onChangeText={(txt) => {
            this.setState({
              password: txt,
            });
          }}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.userLogin(this.state.email, this.state.password);
          }}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.userSignUp(this.state.email, this.state.password);
          }}
        >
          <Text style={styles.buttonText}>SignUp</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginBox: {
    width: 300,
    height: 40,
    borderWidth: 1.5,
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    width: 150,
    height: 50,
    margin: 10,
    alignSelf: "center",
  },
})
