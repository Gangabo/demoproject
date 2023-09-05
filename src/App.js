import { StyleSheet, Text, View } from 'react-native-web';
import './App.css';

function App() {
  return (
    <view style={StyleSheet.root}> 
      <Text>Demo Project</Text>
    </view>
  );
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
