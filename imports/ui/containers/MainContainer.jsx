import { withTracker } from 'meteor/react-meteor-data';
import MainPage from '../pages/MainPage.jsx'

export default withTracker(({params}) => {
    const user = Meteor.user();
    return {
        user,
    };
}, MainPage);
