import React, {useState} from "react";
import {View, Text, StyleSheet, Image, Alert} from "react-native";

//CONFIG
import colors from "../config/colors"

//UTILS
import { fontResize } from "../utils/fontResize";
import {heightPercentageToDP, widthPercentageToDP} from "../utils/percentageToPx"

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

//COMPONENTS
import Background from "../components/Common/Background";
import Input from "../components/Common/Input";
import Button from "../components/Common/Button";
import Loading from "../components/Common/Loading";

//NAVIGATION
import {NavigationProp} from "@react-navigation/native"

//ASSETS
import logo from "../../assets/logo.png"

//CONTROLLER
import FormController from "../controller/form"

//TYPES
import FakeReturn from "../types/fakeReturn"
import { UserContextType } from "../types/userType";

import {UserContext} from "../context/userContext"


type Props = {
  navigation: NavigationProp<any, any>
  route: {
    key: string,
    name: string,
    params?: object
  }
}


const LoginScreen: React.FC<Props | any> = ({route, navigation}) => {

  const {user} = React.useContext(UserContext) as UserContextType

  const[email, setEmail] = useState<string>("test@test.com");
  const[password, setPassword] = useState<string>("123");

  const[emailInvalid, setEmailInvalid] = useState<boolean>(false)
  const[seePassword, setSeePassword] = useState<boolean>(false)

  const[loading, setLoading] = useState<boolean>(false)

  React.useEffect(() => {
    if(user.email && user.id && user.name){
      setEmail(user.email)
    }
  }, [user])

  React.useEffect(() => {
    if(route?.params?.password){
      setPassword(route.params.password)
    }
  }, [route])

  const controllerLogin = () => {
    const formController = new FormController(email, password, 'login');

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
      navigation.navigate("TodoList")
      setLoading(false)
    }, 2000)
    
  }
  return (
    <Background>
      <View style={styles.formView}>
        <View style={styles.logoView}>
          <Image source={logo} style={styles.logo}/>
        </View>
        <View style={styles.inputView}>
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
          <View style={styles.forgotPasswordView}>
            <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
          </View>
        </View>
        <View style={styles.buttonView}>
            {!loading && <Button style={{button: styles.button, title: styles.titleButton}} title="Login" onClick={controllerLogin}/>}
            {loading && <Loading />}
        </View>
        <View style={styles.signUpView}>
          <Text style={styles.linkSignUp}>Não possue conta? </Text>
          <Text 
            style={{...styles.linkSignUp, color: colors.primary}} 
            onPress={() => navigation.navigate("SignUp")}>
              Cadastre-se
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
      height: "35%",
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
      height: "35%",
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

export default LoginScreen;