import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-easy-icon';
// import foodItem1 from '../../Assets/Images/Popular Food Items/chickenTandoori.jpg';

class OrderFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selection: 'Select'};
  }
  popularFdItems = [
    {image: require('../../Assets/Images/PopularFoodItems/redMeat.jpg')},
    {image: require('../../Assets/Images/PopularFoodItems/bhel.jpg')},
    {image: require('../../Assets/Images/PopularFoodItems/fritters.jpg')},
    {image: require('../../Assets/Images/PopularFoodItems/chinese.jpg')},
    {image: require('../../Assets/Images/PopularFoodItems/paneerTikka.jpg')},
    {image: require('../../Assets/Images/PopularFoodItems/panipuri.jpg')},
    {image: require('../../Assets/Images/PopularFoodItems/parathas.jpg')},
    {image: require('../../Assets/Images/PopularFoodItems/southIndian.jpg')},
  ];
  categoriesOfFoodItem = [
    {image: require('../../Assets/Images/PopularFoodItems/southIndian.jpg')},
    {image: require('../../Assets/Images/PopularFoodItems/parathas.jpg')},
    {image: require('../../Assets/Images/PopularFoodItems/panipuri.jpg')},
    {image: require('../../Assets/Images/PopularFoodItems/paneerTikka.jpg')},
    {image: require('../../Assets/Images/PopularFoodItems/chinese.jpg')},
    {image: require('../../Assets/Images/PopularFoodItems/redMeat.jpg')},
  ];

  productNData = [
    {
      image: require('../../Assets/Images/PopularFoodItems/southIndian.jpg'),
      title: 'South Indian',
      price: '60',
    },
    {
      image: require('../../Assets/Images/PopularFoodItems/parathas.jpg'),
      title: 'Paratha',
      price: '40',
    },
    {
      image: require('../../Assets/Images/PopularFoodItems/panipuri.jpg'),
      title: 'Panipuri',
      price: '20',
    },
    {
      image: require('../../Assets/Images/PopularFoodItems/paneerTikka.jpg'),
      title: 'Paneer Tikka',
      price: '100',
    },
    {
      image: require('../../Assets/Images/PopularFoodItems/chinese.jpg'),
      title: 'Chinese',
      price: '60',
    },
    {
      image: require('../../Assets/Images/PopularFoodItems/redMeat.jpg'),
      title: 'Red Meat',
      price: '240',
    },
  ];
  productIndex = [];
  popularFoodItems = item => {
    return (
      <View
        style={{
          height: 180,
          width: 190,
          padding: 10,
        }}>
        <Image
          source={item.item.image}
          alt="Food Items"
          style={{
            height: '100%',
            width: '100%',
            borderRadius: 20,
            backgroundColor: 'red',
          }}></Image>
        {console.log('Image', item.item)}
      </View>
    );
  };
  categoriesOfFdItem = item => {
    return (
      <View
        style={{
          height: 90,
          width: 120,
          padding: 10,
          // backgroundColor: 'pink',
        }}>
        <Image
          source={item.item.image}
          alt="Categories of Food Item"
          style={{
            height: '100%',
            width: '100%',
            borderRadius: 20,
            backgroundColor: 'yellow',
          }}
        />
        {console.log('Categories', item.item)}
      </View>
    );
  };
  selectItem = () => {
    this.setState({selection: 'Selected'});
  };
  productWithData = item => {
    return (
      <View
        style={{flexDirection: 'row', paddingVertical: 10, paddingLeft: 10}}>
        <View Style={{flex: 1}}>
          <Image
            source={item.image}
            style={{
              height: 100,
              width: 90,
              borderRadius: 20,
              backgroundColor: 'red',
            }}
          />
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              textAlign: 'center',
            }}>
            {item.title}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: 'lightgrey',
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            Price/plate:Rs.
            {item.price}/-
          </Text>
          <TouchableOpacity
            onPress={this.selectItem}
            style={{
              height: 25,
              width: 120,
              borderColor: '#E62878',
              borderWidth: 1,
              borderRadius: 35,
              backgroundColor: 'transparent',
              marginTop: 2.5,
            }}>
            <Text style={{color: '#E62878', textAlign: 'center', fontSize: 15}}>
              {this.state.selection}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  timeLocation = () => {
    alert('Check Date');
  };
  goBack = () => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1.75, backgroundColor: '#F3F1F3'}}>
          <View
            style={{marginTop: 25, marginHorizontal: 10, flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={this.goBack}
              style={{
                backgroundColor: '#E3E1E2',
                borderRadius: 50,
                alignItems: 'center',
                height: 40,
                width: 40,
                justifyContent: 'center',
              }}>
              <Icon
                type="ionicon"
                name="arrow-back-outline"
                color="#E62878"
                size={20}></Icon>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.timeLocation}
              style={{
                backgroundColor: 'lightgrey',
                marginLeft: '40%',
                alignItems: 'center',
                marginTop: 4,
                justifyContent: 'center',
                height: 30,
                width: '46%',
                borderRadius: 50,
              }}>
              <Text style={{color: 'black', fontSize: 12}}>
                Today at 12:00 PM{' '}
                <Icon
                  type="ionicon"
                  name="arrow-forward-outline"
                  color="black"
                  size={15}></Icon>
                Right
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: 'black',
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              fontSize: 35,
              marginTop: '10%',
              paddingLeft: '5%',
            }}>
            Place an order
          </Text>
        </View>
        <View style={{flex: 4, backgroundColor: 'white'}}>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <Text
              style={{
                // flex: 2,
                // backgroundColor: 'red',
                color: 'black',
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                fontSize: 20,
                marginTop: '5%',
                paddingLeft: '5%',
              }}>
              Popular
            </Text>
            <View>
              <FlatList
                // nestedScrollEnabled
                horizontal
                data={this.popularFdItems}
                renderItem={this.popularFoodItems}
                keyExtractor={item => item.id}
              />
            </View>

            <Text
              style={{
                // flex: 2,
                // backgroundColor: 'orange',
                color: 'black',
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                fontSize: 20,
                marginTop: '1%',
                paddingLeft: '5%',
              }}>
              Our catalogue
            </Text>
            <FlatList
              horizontal
              data={this.categoriesOfFoodItem}
              renderItem={this.categoriesOfFdItem}
              keyExtractor={item => item.id}
            />
            <FlatList
              data={this.productNData}
              renderItem={({item, index}) => this.productWithData(item)}
              keyExtractor={item => item.id}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}
export default OrderFood;
