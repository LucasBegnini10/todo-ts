import React, {useState} from "react";
import {View, Text, Image, StyleSheet, Alert} from "react-native";

import logo from "../../assets/logo.png"

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';


import { fontResize } from "../utils/fontResize";
import { heightPercentageToDP, widthPercentageToDP } from "../utils/percentageToPx";
import colors from "../config/colors";

import { NavigationProp } from "@react-navigation/native";

//COMPONENTS
import Background from "../components/Common/Background";
import Input from "../components/Common/Input";
import Button from "../components/Common/Button";
import Loading from "../components/Common/Loading/index"

//CONTROLLER
import FormController from "../controller/form";

//CONTEXT
import {UserContext} from "../context/userContext"
import {UserContextType} from "../types/userType"

interface Props {
    navigation: NavigationProp<any, any>
  }

const SignUpScreen: React.FC<Props> = ({navigation}) => {
 
  const {addUser} = React.useContext(UserContext) as UserContextType

    const[name, setName] = useState<string>("");
    const[email, setEmail] = useState<string>("");
    const[password, setPassword] = useState<string>("");
    const[seePassword, setSeePassword] = useState<boolean>(false);

    const[emailInvalid, setEmailInvalid] = useState<boolean>(false)
    const[loading, setLoading] = useState<boolean>(false)

    const controllerSignUp = () => {
      const formController = new FormController(email, password, 'signUp', name)

      const fieldsValid = formController.validateFields();
      if(!fieldsValid){
        return Alert.alert("Alerta", "Preencha todos os campos!")
      }

      const emailIsValid = formController.validateEmail();

      if(!emailIsValid) {
        return setEmailInvalid(true)
      }else{
        setEmailInvalid(false)
      }

      setLoading(true)
      
      setTimeout(() => {
        addNewUser()
      }, 2000)
    }

    const addNewUser= () => {
      addUser({
        id: uuidv4(),
        email,
        name,
      })
      setLoading(false)
      navigation.navigate("Login", {password})
    }
    
    return (
        <Background>
              <View style={styles.formView}>
        <View style={styles.logoView}>
          <Image source={logo} style={styles.logo}/>
        </View>
        <View style={styles.inputView}>
            <Input 
                color={colors.tertiary}
                label="Nome"
                onChange={(name: string) => setName(name)}
                value={name}
                style={styles.input}

            />
          <Input 
            label="Email" 
            style={styles.input} 
            onChange={(email: string) => setEmail(email)} 
            color={colors.tertiary}
            value={email}
            error={emailInvalid}
            />
          <Input 
            label="Senha" 
            style={styles.input} 
            onChange={(password: string) => setPassword(password)} 
            color={colors.tertiary}
            value={password}
            secury={!seePassword}
            right={{
              icon: seePassword ? "eye" : "eye-off",
              action: () => setSeePassword(!seePassword)
            }}
            />
        </View>
        <View style={styles.buttonView}>
          {!loading && <Button style={{button: styles.button, title: styles.titleButton}} onClick={controllerSignUp} title="Cadastrar"/>}
          {loading && <Loading />}
        </View>
        <View style={styles.signUpView}>
          <Text style={styles.linkSignUp}>Já possui conta? </Text>
          <Text 
            style={{...styles.linkSignUp, color: colors.primary}} 
            onPress={() => navigation.navigate("Login")}>
              Faça Login
          </Text>
        </View>
      </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    formView: {
      width: widthPercentageToDP("100%"),
      height: heightPercentageToDP("75%"),
      flexDirection: "column",
      justifyContent: 'space-around',
      alignItems: 'center',

    },
    logoView: {
      width: "100%",
      height: "30%",
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      width: widthPercentageToDP("40%"),
      height: heightPercentageToDP("20%")
    },
    title: {
      fontSize: fontResize(24),
      color: colors.primary,
      fontWeight: "bold"
    },
    inputView: {
      width: "100%",
      height: "40%",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: 'center',

    },
    input: {
      width: "80%",
      height: heightPercentageToDP("8%"),
      backgroundColor: "transparent",
      fontSize: fontResize(16),
    },
    forgotPasswordView: {
      width: "80%",
      height: "20%",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: 'flex-start',
    },
    forgotPasswordText: {
      color: colors.tertiary,
      fontSize: fontResize(14)
    },
    buttonView: {
      width: "80%",
      height: "10%",
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      width: "100%",
      height: "100%",
      borderRadius: 10,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center'
    },
    titleButton: {
      fontSize: fontResize(24),
      color: colors.tertiary
    },
    signUpView: {
      width: "100%",
      height: "6%",
      flexDirection: "row",
      justifyContent: 'center',
      alignItems: "center"
    },
    linkSignUp: {
      fontSize: fontResize(16),
      fontWeight: "600",
      color: colors.tertiary
    }

})

export default SignUpScreen;