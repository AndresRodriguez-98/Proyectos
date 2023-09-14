import React from "react";
import { Formik, useField } from "formik";
import { Button, Image, Pressable, StyleSheet, Text, View, ViewComponent } from "react-native";
import StyledTextInput from "./StyledTextInput";
import FlexyImage from "../../assets/flexy.png";
import { StackNavigationState } from "@react-navigation/native";

const initialValues = {
  email: "",
  password: "",
};

const styles = StyleSheet.create({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: 12,
    gap: 1.5,
  },
  text_one: {
    fontSize: 12.4,
    color: "#6C727F",
    textAlign: "center",
    marginTop: -1,
  },
  text_two: {
    color: "#7065F0",
    textAlign: "center",
    fontWeight: 500,
    fontSize: 16,
  },
  registerButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 48,
    backgroundColor: "#7065F0",
    borderRadius: 8,
  },
  text_register: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  title: {
    textAlign: "center",
    color: "#545F71",
    fontSize: 36,
    lineHeight: 40,
    fontWeight: 700,
  },
  subtitle: {
    textAlign: "center",
    color: "#000929",
    fontWeight: 500,
    opacity: 0.5,
    marginTop: 8,
    marginBottom: 16,
  },
  logo: {
    display: "flex",
    justifyContent: "flex-end",
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
            <Text style={styles.title}>¡Bienvenido!</Text>
            <Text style={styles.subtitle}>Convertite ahora en un agente Flexy.</Text>
            <FormikInputValue name="nombre" placeholder="Nombre y Apellido" />
            <FormikInputValue name="phone" placeholder="+54 01 0200 000" />
            <FormikInputValue name="email" placeholder="hola@tuemail.com" />
            <FormikInputValue name="password" placeholder="Ingresá tu contraseña" secureTextEntry />
            <Text style={styles.text_one}>Debe tener al menos 8 caracteres.</Text>
            <Text style={styles.text_two}>¿Olvidaste tu contraseña?</Text>

            <Pressable style={styles.registerButton} onPress={handleSubmit}>
              <Text style={styles.text_register}>Registrate</Text>
            </Pressable>
          </View>
        );
      }}
    </Formik>
  );
}
