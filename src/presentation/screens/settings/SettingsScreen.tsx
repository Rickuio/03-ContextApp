import React, { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles } from '../../../config'
import { useProfileStore } from '../../store/profile-store'
import { useCounterStore } from '../../store/counter-store'
import { useNavigation } from '@react-navigation/native'

export const SettingsScreen = () => {

  const count = useCounterStore( state => state.count );
  const increaseBy = useCounterStore(state => state.incrementBy);

  const navigation = useNavigation();

  useEffect( () => {
    navigation.setOptions({
      title: `Contador: ${count}`
    })
  }, [ count ])
  

  return (
    <View style={ styles.container }>

      <Text style={  styles.title }>Count: { count }</Text>
        
        <Pressable 
          style={ styles.primaryButton }
          onPress={ ()=> increaseBy(+1)}
        >
          <Text>Incrementar (+1)</Text>
        </Pressable>
        <Pressable 
          style={ styles.primaryButton }
          onPress={ ()=> increaseBy(-1) }
        >
          <Text>Decrementar (-1)</Text>
        </Pressable>
        
    </View>
  )
}
