import {Platform} from 'react-native';
import {createNotifications} from 'react-native-notificated';

export const {NotificationsProvider} = createNotifications({
  notificationPosition: 'top-left',
  isNotch: Platform.OS === 'ios',
  notificationWidth: 600,
  gestureConfig: {direction: 'x'},
  defaultStylesSettings: {
    globalConfig: {
      borderType: 'no-border',
      multiline: 2,
      titleWeight: '700',
      titleSize: 18,
      descriptionWeight: '400',
      borderRadius: 10,
    },
  },
});
