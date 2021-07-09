import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import googleimage from '../../Assets/Images/google.jpg';
import Icon from 'react-native-easy-icon';
import CheckBox from '@react-native-community/checkbox';


export class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = { yourName: ' ', email: ' ', password: ' ', showpassword: true, repassword: ' ', showrepassword: true, check: false }
  }
  termsConditions = () => {
    alert(`Plz read the terms and conditions, carefully!`)
  }
  register = () => {
    alert(`Your Name:${this.state.yourName}, Email:${this.state.email}`)
  }
  registerwithgoogle = () => {
    alert(`Your details will be fetched from your gmail account.`)
  }
  signin = () => {
    this.props.navigation.navigate('Login')
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flex: 1, backgroundColor: "white", justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'grey', fontSize: 25, fontFamily: 'sans-serif', fontWeight: 'bold' }}>Create New Account</Text>
        </View>
        <View style={{ flex: 3, backgroundColor: "white", alignItems: 'center' }}>

          <TextInput onChangeText={(nam) => {
            this.setState({ yourName: nam })
          }}
            placeholder='Your name'
            placeholderTextColor='lightgrey'
            style={{
              width: '80%', borderBottomWidth: 2, borderBottomColor: this.state.yourName != ' ' ? '#F8A1EC' : 'lightgrey',
              fontSize: 15, color: 'grey', paddingVertical: 10
            }} />

          <TextInput onChangeText={(mail) => {
            this.setState({ email: mail })
          }}
            placeholder='Your email'
            placeholderTextColor='lightgrey'
            style={{
              width: '80%', borderBottomWidth: 2, borderBottomColor: this.state.email != ' ' ? '#F8A1EC' : 'lightgrey',
              fontSize: 15, color: 'grey', paddingVertical: 10
            }} />

          <View style={{ flexDirection: 'row', width: '80%', borderBottomWidth: 2, borderBottomColor: this.state.password != ' ' ? '#F8A1EC' : 'lightgrey' }}>
            <TextInput onChangeText={(pass) => {
              this.setState({ password: pass })
            }}
              secureTextEntry={this.state.showpassword}
              placeholder='Enter password'
              placeholderTextColor='lightgrey'
              style={{
                // width: '100%', borderBottomWidth: 2, borderBottomColor: this.state.password != ' ' ? '#F8A1EC' : 'lightgrey',
                fontSize: 15, color: 'grey', paddingVertical: 10, flex: 0.9
              }} />

            <Icon type="ionicon" name={this.state.showpassword ? "eye-outline" : "eye-off-outline"} color="grey" size={21} onPress={
              () => {
                this.setState({ showpassword: !this.state.showpassword })
                console.log('string', this.state.showpassword)
              }} style={{ flex: 0.1, alignSelf: 'center' }} />
          </View>

          <View style={{ flexDirection: 'row', width: '80%', borderBottomWidth: 2, borderBottomColor: this.state.password != ' ' ? '#F8A1EC' : 'lightgrey', }}>
            <TextInput onChangeText={(repass) => {
              this.setState({ repassword: repass })
            }}
              secureTextEntry={this.state.showrepassword}
              placeholder='Re-enter password'
              placeholderTextColor='lightgrey'
              style={{
                // width: '100%', borderBottomWidth: 2, borderBottomColor: this.state.password != ' ' ? '#F8A1EC' : 'lightgrey',
                fontSize: 15, color: 'grey', paddingVertical: 10, flex: 0.9
              }} />
            <Icon type="ionicon" name={this.state.showrepassword ? "eye-outline" : "eye-off-outline"} color="grey" size={21}
              onPress={() => { this.setState({ showrepassword: !this.state.showrepassword }) }} style={{ flex: 0.1, alignSelf: 'center' }} />
          </View>


          <View
          style={{flexDirection:'row', justifyContent:'center', paddingVertical:20}}>
             <CheckBox value={this.state.check} tintColors={{true:'red',false:'black '}} style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
             onValueChange={()=>this.setState({check:!this.state.check})}/> 
             
        <TouchableOpacity  onPress={this.termsConditions} >
            <Text style={{ color: 'grey',  fontWeight: 'bold', alignSelf:'center',paddingVertical:5 }}>I agree with terms & conditions.</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={this.register}
            style={{ width: '90%', height: 60, backgroundColor: this.state.yourName != ' ' && this.state.email != ' ' && this.state.password == this.state.repassword ? '#F8A1EC' : '#fef5fd', borderRadius: 50, marginTop: 1 }}>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold', paddingVertical: 20, letterSpacing: 2, textTransform: 'uppercase' }}>register</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: 'center', paddingTop: 140 }}>
          <TouchableOpacity onPress={this.registerwithgoogle}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={googleimage} style={{ height: 25, width: 25 }} />
              <Text style={{ color: 'blue', letterSpacing: 1, textTransform: 'uppercase', fontSize: 12, fontWeight: 'bold', paddingVertical: 5 }}>  Register with google</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={this.signin}
          style={{
            width: '110%', backgroundColor: 'blue', height: 80, justifySelf: 'center', alignSelf: 'center',
            borderTopStartRadius: 4000, borderTopEndRadius: 4000
          }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 30 }}>
            <Text style={{ color: 'white', fontSize: 12 }}>Already have an account ?</Text>
            <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}> Sign in </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Dashboard;