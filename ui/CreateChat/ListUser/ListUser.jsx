import { ScrollView } from "react-native";
import ItemUser from "../ItemUser/ItemUser";
import { styles } from "./styles";


export default function ListUser({friends, setModalVisible}){


    return(
        <ScrollView style={styles.listUser}>
            
            {friends.map((tmp,index)=><ItemUser key={index} friend={tmp} setModalVisible={setModalVisible}/>)}
       

        </ScrollView>
    )
}