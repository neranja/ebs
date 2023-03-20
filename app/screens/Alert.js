// import React from 'react';
// import { Text, TouchableOpacity, View,Platform, StyleSheet  } from 'react-native';
// import { FancyAlert } from 'react-native-expo-fancy-alerts';


    

// function ListingsScreen() {
//     const [visible, setVisible] = React.useState(false);
//     const toggleAlert = React.useCallback(() => {
//       setVisible(!visible);
//     }, [visible]);

//     return (
//         <View>
//           <TouchableOpacity onPress={toggleAlert}>
//             <Text>Tap me</Text>
//           </TouchableOpacity>
    
//           <FancyAlert
//             visible={visible}
//             icon={<View style={{
//               flex: 1,
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               backgroundColor: 'red',
//               borderRadius: 50,
//               width: '100%',
//             }}><Text>🤓</Text></View>}
//             style={{ backgroundColor: 'white' }}
//           >
//             <Text style={{ marginTop: -16, marginBottom: 32 }}>Hello there</Text>
//             <View style={styles.content}>
//       <Text style={styles.contentText}>{'hghghghgh'}</Text>

//       <TouchableOpacity style={styles.btn} onPress={''}>
//         <Text style={styles.btnText}>OK</Text>
//       </TouchableOpacity>
//     </View>
//           </FancyAlert>
//         </View>
//       )

// }
// const styles = StyleSheet.create({
//     alert: {
//       backgroundColor: '#EEEEEE',
//     },
//     icon: {
//       flex: 1,
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#C3272B',
//       width: '100%',
//     },
//     content: {
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginTop: -16,
//       marginBottom: 16,
//     },
//     contentText: {
//       textAlign: 'center',
//     },
//     btn: {
//       borderRadius: 32,
//       display: 'flex',
//       flexDirection: 'row',
//       justifyContent: 'center',
//       alignItems: 'center',
//       paddingHorizontal: 8,
//       paddingVertical: 8,
//       alignSelf: 'stretch',
//       backgroundColor: '#4CB748',
//       marginTop: 16,
//       minWidth: '50%',
//       paddingHorizontal: 16,
//     },
//     btnText: {
//       color: '#FFFFFF',
//     },
//   });
//     export default ListingsScreen;