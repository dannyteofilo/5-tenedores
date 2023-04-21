import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {screen} from '../utils'
import RestaurantsScreen from "../"
import {AddRestaurantScreen} from '../screens/Restaurants/AddrestaurantScreen'

const Stack = createNativeStackNavigator()

export function RestaurantStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name={screen.restaurant.restaurants}
            component={RestaurantsScreen} options={{title:"Restaurantes"}}/>            
            <Stack.Screen name={screen.restaurant.addRestaurant}
            component={AddRestaurantScreen} options={{title:"Nuevo restaurant"}}/>
        </Stack.Navigator>
    )
}