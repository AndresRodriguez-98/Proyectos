import React from "react";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    display: "flex",
    justifyContent: "space-between",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#999",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: "#F7F7FD",
    color: "gray",
  },
});

const StyledTextInput = ({ style = {}, ...props }) => {
  const inputStyle = {
    ...styles.textInput,
    ...style,
  };

  return <TextInput style={inputStyle} {...props} />;
};

export default StyledTextInput;
