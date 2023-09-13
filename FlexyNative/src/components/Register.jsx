import React from "react";
import { Formik, useField } from "formik";
import { Button, StyleSheet, View } from "react-native";
import StyledTextInput from "./StyledTextInput";

const initialValues = {
  email: "",
  password: "",
};

const styles = StyleSheet.create({
  form: {
    margin: 12,
  },
});

// field es la info del campo (el valor del campo)
// meta es la meta-informacion del campo (validaciones, errores del campo)
// helpers permite actualizar los campos (setValues)
const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  return <StyledTextInput value={field.value} onChangeText={(value) => helpers.setValue(value)} {...props} />;
};

export default function Register() {
  return (
    <Formik initialValues={initialValues} onSubmit={(values) => console.log(values)}>
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue name='email' placeholder='E-mail' />
            <FormikInputValue name='password' placeholder='Password' secureTextEntry />
            <Button onPress={handleSubmit} title="Registrate" />
          </View>
        );
      }}
    </Formik>
  );
}
