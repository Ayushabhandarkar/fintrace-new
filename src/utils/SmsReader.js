import {PermissionsAndroid, Platform} from 'react-native';
import SmsAndroid from 'react-native-get-sms-android';

export const fetchTransactionMessages = async () => {
  if (Platform.OS !== 'android') {
    throw new Error('This utility is only supported on Android.');
  }

  const requestSmsPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_SMS,
        {
          title: 'SMS Permission',
          message: 'This app needs access to your SMS messages to read them.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const readTransactionMessages = async () => {
    const filter = {
      box: 'inbox', // 'inbox' or 'sent' to specify where to look for messages
      indexFrom: 0, // Start from index 0
      maxCount: 100, // Read up to 100 SMS messages
    };

    return new Promise((resolve, reject) => {
      SmsAndroid.list(
        JSON.stringify(filter),
        fail => {
          reject(`Failed with this error: ${fail}`);
        },
        (count, smsList) => {
          const messages = JSON.parse(smsList);
          // console.log(messages, ' some');
          const transactions = messages
            .map(message =>
              processTransactionMessage(message.body, message.time),
            )
            .filter(msg => msg !== null);
          resolve(transactions);
        },
      );
    });
  };

  const processTransactionMessage = (message, time) => {
    const debitedRegex =
      /Sent Rs\.(\d+(?:\.\d{1,2})?) from Kotak Bank AC \w+ to (\S+) on (\d{2}-\d{2}-\d{2})/i;
    const creditedRegex =
      /Received Rs\.(\d+(?:\.\d{1,2})?) in your Kotak Bank AC \w+ from (\S+) on (\d{2}-\d{2}-\d{2})/i;
    const dbDebitedRegex =
      /INR (\d+(?:\.\d{1,2})?) debited from a\/c \w+ on (\d{2}-\d{2}-\d{4}) for (.+?)\. Clear balance: INR \d+(?:\.\d{1,2})?\.?/i;
    const dbCreditedRegex =
      /INR (\d+(?:\.\d{1,2})?) credited in a\/c \w+ on (\d{2}-\d{2}-\d{4}) for (.+?)\. Clear balance: INR \d+(?:\.\d{1,2})?\.?/i;

    let match;

    if ((match = message.match(debitedRegex))) {
      return {
        type: 'debited',
        amount: match[1],
        upiId: match[2],
        date: match[3],
        time: time,
      };
    } else if ((match = message.match(creditedRegex))) {
      return {
        type: 'credited',
        amount: match[1],
        upiId: match[2],
        date: match[3],
        time: time,
      };
    } else if ((match = message.match(dbDebitedRegex))) {
      return {
        type: 'debited',
        amount: match[1],
        date: match[2],
        description: match[3],
        time: time,
      };
    } else if ((match = message.match(dbCreditedRegex))) {
      return {
        type: 'credited',
        amount: match[1],
        date: match[2],
        description: match[3],
        time: time,
      };
    }

    return null; // Return null if the message doesn't match any of the patterns
  };

  const hasPermission = await requestSmsPermission();
  if (hasPermission) {
    return await readTransactionMessages();
  } else {
    throw new Error('SMS permission denied');
  }
};
