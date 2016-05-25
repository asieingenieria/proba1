#!/bin/sh

rm -rf ./platforms/*
rm -rf ./plugins/*
rm -rf ./node_modules/*

#phonegap plugin add cordova-custom-config

phonegap platform add ios
phonegap build ios

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
phonegap plugin add cordova-plugin-console
phonegap plugin add cordova-plugin-splashscreen

patch -d platforms/ios/Anaren\ Atmosphere/Classes/ < AppDelegate.m.patch

python ios_fix_info.py

phonegap run ios -d
