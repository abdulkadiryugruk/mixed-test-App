import { View, Text, Button } from 'react-native'
import React from 'react'

const ColorChange = ({color, onDecrease, onIncrease}) => {
  return (
	<View>
		<Text>{color}</Text>
	  <Button
	  title={`${color} artir`}
	  onPress={()=>{onIncrease()}}
	  />
	  <Button
	  title={`${color} azalt`}
	  onPress={()=>{onDecrease()}}
	  />
	</View>
  )
}

export default ColorChange