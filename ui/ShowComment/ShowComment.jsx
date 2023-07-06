import { TextInput, View } from 'react-native'
import { styles } from './styles'
import ItemComment from '../ItemComment/ItemComment'
export default function ShowComment({style, ...props}){
    let comments = [
        {
            "user": {
                "name": "Celia Rendón",
                "avatar": "https://randomuser.me/api/portraits/women/50.jpg"
            },
            "comment": "integer ac neque duis bibendum morbi non quam nec dui",
            "time": "8 hour"
        },
        {
            "user": {
                "name": "Expedito da Luz",
                "avatar": "https://randomuser.me/api/portraits/men/21.jpg"
            },
            "comment": "donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit",
            "time": "20 hour"
        },
        {
            "user": {
                "name": "Scarlett Wood",
                "avatar": "https://randomuser.me/api/portraits/women/94.jpg"
            },
            "comment": "erat fermentum justo nec condimentum neque sapien placerat ante nulla",
            "time": "19 hour"
        },
        {
            "user": {
                "name": "Bryan Garza",
                "avatar": "https://randomuser.me/api/portraits/men/33.jpg"
            },
            "comment": "in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate",
            "time": "6 hour"
        },
        {
            "user": {
                "name": "Byron Castro",
                "avatar": "https://randomuser.me/api/portraits/men/87.jpg"
            },
            "comment": "malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet",
            "time": "2 hour"
        },
        {
            "user": {
                "name": "Lily Vidal",
                "avatar": "https://randomuser.me/api/portraits/women/93.jpg"
            },
            "comment": "quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer",
            "time": "10 hour"
        },
        {
            "user": {
                "name": "Hunter Lo",
                "avatar": "https://randomuser.me/api/portraits/men/33.jpg"
            },
            "comment": "mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer",
            "time": "8 hour"
        },
        {
            "user": {
                "name": "Michelle Peters",
                "avatar": "https://randomuser.me/api/portraits/women/68.jpg"
            },
            "comment": "maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat",
            "time": "22 hour"
        },
        {
            "user": {
                "name": "Borislav Vujičić",
                "avatar": "https://randomuser.me/api/portraits/men/47.jpg"
            },
            "comment": "pede ullamcorper augue a suscipit nulla elit ac nulla sed",
            "time": "20 hour"
        },
        {
            "user": {
                "name": "Herman Walters",
                "avatar": "https://randomuser.me/api/portraits/men/82.jpg"
            },
            "comment": "etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit",
            "time": "9 hour"
        },
        {
            "user": {
                "name": "Colin Korsvik",
                "avatar": "https://randomuser.me/api/portraits/men/71.jpg"
            },
            "comment": "est quam pharetra magna ac consequat metus sapien ut nunc vestibulum",
            "time": "18 hour"
        },
        {
            "user": {
                "name": "Allan Caldwell",
                "avatar": "https://randomuser.me/api/portraits/men/81.jpg"
            },
            "comment": "donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam",
            "time": "14 hour"
        },
        {
            "user": {
                "name": "Theodoor Ravesteijn",
                "avatar": "https://randomuser.me/api/portraits/men/18.jpg"
            },
            "comment": "a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra",
            "time": "5 hour"
        },
        {
            "user": {
                "name": "Antonina Lægreid",
                "avatar": "https://randomuser.me/api/portraits/women/66.jpg"
            },
            "comment": "arcu sed augue aliquam erat volutpat in congue etiam justo etiam",
            "time": "0 hour"
        },
        {
            "user": {
                "name": "Namitha Salian",
                "avatar": "https://randomuser.me/api/portraits/women/16.jpg"
            },
            "comment": "quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce",
            "time": "16 hour"
        },
        {
            "user": {
                "name": "Oscar Petersen",
                "avatar": "https://randomuser.me/api/portraits/men/16.jpg"
            },
            "comment": "aliquam erat volutpat in congue etiam justo etiam pretium iaculis",
            "time": "18 hour"
        },
        {
            "user": {
                "name": "Vittorio Thomas",
                "avatar": "https://randomuser.me/api/portraits/men/94.jpg"
            },
            "comment": "fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget",
            "time": "23 hour"
        },
        {
            "user": {
                "name": "Lolit Padun",
                "avatar": "https://randomuser.me/api/portraits/men/65.jpg"
            },
            "comment": "dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien",
            "time": "4 hour"
        },
        {
            "user": {
                "name": "Väinö Kangas",
                "avatar": "https://randomuser.me/api/portraits/men/64.jpg"
            },
            "comment": "enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque",
            "time": "1 hour"
        },
        {
            "user": {
                "name": "Mika Schwanke",
                "avatar": "https://randomuser.me/api/portraits/men/53.jpg"
            },
            "comment": "nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus",
            "time": "23 hour"
        }
    ]
    return(
        <View style={styles.showComment}>
            {comments.map(tmp=>{
               return <ItemComment key={tmp.comment} data={tmp}/>
            })}
        </View>
    )
}