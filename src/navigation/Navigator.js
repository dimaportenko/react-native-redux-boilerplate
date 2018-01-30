import { StackNavigator } from 'react-navigation';

import Main from '../components/Main';

export const Navigator = StackNavigator({
    main: {
        screen: Main
    }
});
