#!/bin/sh

rm -rf ./platforms/*
rm -rf ./plugins/*
rm -rf ./node_modules/*

#phonegap plugin add cordova-custom-config

phonegap platform add android@5.0.0
phonegap build android --release

phonegap plugin add cordova-plugin-device
phonegap plugin add cordova-plugin-inappbrowser
phonegap plugin add cordova-plugin-vibration
phonegap plugin add cordova-plugin-camera
phonegap plugin add cordova-plugin-device-orientation
phonegap plugin add cordova-plugin-device-motion
phonegap plugin add cordova-plugin-file
phonegap plugin add cordova-plugin-dialogs
phonegap plugin add cordova-plugin-media
phonegap plugin add cordova-plugin-network-information
phonegap plugin add cordova-plugin-bluetoothle
# phonegap plugin add cordova-plugin-splashscreen
phonegap plugin add cordova-plugin-fullscreen

phonegap run android -d
