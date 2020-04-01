This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start mySideMenu sidemenu
```

Then, to run it, cd into `mySideMenu` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

## BE CAREFUL USING THIS ALWAYS REMEMBER TO DOUBLE CHECK ALL THE CHANGES

## Cordova 9 & Cordova Android 8 Setup android
first you need to run ```bash npm install``` and then ```bash cordova platform add android```

then you need to do this step to able run or build android :
change version com.google.firebase:firebase-messaging from 17.3.4 to 20.1.3 on /platform/android/project.properties
<!-- add classpath 'com.google.gms:google-services:4.3.3' in dependencies Object on /platform/android/build.gradle -->
copy file google-services.json into /platforms/android/app

jika terjadi error build\generated\res\google-services\debug\values\values.xml: Error: Duplicate resources, hapus google_id dan google_key di platform/android/app/src/res/value/string.xml

untuk clevertap: di package.json dan androidManifest.xml (platforms/android/app/src) di check CLEVERTAP_REGION valuenya "sg1"

change into ```classpath 'com.android.tools.build:gradle:3.4.2'``` on platforms/android di file build.gradle di section dependencies object

change into ```var distributionUrl=process.env['CORDOVA_ANDROID_GRADLE_DISTRIBUTION_URL'] || 'https\\://services.gradle.org/distributions/gradle-5.1.1-all.zip';``` in platform/cordova/lib/builders/projectBuilder.js

add ```implementation 'com.google.android.gms:play-services-base:11.4.0'``` on build.gradle in folder platform/android/app

if you get an error ```Execution failed for task ':app:mergeDebugResources'.
> [string/google_app_id] C:\Users\sebastian\paperid\paper_ionic\platforms\android\app\src\main\res\values\strings.xml  [string/google_app_id] C:\Users\sebastian\paperid\paper_ionic\platforms\android\app\build\generated\res\google-services\debug\values\values.xml: Error: Duplicate resources```

remove ```<string name="google_app_id">1:543801968470:android:0f1cd9475becd314</string>
    <string name="google_api_key">AIzaSyCqTTHS9v49X7MFmCskXpU7egKpRxNRn4M</string>``` in strings.xml