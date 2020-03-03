import { createAppContainer, createSwitchNavigator } from 'react-navigation' 
import Login from './pages/Login'
import Lista from './pages/Lista'
import Book from './pages/Book'

const Routes = createAppContainer(
    createSwitchNavigator({ Login,
        Lista,
        Book
    })
);

export default Routes