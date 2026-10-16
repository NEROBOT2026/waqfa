const fs = require('fs');
const p = 'android/app/src/main/AndroidManifest.xml';
let x = fs.readFileSync(p, 'utf8');
['INTERNET','POST_NOTIFICATIONS','SCHEDULE_EXACT_ALARM','USE_EXACT_ALARM','RECEIVE_BOOT_COMPLETED','ACCESS_COARSE_LOCATION','ACCESS_FINE_LOCATION','VIBRATE','WAKE_LOCK'].forEach(n => {
  const full = 'android.permission.' + n;
  if (!x.includes(full)) x = x.replace('<application', '<uses-permission android:name="' + full + '" />\n    <application');
});
fs.writeFileSync(p, x);
console.log('permissions patched');
