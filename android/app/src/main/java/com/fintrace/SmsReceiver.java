package com.fintrace;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.telephony.SmsMessage;
import android.util.Log;

public class SmsReceiver extends BroadcastReceiver {

    @Override
    public void onReceive(Context context, Intent intent) {
        Bundle bundle = intent.getExtras();
        SmsMessage[] messages = null;
        String str = "";

        if (bundle != null) {
            // Retrieve the SMS message received
            Object[] pdus = (Object[]) bundle.get("pdus");
            messages = new SmsMessage[pdus.length];
            for (int i = 0; i < messages.length; i++) {
                messages[i] = SmsMessage.createFromPdu((byte[]) pdus[i]);
                str += "SMS from " + messages[i].getOriginatingAddress();
                str += " :";
                str += messages[i].getMessageBody().toString();
                str += "\n";
            }

            // Log or handle the SMS message
            Log.d("SmsReceiver", "Received SMS: " + str);

            // Start the notification service
            Intent serviceIntent = new Intent(context, SmsNotificationService.class);
            serviceIntent.putExtra("smsBody", str);
            context.startService(serviceIntent);
        }
    }
}
