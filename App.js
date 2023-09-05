import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.propaylborder}> 
    <Image source={{uri:'https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/364792843_1689811694870269_3118174938528632870_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeHf1b6Ri0YIzYdpMQSP3nmBOeiq_NyQydk56Kr83JDJ2Xbf8y2nu3H6gSOH7gg6kpWKjfICWtDDGV_dFNlAeHEj&_nc_ohc=AqUabqNRaKoAX_BH8Un&_nc_zt=23&_nc_ht=scontent.fceb2-1.fna&oh=00_AfBFqRoIaqUTpiG32LzB0OOHT4yOO4vKNMP5gfDrKu5rLQ&oe=64FBBE5C'}} style={styles.Picture}/>
    <Text style = {styles.name}>Rusel Niño Madanguit</Text>
    <Text style = {styles.handlesub}>Information Technology 3</Text>
     </View>
     <Text style = {styles.mysubject}>My Subjects</Text>
     <View style={styles.fsub}>
       <Text style={styles.subcode}>ELEC 2</Text>
       <View style={styles.rowsub}>
         <Text style={styles.subname}> Web Development/Web Enterprise</Text>
         <Text style={styles.subname}> Unit: 3</Text>
       </View>
     </View>
     <View style={styles.fsub}>
       <Text style={styles.subcode}>ELEC 3</Text>
       <View style={styles.rowsub}>
        <Text style={styles.subname}> Mobile Application</Text>
         <Text style={styles.subname}> Unit: 3</Text>
       </View>
     </View>
     <View style={styles.fsub}>
       <Text style={styles.subcode}>IT 311</Text>
       <View style={styles.rowsub}>
         <Text style={styles.subname}>    Software Engineering</Text>
         <Text style={styles.subname}>    Unit: 3</Text>
       </View>
     </View>
     <View style={styles.fsub}>
       <Text style={styles.subcode}> IT 312</Text>
       <View style={styles.rowsub}>
         <Text style={styles.subname}>  Information Assurance and Security 2  </Text>
         <Text style={styles.subname}>  Unit: 3</Text>
       </View>
     </View>
     <View style={styles.fsub}>
       <Text style={styles.subcode}>IT 313</Text>
       <View style={styles.rowsub}>
         <Text style={styles.subname}>   Quantitative Methods</Text>
         <Text style={styles.subname}>   Unit: 3</Text>
       </View>
      
     </View>
     <Text style = {styles.moreoption}>Click here to see more!</Text>
     
    
   </View>
    
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: 'white',
   borderLeftWidth:23,
   borderTopWidth:55,
   borderColor:'white',
 },

 propaylborder:{
   backgroundColor: '#24469C',
   height:300,
   width:380,
   borderTopRightRadius:50,
   borderBottomRightRadius:50,
         },

 name:{
 paddingTop:3,
 paddingLeft:19,
 fontSize: 32.5,
 fontWeight:'700',
 color:'white',
 },
 
 handlesub:{
   fontSize: 22,
   paddingLeft: 19,
   color:'white',
  
 },
mysubject:{
 fontSize:23,
 paddingLeft: 3,
 paddingTop:10,
 marginBottom:10,
 color:'black',
},
subject: {
 fontSize: 15,
 marginTop: 20,
 marginBottom: 5,
},
subcode: {
 fontWeight: "bold",
 fontSize: 20,
},
subname: {
 marginLeft: 38,
},
Picture: {
 borderRadius:70,
 height: 120,
 width: 120,
 marginLeft:19,
 marginTop:70,

},
fsub: {
 backgroundColor: '#DCDCDC',
 borderRadius: 10,
 height: 65,
 marginBottom:10,
 flexDirection: "row",
 alignItems: "center",
 width: 380,
 padding: 12,
 
},
rowsub: {
 flexDirection: "column",
 alignItems: "flex-start",
},
moreoption:{
 marginTop:20,
 paddingLeft:200,
 fontSize:17,
 color:'#24469C'
}
});
