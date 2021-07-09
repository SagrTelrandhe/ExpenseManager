import { tsConstructorType } from '@babel/types';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import googleimage from '../../Assets/Images/google.jpg';
import Icon from 'react-native-easy-icon';


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = { userName: ' ', password: ' ', showPassword: true }
    }

    signIn = () => {
        this.props.navigation.navigate('ExpenseManager')
       
    }

    forgotpassword = () => {
        alert(`Kindly verify with your mobile number.`)
    }

    googleSignIn = () => {
        alert(`Continue with entering your Gmail account details. `)
    }

    registerHere = () => {
        this.props.navigation.navigate('Dashboard')
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'blue', fontSize: 60, fontWeight: 'bold', letterSpacing: -4 }}>Qui</Text>
                    <Text style={{ color: 'blue', fontSize: 60, fontWeight: 'bold', letterSpacing: -4, lineHeight: 60 }}> zio</Text>
                </View>
                <View style={{
                    flex: 2, backgroundColor: 'blue', alignItems: 'center',
                    justifyContent: 'center', backgroundColor: 'white'
                }}>

                    <View style={{ width: '90%', backgroundColor: 'white', color: 'grey' }}>
                        <TextInput
                            onChangeText={(val) => {
                                this.setState({ userName: val })
                            }}
                            placeholder='User name'
                            placeholderTextColor='lightgrey'
                            style={{
                                width: '100%', borderBottomWidth: 2, borderBottomColor: this.state.userName != ' ' ? '#F8A1EC' : 'lightgrey',
                                fontSize: 15, color: 'grey', paddingVertical: 10
                            }} />

                        <View style={{flexDirection:'row', width: '100%', borderBottomWidth: 2, borderBottomColor: this.state.password != ' ' ? '#F8A1EC' : 'lightgrey'}}>
                        <TextInput
                            onChangeText={(pass) => {
                                this.setState({ password: pass })
                            }}
                            secureTextEntry={this.state.showPassword}
                            placeholder='Type Password'
                            placeholderTextColor='lightgrey'
                            style={{
                                // width: '100%', borderBottomWidth: 2, borderBottomColor: this.state.password != ' ' ? '#F8A1EC' : 'lightgrey',
                                fontSize: 15, color: 'grey', paddingVertical: 10, flex:0.9
                            }} />
                            <Icon type="ionicon" name={this.state.showPassword?"eye-off-outline" : "eye-outline"} color="grey" size={21} style={{flex:0.1, alignSelf:'center'}}
                             onPress={()=>{this.setState({showPassword:!this.state.showPassword})}}/>
                        </View>
                        
                           
                    </View>

                    <TouchableOpacity
                        onPress={this.signIn}
                        style={{ width: '90%', height: 60, backgroundColor: '#F8A1EC', borderRadius: 50, marginTop: 30 }}>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold', paddingVertical: 20, letterSpacing: 2 }}>SIGN IN</Text>
                         </TouchableOpacity>

                    <View style={{alignSelf:'flex-start', paddingLeft:18}}>
                        <TouchableOpacity onPress={this.forgotpassword}>
                            <Text style={{ color: 'grey', paddingVertical: 10 }}>forgot password ?</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <TouchableOpacity
                        onPress={this.googleSignIn}>
                        <View style={{ flexDirection: 'row', paddingTop: 40, paddingBottom: 20 }}>
                            <Image source={googleimage} style={{ height: 25, width: 25 }} />
                            <Text style={{ color: 'blue', letterSpacing: 1, textTransform: 'uppercase', fontSize: 12, fontWeight:'bold', paddingVertical:5 }}>    sign in with google</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.registerHere}
                        style={{ width: '120%', backgroundColor: 'blue', height: 100,
                            borderTopStartRadius: 4000, borderTopEndRadius: 4000
                        }}>
                       
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 30 }}>
                            <Text style={{ color: 'white', fontSize: 12 }}>Don't have an account? </Text>
                            <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>Register here</Text>
                           
                         </View>
                    </TouchableOpacity>
                    
                </View>
            </View>
        )
    }
}
export default Login;