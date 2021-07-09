import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import {withSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-easy-icon';
import AsyncStorage from '@react-native-async-storage/async-storage';

let myExpense;
export class ExpenseManager extends Component {
  constructor(props) {
    super(props);
    this.state = {expense: [], itemName: '', itemPrice: 0, total: 0};
  }
  saveData = async expense => {
    try {
      await AsyncStorage.setItem('expense', JSON.stringify(expense));
    } catch (error) {
      console.log(error);
    }
  };
  getData = async () => {
    try {
      myExpense = JSON.parse(await AsyncStorage.getItem('expense'));
      let total = 0;
      console.log('MyExpense', myExpense);
      myExpense.map(item => {
        total += parseInt(item.itemPrice);
      });
      this.setState({expense: myExpense, total: total});
      console.log('myExpense', myExpense);
    } catch (error) {
      console.log('kkj', error);
    }
  };
  deleteitem = index => {
    console.log('Index', index);
    let array = this.state.expense;
    console.log('Array', array);
    let spliced = array.splice(index, 1);
    console.log('Spliced', spliced);
    let total;
    total = this.state.total;
    console.log('total', total);
    console.log('Spliced.ItemPrice', spliced[0].itemPrice);
    let sub = total - parseInt(spliced[0].itemPrice);
    console.log('sub', sub);
    this.setState({total: sub});
  };
  goBack = () => {
    this.props.navigation.goBack();
  };
  addData = () => {
    let expense = this.state.expense;
    let total = this.state.total;
    total += parseInt(this.state.itemPrice);
    let obj = {
      itemName: this.state.itemName,
      itemPrice: this.state.itemPrice,
    };

    console.log('object', obj);
    expense.push(obj);
    this.setState({expense: expense, total});
    console.log('string', expense);
    this.saveData(expense);
  };
  componentDidMount() {
    this.getData();
    console.log('string');
  }

  listOfExpenseItem(item) {
    return (
      <View style={{backgroundColor: 'yellow'}}>
        <Text>
          {item.item.itemName}
          {console.log('strings', item)}
        </Text>
      </View>
    );
  }
  orderFood = () => {
    console.log('string');
    this.props.navigation.navigate('OrderFood');
  };
  whatsApp = () => {
    this.props.navigation.navigate('WhatsApp');
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#E62878'}}>
        <TouchableOpacity onPress={this.goBack}>
          <Icon
            type="ionicon"
            name="arrow-back-sharp"
            color="white"
            size={30}></Icon>
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
            fontSize: 35,
            fontWeight: 'bold',
            textAlign: 'center',
            fontFamily: 'sans-serif',
          }}>
          List of Expense
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 24,
            textTransform: 'capitalize',
            fontWeight: 'bold',
            textAlign: 'center',
            paddingTop: 12,
          }}>
          add your expense
        </Text>

        <View style={{alignItems: 'center', paddingVertical: 20}}>
          <TextInput
            onChangeText={iName => {
              this.setState({itemName: iName});
            }}
            placeholder="Expense:"
            placeholderTextColor="grey"
            style={{
              backgroundColor: 'white',
              color: 'grey',
              height: 50,
              fontSize: 18,
              width: '80%',
              borderRadius: 50,
            }}
          />

          <TextInput
            onChangeText={iPrice => {
              this.setState({itemPrice: iPrice});
            }}
            keyboardType="numeric"
            placeholder="Price:"
            placeholderTextColor="grey"
            style={{
              backgroundColor: 'white',
              color: 'grey',
              height: 50,
              fontSize: 18,
              width: '80%',
              borderRadius: 50,
              marginTop: 10,
            }}
          />
        </View>

        <TouchableOpacity onPress={this.addData} style={{alignItems: 'center'}}>
          <Icon
            type="ionicon"
            name="ios-add-circle-outline"
            color="white"
            size={50}></Icon>
        </TouchableOpacity>
        <ScrollView>
          {this.state.expense
            ? this.state.expense.map((item, index) => {
                return (
                  <View style={{flexDirection: 'row', paddingHorizontal: 40}}>
                    <Text
                      style={{
                        height: 30,
                        flex: 1,
                        fontSize: 20,
                        color: 'white',
                      }}>
                      {item.itemName}
                    </Text>
                    <Text
                      style={{
                        height: 30,
                        flex: 1,
                        fontSize: 20,
                        color: 'white',
                      }}>
                      {item.itemPrice}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        this.deleteitem(index);
                      }}>
                      <Icon
                        type="ionicon"
                        name="close-circle-outline"
                        color="white"
                        size={25}
                        style={{flex: 1}}></Icon>
                    </TouchableOpacity>
                  </View>
                );
              })
            : null}
          <Text style={{fontSize: 20, color: 'white', paddingLeft: '70%'}}>
            Total:{this.state.total}
          </Text>

          <TouchableOpacity
            onPress={() => this.orderFood()}
            style={{
              width: '90%',
              height: 60,
              backgroundColor: 'black',
              borderRadius: 50,
              marginTop: 30,
              marginLeft: 18,
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 18,
                fontWeight: 'bold',
                paddingVertical: 20,
                letterSpacing: 2,
              }}>
              Order Food
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.whatsApp()}
            style={{
              width: '90%',
              height: 60,
              backgroundColor: 'black',
              borderRadius: 50,
              marginTop: 30,
              marginLeft: 18,
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 18,
                fontWeight: 'bold',
                paddingVertical: 20,
                letterSpacing: 2,
              }}>
              Whatsapp
            </Text>
          </TouchableOpacity>
        </ScrollView>
        {/* <FlatList
data={myExpense}
renderItem={this.listOfExpenseItem}
keyExtractor={item=>item.id}
/> */}
      </View>
    );
  }
}
export default ExpenseManager;
