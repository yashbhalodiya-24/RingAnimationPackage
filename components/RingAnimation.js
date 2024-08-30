import { View, Text,StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import Animation, { interpolate, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withTiming } from 'react-native-reanimated';


const RingAnimation = ({delay}) => {

  const ring = useSharedValue(0);
  const style = useAnimatedStyle(() => {
return {
  opacity:0.8 - ring.value,
  transform:[{
    scale:interpolate(ring.value,[0,1],[0,4]),
  },],
};
  });
  useEffect(() => {
    ring.value= withDelay(
      delay,
      withRepeat(
        withTiming(1,{
          duration:4000,
        }),
        -1
      )
    );
  },[]);
  return <Animation.View style={[styles.ring,style]}/>;
};

 export default function RingAnimation(){
  return(
    <View style={styles.container}>
      <RingAnimation delay={0}/>
      <RingAnimation delay={1000}/>
      <RingAnimation delay={2000}/>
      <RingAnimation delay={3000}/>
    </View>
  );
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ring: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: 'rgba(255,255,255,0.5)',
    position: 'absolute',
    transform: [{scale: 0}],
  },
 });