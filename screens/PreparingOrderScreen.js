import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import * as Animatable from "react-native-animatable";

const PreparingOrderScreen = () => {
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image 
        // source={urlBuilder("https://i.pinimg.com/originals/03/d8/a7/03d8a7c38266f3eb59407b726104eb69.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
        />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen