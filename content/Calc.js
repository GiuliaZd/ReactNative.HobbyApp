import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native'

const Calc = () => {
  const [cost, setCost] = useState(0.0);
  const [food, setFood] = useState(0.0);
  const [hobby, setHobby] = useState(0.0);
  const [total, setTotal] = useState(0);

  const pay = () => {
     let total = cost + food + hobby;
     setTotal(total);
  }

  return (
      <View >
      <Text style={{ fontSize: 18, textAlign: 'center', marginBottom: 16, color: "blue", fontWeight: 'bold'}} >
      My Costs Calculator</Text>
      <Text style={{ fontSize: 14, textAlign: 'center', marginBottom: 16, color: "blue"}} >Traveling costs:</Text>
      <TextInput placeholder='enter tickets+hotels costs'
                 onChangeText={cost=>setCost(parseFloat(cost))}/>
      <Text style={{ fontSize: 14, textAlign: 'center', marginBottom: 16, color: "blue"}}>Food costs:</Text>
      <TextInput placeholder='enter food costs'
                 onChangeText={food=>setFood(parseFloat(food))}/>
      <Text style={{ fontSize: 14, textAlign: 'center', marginBottom: 16, color: "blue"}}  >Hobbies costs:</Text>
      <TextInput placeholder='enter hobbies costs'
                 onChangeText={hobby=>setHobby(parseFloat(hobby))}/>
      <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 16, color: "red", fontWeight: 'bold'}}>Result:</Text>
      <Text >{total}</Text>
      <TouchableHighlight onPress={() => pay()}>
        <Text >Show the sum</Text>
      </TouchableHighlight>
    </View>
  )
}
export default Calc;