import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { router, useFocusEffect, useRouter } from 'expo-router';

export default function TabOneScreen() {
  const { setParams } = useRouter()

  // Code block with the error "Cannot call setParams outside a screen"
  useFocusEffect(() => {
    // Using hook api to setParams
    setParams({ title: 'Tab One' })

    // Using imperative api to setParams
    router.setParams({ title: 'Tab One again' })
  })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>It works</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
