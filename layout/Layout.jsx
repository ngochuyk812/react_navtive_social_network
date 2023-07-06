import Navbar from "./NavbarBottom/NavbarBottom";
import { StyleSheet, View } from "react-native";


export default function Layout({page, ...props}){
    const Page = page
    return(
        <View style={styles.mainLayout}>
            <View style={styles.content}>
                <Page {...props}/>
            </View>
            <View style={styles.nav}>
                <Navbar/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainLayout:{
        width:'100%',
        height:'100%',
        
    },
    content:{
        width:'100%',
    },
    nav:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        height:75
    }
        
})