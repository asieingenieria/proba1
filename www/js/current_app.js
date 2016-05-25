
function MyApp(parent) {

	var airMe = this;
	
	this.parent = parent;

	this.parent.serviceUUID = "053214bb-4748-4f96-8d3f-c0517ac4bb9d";
	this.parent.notifyUUID = "053214bb-4748-4f96-8d3f-c0517ac4bb9e";
		
	this.parent.localName = "ATDemo";
	this.parent.embeddedChains = {};

	this.element_TaskRunner_task = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			airMe.element_TaskRunner.pause();
					
			//airMe.parent.debugLog("Connection Event: [ \"TaskRunner\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"TaskRunner\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.value = " + "undefined", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"TaskRunner\" ]---X--->[ \"tmp006_getAmbientTemperature28\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_tmp006_getAmbientTemperature28.execute(targetValues.value);
					
			//airMe.parent.debugLog("Connection Event: [ \"TaskRunner\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"tmp006_getAmbientTemperature28\" ]");
		})();

	};

	this.element_BlueSlider_mouseReleased = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue =  airMe.element_BlueSlider.getValue();
			var value = sourceValue;
			atmoLocalValues["value"] = sourceValue;
			try {
				eval("targetValues.value = " + "value", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"BlueSlider\" ]---X--->[ \"PWMSet22\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_PWMSet22.execute(targetValues.value);
					
			//airMe.parent.debugLog("Connection Event: [ \"BlueSlider\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"PWMSet22\" ]");
		})();

	};

	this.element_BlueSlider_onTrigger = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue =  airMe.element_BlueSlider.getValue();
			var value = sourceValue;
			atmoLocalValues["value"] = sourceValue;
			try {
				eval("targetValues.value = " + "value", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"BlueSlider\" ]---X--->[ \"PWMSet22\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_PWMSet22.execute(targetValues.value);
					
			//airMe.parent.debugLog("Connection Event: [ \"BlueSlider\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"PWMSet22\" ]");
		})();

	};

	this.element_tmp006_getAmbientTemperature28_valueReturned = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue =  airMe.element_tmp006_getAmbientTemperature28.getValue();
			var value = sourceValue;
			atmoLocalValues["value"] = sourceValue;
			try {
				eval("targetValues.value = " + "value.toFixed(2) + \"\u00b0C\"", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"tmp006_getAmbientTemperature28\" ]---X--->[ \"TempReading\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_TempReading.setValue(targetValues.value);
					
			//airMe.parent.debugLog("Connection Event: [ \"tmp006_getAmbientTemperature28\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"TempReading\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue =  airMe.element_tmp006_getAmbientTemperature28.getValue();
			var value = sourceValue;
			atmoLocalValues["value"] = sourceValue;
			try {
				eval("targetValues.value = " + "undefined", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"tmp006_getAmbientTemperature28\" ]---X--->[ \"getData\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_getData.execute(targetValues.value);
					
			//airMe.parent.debugLog("Connection Event: [ \"tmp006_getAmbientTemperature28\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"getData\" ]");
		})();

	};

	this.element_getData_valueReturned = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue =  airMe.element_getData.getValue();
			var value = sourceValue;
			atmoLocalValues["value"] = sourceValue;
			try {
				eval("targetValues.y = " + "value[4]", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"getData\" ]---X--->[ \"AccelBubble\" ] " + err.toString());
				}
				
				return;
			}
				
			try {
				eval("targetValues.x = " + "value[3]", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"getData\" ]---X--->[ \"AccelBubble\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_AccelBubble.setOffset(targetValues.x,targetValues.y);
					
			//airMe.parent.debugLog("Connection Event: [ \"getData\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"AccelBubble\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue =  airMe.element_getData.getValue();
			var value = sourceValue;
			atmoLocalValues["value"] = sourceValue;
			try {
				eval("targetValues.value = " + "(Math.atan2(value[1], value[0]) * (180/3.14159) + 90)", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"getData\" ]---X--->[ \"CompNeedle\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_CompNeedle.setRotation(targetValues.value);
					
			//airMe.parent.debugLog("Connection Event: [ \"getData\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"CompNeedle\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue =  airMe.element_getData.getValue();
			var value = sourceValue;
			atmoLocalValues["value"] = sourceValue;
			try {
				eval("targetValues.y = " + "value[6]", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"getData\" ]---X--->[ \"JoyControl\" ] " + err.toString());
				}
				
				return;
			}
				
			try {
				eval("targetValues.x = " + "value[5]", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"getData\" ]---X--->[ \"JoyControl\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_JoyControl.setOffset(targetValues.x,targetValues.y);
					
			//airMe.parent.debugLog("Connection Event: [ \"getData\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"JoyControl\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue =  airMe.element_getData.getValue();
			var value = sourceValue;
			atmoLocalValues["value"] = sourceValue;
			try {
				eval("targetValues.value = " + "JSON.stringify(value)", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"getData\" ]---X--->[ \"DebugValue\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_DebugValue.setValue(targetValues.value);
					
			//airMe.parent.debugLog("Connection Event: [ \"getData\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"DebugValue\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.runEvery = " + "500", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"getData\" ]---X--->[ \"TaskRunner\" ] " + err.toString());
				}
				
				return;
			}
				
			try {
				eval("targetValues.runIn = " + "100", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"getData\" ]---X--->[ \"TaskRunner\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_TaskRunner.run(targetValues.runIn,targetValues.runEvery);
					
			//airMe.parent.debugLog("Connection Event: [ \"getData\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"TaskRunner\" ]");
		})();

	};

	this.element_OnConnect_connected = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.runEvery = " + "500", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"OnConnect\" ]---X--->[ \"TaskRunner\" ] " + err.toString());
				}
				
				return;
			}
				
			try {
				eval("targetValues.runIn = " + "200", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"OnConnect\" ]---X--->[ \"TaskRunner\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_TaskRunner.run(targetValues.runIn,targetValues.runEvery);
					
			//airMe.parent.debugLog("Connection Event: [ \"OnConnect\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"TaskRunner\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			airMe.element_RedSlider.trigger();
					
			//airMe.parent.debugLog("Connection Event: [ \"OnConnect\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"RedSlider\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			airMe.element_GreenSlider.trigger();
					
			//airMe.parent.debugLog("Connection Event: [ \"OnConnect\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"GreenSlider\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			airMe.element_BlueSlider.trigger();
					
			//airMe.parent.debugLog("Connection Event: [ \"OnConnect\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"BlueSlider\" ]");
		})();

	};

	this.element_OnConnect_disconnected = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			airMe.element_TaskRunner.pause();
					
			//airMe.parent.debugLog("Connection Event: [ \"OnConnect\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"TaskRunner\" ]");
		})();

	};

	this.element_RedSlider_mouseReleased = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue =  airMe.element_RedSlider.getValue();
			var value = sourceValue;
			atmoLocalValues["value"] = sourceValue;
			try {
				eval("targetValues.value = " + "value", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"RedSlider\" ]---X--->[ \"PWMSet21\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_PWMSet21.execute(targetValues.value);
					
			//airMe.parent.debugLog("Connection Event: [ \"RedSlider\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"PWMSet21\" ]");
		})();

	};

	this.element_RedSlider_onTrigger = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue =  airMe.element_RedSlider.getValue();
			var value = sourceValue;
			atmoLocalValues["value"] = sourceValue;
			try {
				eval("targetValues.value = " + "value", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"RedSlider\" ]---X--->[ \"PWMSet21\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_PWMSet21.execute(targetValues.value);
					
			//airMe.parent.debugLog("Connection Event: [ \"RedSlider\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"PWMSet21\" ]");
		})();

	};

	this.element_GreenSlider_mouseReleased = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue =  airMe.element_GreenSlider.getValue();
			var value = sourceValue;
			atmoLocalValues["value"] = sourceValue;
			try {
				eval("targetValues.value = " + "value", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"GreenSlider\" ]---X--->[ \"PWMSet23\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_PWMSet23.execute(targetValues.value);
					
			//airMe.parent.debugLog("Connection Event: [ \"GreenSlider\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"PWMSet23\" ]");
		})();

	};

	this.element_GreenSlider_onTrigger = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue =  airMe.element_GreenSlider.getValue();
			var value = sourceValue;
			atmoLocalValues["value"] = sourceValue;
			try {
				eval("targetValues.value = " + "value", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"GreenSlider\" ]---X--->[ \"PWMSet23\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_PWMSet23.execute(targetValues.value);
					
			//airMe.parent.debugLog("Connection Event: [ \"GreenSlider\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"PWMSet23\" ]");
		})();

	};

	this.initialize = function() {

			this.layouts = {"iPad": {"devicename": ".*", "elements": {"TermpLabel": {"y": 653.5809128630706, "x": 106.5, "width": 110, "height": 22}, "TempReading": {"y": 706.5809128630706, "x": 145.5, "width": 109, "height": 36}, "GrayBGforSliders": {"y": 440.0643153526971, "x": 395.5, "width": 293, "height": 316}, "AnarenLogo": {"y": 20, "x": 160.21428571428572, "width": 429.57142857142856, "height": 101}, "CompBackground": {"y": 182, "x": 106.5, "width": 203, "height": 203}, "AccelLabel": {"y": 160, "x": 430, "width": 198, "height": 29}, "BlueSlider": {"y": 670.5809128630706, "x": 421, "width": 250, "height": 61}, "JoyControl": {"y": 493.5809128630706, "x": 167.5, "width": 81, "height": 81}, "DebugValue": {"y": 836, "x": 28, "width": 695, "height": 50}, "JoyBackground": {"y": 481.09751037344415, "x": 144.67942583732068, "width": 126.64114832535864, "height": 107.96680497925291}, "GreenLabel": {"y": 553.0809128630706, "x": 422, "width": 114, "height": 21}, "JoyLabel": {"y": 442.09751037344415, "x": 103, "width": 115, "height": 22}, "RedSlider": {"y": 481.5, "x": 422, "width": 250, "height": 61}, "CompassLabel": {"y": 158, "x": 106.5, "width": 114, "height": 27}, "BlueLabel": {"y": 645.5809128630706, "x": 422, "width": 114, "height": 24}, "AccelBubble": {"y": 245, "x": 495, "width": 76, "height": 76}, "CompNeedle": {"y": 214, "x": 138.5, "width": 139, "height": 139}, "AccelBackground": {"y": 182, "x": 432, "width": 200, "height": 200}, "GreenSlider": {"y": 574.5809128630706, "x": 422, "width": 250, "height": 60}, "RedLabel": {"y": 452.59751037344415, "x": 422, "width": 114, "height": 21}, "BGForTemp": {"y": 641.5809128630706, "x": 94.5, "width": 237, "height": 116}}, "orientation": "portrait", "platform": "iOS", "height": 1024, "width": 768, "version": ".*", "name": "iPad 1/2/Mini"}, "Default": {"devicename": ".*", "elements": {"AccelBackground": {"y": 182, "x": 432, "height": 200, "width": 200}, "DebugValue": {"y": 860, "x": 33, "height": 47, "width": 684}, "GrayBGforSliders": {"y": 440.0643153526971, "x": 395.5, "height": 316, "width": 293}, "AnarenLogo": {"y": 20, "x": 160.21428571428572, "height": 101, "width": 429.57142857142856}, "CompBackground": {"y": 182, "x": 106.5, "height": 203, "width": 203}, "AccelLabel": {"y": 160, "x": 430, "height": 29, "width": 198}, "BlueSlider": {"y": 670.5809128630706, "x": 421, "height": 61, "width": 250}, "JoyControl": {"y": 493.5809128630706, "x": 167.5, "height": 81, "width": 81}, "GreenLabel": {"y": 553.0809128630706, "x": 422, "height": 21, "width": 114}, "RedLabel": {"y": 452.59751037344415, "x": 422, "height": 21, "width": 114}, "TermpLabel": {"y": 653.5809128630706, "x": 106.5, "height": 22, "width": 110}, "GreenSlider": {"y": 574.5809128630706, "x": 422, "height": 60, "width": 250}, "RedSlider": {"y": 481.5, "x": 422, "height": 61, "width": 250}, "JoyLabel": {"y": 442.09751037344415, "x": 103, "height": 22, "width": 115}, "BGForTemp": {"y": 641.5809128630706, "x": 94.5, "height": 116, "width": 237}, "CompassLabel": {"y": 158, "x": 106.5, "height": 27, "width": 114}, "BlueLabel": {"y": 645.5809128630706, "x": 422, "height": 24, "width": 114}, "AccelBubble": {"y": 245, "x": 495, "height": 76, "width": 76}, "CompNeedle": {"y": 214, "x": 138.5, "height": 139, "width": 139}, "JoyBackground": {"y": 481.09751037344415, "x": 144.67942583732068, "height": 107.96680497925291, "width": 126.64114832535864}, "TempReading": {"y": 706.5809128630706, "x": 145.5, "height": 36, "width": 109}}, "orientation": "portrait", "platform": ".*", "height": 1024, "width": 768, "version": ".*", "name": "Default (768x1024)"}, "iPhone4": {"devicename": ".*", "elements": {"TermpLabel": {"y": 389, "x": 12.5, "width": 110, "height": 22}, "TempReading": {"y": 415.5, "x": 22, "width": 93, "height": 29}, "GrayBGforSliders": {"y": 251, "x": 148, "width": 164, "height": 178}, "AnarenLogo": {"y": 17, "x": 51.71428571428572, "width": 216.57142857142856, "height": 50}, "CompBackground": {"y": 88, "x": 2, "width": 150, "height": 150}, "AccelLabel": {"y": 68, "x": 164, "width": 128, "height": 26}, "BlueSlider": {"y": 381.5, "x": 150, "width": 160, "height": 45}, "JoyControl": {"y": 277.5, "x": 27, "width": 81, "height": 81}, "DebugValue": {"y": 459, "x": 22, "width": 270, "height": 12}, "JoyBackground": {"y": 263.5331950207471, "x": 4.179425837320679, "width": 126.64114832535864, "height": 107.96680497925291}, "GreenLabel": {"y": 308, "x": 150, "width": 114, "height": 21}, "JoyLabel": {"y": 244, "x": 9, "width": 115, "height": 22}, "RedSlider": {"y": 264.5, "x": 150, "width": 160, "height": 44}, "CompassLabel": {"y": 67.5, "x": 8.5, "width": 114, "height": 27}, "BlueLabel": {"y": 365, "x": 150, "width": 114, "height": 24}, "AccelBubble": {"y": 134, "x": 211, "width": 60, "height": 60}, "CompNeedle": {"y": 113, "x": 26.5, "width": 100, "height": 100}, "AccelBackground": {"y": 88, "x": 165, "width": 150, "height": 150}, "GreenSlider": {"y": 322.5, "x": 150, "width": 160, "height": 44}, "RedLabel": {"y": 251, "x": 150, "width": 114, "height": 21}, "BGForTemp": {"y": 383, "x": 7, "width": 121, "height": 64}}, "orientation": "portrait", "platform": "iOS", "height": 480, "width": 320, "version": ".*", "name": "iPhone 4/4S"}, "iPhone5": {"devicename": ".*", "elements": {"TermpLabel": {"y": 442.09751037344415, "x": 12.5, "width": 110, "height": 22}, "TempReading": {"y": 475, "x": 19, "width": 119, "height": 32}, "GrayBGforSliders": {"y": 248.09751037344415, "x": 161, "width": 150, "height": 250}, "AnarenLogo": {"y": 12, "x": 57.21428571428572, "width": 214, "height": 45.111111111111114}, "CompBackground": {"y": 85, "x": 4, "width": 150, "height": 150}, "AccelLabel": {"y": 65, "x": 174, "width": 120, "height": 23}, "BlueSlider": {"y": 437.09751037344415, "x": 160, "width": 150, "height": 61}, "JoyControl": {"y": 295.59751037344415, "x": 37.5, "width": 81, "height": 81}, "DebugValue": {"y": 529, "x": 29, "width": 265, "height": 23}, "JoyBackground": {"y": 282.1141078838177, "x": 14.679425837320679, "width": 126.64114832535864, "height": 107.96680497925291}, "GreenLabel": {"y": 334, "x": 165, "width": 114, "height": 21}, "JoyLabel": {"y": 251.11410788381772, "x": 10, "width": 115, "height": 22}, "RedSlider": {"y": 266.5, "x": 160.5, "width": 150, "height": 61}, "CompassLabel": {"y": 65, "x": 7.5, "width": 114, "height": 22}, "BlueLabel": {"y": 422.5, "x": 165, "width": 114, "height": 18}, "AccelBubble": {"y": 131.5, "x": 205, "width": 60, "height": 60}, "CompNeedle": {"y": 108, "x": 29, "width": 100, "height": 100}, "AccelBackground": {"y": 85.5, "x": 160, "width": 150, "height": 150}, "GreenSlider": {"y": 350.5, "x": 160, "width": 150, "height": 60}, "RedLabel": {"y": 252.09751037344415, "x": 165, "width": 114, "height": 21}, "BGForTemp": {"y": 438.59751037344415, "x": 7, "width": 138, "height": 74}}, "orientation": "portrait", "platform": "iOS", "height": 568, "width": 320, "version": ".*", "name": "iPhone 5/5C/5S & iPod Touch"}, "iPhone6": {"devicename": ".*", "elements": {"TermpLabel": {"y": 442.09751037344415, "x": 20.5, "width": 110, "height": 22}, "TempReading": {"y": 476.09751037344415, "x": 26.5, "width": 109, "height": 36}, "GrayBGforSliders": {"y": 253.09751037344415, "x": 208, "width": 150, "height": 250}, "AnarenLogo": {"y": 13, "x": 56.21428571428572, "width": 207.57142857142856, "height": 44}, "CompBackground": {"y": 85, "x": 13, "width": 150, "height": 150}, "AccelLabel": {"y": 65, "x": 210, "width": 120, "height": 23}, "BlueSlider": {"y": 442.09751037344415, "x": 210, "width": 150, "height": 61}, "JoyControl": {"y": 295.59751037344415, "x": 45.5, "width": 81, "height": 81}, "DebugValue": {"y": 535, "x": 13, "width": 348, "height": 19}, "JoyBackground": {"y": 282.1141078838177, "x": 22.67942583732068, "width": 126.64114832535864, "height": 107.96680497925291}, "GreenLabel": {"y": 339, "x": 210, "width": 114, "height": 21}, "JoyLabel": {"y": 251.11410788381772, "x": 20, "width": 115, "height": 22}, "RedSlider": {"y": 271.5, "x": 210.5, "width": 150, "height": 61}, "CompassLabel": {"y": 65, "x": 20.5, "width": 114, "height": 22}, "BlueLabel": {"y": 427.5, "x": 210, "width": 114, "height": 18}, "AccelBubble": {"y": 131.5, "x": 255, "width": 60, "height": 60}, "CompNeedle": {"y": 108, "x": 38, "width": 100, "height": 100}, "AccelBackground": {"y": 85.5, "x": 210, "width": 150, "height": 150}, "GreenSlider": {"y": 355.5, "x": 210, "width": 150, "height": 60}, "RedLabel": {"y": 257.09751037344415, "x": 210, "width": 114, "height": 21}, "BGForTemp": {"y": 438.59751037344415, "x": 15, "width": 135, "height": 74}}, "orientation": "portrait", "platform": "iOS", "height": 568, "width": 375, "version": ".*", "name": "iPhone 6"}, "iPhone6Plus": {"devicename": ".*", "elements": {"TermpLabel": {"y": 558, "x": 31, "width": 110, "height": 22}, "TempReading": {"y": 590, "x": 38, "width": 109, "height": 36}, "GrayBGforSliders": {"y": 376, "x": 232, "width": 150, "height": 250}, "AnarenLogo": {"y": 39, "x": 58, "width": 288, "height": 64.29629629629629}, "CompBackground": {"y": 170, "x": 30, "width": 150, "height": 150}, "AccelLabel": {"y": 137, "x": 231, "width": 120, "height": 23}, "BlueSlider": {"y": 565, "x": 230, "width": 150, "height": 61}, "JoyControl": {"y": 396, "x": 55, "width": 81, "height": 81}, "DebugValue": {"y": 679, "x": 28, "width": 355, "height": 22}, "JoyBackground": {"y": 383, "x": 33, "width": 126.64114832535864, "height": 107.96680497925291}, "GreenLabel": {"y": 472, "x": 234, "width": 114, "height": 21}, "JoyLabel": {"y": 347, "x": 34, "width": 115, "height": 22}, "RedSlider": {"y": 403, "x": 230, "width": 150, "height": 61}, "CompassLabel": {"y": 138, "x": 35, "width": 114, "height": 22}, "BlueLabel": {"y": 554, "x": 234, "width": 114, "height": 18}, "AccelBubble": {"y": 216, "x": 278, "width": 60, "height": 60}, "CompNeedle": {"y": 196, "x": 55, "width": 100, "height": 100}, "AccelBackground": {"y": 169, "x": 233, "width": 150, "height": 150}, "GreenSlider": {"y": 487, "x": 230, "width": 150, "height": 60}, "RedLabel": {"y": 389, "x": 234, "width": 114, "height": 21}, "BGForTemp": {"y": 554, "x": 28, "width": 135, "height": 74}}, "orientation": "portrait", "platform": "iOS", "height": 736, "width": 414, "version": ".*", "name": "iPhone 6 Plus"}, "Nexus7": {"devicename": ".*", "elements": {"TermpLabel": {"y": 655.5809128630706, "x": 40.5, "width": 110, "height": 22}, "TempReading": {"y": 706.5809128630706, "x": 53.5, "width": 109, "height": 36}, "GrayBGforSliders": {"y": 442.09751037344415, "x": 299, "width": 259, "height": 316}, "AnarenLogo": {"y": 27, "x": 85.21428571428572, "width": 429.57142857142856, "height": 101}, "CompBackground": {"y": 181.5, "x": 40.5, "width": 203, "height": 203}, "AccelLabel": {"y": 159, "x": 318.7857142857142, "width": 198, "height": 29}, "BlueSlider": {"y": 677.5809128630706, "x": 305, "width": 250, "height": 61}, "JoyControl": {"y": 493.5809128630706, "x": 63.5, "width": 81, "height": 81}, "DebugValue": {"y": 820, "x": 29, "width": 543, "height": 32}, "JoyBackground": {"y": 481.09751037344415, "x": 40.67942583732068, "width": 126.64114832535864, "height": 107.96680497925291}, "GreenLabel": {"y": 564.5809128630706, "x": 305, "width": 114, "height": 21}, "JoyLabel": {"y": 442.09751037344415, "x": 36, "width": 115, "height": 22}, "RedSlider": {"y": 483, "x": 305, "width": 253, "height": 61}, "CompassLabel": {"y": 160, "x": 40.5, "width": 114, "height": 27}, "BlueLabel": {"y": 667.5809128630706, "x": 305, "width": 114, "height": 24}, "AccelBubble": {"y": 245, "x": 381, "width": 76, "height": 76}, "CompNeedle": {"y": 214, "x": 72.5, "width": 139, "height": 139}, "AccelBackground": {"y": 182, "x": 319, "width": 200, "height": 200}, "GreenSlider": {"y": 579.5809128630706, "x": 305, "width": 250, "height": 60}, "RedLabel": {"y": 465.09751037344415, "x": 305, "width": 114, "height": 21}, "BGForTemp": {"y": 645.5809128630706, "x": 31.5, "width": 145, "height": 116}}, "orientation": "portrait", "platform": "Android", "height": 912, "width": 600, "version": ".*", "name": "Nexus 7 (2013)"}};
			this.currentLayout = this.parent.layoutSelector(this.layouts);
			
			
			this.element_TaskRunner = new zebra.util.task(function(c){
				if(airMe.element_TaskRunner_task)
					airMe.element_TaskRunner_task();
			});
			
			this.element_TaskRunner.element_TaskRunner_task = this.element_TaskRunner_task;

			this.element_TaskRunner.trigger = function() {
				if(this.onTrigger)
					this.onTrigger();
			}
			
			if(this.element_TaskRunner_onTrigger)
				this.element_TaskRunner.onTrigger = this.element_TaskRunner_onTrigger;
			
			this.element_TaskRunner.run(2000, 500);
			
		
			this.element_TaskRunner.pause();
			
			this.element_PWMSet22 = new FunctionElement(this.parent, "PWMSet22", 21, "053214bb-4748-4f96-8d3f-c0517ac4bba0", "int", "int");
				
			if(this.element_PWMSet22_onTrigger)
				this.element_PWMSet22.onTrigger = this.element_PWMSet22_onTrigger;
			
			if(this.element_PWMSet22_valueReturned)
				this.element_PWMSet22.valueReturned = this.element_PWMSet22_valueReturned;
				
			if(this.element_PWMSet22_notified)
				this.element_PWMSet22.notified = this.element_PWMSet22_notified;
		
			this.element_PWMSet23 = new FunctionElement(this.parent, "PWMSet23", 23, "053214bb-4748-4f96-8d3f-c0517ac4bba1", "int", "int");
				
			if(this.element_PWMSet23_onTrigger)
				this.element_PWMSet23.onTrigger = this.element_PWMSet23_onTrigger;
			
			if(this.element_PWMSet23_valueReturned)
				this.element_PWMSet23.valueReturned = this.element_PWMSet23_valueReturned;
				
			if(this.element_PWMSet23_notified)
				this.element_PWMSet23.notified = this.element_PWMSet23_notified;
		
			this.element_PWMSet21 = new FunctionElement(this.parent, "PWMSet21", 19, "053214bb-4748-4f96-8d3f-c0517ac4bb9f", "int", "int");
				
			if(this.element_PWMSet21_onTrigger)
				this.element_PWMSet21.onTrigger = this.element_PWMSet21_onTrigger;
			
			if(this.element_PWMSet21_valueReturned)
				this.element_PWMSet21.valueReturned = this.element_PWMSet21_valueReturned;
				
			if(this.element_PWMSet21_notified)
				this.element_PWMSet21.notified = this.element_PWMSet21_notified;
		
			this.element_BlueSlider = new SliderElement(this.parent, "BlueSlider");
			
			this.element_BlueSlider.setVisible(true);
			this.element_BlueSlider.setEnabled(true);
			this.element_BlueSlider.setShowScale(false);
			this.element_BlueSlider.setShowTitle(false);
			this.element_BlueSlider.setMinValue(0);
			this.element_BlueSlider.setMaxValue(19);
			this.element_BlueSlider.setValue(0);
			this.element_BlueSlider.setIntervals([0, 19]);
			this.element_BlueSlider.setScaleStep(1);
			this.element_BlueSlider.setOrientation("Horizontal");

			if(this.element_BlueSlider_onTrigger)
				this.element_BlueSlider.onTrigger = this.element_BlueSlider_onTrigger;
			
			if(this.element_BlueSlider_changed)
				this.element_BlueSlider.changed = this.element_BlueSlider_changed;
				
			if(this.element_BlueSlider_mousePressed)
				this.element_BlueSlider.mousePressed = this.element_BlueSlider_mousePressed;
				
			if(this.element_BlueSlider_mouseClicked)
				this.element_BlueSlider.mouseClicked = this.element_BlueSlider_mouseClicked;
			
			if(this.element_BlueSlider_mouseReleased)
				this.element_BlueSlider.mouseReleased = this.element_BlueSlider_mouseReleased;
			
			if(this.element_BlueSlider_mouseEntered)
				this.element_BlueSlider.mouseEntered = this.element_BlueSlider_mouseEntered;
			
			if(this.element_BlueSlider_mouseMoved)
				this.element_BlueSlider.mouseMoved = this.element_BlueSlider_mouseMoved;
			
			if(this.element_BlueSlider_mouseExited)
				this.element_BlueSlider.mouseExited = this.element_BlueSlider_mouseExited;
			
			this.element_BlueSlider.setBounds(this.layouts[this.currentLayout]["elements"]["BlueSlider"].x, 
							this.layouts[this.currentLayout]["elements"]["BlueSlider"].y, 
							this.layouts[this.currentLayout]["elements"]["BlueSlider"].width, 
							this.layouts[this.currentLayout]["elements"]["BlueSlider"].height);
							
		
			this.element_tmp006_getAmbientTemperature28 = new FunctionElement(this.parent, "tmp006_getAmbientTemperature28", 27, "053214bb-4748-4f96-8d3f-c0517ac4bba3", "float", "void");
				
			if(this.element_tmp006_getAmbientTemperature28_onTrigger)
				this.element_tmp006_getAmbientTemperature28.onTrigger = this.element_tmp006_getAmbientTemperature28_onTrigger;
			
			if(this.element_tmp006_getAmbientTemperature28_valueReturned)
				this.element_tmp006_getAmbientTemperature28.valueReturned = this.element_tmp006_getAmbientTemperature28_valueReturned;
				
			if(this.element_tmp006_getAmbientTemperature28_notified)
				this.element_tmp006_getAmbientTemperature28.notified = this.element_tmp006_getAmbientTemperature28_notified;
		
			this.element_DebugValue = new LabelElement(this.parent, "DebugValue");
			
			this.element_DebugValue.setValue("");
			this.element_DebugValue.setVisible(false);
			this.element_DebugValue.setEnabled(true);
			this.element_DebugValue.setColor("Black");
			this.element_DebugValue.setFont("10px Arial");
			
			if(this.element_DebugValue_onTrigger !== undefined)
				this.element_DebugValue.onTrigger = this.element_DebugValue_onTrigger;
			
			if(this.element_DebugValue_mousePressed !== undefined)
				this.element_DebugValue.mousePressed = this.element_DebugValue_mousePressed;
				
			if(this.element_DebugValue_mouseClicked !== undefined)
				this.element_DebugValue.mouseClicked = this.element_DebugValue_mouseClicked;
			
			if(this.element_DebugValue_mouseReleased !== undefined)
				this.element_DebugValue.mouseReleased = this.element_DebugValue_mouseReleased;
			
			if(this.element_DebugValue_mouseEntered !== undefined)
				this.element_DebugValue.mouseEntered = this.element_DebugValue_mouseEntered;
			
			if(this.element_DebugValue_mouseMoved !== undefined)
				this.element_DebugValue.mouseMoved = this.element_DebugValue_mouseMoved;
			
			if(this.element_DebugValue_mouseExited !== undefined)
				this.element_DebugValue.mouseExited = this.element_DebugValue_mouseExited;
			
			this.element_DebugValue.setBounds(this.layouts[this.currentLayout]["elements"]["DebugValue"].x, 
								this.layouts[this.currentLayout]["elements"]["DebugValue"].y, 
								this.layouts[this.currentLayout]["elements"]["DebugValue"].width, 
								this.layouts[this.currentLayout]["elements"]["DebugValue"].height);
							
		
			this.element_CompassLabel = new LabelElement(this.parent, "CompassLabel");
			
			this.element_CompassLabel.setValue("Compass");
			this.element_CompassLabel.setVisible(true);
			this.element_CompassLabel.setEnabled(true);
			this.element_CompassLabel.setColor("Black");
			this.element_CompassLabel.setFont("18px Arial");
			
			if(this.element_CompassLabel_onTrigger !== undefined)
				this.element_CompassLabel.onTrigger = this.element_CompassLabel_onTrigger;
			
			if(this.element_CompassLabel_mousePressed !== undefined)
				this.element_CompassLabel.mousePressed = this.element_CompassLabel_mousePressed;
				
			if(this.element_CompassLabel_mouseClicked !== undefined)
				this.element_CompassLabel.mouseClicked = this.element_CompassLabel_mouseClicked;
			
			if(this.element_CompassLabel_mouseReleased !== undefined)
				this.element_CompassLabel.mouseReleased = this.element_CompassLabel_mouseReleased;
			
			if(this.element_CompassLabel_mouseEntered !== undefined)
				this.element_CompassLabel.mouseEntered = this.element_CompassLabel_mouseEntered;
			
			if(this.element_CompassLabel_mouseMoved !== undefined)
				this.element_CompassLabel.mouseMoved = this.element_CompassLabel_mouseMoved;
			
			if(this.element_CompassLabel_mouseExited !== undefined)
				this.element_CompassLabel.mouseExited = this.element_CompassLabel_mouseExited;
			
			this.element_CompassLabel.setBounds(this.layouts[this.currentLayout]["elements"]["CompassLabel"].x, 
								this.layouts[this.currentLayout]["elements"]["CompassLabel"].y, 
								this.layouts[this.currentLayout]["elements"]["CompassLabel"].width, 
								this.layouts[this.currentLayout]["elements"]["CompassLabel"].height);
							
		
			this.element_AnarenLogo = new ImageElement(this.parent, "AnarenLogo");
			
			this.element_AnarenLogo.setImage("data:image/jpeg;base64,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BWPgK7sfEgura/EFnC4eJl5kI7oR09RnnI7V3tABRRRQByHxGgeXw1HIoysNyjt7Ahl/mwqD4ZyodGvYQf3i3O8j0BRQP/QT+VdfeWkN9Zy2twgeGVSrr7GvO5vAeuaddM+kX4KNwHWZopMejY4P5/gKAMfxkftnjG9jg+dmaOJcd22qMfnxXsSjaoX0GK4nw14FfT75NQ1SaOWaM7o4kyVDf3iT1P8AXmu3oA8r+JX/ACMkP/Xkn/ob16Tpf/IJsv8Argn/AKCK5fxb4Pvtf1aO7tri3jRbdYiJS2chmOeAf71dbZwm3soIGILRxqhI6HAxQBNRRRQAV5v8Tf8Aj+03/rlJ/Na9Irk/F/ha88Q3FpJazQRiFGVhKTzkjpgH0oA0NA/5Euy/68x/6DXB/Dj/AJGX/t1f+a16PpmnyWXh+30+R0aSOARFl6Zxiua8KeDb7QdX+13NxbyJ5LR4jLZySPUD0oA6rVoXudGvoIwS8lvIigepUgV5D4X0mz1zVPsV1cSQboi0ZTGWYY45Hpk/hXtVefa78Pp5b57vSJokV23mGQldjdflI7Z7cYoAsP8ADfS4kLyaldIg6sxQAfpXW6Vp0ek6ZBYxO7pCuAz4yec9vrXno8B+IdQZV1C+QRjvLO0pH0H/ANcV6TbxPDbRRPK0rogVpG6sQMZP1oA4v4g69FDZHR4gjzTANKSM+WoOR+JI/Ac9xXHaTdXHhjXLS8urU4MYfayjJjcfeX0OM/qPWuwg8Azt4iF7qN6l5bFjK+5dryP2BHTH49sYrb8VeG18QWCrGUS8hOYpG4HPVT7H+YFAG3bzxXVvHPA4kikUMjDoQa5b4i/8iyv/AF8J/I1peF9EudB0w2k979oBbcqhcLHnqB6jPPap/EGkDXNGmsd4jdsMjkZ2sDkfh2/GgDA+G7Kvhy6LMAFu2JJPQbErswcjI6V5QPh5rzM0RNqsZPLGY7T+GM/pXp2nW8trptrbzyCSWKJUdwMBiBgmgB915BtJhdFRbmNhKWOAFxzk9uK5/wAM/wDCLLc3C6Cy+cVHmLukyVB6gP1GT1HrWvrWnHVtGurESeW0yYDeh6jPtkVyXhPwbqGk6yL6+khVYlZUWJi28kYyeOlAHeUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf/9k=");
			this.element_AnarenLogo.setRotation(0);
			this.element_AnarenLogo.setVisible(true);
			this.element_AnarenLogo.setEnabled(true);
			this.element_AnarenLogo.setBackground("transparent");

			if(this.element_AnarenLogo_onTrigger)
				this.element_AnarenLogo.onTrigger = this.element_AnarenLogo_onTrigger;
			
			if(this.element_AnarenLogo_mousePressed)
				this.element_AnarenLogo.mousePressed = this.element_AnarenLogo_mousePressed;
				
			if(this.element_AnarenLogo_mouseClicked)
				this.element_AnarenLogo.mouseClicked = this.element_AnarenLogo_mouseClicked;
			
			if(this.element_AnarenLogo_mouseReleased)
				this.element_AnarenLogo.mouseReleased = this.element_AnarenLogo_mouseReleased;
			
			if(this.element_AnarenLogo_mouseEntered)
				this.element_AnarenLogo.mouseEntered = this.element_AnarenLogo_mouseEntered;
			
			if(this.element_AnarenLogo_mouseMoved)
				this.element_AnarenLogo.mouseMoved = this.element_AnarenLogo_mouseMoved;
			
			if(this.element_AnarenLogo_mouseExited)
				this.element_AnarenLogo.mouseExited = this.element_AnarenLogo_mouseExited;
			
			this.element_AnarenLogo.setBounds(this.layouts[this.currentLayout]["elements"]["AnarenLogo"].x, 
							this.layouts[this.currentLayout]["elements"]["AnarenLogo"].y, 
							this.layouts[this.currentLayout]["elements"]["AnarenLogo"].width, 
							this.layouts[this.currentLayout]["elements"]["AnarenLogo"].height);
							
		
			this.element_JoyBackground = new ImageElement(this.parent, "JoyBackground");
			
			this.element_JoyBackground.setImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeIAAAGiCAYAAAA7scXPAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAANUgAADVIBSqFyHQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7N17XNTXnT/+15kbw00QEFFEES8IIt64KvFCNCBeUBFQS1QU2O3u45v0stntdr/ttr/22zSbXpI+HvvYLagoIUYTjRqj0caaaExMNNbEWo2JGlPjpV6Ixhsi8Pn9MZM0zjmfmQFm5pyZeT//at9Hh7fROe/P5Zz3YZqmgQQmxpgFQA2AxwCkSk6HENJ1XwD4rqZpa2UnQryHUSEOXIyxXwH4vuw8CCE99nNN034kOwniHVSIAxRjbASAowDMsnMhhPTYfQCZmqZ9JDsR4nkG2QkQr/kNqAgTEijMsH2nSQCiQhyAGGMlAGbIzoMQ4lEz7N9tEmDo0XSAYYyZAfwZgsVZK1asQExMjO+TIoR0SUtLC1atWiUaOglglKZp932cEvEik+wEiMf9HwiK8IQJEzB37lwJ6RBCuuPEiRN45513HMOpsH3H6TF1AKFH0wGEMdYHwI8d4xaLBcuXL5eQESGku5YvXw6LxSIa+rH9u04CBBXiwPJzAFGOwblz56Jv374S0iGEdFffvn31nmJFwfZdJwGCCnGAYIyNga15xwNiYmJQXl4uISNCSE+Vl5frreuosX/nSQCgQhw4noXg73PZsmWwWq0S0iGE9JTVasWyZctEQwbYvvMkAFAhDgCMsXIAkxzjqampmDJliu8TIoR4zJQpU5CaKuxQO8n+3Sd+jgqxn2OMWQE8LYijtrYWjDEJWRFCPMXFd/lp+xxA/BgVYv/3BIBBjkEnV9GEED/j5OnWINjmAOLHqBD7McZYIoAfOMadvFcihPgpJ+s9fmCfC4ifokLs354CEOYYdLLSkhDip5zsgAiDbS4gfooKsZ9ijOUDWOwYd7L3kBDi55z0BFhsnxOIH6JC7IeYbdXGswC41RtOuvEQQvycky55DMCzjFZn+iUqxP5pKYBsx2BmZiYmTJggIR1CiK9MmDABmZmZoqFs2OYG4meoEPsZxlgEgCcd4waDAbW1tRIyIoT4Wm1tLQwG4fT9pH2OIH6ECrH/+Q8ACY7BoqIiJCcn+z4bQojPJScno6ioSDSUANscQfwIFWI/whhLAfBdx3h4eDiqqqokZEQIkaWqqgrh4eGioe/a5wriJ6gQ+5dfAwhxDC5atAi9evWSkA4hRJZevXph0aJFoqEQ2OYK4ieoEPsJxtjDALh9SQMGDMCsWbMkZEQIkW3WrFkYMGCAaGiufc4gfoAKsR9gjBkBPCMaq6mpgdFo9HFGhBAVGI1G1NRwp59+5Rn73EEUR4XYP/wjgAzHYHZ2NsaPHy8hHUKIKsaPH4/sbG43I2CbM/7Rx+mQbqBCrDjGWG8AP3WMm0wmrFixQkJGhBDVrFixAiaTSTT0U/scQhRGhVh9PwUQ6xicPXs2EhOpzzshBEhMTMTs2bNFQ7EQXMgTtVAhVhhjLB3Atx3jUVFRqKyslJARIURVlZWViIqKEg192z6XEEVRIVbbMwC4502PPvqo3v5BQkiQCg8Px6OPPioaMkFnsSdRAxViRTHG5gCY7hhPSUnBI488IiEjQojqHnnkEaSkCHt5TLfPKURBVIgVxBizQGdDfm1tLeiAFUKICGPMWc/5X9vnFqIYKsRqehzAUMdgQUEBMjK4XUyEEPK1jIwMFBQUiIaGwja3EMVQIVYMY6wvgB85xi0WC6qrqyVkRAjxN9XV1Xrnkv/IPscQhVAhVs8vAEQ6BufPn4/4+HgJ6RBC/E18fDzmz58vGoqEbY4hCqFCrBDG2HgAyxzjcXFxWLBgge8TIoT4rQULFiAuLk40tMw+1xBFUCFWy7MQ/J0sW7YMISHcoUuEEKIrJCQEy5YtEw0ZYJtriCKoECuCMbYIwETHeFpaGiZPniwhI0KIv5s8eTLS0tJEQxPtcw5RABViBTDGwgA8JYg724pACCEuOdny+JR97iGSCbuEE5/7VwBJjsHCwkIMGzZMQjruuXv3Lvbu3YuWlhbZqRAijcViQWFhIWJiYmSnIjRs2DAUFhbij3/8o+NQEmxzz098nhR5ANM0TXYOQY0xNhDARwBCvxkPDQ3F73//e/TurebBKW+88Qb+93//F3fu3JGdCiHSRUVF4V/+5V8wZswY2akIffHFF/iHf/gH3L1713HoLoARmqb9VUJaxI4eTcv3X3AowgBQUVGhbBG+fv06FWFCvuHGjRt48skncf36ddmpCPXu3RsVFRWioVDY5iAiERViiRhjBQC4Y5T69euH0tJSCRm5p6mpiYowIQ7u3LmDpqYm2WnoKi0tRb9+/URDlfa5iEhChVgSxpjuFoIVK1bAbDb7OCP3nD59Grt375adBiFK2r17N06fPi07DSGz2YwVK1boDT9rn5OIBLRYS55qAOMcg2PGjEFubq6EdNxTX18P0bqCuLg4GI1G3Lp1Cx0dHRIyI8T7GGOIjIwEYwydnZ24cuXKA+OapqG+vh5PPcVtglBCbm4uxowZgw8++MBxaBxsc9Iq32dFaLGWBIyxXgA+AfBAz0qDwYDf/e53GDRokJzEXNi3bx+efvppLj5o0CD8+7//OxhjuHTpEl555RUJ2RHifZMnT0ZqaurX//+pp57CmTNnuF/3xBNPYNKkSb5MzW2fffYZHnvsMXR2djoOXQYwTNO0LyWkFdToUYQcP4JDEQaAGTNmKFuE29ra0NjYKByrrKz8ep9iQkIChg7lDo4ixO/FxcVh+PDhD8QWLlwo3KPb2NiItrY2X6XWJYMGDcKMGTNEQ/EQHDhDvI8KsY8xxoYBeMwxHhkZiW9961sSMnLPpk2bcPXqVS6enZ2NIUOGPBDLycmByURvPUhgmTBhAld0Bw0ahPz8fO7XXr16FZs2bfJVal32rW99C5GR3NkyAPCYfY4iPkSF2Pd+A4A7n2zx4sV6Xwzprl69io0bN3Jxi8WCsrIyLh4REYHRo0f7IjVCfGLIkCFISEgQjs2bNw9Wq5WLb9y4UXjxqoLIyEgsXrxYNGSBbY4iPkSF2IcYY0UAZjnGBw4cqPeoSAl6j9mKiop09zqPHj0aERER3k6NEK8zmUxOF1D26tULJSUlXNzZ6xwVzJgxAwMHDhQNzbLPVcRHqBD7CGPMBOC3orHa2loYjUYfZ+Se48ePY9++fVw8JiYGRUX631VXkxch/sKdi8qHH34Yffr04eL79u3D8ePHvZVajxiNRme97H9rn7OID1Ah9p1/AsAdg/LVdgIVfbUVQ6SsrMzlXmdnj/MI8QfuvmYxmUy6Z4brbflTgZPtkmmwzVnEB6gQ+wBjLBaCxuomk8nZBnvp9JoTDB06FFlZWW59hmiBCyH+Ijc31+2Fh2PGjMGIESO4uOpNcFasWKH3Z/yJfe4iXkaF2Dd+BoB7meqk5Zx0eu36GGOorOS6cuqKi4t7YN8lIf4iISGB2xHgSmVlJQwGflpVuS2sk5a6vWGbu4iXUSH2MsbYKAB1jvHo6OguFTRf27Bhg7CB/YQJE/QWeOjKzs6GxcItFCdEWYwxTJgwocu/r3///sJGHtevX8eGDRs8kZpXVFZWIjo6WjRUZ5/DiBdRIfa+ZwBwK7GWLFmC0FDu0CUlXLx4Udgdy2q1Yt68eV3+vNDQUIwbx3XzJERZqampiIuL69bvnTNnDsLDw7n4K6+8gosXL/Y0Na8IDQ3FkiVLRENG2OYw4kVUiL2IMTYPQKFjfOjQoZg2bZqEjNyzcuVKtLe3c/GZM2d2e69zRkYGoqKiepoaIV5nsViQnZ3d7d8fHh6O2bNnc/H29nasXLmyJ6l51bRp0/S64hXa5zLiJVSIvYQxFgLgV6Kxuro6ZRcwHTlyBAcPHuTi8fHxKCzkrincZjAYhB2ICFHNuHHjevy0avLkycL1HwcPHsSRI0d69NnewhhDXR33Fu0rv7LPacQLqBB7z/cApDgGJ02ahLQ0bheTEjo6OtDQ0CAcKy8v73HbyoEDB2LAgAE9+gxCvCkqKgoZGRk9/hyDwaC7BqShoUHZE8rS0tL0DqtIgW1OI15AhdgLGGP9APzQMR4SEoLq6moJGblnx44dOHfuHBcfOXIkMjMzPfIzJkyYIFxVSogK8vPzPfbvMy0tTbgH+dy5c9ixY4dHfoY3VFdXIyREePP7Q/vcRjyMZkTv+CUArhXPggULur0AxNtu3ryJdevWcXGDwYDy8nKP/Zzo6Gikp6d77PMI8ZQBAwZ0eUeAKwsWLBA+SVq3bh1u3rzp0Z/lKXFxcXrNSSJgm9uIh1Eh9jDGWA6ARx3jffr0wfz58yVk5J7m5mbcunWLi0+ZMsXje52zsrKETfIJkcVgMHRru5Iremsrbt26hebmZo//PE+ZP3++sGUngEftcxzxICrEHsRsK7CeBcCtxKqurlZ2L+1nn32GnTt3cnG91Z89ZbFY3O7MRYgvpKen6+2j7bGZM2eiV69eXHznzp347LPPvPIze8pisei9RmMAnmWqrjb1U1SIPetbAPIcgyNHjsRDDz0kIR331NfXo7Ozk4uXlpYiLCzMKz8zLS0NMTExXvlsQrrCarV69cLQarVi7ty5XLyzs1O3l7sKHnroIYwcOVI0lAfbXEc8hAqxhzDGwiF4f+JiS4B0Bw4cwNGjR7l4YmKiVy8eutu5iBBPy8rK8vrTqgkTJmDQoEFc/OjRozhw4IBXf3ZPONlq+Uv7nEc8gAqx5/w7gETH4PTp05GSwu1iUsL9+/exevVq4VhFRYXXVzf3798fgwcP9urPIMSZmJgYn2wndNajffXq1bh//77Xc+iOlJQUTJ8+XTSUCNucRzyACrEHMMaSAXzfMR4WFqbXNk4JW7duxaVLl7j42LFjhafIeENeXp6yZzGTwOfL08GGDBki7Nh16dIlbN261Sc5dMeSJUv0XlF93z73kR6iQuwZTwPglgEvXLhQ2baOLS0twib0zs5V9YbIyEiP7VEmpCsGDx6M/v37+/RnlpWVCR+Db9iwAS0tLT7NxV1RUVFYuHChaMgK29xHeogKcQ8xxqYA4CpX//79vbLi2FOamprQ2trKxadPn+7zvc5jx4712qIwQkSMRiPy8rh1lV7Xu3dvFBUVcfHW1lbhsaOqmD17tt5FywL7HEh6gApxDzDGDNA5maSmpqbHLSG95ZNPPsGePXu4eFRUFGbMmOHzfEwmE3Jzc33+c0nwyszM7PYBJj1VVFQk3DGwZ88efPLJJxIycs1kMqGmpkZv+Bn7XEi6if7j9UwtAK6H3bhx43p0eos3aZqG+vp6aJrGjc2fP1+vtZ3XDRs2DPHx8VJ+NgkuYWFhGDt2rLSfbzabUVZWxsWdfTdVkJ2drXec6WjY5kLSTVSIu4kxFg3g545xo9Ho7MpRur179+Kjjz7i4snJydLvSmk7E/GF3Nxc6U+rsrKyhEcOfvTRR9i7d6+EjNxTU1Ojt7jy5/Y5kXQDFeLu+08A3MvUkpISJCUlSUjHtdbWVqxZs4aLf7W1QnaznPj4eAwfPlxqDiSwxcfHY9iwYbLTAADd79yaNWuE6zdUkJSUhJKSEtFQHGxzIukGKsTdwBgbAeCfHeORkZFYvHixhIzcs3HjRly7do2L5+bmKrPXOScnB2azWXYaJECp9NRl4MCBwnyuXbuGjRs3SsjIPYsXL9Z7v/7P9rmRdBEV4u75DQCuWlRVVSEigjt0SQmXL1/G5s2buXhISAjmzZsnISMx2e/vSOAaPny4cusQ5s2bJzwAZfPmzbh8+bKEjFyLiIhAVVWVaMgM29xIuogKcRcxxkoAcEuLk5OTUVxcLCEj96xevRptbW1cvLi42GvN7rtr1KhR0la0ksBkNpuRk6PeoUGRkZGYOXMmF29ra9PteqeC4uJiJCcni4Zm2OdI0gVUiLuAMaZ7xVdbW6vsgffHjh3D22+/zcVjY2P12tdJJWuPJwlcY8aMUXavemFhofBO/e2338axY8ckZOSawWBAba3uQunf2OdK4iY1K4e6/g+AVMdgfn6+st2hNE1DQ0ODcGzBggXKvo+V0fWIBCbVu7eZTCaUl5cLxxoaGpTdzpSZmYn8/HzRUCpscyVxExViNzHG+gD4sWPcbDZjxYoVEjJyz65du3DmzBkuPnz4cL09gcrwZR9gErj8oZ95ZmYm0tPTufiZM2ewa9cuCRm5Z8WKFXoX8z+2z5nEDVSI3fdzAFzj6Llz56Jv374S0nHt9u3baG5u5uIGg0H3JBiV+OpkHBK4/OmEL70Tz5qbm3H79m0JGbnWt29f4VnLsM2VXJ8FIkaF2A2MsTEAuC4dMTExqKiokJCRe1544QXcuHGDixcUFGDAgAESMuq6rKwsad2+iH/ztzOv+/XrhylTpnDxGzdu4IUXXvB9Qm6qqKgQtuwEUGOfO4kLVIjd8ywE/62WLl0q3HqggvPnz2P79u1cPCwsDKWlpRIy6h6r1Yrx48fLToP4obS0NL0CoazZs2cjPDyci2/fvh3nz5+XkJFrVqsVS5cuFQ0ZYJs7iQtUiF1gjJUDmOQYHz58OKZOnSohI/esXLkS7e3tXHzWrFnK7nXWk56ertwWK6K2kJAQZGVlyU6jy8LCwjBnzhwu3t7ejpUrV0rIyD1Tp07V64o3yT6HEieoEDvBGBOet8kYQ11dnbILiQ4fPoz333+fiyckJCh98aDHYDD41SNGIt/48eOVfVrlyqRJk5CYmMjF33//fRw+fFhCRq65mBOfts+lRAcVYueeADDIMThlyhSkpnK7mJTQ3t6uu11JbzGIPxgwYAAGDhwoOw3iB6Kjo4UrkP2FwWDQXXvS0NAgfNKlgtTUVOE7btjm0Cd8m41/8c9Z2QcYY4kAfuAYd/I+RAl675JGjRqFkSNHSsjIc/Lz8/32QoL4zoQJE/z+38mIESOErV711n6owsm6mR/Y51Qi4N//Wr3rKQBcK57y8nLExsZKSMc1vdWVRqNRt2GAP4mKikJGRobsNIjCBg4c6Dc7AlxZsGCB8LhGvd0QKoiNjdWba8Jgm1OJABViAcZYPgDuGKX4+Hi9PXNK0NtvWFhYqOxe564aN24cQkNDZadBFGQwGPQ6PfmluLg4YQtavf4Aqpg7d67e4RqL7XMrcUCF2AGzrTZ4FgC36mD58uWwWCy+T8oNn376qbADj15TeX9lsViQnZ0tOw2ioIyMDERFcT13/NqMGTOEf6Zdu3bh008/lZCRaxaLBcuXLxcNMQDPMlVXuUpEhZi3FAA3048aNQoTJ06UkI576uvrhT1pS0tLA+4OMjU1FXFxcbLTIAoJDQ1VvmVrd+gdU6ppGurr6yVk5J6JEydi1KhRoqFs2OZY8g1UiL+BMRYB4ElB3NlJI9LpndKSlJSEgoICCRl5l791TCLel52drezTqp7Ky8sTHjmod6qaKmpra/W2Mz1pn2uJHRXiB/0HgATHYFFRkbL9ap2dW1pZWansXueeSkhIwJAhQ2SnQRQQFxen7HZCT2CM6X6X9c4ZV8HgwYNRVFQkGkqAba4ldlSI7RhjKQC+6xgPDw/Ho48+KiEj92zevBmXL1/m4llZWRg2bJiEjHwnNzdXuKqUBJdgOKUrJSUFOTk5XPzy5cvYvHmzhIzc8+ijjwpbdgL4rn3OJaBC/E2/BsCdLrBo0SL06tVLQjquXbt2DRs3buTiZrMZZWVlEjLyrYiICIwePVp2GkSiIUOGICGBe4gVkObPny88AGXjxo24du2ahIxc69WrFxYtWiQaCoFtziWgQgwAYIw9DIDblzRgwAClVxyvXbsWra2tXLyoqMjvmt131+jRo/2udzbxDJPJhNzcXNlp+Ex0dDSKi4u5eGtrK9auXSshI/fMnDlTb2/3XPvcG/SCvhAzxowAnhGN1dTUKPvo8+TJk3jzzTe5eO/evfXeywSkYJuMyd8F40XY9OnThQ2F3nzzTZw8eVJCRq6ZTCbU1HCnyH7lGfscHNSCvhAD+EcAXLumrKwsZY/f+2rrgmi70vz58wN29aieYHo8SWyC9bWE2WzGggULuLizOUEF48eP1zsNKwO2OTioBXUhZoz1BvBTx7iLKzjp9uzZg48//piLDxkyRLigIxgEw4Id8nfBvFBv3LhxwiMHP/74Y+zZs0dCRu5x8oTxp/a5OGgFdSGGrQhzz3lmzZolPIZMBa2trWhqauLiX21xCFaBvoWF/B1tXdPfmtjU1CRcN6KCxMREzJo1SzQUC8ENUTAJ2kLMGEsH8G3HeFRUFBYuXCghI/e8+OKLaGlp4eL5+fkYNIg7sTGoBHJTB2JDzVxsBgwYIGzW09LSghdffFFCRu5ZuHChXhvSb9vn5KAUtIUYtgVa3HOSqqoqvX1v0l26dAlbtmzh4larVdgGL9gEaptD8nfU3vTv9NrXbtmyBZcuXZKQkWvh4eGoqqoSDZmgs2g2GARlIWaMzQHAHWuSkpKi9Irj1atX4/79+1y8pKRE2b3OvhaIjf+JDR348aDIyEjho9779+/rdttTQVFREVJShL08ptvn5qATdIWYMWaBzkZyJ71RpTt69CgOHDjAxfv06YOHH6ateF8xGAzIy8uTnQbxgrFjxwbcASY9NXXqVOERpwcOHMDRo0clZOSai979v7bP0UEl6AoxgMcBDHUMFhQUKHvofGdnJxoaGoRj5eXlQbt6VM+gQYMC5nB4YhMVFaV3mk9QMxqNqKioEI41NDSgs7PTxxm5JyMjQ+9AmqGwzdFBJagKMWOsL4AfOcYtFguqq6slZOSenTt34uzZs1w8LS0tKPdSumPChAkwGILqn3dAy8vLo79PHRkZGcKbiLNnz2Lnzp0SMnJPdXW13uLKH9nn6qARbP+yfwEg0jE4b948xMfHS0jHtVu3bqG5uZmLGwwG3SthYmsHmJ4etIswA8qAAQOCfkeAKxUVFTAa+QZVzc3NuHXrloSMXIuPj9dbZBoJ21wdNIKmEDPGxgNY5hiPjY0VdqpRxbp163Dz5k0uPnnyZPTv319CRv5j/PjxsFqtstMgPWAwGJCfny87DeX17dsXU6dO5eI3b97EunXrJGTkngULFghbdgJYZp+zg0LQFGIAz0Lw5122bJmyk/W5c+ewY8cOLh4eHo7Zs2dLyMi/hISE6LXVI34iPT0dvXsHddMlt82aNQuRkdwDP+zYsQPnzp2TkJFrVqsVy5YtEw0ZYJuzg0JQFGLG2CIAEx3jI0aMwOTJkyVk5J6GhgZ0dHRw8Tlz5ii711k1aWlpQXMSVaCxWq3K9ntXUWhoKEpLS7l4R0eH7mJPFUyePBkjRowQDU20z90BL+ALMWMsDMBTgjjq6uqU3a508OBBHDlyhIv3798fkyZNkpCRf6JOTP4rKytLeP4u0VdQUCDcMXDkyBEcPHhQQkauuZiLn7LP4QEt4AsxgH8FkOQYLCwsxLBhwySk41p7eztWrVolHKuoqKDVo13Uv39/DB48WHYapAtiYmKQlpYmOw2/46zn/KpVq9De3u7jjNwzbNgwFBYWioaSYJvDA1pAz+iMsYEQ/CVarVYsWbJEQkbu2bZtGy5cuMDFR48eTZNTN+Xl5QlXlRI10Wla3Td8+HBhq9cLFy5g27ZtEjJyz5IlS/TW6/yrfS4PWAFdiAH8FwCuFU9lZaWy7w2vX7+O9evXc3GTyYTy8nIJGQWGyMhIagjhJ5KTk2lHQA8tWLAAZrOZi69fvx7Xr1+XkJFrMTExenfzobDN5QErYAsxY6wAAPe3mpCQIFzQoIqmpibcuXOHiz/88MPo06ePhIwCx9ixYxEWFvCvm/ya0Wik7UoeEBsbi+nTuXb6uHPnjvAYVVWUlpYiISFBNFRpn9MDUkAWYsaY7tL3FStWCK8UVXD69Gns3r2bi/fq1QslJSUSMgosZrMZOTk5stMgTowaNUq4BYd0XXFxMaKjo7n47t27cfr0aQkZuWY2m7FixQq94Wftc3vACcg/FIBqANxLktGjRyt9IEB9fT00TePi8+bNU3avs78ZPny4sl3Ugl1YWBjGjh0rO42AERISgvnz53NxTdNQX18vISP35OXl6bXuHQfb3B5wAq4QM8Z6QdAezWAwODvxQ7p9+/bh+PHjXHzQoEH0qM7DaDuTmnJycpR9WuWvcnJyhEcOHj9+HPv27ZOQkXtqa2v1dof8wj7HB5SAK8SwHerA3fIUFxcr26+2ra0NjY2NwrHKykpaPeph8fHxym5dC1bx8fEYPny47DQCzlfbmURzSGNjI9ra2iRk5dqgQYNQXFwsGoqH4OAefxdQhZgxNgzAY47xiIgIVFVVScjIPZs2bcLVq1e5eE5ODoYMGSIho8CXm5tLx0cqhJ5SeE9ycrLwldzVq1exadMmCRm5p6qqChEREaKhx+xzfcAIqEIM4DcAuHO1Fi9erOwCEL0vg8ViEb7fIZ5B7yPVMWzYMHpv72Xz5s0TdinTuwlQQWRkJBYvXiwassA21weMgCnEjLEiALMc40lJSUqvOG5sbMS9e/e4eHFxMTW797LMzExlL9CChclkQm5uruw0Al5UVBRmzJjBxe/du6f7WkwFJSUlSEriGiMCwCz7nB8QAqIQM8ZMAH4rGqutrVW2o9KJEyeECyZiY2PxyCOPSMgouBiNRqVX0QcD2tvtO9OnT0dcXBwX37dvH06cOCEhI9eMRqOzRba/tc/9fi8gCjGAfwLA9X7MyclR9vGjsy0EZWVltHrURwYPHkxdnCSJjIxEZmam7DSChslk0j17XW/rpArGjh2rt/8/Dba53+/5fSFmjMUC+Ilj3GQyoaamxvcJuWn37t04deoUFx82bBgd/eZj1NdYDur/7Xtjx44VHjl46tQpYTMhVdTU1OgtrvyJvQb4Nb8vxAB+BoB7mTpnzhz069dPQjqu6bWZc3ZyCvEeOunH9+hELHn0TnDTa6+rgn79+mHOnDmiod6w1QC/5teFmDE2CkCdYzw6OlrpgrZhwwZh4/WCggK9hQnEy7KysmCxcAvuiRfQGdFyJSYm4qGHR7QpeQAAIABJREFUHuLi169fx4YNGyRk5J7Kykphy04AdfZa4Lf8uhADeAYA92xryZIlyi4AuXjxIl555RUuHhoaqvRhFIHOarUiKytLdhpBIS0tTdnTz4JFaWmpcI585ZVXcPHiRQkZuRYWFqZ3fK0Rtlrgt/y2EDPG5gHgTpIeMmQIpk2bJiEj96xcuVJ4OPesWbNoK41k6enpelfcxEMsFgtd8CggPDwcs2fP5uLt7e1YuXKlhIzcM23aNL0mR4X2muCX/LIQM8ZCAPxKNFZXV6fswpsjR47g4MGDXLxv376YOnWqhIzINxkMBnpk6mVZWVl0gIkipkyZIlxHc/DgQRw5ckRCRq4xxlBXx72N/Mqv7LXB7/hlIQbwPQBcJ/NJkyYhPT1dQjqudXR0oKGhQThWUVFBq0cVMWDAAAwcOFB2GgEpOjpa2e9nMDIYDKioqBCONTQ0oKOjw8cZuSc9PR2TJk0SDaXAVhv8jt8VYsZYPwA/dIxbLBZUV6t7QtaOHTtw7tw5Lp6RkYGMjAwJGRE9+fn5eie/kB6g/67qSU9PF+7lPnfuHHbs2CEhI/dUV1frLa78ob1G+BV//Fb8EgDXCXzBggXCrjEquHnzJtatW8fFjUYjysvLJWREnImKiqKLIw8bOHAg7QhQVHl5uXCP7rp163Dz5k0JGbkWFxen15wkArYa4Vf8qhAzxnIAPOoYj4uLQ1lZmYSM3NPc3Ixbt25x8SlTpiAhIUFCRsSVcePGITQ0VHYaAcFgMNCZ2gqLj49HYSG37hW3bt1Cc3OzhIzcU1ZWpnfz9ai9VvgNvynEzLYC61kA3EosJ48ppPvss8+wc+dOLh4REYFZs7gzKogiLBYLsrOzZacREDIyMhAVFSU7DeLEzJkzhbs2du7cic8++0xCRq45eR3JADzLVF21K+A3hRjAtwBwHfqdvLhXQkNDAzo7O7m43j4+oo7U1FRlX3f4i9DQUIwbN052GsQFq9WKefP43T+dnZ26i0xV4GSBbh5sNcMv+EUhZoyFQ/Dc38VSduneffddfPjhh1x8wIABws42RC3UAarnsrOzlX1aRR40YcIE4Y6BDz/8EO+++66EjNzjZMvqL+21Q3l+UYgB/DuARMegk83d0t2/fx+rVq0SjlVWViq715k8KCEhQdl/Y6qLi4tDamqq7DSIm5z1ul+1ahXu37/v44zc46SJUyJstUN5yhdixlgygO87xp20O1PC1q1bcenSJS4+btw4DB8+XEJGpLtyc3P1Tn4hTtCpVv5n6NChws5nly5dwtatWyVk5B4nbY2/b68hSlO+EAN4GgDXisdJA3DpWlpahM3TzWaz7nmgRF0RERF0bm4XpaSk0I4AP6V3HvqGDRvQ0tIiISPXnBz0Y4WthihN6ULMGJsCgKtcTo7EUkJTUxNaW1u5+PTp0xEb6/dHZwalMWPGICKC275OBEwmE/LyuHWVxE/ExMSgqKiIi7e2tgqPb1WFk6NvF9hribKULcSMMQN0TtRwcki0dJ988gn27NnDxaOjo1FcXCwhI+IJJpMJOTl+tTVRmszMTLpo8XNFRUXo3Zs75h179uzBJ598IiEj10wmE2pqavSGn7HXFCUpmxiAWgCjHYNjx45VdkLUNA319fXQNI0bmz9/PkJC/LIfObEbOnQoPW51ITw8HGPGjJGdBukhi8UibJLkbI5TQU5ODsaOHSsaGg1bTVGSkoWYMRYN4OeOcaPRiNpaZf9bYu/evfjoo4+4eEpKirIXD6RraAGSc7SwLXBkZ2cLdwx89NFH2Lt3r4SM3FNbW6t3iM7P7bVFOUoWYgD/CYDrpFBSUqJsv9rW1lasWbOGi3+1JYAm78AQFxdHq951JCQkYOjQobLTIB6kN3etWbNGuA5GBUlJSSgpKRENxcFWW5SjXCFmjI0A8M+O8cjISCxevFhCRu7ZuHEjrl27xsXz8vKQnJzs+4SI1+Tk5AhXlQY7an4SeAYNGiT8e7127Ro2btwoISP3LF68WNiyE8A/22uMUpQrxAB+A4Cb5aqqqpRdAHL58mVs3ryZi4eEhAjbxhH/Rm0bedQONHDNnTsXViu3gxSbN2/G5cuXJWTkWkREBKqqqkRDZthqjFKUKsSMsRIAMxzjgwYNUnrFcWNjI9ra2rj4jBkzqNl9gBo1ahR69eolOw0lmM1mWgMRwHr16iV81NvW1obGxkYJGbmnuLgYgwYNEg3NsNcaZShTiBljulcqdXV1yh4ofuzYMezfv5+Lx8XFYfr06RIyIr5AR/v9HR0ZGfgefvhhxMfHc/H9+/fj2LFjEjJyzWAwODuL4Df2mqMElarb/wHANabNz89XtquRpmm6J5MsWLCAVo8GuEGDBmHAgAGy05CqV69eGDVqlOw0iJeZTCbdroANDQ3KbmfKzMzUu2BOha3mKEGJQswY6wPgx45xs9mM5cuXS8jIPbt27cKZM2e4+IgRI/T2spEAk5+fr+zTGl8I9j9/MBk9ejTS0tK4+JkzZ7Br1y4JGbln+fLleosrf2yvPdKp8g36OQDuZWppaamyDRRu376N5uZmLm4wGFBRUSEhIyJD79699c5DDXgDBgzQewdHAlRFRYXwwqu5uRm3b9+WkJFrCQkJKC0tFQ1FQdCvQgbphZgxNgYA15csJiZG90guFaxfvx43btzg4pMmTUJiIndiIwlg48ePF64qDWT0jjw49e/fH5MnT+biN27cwPr16yVk5J7KykrExMSIhmrsNUgq6YUYwLMQ5LFkyRJlJ7fz58/j1Vdf5eJhYWFKH0ZBvCMkJER4dFwgS09PF/YiJoFv9uzZCA8P5+Kvvvoqzp8/LyEj16xWq96xuQbYapBUUgsxY6wcwCTH+LBhw1BYWCghI/esXLkS7e3tXFzvHygJfGlpaXpX3AHHarVi/PjxstMgkoSHhwtvONrb27Fy5UoJGbmnsLAQw4YNEw1NstciaaQVYsaY8JxIxhjq6uqUbQl5+PBhvP/++1y8X79+mDJliu8TIkpgjAXNo9qsrCw6wCTITZo0Cf379+fi77//Pg4fPiwhI9dc1Jan7TVJCpl3xE8A4FZ6TJ48GSNGKNeBDIDtik9vu5LeIgYSPBITEwO+nWlMTIxw5SwJLgaDQXcNT0NDg/CJoQpGjBghfMcNWy16wsfpfE1K5WCMJQL4gWPcarVi2bJlvk/ITdu3bxe+A8nMzAzalbPkQXl5eXonvwSE/Px8ZZ9WEd8aMWIERo/mTqrF+fPnsX37dgkZuWfZsmV6649+YK9NPifrFu4pAGGOwQULFiA2NlZCOq7duHEDL7zwAhc3mUwoL5f6eoEoJJAbXCQnJ9OOAPKA8vJyYeOiF154QbirRAWxsbF6zUnCYKtNPufzQswYywfAHaMUHx+v9AEJevvkCgsLha3fSPAaO3YswsK460y/ZjQakZeXJzsNopg+ffrg4Ycf5uJ6fRZUMW/ePL15e7G9RvmUTwsxsz3TehYA92xr+fLlsFgsvkzHbZ9++qmwc0yvXr0wc+ZMCRkRlQXiIQh0yAXRU1JSIvy3sWvXLnz66acSMnLNYrHodW1kAJ5lPn7/4us74qUAsh2DGRkZmDhxoo9TcV99fb2wl6re8WCEDB8+PGCelISFhVHLVqLLarUKn2Zqmob6+noJGbln4sSJyMjIEA1lw1arfMZnhZgxFgHgSUEctbW1vkqjy95++23h6SIDBw6kg9CJU4Hy7yMnJ0evVy8hAGyL+ETtTo8dO4a3335bQkbuqa2t1Vt8+KS9ZvmEL++I/wMA1zi6qKgIKSkpPkzDfW1tbVi9erVwrLKyklaPEqfi4+P1Ggj4jT59+mD48OGy0yCKY4zpbmdavXq18Lx2FaSkpKCoqEg0lABbzfIJnxRixlgKgO86xsPDw1FVVeWLFLply5YtuHz5MhfPzs7G0KFDJWRE/E1OTo5fH4ep8isjopYhQ4YI10ZcvnwZW7ZskZCRe6qqqvQ6In7XXru8zld3xL8GwLXiWbRoEaKiuEOXlHDt2jW89NJLXNxsNqOsrExCRsQfhYeH++371WHDhgXMe27iG/Pnzxcuun3ppZdw7do1CRm5FhUVhUWLFomGQmCrXV7n9ULMGHsYwFzHeGJiotIrjteuXYvW1lYuXlxcTM3uSZdkZmYiMjJSdhpdYjKZAm7lN/G+3r17o7i4mIu3trZi7dq1EjJyz8yZM/X2yM+11zCv8mohZowZATwjGqupqVH2kd3Jkyfx5ptvcvHevXvrvU8gRJfRaERubq7sNLpkzJgxdIAJ6ZZHHnlE2JjpzTffxMmTJyVk5JrJZEJNDXca71eesdcyr/H2HfE/AuDWh48fP17ZY+O+WnIv2q5UVlZGq0dJt6SkpAib5KsoMjJS2LqQEHeYzWbMnz+fizubW1WQlZWld6pYBmy1zGu8VogZY70B/NQxbjKZlN6utGfPHnz88cdcfOjQocjO5rZAE+I2f+nTnJubG9D9son3ZWVlCXcMfPzxx9izZ4+EjNxTW1ur96T2p/aa5hXevCP+KQDu+YSTZ/HStba2oqmpiYs7W5pPiLtiY2OVPVnsK/369VN2OyHxL3pbPJuamoTrb1TgZO1SLAQ3lp7ilULMGEsH8G3HuJPVaUp48cUX0dLSwsUnTJiAgQMHSsiIBJrs7GxlW7kyxgKmCQmRLykpCQUFBVy8paUFL774ooSM3ONkN8+37bXN47x1R/wMAO7+3sl+LekuXbok3OtmtVoxdy636JuQbrFarXrvoaQbMWKEsqefEf9UWlqK0NBQLr5lyxZcunRJQkauOelvYYLO4uOe8nghZozNATDdMT548GClVxyvXr0a9+/f5+IzZ86kZvfEo0aOHIno6GjZaTzAYrHQGgjicZGRkcJHvffv39ftWqiCoqIiDB48WDQ03V7jPMqjhZgxZoHOBui6ujplF6ocPXoUBw4c4OLx8fEoLCyUkBEJZAaDAfn5Pj9pzanx48fTASbEKwoLC9G3b18ufuDAARw9elRCRq4xxlBXV6c3/Gt7rfMYT98RPw6A6/3o5JQL6To7O9HQ0CAc0zv0mpCeSkpKUmbdQXR0NEaOHCk7DRKgjEYjysvLhWMNDQ3o7Oz0cUbucXIq4FDYap3HeKwQM8b6AviRY9zJuY9K2LlzJ86ePcvF09PTkZmZ6fuESNDIz8+HweDrk0jVzYMErlGjRgkv9s6ePYudO3dKyMg9y5cv11tc+SN7zfMIT377fgGA6+M3d+5cZfvV3rp1C83NzVzcYDCgoqJCQkYkmERFRUl/UjRw4EAkJSVJzYEEh4qKCuEFX3NzM27duiUhI9fi4+P1FutGwlbzPMIjhZgxNh7AMsd4bGys7iMJFaxbtw43b97k4lOmTEG/fv0kZESCzbhx46S9m1XxXTUJXAkJCZg6dSoXv3nzJtatWychI/eUl5fr7SZYZq99PeapO+JnRZ+1dOlSZReAnDt3Djt27ODi4eHhmD17toSMSDCyWCzSDlfIyMhQ9vQzEphmzZqFiIgILr5jxw6cO3dOQkauWa1WLF26VDRkgK329ViPCzFjbBEA7o12amoqpkyZ0tOP95qGhgZ0dHRw8dLSUoSFhUnIiASr1NRUn+/ftVqtGDdunE9/JiFhYWEoLS3l4h0dHbqLZlUwZcoUpKamioYm2mtgj/SoEDPGwgA8JYgrvV3p0KFDOHLkCBdPTEzEQw89JCEjEsxkdLTKyclRtsMXCWwFBQUYMGAAFz9y5AgOHTokISPXXNS0p+y1sNt6ekf8rwC4lR6FhYUYPnx4Dz/aO9rb27Fy5UrhmN5iAkK8zZc9nmNjY/Wu7gnxOmeLYVeuXIn29nYfZ+Se4cOH6/WVSIKtFnZbt6sOY2yg6IdbrVYsWbKkJzl51bZt23DhwgUuPnbsWOUb8pPAlpeX55N96xMmTFD2aRUJDqmpqcJXIxcuXMC2bdskZOSeJUuW6K17+ld7TeyWntz+/RcAroloRUUFYmJievCx3nPjxg2sX7+ei5tMJixYsEBCRoT8XUREhNf3rqekpNCOAKIEvfPd169fjxs3bkjIyLWYmBi9u/lQ2Gpit3SrEDPGCgBw5wImJCQofUDC2rVrcefOHS4+ffp0xMXFSciIkAeNGTPGawejmEwm5OXleeWzCemquLg4TJs2jYvfuXMHa9eulZCRe+bOnYuEhATRUKW9NnZZlwsxY0x3yfby5cuFVzgqOH36NHbv3s3Fo6KiMGPGDAkZEcIzmUzIzc31ymdnZmYKt44QIsuMGTOEB6Ds3r0bp0+flpCRa2az2Vm3yGftNbJLunNHXA2Ae7ifmZmpdHOA+vp6aJrGxefPn4+QkBAJGREiNnToUGGT/J4IDw/HmDFjPPqZhPRUSEgI5s2bx8U1TUN9fb2EjNyTn5+v9xppHGw1sku6VIgZY70gaOtlMBhQW1vb1Z/tM2+99RaOHz/OxZOTk71290FIT3h6O1Nubi4dYEKUlJubKzxy8Pjx43jrrbckZOSe2tpavV02v7DXSrd19Y74RwC4xtHFxcVITk7u4kf5RltbGxobG7k4YwyVlZW0epQoqU+fPh7bYtS3b18MHcodikaIEpzNxY2NjWhra5OQlWvJyckoLi4WDcVDcACSM24XYsbYMACPOcYjIiJQVVXVlZ/pU5s2bcKVK1e4eE5Ojs/2bRLSHdnZ2R5Zc+HrZiGEdNXgwYOFTyevXLmCTZs2ScjIPVVVVXrrLh6z10y3dOWO+DcAuFY8ixcvRmQkd+iSEq5evSr8SwwJCcH8+fMlZESI+8LCwnrchjI1NRV9+vTxUEaEeM+8efOE63U2bdqEq1evSsjItcjISCxevFg0ZIGtZrrFrULMGCsCMMsxnpSUhJKSEnd/ls81Njbi3r17XLy4uFi4Uo8Q1YwaNQq9enXpddPXzGYzsrOzPZwRId4RHR0t3MFy79494etFVZSUlOgdJTrLXjtdclmIGWMmAL8VjdXU1MBoNLrzc3zuxIkT2LdvHxePjY3F9OnTJWRESNcZDIZu7/0dO3YsHWBC/Mq0adOEPR327duHEydOSMjINaPRiJqaGr3h39prqFPu3BH/E4A0x2B2drayp7c4W/q+YMECZfc6EyKSnJyMxMTELv2eXr16eb1LFyGeZjabUVZWJhzT24KqgnHjxuk9fUqDrYY65bQQM8ZiAfzEMW4ymZxdAUi3e/dunDp1iosPHz5c2YsHQpyZMGFClw4kycvLowNMiF8aN26ccMfAqVOnhE2ZVFFTU6O3RfAn9lqqy9U39WcAejsGZ8+ejf79+7ufoQ/dvXsXTU1NXNxgMKCykuvKSYhf6N27N9LSuAdTQomJicpuJyTEHXon4TU1NeHu3bsSMnKtf//+mD17tmioN2y1VJduIWaMjQJQ5xiPiorCwoULu5qjz6xfvx7Xr1/n4npnYBLiL7Kyslx2gTMYDLRdifi9AQMGoKCAb9t8/fp14cE9qli4cCGioqJEQ3X2mirk7I74GQDcSqylS5cquwDk4sWLeOWVV7h4WFgYSktLJWREiOeEhIQgKyvL6a9JS0tD797cQyxC/E5paamw1rzyyiu4ePGihIxcCwsLw9KlS0VDRthqqpCwEDPG5gHgTkAeMmSI8LQMVaxatUp4qPSsWbOo2T0JCOnp6brHjLpTqAnxFxEREZg1i9s1i/b2dqxatUpCRu6ZNm0ahgwZIhoqtNdWDleIGWMhAH4l+sV1dXXKtoT84IMP8N5773HxhIQETJkyxfcJEeIFjDHdw1XceXRNiD+ZOnWq8MjB9957Dx988IGEjFxjjKGujnur+5Vf2WvsA0R3xN8DwPV+fOihh5Cent6zDL2ko6NDd7tSRUWFsnudCekO0WKs3r17K/v9JKS7DAYDKioqhGP19fXo6OjwcUbuSU9Px0MPPSQaSoGtxj7ggULMGOsH4IeOv8hisaC6ussnO/nMjh07cO7cOS4+atQojBw5UkJGhHhXXl7eAxeYEyZMUPZpFSE9MXLkSIwaxa9zOnfuHHbs2CEhI/dUV1fDYuG6QgPAD+219muOd8S/BMC9TC0rK1O2X+3Nmzexbt06Lm40GlFeXi4hI0K8r1evXl9PTt1p+EGIPykvLxc+2Vy3bh1u3rwpISPX+vTpo9ecJAK2Wvu1rwsxYywHwKOOvyMuLk6304kKnn/+edy6dYuLT5061eOHqxOikrFjxyIyMrLbLTAJ8Rd9+/ZFYSG3fhi3bt3C888/LyEj95SVlQlbdgJ41F5zAdgLMbM903oWAPdsq7q6WtkFIJ999hlee+01Lh4ZGSlcbUdIIDGbzZg+fXq3D4UgxJ/MnDlTeNLfa6+9hs8++0xCRq6FhITovdZlAJ61196v74i/BYC7rE5LS8OkSZO8lmRPNTQ0oLOzk4uXlpYiNDRUQkaE+JbO1TYhASc0NFTYD6KzsxMNDQ0SMnLPpEmT9Lri5cFWe2FgjIXD4Xk14HIJtnTvvvsuPvzwQy6elJQk7MhCCCHEvxUUFAiPHPzwww/x7rvvSsjIPU62/v6SMRZuAvB9ANxKj2nTpmHo0KHezq9bNE3T3dC9bNmyrx9ffPOkDr3/7elf5+7vIYQQVX2zaDgWEL2x7vye7nzesmXL8LOf8a2bV61ahaysLL2DF6QaOnQopk2bhtdff91xKBHAv5kATHQcCQ0NxZIlS3yRX7d88cUXuHTpEhcvKChATk6O4HeoSdYFgCc/z1cXOF35dSR4+KpgqPDrfFkQVZaTk4OCggLs37//gfilS5dw9uxZZW8glyxZgv3794sOrZhnAqDmMUpOtLS0yE7BI5x9KUj3qXyh4IkLpo6ODmErV5PJxG3xUG2C93QBI+Sb9Nq/Ku6CCcA2ABnfjH51lOBjjz0mJy0XkpOTER8fj8uXLz8Q379/P2bOnImMjAyd30mCAU3chASuY8eOcXfDABAfH6/0gSdOjnB81wDgSQDcc97du3fj1KlT3s6tW0wmk26nr4aGBnpUSYKGTuceQgKSpmm6K6Srq6uVvfA+deoUdu/eLRq6BOBXBk3TbkLQ1lLTNN3+zSooKCgQ3vmeOXMGf/jDHyRkRIhvGQwGREdHCw9QJyQQ/eEPf8CZM2e4eEZGhtK7Zerr6/VuEH+oadrNr77BawC87/grTpw4gX379nkxvZ6pra0VXgE999xzuH37toSMCPGdyMhIGI1GauhBgsLt27fx3HPPcXHGGGprayVk5J59+/bhxIkToqH3Yau9toYemq1UPy76lY2Njbh3756XUuyZlJQUFBUVcfEbN25g/fr1EjIixDdMJtPXh6aHhobCbDZLzogQ79qwYQNu3LjBxYuKipCSwh0YqIR79+6hsbFRb/hxe+39e69pTdPeAcCdnnD16lVs2rTJK0l6QlVVFcLDw7n4q6++ivPnz0vIiBDvi4qKcvr/CQkk58+fx7Zt27h4eHg4qqqqJGTknk2bNuHq1auioXX2mguAP33p3wDcEX3YlStXPJuhh0RFRWHRokVcvL29XbfpByH+zGq1cou0zGYztXUlAWvVqlXCLXuLFi1S9iL0ypUrejexd2CrtV97oBBrmvY5gKccf1dbW5uz22vpZs6cKTwG7tChQzh8+LCEjAjxDsaY7jvhXr16KbtqlJDuOnz4MA4dOsTFExMTMXPmTAkZuaexsRFtbW2ioafstfZrouWWTwP4q2PwrbfewvHjxz2ToYeZTCbU1NQIx1auXImOjg4fZ0SId4SHhwvPZQVsq6hFp9MQ4q86OjqwcuVK4VhNTY2S7SwB4Pjx43jrrbdEQ3+FrcY+gCvEmqbdBfCE6BOcLMGWLisrC+PHj+fin3/+OV599VUJGRHiWQaDAREREU5/jbNCTYi/2b59Oz7//HMuPn78eGRlZUnIyDUXW3+fsNfYBwg3IGqa9iIArpyfPn1ab1OyEmpra4VXSC+88AK+/PJLCRkR4jnuPnpW9Z0ZIV3x5ZdfYt06bv0wTCaT0tuVdu/ejdOnT4uG3rLXVo6zTgCPA+AO+21qasKdO9x6LiXovTO4ffs2mpubJWREiGd0ZTFWSEgIddwifq+5uVnYD0JvTZAK7ty5g6amJtFQJ3S2CANOCrGmaUcAcMuOr1+/rvQeXb1VdLt27cLZs2d9nxAhHtDVu1y6Kyb+7OzZs9i1axcX19slo4r169fj+vXroqFV9poq5Ko33v8FwO2g3rZtGy5cuNC1DH1Eb19ZZ2en0i07CdHTnYYd32z4QYi/aWhoQGcn90BWt2+ECi5cuCDc6wxbDf2/zn6v00KsadplANwJzKrv0S0qKsLgwYO5+J///Ge88847gt9BiJoYY91eCR0ZGUnbmYjfeeedd3D06FEuPnjwYGEnRVXo7XUG8DN7LdXlTrf43wH42DF48OBBHDmie6ctFWMMdXV1wrFVq1bp7e0iRDkRERHdXgVtMBioDzXxK/fv38fq1auFY3V1dcpeWB45cgQHDx4UDX0MWw11ymUh1jTtPoDvicYaGhqU3aObkZGBiRMncvHLly9jy5YtEjIipGuMRmOPH8OFhYUpu9eSEEebN2/G3/72Ny4+ceJEZc+Z7+jo0D2aEcD37DXUKbfOT9M0bTuAnY7xc+fOYceOHe58hBTLly8Xrh596aWX0NLSIiEjQtznqU5ZtHCL+IOWlha89NJLXNxisWD58uUSMnLPjh07cO7cOdHQTnvtdKkrB5l+FwD3AHzdunW4efNmFz7Gd+Lj4zF37lwu3traijVr1vg+IULcZLFYYLVaPfZZISEhHvksQrxl7dq1aG1t5eJz585FfHy8hIxcu3nzpnCvM2y18rvufo7bhVjTtI8A/Ldj/NatW0rv0S0vL0dsbCwXf/PNN3Hy5EkJGRHimqff7dJdMVHZxx9/jDfeeIOLx8bGory8XEJG7mlubsatW7dEQ/9tr5lu6codMQD8BAB3ptO55HYeAAAgAElEQVTOnTuV3aNrtVqxdOlSLq5pGhoaGpRt2UmCV1hYmMfPF/bE+2ZCvOGrlpCiuXjp0qUeezLkaWfPnsXOndwbW8BWI3/Slc/qUiHWNO06gB85xjs7O529rJZuypQpSE1N5eInT54UXoURIos3D26IjIyEwdDVa29CvEvv6WRqaiqmTJni+4TcpLfXGcCP7LXSbd35VjYA4DZ5HT16FAcOHOjGx3nfV9uZRAtf9N5LECJDRESE14qlsyMUCZFBb72OszlbBQcOHBDudYatNnb5rrTL33hN0zoAfEc0tnr1aty/73KlthTDhw9HYWEhF9dbqUeIr5lMJq8/Pg4NDaXtTEQZejtYCgsLMXz4cAkZueZsrzOA79hrZJd069Jb07Q3AGxyjF+6dAlbt27tzkf6xJIlS4TvG/T2rhHiS766W42OjvbJzyHEGb2eDlarFUuWLJGQkXu2bt2KS5cuiYY22Wtjl/XkGdgTALhnuhs2bFB2j25MTAwqKiq4uIsrHEK8LiQkxGdbjMxms7ILYEjw0OtyWFFRgZiYGAkZudbS0oINGzaIhlphq4nd0u1CrGnapwB+w2XT2qp3DJQS5s6di4SEBC6u19+UEF/w9btbTzULIaQ79Pr+JyQkCHs/qKKpqUlvTdFv7DWxW3q6KuQXALhjmPbs2YNPPvmkhx/tHWazWbdLi5NVcIR4TXh4uM/f2xqNRkRERPj0ZxIC/H3rqMjy5cs9vnXPUz755BPs2bNHNHQBtlrYbT0qxJqm3QbwA0Fcd1+YCvLz85GZmcnFnewLI8QrvLldyZXw8HDazkR8bteuXfj0U/7mMTMzE/n5+RIycs1FTfuBvRZ2mye+hc0A3nMMfvTRR9i7d68HPt47amtrhZPQ888/j9u3e/TflBC3yTyqkDFGHbeIT92+fRvPPfccFzcYDKitrZWQkXv27t2Ljz4SNsp6D7Ya2CM9LsSa7RLhcQDcpcKaNWuU3aObnJyM4uJiLv7ll1/q9Q4lxKPMZjPCwsKk5mC1WpV9FEgCzwsvvIAvv/ySixcXFyM5Odn3CbnBydkEGoDHNQ88+vXIcylN04RXBdeuXcPGjRs98SO8oqqqSviebPv27XqnaRDiMao016C7YuILn3/+ObZv5w8jioiIQFVVlYSM3LNx40Zcu3ZNNNRsr3095skXRD8AwHW/3rx5My5fvuzBH+M5kZGRWLx4MRfv6OjAypUrJWREgoXVahUe0SmD2WxGaGio7DRIgFu5ciXa27kD/LB48WJp6yRcuXz5MjZv3iwaugXB+qju8lgh1jTtAoAnHeNtbW1obGz01I/xuJKSEiQlJXHxP/3pTzh06JCEjEigU7HVJG1nIt70/vvv4/Dhw1w8KSkJJSUlEjJyT2Njo3CvM4An7TXPIzy9ZPLXALjlcPv378exY8c8/KM8w2g06i4S0LuCI6QnwsPDYTQaZafxAJmrt0lga29v133CWFtbq9x34SvHjh3D/v37RUOfwlbrPMajhVjTtHsA/kU0pvKRg2PHjkVOTg4Xv3DhArZt2yYhIxKoVN6/q+IFAvF/r776Ks6fP8/Fc3JyMHbsWAkZueZsrzOAf7HXOo/x+CZCTdNeBsD12zxz5gx27drl6R/nMStWrBA2VVi/fj1u3LghISMSiGRuV3IHLdwinnTjxg2sX7+ei5tMJqxYsUJCRu7ZtWsXzpw5Ixp6w17jPMpbu/m/A4A7gaK5uVnZPbr9+/fH7NmzufidO3eUbtlJ/IfFYlF+UVRISIgyi8iI/9Ob82fPno3+/ftLyMi127dvo7lZuDVY9+TBnvJKIdY0TXgmo97VkSoWLlwovCN4/fXX9a6OCHGbagu09NBdMfEEvaegUVFRWLhwoYSM3OPkKWiDvbZ5nDf72/0IwHXHoN77AhWEhYVh6dKlXPyr9maEdFdoaKjfNM4wmUzSG40Q/6e3Lmjp0qXK/vs6f/48Xn31VdHQddhqmld4rRBrmnYVwE8c485W0Klg2rRpGDJkCBf/y1/+oreCjhCnVNyu5AptZyI98fbbbwt3ygwZMgTTpk2TkJF7nOyU+Ym9pnmFtzu+/zcArkGn3p4yFTDGUFdXJxxbvXq13p4yQnRFRET43eEK/njxQNTQ1tame757XV2dshd4hw8fxvvvvy8a+gi2WuY1Xp0dNE1rB/Bd0ZjKe3TT09Px0EMPcfErV67g5Zc9vmCOBDCj0Yjw8HDZaXRLWFiYz49nJP5Pr5viQw89hPT0dAkZuebiSe137bXMa7x+ma5p2k4AXINRvb6jqqiurhauHt24cSOuXvXaEwoSYPz9ES8t3CJdoXe+gMViQXV1tYSM3LN9+3Z8/vnnwiF7DfMqXz0v+x6A+45BvZM4VNCnTx+UlZVx8Xv37indspOoIyQkBFarVXYaPWKxWPz+z0B8R+/EvbKyMvTp00dCRq59+eWXeOGFF0RD92GrXV7nk0KsadrHAH7nGNc7m1IVZWVliIuL4+L79u3DiRMnJGRE/EmgvGMNlD8H8a6TJ08Kz6CPi4sT3tSo4rnnntPrb/E7e+3yOl+uIPn/AHAvDnbt2oVPP+XaUyshJCRE93FKfX29si07iXyB9H5V5bacRA2apuH3v/+9cE6srq5GSEiIhKxc+/TTT/U6Pl6GrWb5hM8KsaZpXwL4D0HcWU9P6SZNmoS0tDQufurUKfzxj3+UkBFRXSAeoOCPK7+J7+zZsweffPIJF09LS8OkSZMkZOQeJ2cg/Ie9ZvmEr79ZqwEccQz++c9/xjvvvOPjVNynt+S+qakJd+/elZARUVkgFi3azkT0tLa2CtsAO9sKqoJ33nkHf/7zn0VDR2CrVT7j09lC07ROAI+LxlatWqXsHt2hQ4cKN6F/8cUX2LBhg4SMiKpMJpPfbldyxZ+6gxHf2bBhA1paWrj4tGnTMHToUAkZudbW1oZVq1bpDT9ur1U+4/PLdk3T3gLwomP88uXL2LJli6/TcduSJUuEbdm2bt2KixcvSsiIqCjQ7xppOxP5pkuXLmHr1q1cPCwsDEuWLJGQkXu2bNki3OsM4EV7jfIpWc/PngDAPdN96aWXhFdWKoiOjkZlZSUXb29vd3ZlRYKI1WpVdlGKp5jNZuVPkCK+s3r1aty/z+1MRWVlJaKjoyVk5FpLSwteeukl0dBd2GqTz0kpxJqm/RXA047x1tZWrFmzxvcJuWnOnDno168fF3/vvffwwQcfSMiIqCKY3qH6e5MS4hlHjx7FgQMHuHi/fv0wZ84cCRm5R2+vM4Cn7bXJ52SuKHkKANfK5M0338TJkyclpOOas8OsGxoa0NHBHcFMgkR4eDiMRqPsNHwiEFeFk67p7OzU3e2yYsUKZbfunTx5Em+++aZo6HPYapIU0gqxpml3APybIK70Ht3c3FyMGTOGi//1r3/Fa6+9JiEjIpvBYAi6fbZhYWFBc+FBeDt37sTZs2e5+JgxY5Cbm+v7hNzgorb8m70mSSF1j4WmaesAcPuWPv74Y7zxxhsSMnJPXV2dcBJat24dbt68KSEjIlNkZGTQPaoNpkfx5EG3bt1Cc3MzFzcajUpvV3rjjTfw8cfCRlnv2GuRNCpsdnwcAHeJsnbtWr3n+NIlJSWhpKSEi9+8eRPPP/+8hIyILGazWdlDzr3NarUKD0YhgU3vhqOkpARJSUkSMnKttbUVa9euFQ1p0NlS60vSC7Gmae8DWOMYb2lpwYsvcruclLF48WLhe7LXXnsNf/2rlPf9RIJgvyuk7UzB5dy5c9ixYwcXj4yMxOLFiyVk5J4XX3xRb0fOGnsNkkp6Ibb7IQDuEmvLli3429/+JiEd1yIiIlBVVcXFnS1iIIElNDQ06O8ITSZT0D4RCEZ6i1KrqqqUXSfxt7/9Ta9HxU3Yao90ShRiTdMuAfi5Y/z+/ftYvdqnnca6pLi4GIMGDeLiH3zwAd577z0JGRFfYYzRymG7YHxHHowOHTqEI0e4DsUYNGgQiouLJWTkHr29zgB+bq890ilRiO2eAXDaMfjOO+/g6NGjEtJxzWAwoLa2Vji2atUqvb98EgAiIiJo1bCdwWAI+kf0ga69vR0rV64UjtXW1irbW/3o0aN65xichq3mKEGZ/3qaprUB+L5orKGhAZ2dPm396bbRo0cjLy+Pi1+8eFHY+o34P6PRGLD9pLuLtjMFtm3btuHChQtcPC8vD6NHj5aQkWsuXhN+315zlKBMIQYATdO2AtjtGD979qzemZFKWLFihbAZ/osvvogvvvhCQkbEm6izlBgt3ApMN27cwPr167m42WzWbXCkgl27dgn3OgPYba81ylCqENt9BwC3GqC5uRm3b9+WkI5rCQkJKC0t5eJ3797VWzJP/JTFYoHVapWdhpJCQkICvtd2MGpqasKdO3yvi9LSUiQkJEjIyLXbt28L9zrDVlu+4+N0XFKuEGua9hcA/+MY//LLL7FundQ9105VVlaid+/eXFzvwGzin+hdqHN0VxxYTp8+jddff52L9+7dW3gIjirWrVuHL7/8UjT0P/YaoxTlCrHdfwLgNn1t374d586dk5COa1arFUuXLuXimqbRdqYAERYWRufxukDvzwNLQ0ODsCXk0qVLlX0ydO7cOWzfvl001AJbbVGOkoVY0zThf7COjg7dlXsqKCwsxLBhw7j4iRMnsHfvXgkZEU+h7Uruo+1MgeGtt97CX/7C3zwOGzYMhYWFEjJyz8qVK/UO4PlPe21RjpKF2O5/AHD/Cv70pz/h0KFDEtJxjTGGuro64SS0Zs0a3Lt3T0JWxBMiIyOV3aKhGsYYPaL2c21tbWhsbOTizuY4FRw6dAh/+tOfREPCV56qUHZm0TRN96X6qlWr0N7e7uOM3DNixAhMnjyZi1+9ehUbN26UkBHpKZPJRI9buyg0NFTZo/CIay+//DKuXLnCxSdPnowRI0ZIyMi19vZ2rFq1Sm/4O/aaoiRlCzEAaJq2GwC3zPz8+fPYtm2bhIzcs2zZMuH7k5dffhmXL1+WkBHpCVqg1T10V+yf9G4arFYrli1b5vuE3LRt2zacP39eNLTVXkuUpXQhtvs+AG7j9fr163Hjxg0J6bgWGxuLsrIyLq73uIeoi7bkdB9t9fJPjY2NwtdoZWVliI2NlZCRa3p7nWGrHcJGUSpRvhBrmnYawG8d43fu3EFTU5OEjNwzf/58xMfHc/H9+/fj2LFjEjIi3UF3wz1DzU/8y4kTJ7Bv3z4uHh8fj/nz50vIyD16e50B/NZeQ5SmfCG2+38AuObcr7/+Os6cOSMhHdcsFguqq6uFY3pbAohawsPD6T1nDxmNRmVP5SEP0jQN9fX1wrHq6mplTxo7c+aMcK8zbDXj//k4nW7xi0KsaZrwuCpn/3BUUFBQgIyMDC5+5swZ/OEPf5CQEXGXwWCgAuIh4eHhtOLcD/zxj3/EqVOnuHhGRgYKCgokZOSe+vp6vRubH9prh/L86duxBgB3gPNf/vIX7N+/3/fZuKm2tlb4aO65555TtmUnoe1KnkTbmdR39+5d4as+xpjuCXMq2L9/v3CvM2y1Yo1vs+k+v5lpNNslz+OisdWrV6OtTZmDNB6QkpKCoqIiLu5kcQGRzGw202H3Hma1WqkrmcI2bNggPKCmqKgIKSkpEjJyra2tzdl59Y9rfvT+z28KMQBomvYOAK7h9JUrV/Dyyy9LyMg9VVVVwn2or776qt5yeyIRLdDyDrorVpPeka3h4eGoqqqSkJF79PY6A1hnrxV+w68Ksd2/AeCWx23cuBFXr16VkI5rUVFRWLhwIRd3sQGdSGC1WpVdlOLvzGYzQkNDZadBHOg1SFq4cKGyF09OGiTdga1G+BW/K8Sapn0O4CnH+L1797BmzRrfJ+SmWbNmITExkYsfOnQIhw8flpARccQYo7thL6PtTGr54IMP8N5773HxxMREzJo1S0JG7nHSMvgpe43wK35XiO2eBvBXx+DevXtx4sQJCem4ZjKZUFNTIxxz0qSc+FB4eDiMRqPsNAKawWCgwzMU0fn/t3evwVFV2R7A/51Hd+fFI2IsFUpBBfWKWjzKNwUWl1HQMiWCRMUICbnXD1OgI4Wl4+ioM1MW87CY8npNyANMAglJSApCgoY3xoqocEEMkPCo8IgkMSGEkHf2/dDHe8ez9+luku6z9zm9fh/XmTGrtHut0+fstffgoOHJcKmpqcqO7nk5RKcBnt5gOZZsxIyxLgArRddUntGdNm0apk6dysXPnTuHrVu3SsiI/ILmXc1DNzxq2LZtGxoauN8zmDp1KqZNmyYhI998HCu7UusNlmPJRgwAjLFCAPv08bq6OuzYsUNCRv4xutPcsGGD0UHWxAR0dJ+5VH33GCo6OjqQn8+te/X65E4FO3bsQF1dnejSPq0nWJJlG7FmOYBBfXD9+vXo6lLzxmjs2LGYN28eF+/s7ERubq6EjAgtIjKfy+WiRXES5efno6OD3+ti3rx5GDt2rISMfDOadYanBwhHW63C0o2YMXYQALfsuK2tDYWF6t4cJSUlCRcFbd++HWfOnDE/oRBHv87koH/vcjQ0NGDbtm1cfMSIEUhKSpKQkX8KCwuFs84AMrVeYFmWbsSa3wPgjmEqLS1FY2OjhHR8i4mJweLFi7n44OCg0lt22lFUVBRtNCFJREQEbZwiQUZGBgYHuQeJWLx4sbLnbjc2NqK0tFR0qR2eHmBplm/EjLEmAB/o46rP6P7mN7/B+PHjufiRI0dQXW2pWXTLonEl+WicyVw1NTU4dOgQFx8/frxwB0BVGM06A/hA6wGWZvlGrFkD4IQ+aPShU4G3PVwzMzOV3bLTTmJjY2k/acnoZsg83n6cGO2JrwKjWWd4av4ak9MJCltUIcZYH4DXRdeMHsOoYPLkyXjkkUe4eFNTk9FjGBIg4eHhyj6GCzXR0dHKzqzaSVlZmfB13SOPPILJkydLyMg3b7POAF7Xar/l2aIRAwBjrBxApT7e0NCAiooKCRn5Z+nSpcLVo5s2bUJra6uEjEIDPRJVCy3cCq62tjYUFBRwcafTiaVLl0rIyD8VFRXCWWcAlVrNtwXbNGLNawC4Fwl5eXnCpfoqSEhIQGJiIhfv7u5WestOK3M6nXC73bLTIP/C6XTC5XLJTsO2jEY6ExMTkZCQICEj3zo6OpCXlye61A9PrbcNWzVixtgxAJ/o40bD66pYsGABrrvuOi6+e/duHD9+XEJG9ka/vtRE/12Co76+XrjJ0XXXXYcFCxZIyMg/RrPOAD7Rar1t2KoRa94DwB3D5OURh3RutxvJyclc/Jft3FTdstOK6H2kuui9fXCkp6cLa0hycrKyT4a8vFJsgafG24rtGjFj7BKAd/TxgYEBby/9pZs5cyYmTZrExY8fP45du3ZJyMh+6MAB9cXFxdFK9gDau3ev8CCcSZMmYebMmeYn5KeMjAyjg3De0Wq8rdj1E58B4LA+6GUZvHQOhwNpaWnCBUTr1q1Dd3e3hKzshcaV1EfjTIHT09OD7OxsLu6t1qjAy9jpYXhqu+3YsioxxgYArBBd8zIYLt3EiRMxa9YsLt7a2opNmzZJyMg+IiIi6LGnRdBuZ4FRVFSElhbuLR1mzZqFiRMnSsjINx8bMa3Qarvt2LIRAwBjbBeAYn28sbERZWVlEjLyj9F7m82bN+PixYsSMrIH+pVlLbRwa3iam5tRUlLCxY3Wo6jCaNYZQLFW023Jto1YsxIA90y3oKAAly6p+ZohPj4eCxcu5OJ9fX3IysqSkJH1uVwuGo2xmMjISGUXEllBdna2cHe+hQsXIj4+XkJGvl26dEk46wxPDReeP28Xtm7EjLHTAP6uj3s5TksJiYmJuOGGG7h4dXU1Dh/mXn0TL+ido3WNHDlS2feYKjt69Cj27eOOascNN9wg3LNAFV6Or/27Vstty9aNWPNnABf0waqqKtTX10tIx7fIyEikpKQIr6m8ZaeKaFzJusLCwhAbGys7DUthjBme4JaSkqLsu/f6+npUVVWJLl2Ap4bbmu0bMWOsE8CbgrjSRw4+9NBDuPfee7n4mTNnUFnJ7eRJBGhcyfpiYmJopfs1+PLLL3Hq1Ckufu+99+Khhx6SkJF/jGadAbyp1XBbC5VPeC4Abm6ptrYWe/fulZCOf5YtWyYsQnl5eejstP1nc9ji4uLo0abFORwOWrjlp6tXrwpfuYWFhRme9KYCo1lneGp2rsnpSBESjZh5brWWA+BuubKzs9HT02N+Un649dZb8cQTT3Dxy5cvK71lpwoiIyPp0HmbcLvdwoNRyK9t3LgR7e3tXPyJJ57Arbfean5CfjCadYanVi9nIbKtYEg0YgBgjAnvrlpaWlBczE05KeOll14SvicrLy/H2bNnJWRkDbRAy17oV7F3Fy5cwJYtW7h4bGwsXnrpJQkZ+ae4uFg46wwgV6vZISFkGrHmTQBX9MHi4mI0NzdLSMe3uLg4vPDCC1x8YGAAa9eulZCR+qKiougXlM1EREQgKipKdhrKWrt2rXCjohdeeEHZdRLNzc1GP4KuQLCux85CqhEzxi4A+Is+3tvba/R4RAlz587FuHHjuPj333+PAwcOSMhIXQ6HQ9nCQ4aHzpAWM6oD48aNw9y5cyVk5B+jWWcAf9FqdcgIqUas+RsAbiZt3759+PHHHyWk41t4eDhSU1OF14zuhENVTEwMwsPDZadBgoBWwfO8PRlLTU1V9rvw448/Cmed4anNfzM5HelCrhEzxnoAvCG65mUJvXRTpkzB9OnTubjRu6FQFB4eTnOnNkc3Wr+2bds24VqR6dOnY8qUKRIy8s3H6OgbWo0OKSHXiAGAMVYCgNu39OTJk0ZD5UpITU0Vbk5htFoy1NC4UmighVseHR0dwumJiIgIwydoKqiqqsLJkydFl3ZptTnkhGQj1qwAwJ3ksW7dOly9elVCOr7ddNNNePrpp7m40fxgKHE6nbSYJ0TQ3uEeubm5uHKFW3uKp59+GjfddJOEjHy7evUq1q1bJ7pkeGJeKAjZRswYE55t2d7ejo0bN0rIyD+LFi0S/iIw2lEnVNC4UmgJ9f/eRjvsjRw5EosWLZKQkX+8PL3L0GpySArZRqx5BwB3DNOWLVtw4YKai/aio6OFx5ipvmVnMEVHRyu7hy4JjlA/X9poz/nk5GRlN7Lxsp7lEjy1OGSFdCNmjLUAeE8f93E4tXSzZ8/GbbfdxsWPHj2K/fv3S8hIHhpXCl2huibg66+/Fp7Cdtttt2H27NkSMvJPZmam0YTHe1otDlkh3Yg1nwA4pg9+8803OHjwoIR0fHM4HEhLSxNey8rKMprNs6W4uDg6FCBEheIRl97OJU9LS1P2xuTgwYP45ptvRJeOwVODQ1rIVzDGWD+A10TXMjIyMDDAredSwt13343HHnuMizc3N6OkJDQWHkZERCj7GI6YI9SOuSwtLcVPP/3ExR977DHcfffdEjLybWBgABkZ3HKcX7ym1eCQFvKNGAAYY5UAyvXxs2fPYtu2bRIy8s+SJUuEWzkWFRUZ7d9qK6H6aJL8WqiMM7W2tqKwsJCLO51OLFmyREJG/jGadQZQrtXekEeN+P+9DqBPH8zPz0dHR4eEdHy7/vrrMX/+fC7u5UQT23C5XHC73bLTIApwOp0h8VlYv349uru7ufj8+fNx/fXXS8jIN6NZZ3hq7esmp6MsasQaxtgJAGv08StXriA3V90jMefPn48xY8ZwcS9nfNpCqL0bJN7Z/fNQV1eHnTt3cvExY8YIb8ZVYTTrDGCNVnMJqBHrvQ+gSR+srKzEmTNnzM/GDy6Xy/CxlMpbdg5HTExMSL0XJL7ZeXtTxhg+++wz4Xd5yZIlym5uYjTrDE+Nfd/kdJRGjfhfMMYuA3hbHx8cHPS22EC6GTNm4K677uLi9fX12LFjh4SMgicsLMy2BZcMT2xsrC1X0O/ZswfHjx/n4nfddRdmzJghISP/GM06A3hbq7VEY79P7fBlAeDmlg4fPoyvv/5aQjr+MRpdWL9+Pbq6uiRkFBw0rkSM2HGcqbu7Gzk5OVzc2wijCoxmneGpreL5qxBGFU2HMTYIYLnoWlZWFvr6uPVcSrj99tuFw/xtbW0oKCiQkFHg0bgS8SUqKspWu6wVFRXh559/5uKzZ8/G7bffLiEj37zNOgNYrtVY8i+oEQswxvYB4OYEfvrpJ5SVlUnIyD8vv/yy8OCDsrIyNDY2SsgosEJlTIUMj10+J01NTdi8eTMXj4qKwssvvywhI/+UlZUJZ50BFGq1lehQIza2EgD3TLegoACtra0S0vFt1KhReP7557m46lt2+sPtdgtnpgnRi4yMtMVJXEa75D3//PMYNWqUhIx8a21tNXoC1wVPTSUC1IgNMMYaAKzWx7u7u5U+cvCZZ57BjTfeyMVrampw6NAhCRkNnx3f/ZHgGjFihKU3e/nhhx/w1VdfcfEbb7wRzzzzjISM/GM06wxgtVZTiQA1Yu8+AnBOH9y5cyfq6uokpONbREQEUlJShNdU3rLTm5iYGISHh8tOg1hIWFiYZQ8DYYwZTmmkpKQoO7pnNOsMTw39yOR0LIUasReMsasAVgniSs/oPvDAA7j//vu5eENDAyoqKiRkNHQ0rkSGyqo3cNu3bxeeLX7//ffjgQcekJCRbz5q4iqtlhID1Ih9YIzlA6jWx48dO4Y9e/ZIyMg/aWlpwiKk8padIlZ/xEjkstrCrc7OTuFOfuHh4UqPK+3ZswfHjnGH2AFAtVZDiRfUiP2zHAB3q5eTk2P0PkS6cePGYe7cuVy8o6MDeXl5EjK6dnZZdEPkcblcllrkt2HDBrS3t3PxuXPnYty4cRIy8s1o1hmemikcBSW/Ro3YD4yxbwHk6OM///wzioqKzE/IT0lJScL3ZBUVFWhoUH/dhNV+zRA1WeVzdP78eZSXc4fAIS4uDklJSRIy8o/RrDOAHK12Eh+oEfS5ZTMAABACSURBVPvvLQDcM93NmzejqYnbnloJcXFxePHFF7m46lt2AvbbmIHIY5WNYNauXYv+fv5o3hdffFHZhWdGs87w1Mq3TE7HsqgR+4kx9hOAD/Xx3t5eb7vISPfkk0/illtu4eKHDh1CTU2NhIx8czgcyhYeYk2qn1393Xff4dtv+R+Pt9xyC5588kkJGfnHaNYZwIdazSR+oEZ8bT4GcFIf/Oqrr/DDDz9ISMe3sLAwLFu2THgtMzNTyS07Y2NjLbnalagrLCxM2Vn0/v5+rF27Vnht2bJlyu6tbjTrDE+N/NjkdCxNzf/CimKM9QL4nehaRkaGsuNM9913Hx588EEu3tjYqNyWneHh4YiJiZGdBrGh6OhoJWdwy8vLce4ct10BHnzwQdx3330SMvLN26wzgN9ptZL4iRrxNWKMlQGo0sdPnTqF7du3S8jIP0uXLhW+cy0sLERbW5uEjMRoXIkEk2oLty5fvowNGzZw8cjISCxdulRCRv4xmnUGUKXVSHINqBEPzQoA3BZVubm56OzslJCOb0Zb43V1dWHdunUSMuI5nU643W7ZaRAbczqdcLlcstP4P59//rmwZhhtVasCo1lneGriCpPTsQVqxEPAGDsK4FN9vL29XXh3q4qFCxdi9OjRXFyVLTtVfYdH7EWVX8WnT58WPkUbPXo0Fi5cKCEj/xjNOgP4VKuN5BpRIx66dwFwxzCVl5fj/PnzEtLxLSoqCsnJyVzcx/seU0RHR9O4EjGFKusQjNaVJCcnK7uRjdGsMzy18F2T07ENasRDxBgTfvC8rYBUweOPP4477riDi9fW1krbstPKG/QTa4qLi5O6Grm6uhpHjhzh4nfccQcef/xxCRn5x2jWGcC7Wk0kQ0CNeHg+BcA9ivn222/x3XffSUjHN4fDYbhnbU5ODnp6ekzOyDOupOqIBrEnmUdr9vb2Gp4PnpaWpuxiRaNZZ3hqIPeqjviPqt8wMMYMFydkZGQY3TlKd+edd2LmzJlcvKWlxfQtOyMiIpR4TEhCT1RUlJRxptLSUuFufDNnzsSdd95pej7+6O/v9/b6aoVWC8kQUSMeJsZYFQBuub6XdylKSE5OFq4eLSkpMXXLTlqgRWQaNWqUqX+vtbUVmzZt4uIul0u4fkMVXta+lGk1kAwDNeLA+B0AboB9w4YNuHz5soR0fBszZgyee+45Lt7b24vs7GxTcnC5XEqNkpDQExkZaerInNGJbc899xzGjBljWh7XwmjWGZ6aJ9zgiFwbasQBwBg7CeAf+nhnZyc+//xzCRn559lnn0VCQgIX379/vylbdtKvYaICsz6Hx48fx+7du7l4QkICnn32WVNyGAqjWWcA/9BqHxkmasSB8ycA3Cbn27dvx+nTpyWk45vT6cSSJUuE14K9ZWdMTIyS2w2S0BMeHo7Y2Nig/g3GGNLT04XfqSVLlih7ZrLRrDM8te5PJqdjW9SIA4QxJjz2S4UZXW8effRR3HPPPVz81KlT+OKLL4LyN2lciagm2Cv3d+3ahRMnTnDxe+65B48++mjQ/u5webkhf0ureSQAqBEHVg4Abn3/kSNHUF1dbX42flq2bJlwZMLLI6lhUf1IOhJ6HA5H0Hbc6u7uFm4j63A4DE9GU4HRrDM8NS7H3GzsjRpxADHPreNy0bXMzEyjczulmzBhAubMmcPF29vbsXHjxoD+rcjISEsc0k5Cj9vtDsrubps2bUJrK7/XxZw5czBhwoSA/71A8DbrDGA5U/WoOYuiRhxgjLFqAPn6eFNTE0pLSyVk5J/FixcL53m3bt0a0C07aYEWUVmgfxVfvHgRmzdv5uIxMTFYvHhxQP9WIBnNOgPI12ocCSBqxMGxCsBVfdDozlgFI0eOxKJFi7h4f3+/tzvja+J2u5VdlEII4HliE8h9nrOystDX18fFFy1apMzhE3pGs87w1LRVJqcTEqgRBwFj7ByAj/Tx7u5u5OTkmJ+Qn5566incfPPNXPzAgQPD3rJT5paChFyLQJ2JffjwYeHakJtvvhlPPfXUsP/5wWI06wzgI622kQCjRhw8qwE06IO7d+/G8ePHJaTjW0REBFJTU4XX1q5di4GBoe9iFxMTg/Dw8CH//wkxSyBW9Q8ODhpOS6Smpio7umc06wxPLVttbjahgxpxkDDGugCsFMQN5wlVMG3aNEydOpWLnzt3Dlu3bh3SP9OMOU1CAmm4N47bt2/HmTNnuPjUqVMxbdq0YWQWPD5q00qtppEgoEYcRIyxQgD79PETJ05g165dEjLyj9Ed+1C37KRxJWJFQ32H29nZidzcXC7u7YmTCoxmnQHs02oZCRJqxMG3HMCgPrhu3Tqj9zDSjR07FvPmzePiRgXGG6fTqewh54R443K5hrS4MD8/X3jDOm/ePIwdOzYQqQWc0awzPLVLOJJJAocacZAxxg4C4JYdt7a2orBQ3ZvMpKQk4eIqo0duRmiBFrGya/1VfO7cOeGpayNGjEBSUlKg0gq4wsJCo4mOTK2GkSCiRmyO3wNo1wdLS0tx8eJFCen4ZjTnODg4iPT0dL/+GVFRUUHZIIEQs0RERFzTBjRGixqN5vRVcPHiRaM9DtrhqV0kyKgRm4Ax1gTgA328r68PWVlZEjLyz5w5czB+/Hgu7s+WnTSuROzC33EmozG/8ePHC3euU4XRrDOAD7TaRYKMGrF51gDgVkJUV1fj8OHDEtLxLSwszHAvXF9bdgZ7E31CzOLPTaW3jW+WLVum7HfBaNYZnlq1xuR0Qpaanw4bYoz1AXhddC0jIwODg9x6LiVMnjwZDz/8MBf3tmVneHi4so/hCBmK6Ohor7O/W7ZsEW4F+/DDD2Py5MnBTG3IvM06A3hdq1nEBNSITcQYKwdQqY+fOXMGlZVcWBkpKSnC1aNGW3YGamciQlRitHCrvb0dBQUFXNzpdCIlJSXYaQ1ZZWWl0cLLSq1WEZNQIzbfawD69cG8vLygHDkYCAkJCUhMTOTioi07XS4X3G63SZkRYh6n0yn8bBsdF5qYmIiEhAQzUrtmnZ2dyMvLE13qh6dGERNRIzYZY+wYgE/08cuXLyM/nzu0SRkLFixAfHw8F9dv2UkLtIid6T/fp06dwhdffMH97+Lj47FgwQKz0rpmRrPOAD7RahQxETViOd4D0KIPlpeX4+zZs+Zn4we3241XXnmFizPGkJGRAcaYz/dohFidfv3DL599vVdeeUXZJ0Nnz54VzjrDU5PeMzcbAgAOVfc8tjuHw/GfAD7Vx6dMmYI//vGPEjLyjTGGlStXCg+tGDduHNxuN70bJrbHGEN/fz8GBgbQ0MCd64JJkyZh9erVyn4X3n33XXz//feiS68yxv7b7HwINWJpHA5HOIDvAdyrv/aHP/wB06dPNz8pP5w4cQJvvPGGsodWECKTw+HAX//6V0ycOFF2KkIHDhzA+++/L7p0GMAUxtjQj1gjQ0aPpiXRPvArRNcyMzPR38+t51LCxIkTMWvWLNlpEKKkWbNmKduEvc06A1hBTVgeasQSMcZ2ASjWx8+fP48tW7ZIyMg/ycnJyr7/IkQWt9uN5ORk2WkYMpp1BlCs1SIiCTVi+VYC4I5h2rhxI9rbue2plRAfH49Vq1YN+/B0QuzC7XYjLS1NOFmggvb2dmzcuFF0qRuCc9OJuegdsQIcDsefALylj8+ZMwe//e1vJWTkn5aWFuzcuVPZx+iEmGH06NGYMWOG0rvJ/fOf/xSOWQH4M2PsbbPzIb9GjVgBDocjBp69XW/SxfHxxx9jwoQJchIjhFjeqVOnsGLFCtECywsAJjLG1NxJKITQo2kFaF+ENwVxv48cJIQQkfT0dKMphzepCauBGrE6cgHU6INHjx7F/v37JaRDCLG6/fv34+jRo6JLNfDUHKIAasSKYJ5b1uUAuFvXrKwsr0cOEkKIXm9vr9F55wzAckbvJZVBjVghjDHhXWpzczNKSkokZEQIsaqSkhI0NzeLLuVqtYYoghqxet4EcEUfLCoqQksLtz01IYRwWlpaUFRUJLp0BYL1KEQuasSKYYxdAPAXfbynp4c7cpAQQkRycnLQ09MjuvQXrcYQhVAjVtPfAJzWB/fs2YPa2loJ6RBCrKK2thZ79uwRXToNT20hiqFGrCDGWA+AN0TXjI5dI4SQX44lNfCGVluIYqgRK4oxVgKA2/+1rq4OO3bskJARIUR1O3bsQF1dnejSLq2mEAVRI1bbCgDciSjr169HV1eXhHQIIarq6urC+vXrRZcMT3ojaqBGrDDG2GEA3HOmtrY2FBYWSsiIEKKqwsJCtLW1iS5laLWEKIoasfreAXBJHywtLUVjY6OEdAghqmlsbERpaano0iV4aghRGDVixTHGWgC8p4/7OOSbEBJCMjMzjU5Be0+rIURh1Iit4RMAx/TBmpoaHDp0SEI6hBBVHDp0CDU1wo2yjsFTO4jiqBFbAGOsH8BromsZGRkYHBw0OSNCiAoGBwe9jSu9ptUOojhqxBbBGKsEUK6PNzQ0oKKiQkJGhBDZKioq0NDQILpUrtUMYgHUiK3ldQB9+mBeXh46OjokpEMIkaWjowN5eXmiS33w1ApiEdSILYQxdgLAGn28o6MD+fn5EjIihMiSn59vdAO+RqsVxCKoEVvP+wCa9EEvj6gIITbj5ZVUEzw1glgINWKLYYxdBvC2Pj4wMOBt0QYhxEYyMjIwMMBtugcAb2s1glgINWJrygJwUB/0MsZACLEJL2OLB+GpDcRiqBFbEGNsEMBy0TUvg/2EEIvzsZHPcq02EIuhRmxRjLF9ALgNpxsbG1FWViYhI0JIsJWVlRltbVuo1QRiQdSIrW0lAO4YpoKCAly6xG1PTQixsEuXLqGgoEB0qQueWkAsihqxhTHGGgCs1se9HIdGCLEoL8efrtZqAbEoasTW9xGAc/pgVVUV6uvrJaRDCAm0+vp6VFVViS6dg6cGEAujRmxxjLGrAFYJ4khPT5eQESEk0NLT08EYE11apdUAYmHUiG2AMZYPoFofr62txd69eyVkRAgJlL1796K2tlZ0qVr77hOLo0ZsH8sBcLfM2dnZ6OnpkZAOIWS4enp6kJ2dLbrEYDDCSKyHGrFNMMa+BZCjj7e0tKC4uNj8hAghw1ZcXIyWlhbRpRztO09sgBqxvbwFgNsFvri4GM3NzRLSIYQMVXNzs9FNdAc833ViE9SIbYQx9hOAD/Xx3t5eo8dbhBBFZWdno7e3V3TpQ+27TmzCYbASj1iUw+FwAvgRwG36a6+++iri4+PNT4oQck1aW1vx6aefii6dBHA3Y0zYoYk1USO2IYfD8QyAUtl5EEICLpExRnvY2gw1YptyOBxfApgtOw9CSMBUMcb+XXYSJPCoEduUw+H4NwD/AyBcdi6EkGEbAHAfY+yo7ERI4NFiLZvSvrB/l50HISQgPqEmbF/0i9jmHA7Hf8BzMESc7FwIIdfsBID/AvAZY6xbdjIkOP4XzxWfVp2jbnMAAAAASUVORK5CYII=");
			this.element_JoyBackground.setRotation(0);
			this.element_JoyBackground.setVisible(true);
			this.element_JoyBackground.setEnabled(true);
			this.element_JoyBackground.setBackground("transparent");

			if(this.element_JoyBackground_onTrigger)
				this.element_JoyBackground.onTrigger = this.element_JoyBackground_onTrigger;
			
			if(this.element_JoyBackground_mousePressed)
				this.element_JoyBackground.mousePressed = this.element_JoyBackground_mousePressed;
				
			if(this.element_JoyBackground_mouseClicked)
				this.element_JoyBackground.mouseClicked = this.element_JoyBackground_mouseClicked;
			
			if(this.element_JoyBackground_mouseReleased)
				this.element_JoyBackground.mouseReleased = this.element_JoyBackground_mouseReleased;
			
			if(this.element_JoyBackground_mouseEntered)
				this.element_JoyBackground.mouseEntered = this.element_JoyBackground_mouseEntered;
			
			if(this.element_JoyBackground_mouseMoved)
				this.element_JoyBackground.mouseMoved = this.element_JoyBackground_mouseMoved;
			
			if(this.element_JoyBackground_mouseExited)
				this.element_JoyBackground.mouseExited = this.element_JoyBackground_mouseExited;
			
			this.element_JoyBackground.setBounds(this.layouts[this.currentLayout]["elements"]["JoyBackground"].x, 
							this.layouts[this.currentLayout]["elements"]["JoyBackground"].y, 
							this.layouts[this.currentLayout]["elements"]["JoyBackground"].width, 
							this.layouts[this.currentLayout]["elements"]["JoyBackground"].height);
							
		
			this.element_GreenLabel = new LabelElement(this.parent, "GreenLabel");
			
			this.element_GreenLabel.setValue("Green");
			this.element_GreenLabel.setVisible(true);
			this.element_GreenLabel.setEnabled(true);
			this.element_GreenLabel.setColor("Black");
			this.element_GreenLabel.setFont("18px Arial");
			
			if(this.element_GreenLabel_onTrigger !== undefined)
				this.element_GreenLabel.onTrigger = this.element_GreenLabel_onTrigger;
			
			if(this.element_GreenLabel_mousePressed !== undefined)
				this.element_GreenLabel.mousePressed = this.element_GreenLabel_mousePressed;
				
			if(this.element_GreenLabel_mouseClicked !== undefined)
				this.element_GreenLabel.mouseClicked = this.element_GreenLabel_mouseClicked;
			
			if(this.element_GreenLabel_mouseReleased !== undefined)
				this.element_GreenLabel.mouseReleased = this.element_GreenLabel_mouseReleased;
			
			if(this.element_GreenLabel_mouseEntered !== undefined)
				this.element_GreenLabel.mouseEntered = this.element_GreenLabel_mouseEntered;
			
			if(this.element_GreenLabel_mouseMoved !== undefined)
				this.element_GreenLabel.mouseMoved = this.element_GreenLabel_mouseMoved;
			
			if(this.element_GreenLabel_mouseExited !== undefined)
				this.element_GreenLabel.mouseExited = this.element_GreenLabel_mouseExited;
			
			this.element_GreenLabel.setBounds(this.layouts[this.currentLayout]["elements"]["GreenLabel"].x, 
								this.layouts[this.currentLayout]["elements"]["GreenLabel"].y, 
								this.layouts[this.currentLayout]["elements"]["GreenLabel"].width, 
								this.layouts[this.currentLayout]["elements"]["GreenLabel"].height);
							
		
			this.element_JoyLabel = new LabelElement(this.parent, "JoyLabel");
			
			this.element_JoyLabel.setValue("Joystick");
			this.element_JoyLabel.setVisible(true);
			this.element_JoyLabel.setEnabled(true);
			this.element_JoyLabel.setColor("Black");
			this.element_JoyLabel.setFont("18px Arial");
			
			if(this.element_JoyLabel_onTrigger !== undefined)
				this.element_JoyLabel.onTrigger = this.element_JoyLabel_onTrigger;
			
			if(this.element_JoyLabel_mousePressed !== undefined)
				this.element_JoyLabel.mousePressed = this.element_JoyLabel_mousePressed;
				
			if(this.element_JoyLabel_mouseClicked !== undefined)
				this.element_JoyLabel.mouseClicked = this.element_JoyLabel_mouseClicked;
			
			if(this.element_JoyLabel_mouseReleased !== undefined)
				this.element_JoyLabel.mouseReleased = this.element_JoyLabel_mouseReleased;
			
			if(this.element_JoyLabel_mouseEntered !== undefined)
				this.element_JoyLabel.mouseEntered = this.element_JoyLabel_mouseEntered;
			
			if(this.element_JoyLabel_mouseMoved !== undefined)
				this.element_JoyLabel.mouseMoved = this.element_JoyLabel_mouseMoved;
			
			if(this.element_JoyLabel_mouseExited !== undefined)
				this.element_JoyLabel.mouseExited = this.element_JoyLabel_mouseExited;
			
			this.element_JoyLabel.setBounds(this.layouts[this.currentLayout]["elements"]["JoyLabel"].x, 
								this.layouts[this.currentLayout]["elements"]["JoyLabel"].y, 
								this.layouts[this.currentLayout]["elements"]["JoyLabel"].width, 
								this.layouts[this.currentLayout]["elements"]["JoyLabel"].height);
							
		
			this.element_CompNeedle = new ImageElement(this.parent, "CompNeedle");
			
			this.element_CompNeedle.setImage("data:image/png;base64,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");
			this.element_CompNeedle.setRotation(0);
			this.element_CompNeedle.setVisible(true);
			this.element_CompNeedle.setEnabled(true);
			this.element_CompNeedle.setBackground("transparent");

			if(this.element_CompNeedle_onTrigger)
				this.element_CompNeedle.onTrigger = this.element_CompNeedle_onTrigger;
			
			if(this.element_CompNeedle_mousePressed)
				this.element_CompNeedle.mousePressed = this.element_CompNeedle_mousePressed;
				
			if(this.element_CompNeedle_mouseClicked)
				this.element_CompNeedle.mouseClicked = this.element_CompNeedle_mouseClicked;
			
			if(this.element_CompNeedle_mouseReleased)
				this.element_CompNeedle.mouseReleased = this.element_CompNeedle_mouseReleased;
			
			if(this.element_CompNeedle_mouseEntered)
				this.element_CompNeedle.mouseEntered = this.element_CompNeedle_mouseEntered;
			
			if(this.element_CompNeedle_mouseMoved)
				this.element_CompNeedle.mouseMoved = this.element_CompNeedle_mouseMoved;
			
			if(this.element_CompNeedle_mouseExited)
				this.element_CompNeedle.mouseExited = this.element_CompNeedle_mouseExited;
			
			this.element_CompNeedle.setBounds(this.layouts[this.currentLayout]["elements"]["CompNeedle"].x, 
							this.layouts[this.currentLayout]["elements"]["CompNeedle"].y, 
							this.layouts[this.currentLayout]["elements"]["CompNeedle"].width, 
							this.layouts[this.currentLayout]["elements"]["CompNeedle"].height);
							
		
			this.element_getData = new FunctionElement(this.parent, "getData", 25, "053214bb-4748-4f96-8d3f-c0517ac4bba2", "json", "void");
				
			if(this.element_getData_onTrigger)
				this.element_getData.onTrigger = this.element_getData_onTrigger;
			
			if(this.element_getData_valueReturned)
				this.element_getData.valueReturned = this.element_getData_valueReturned;
				
			if(this.element_getData_notified)
				this.element_getData.notified = this.element_getData_notified;
		
			this.element_TempReading = new LabelElement(this.parent, "TempReading");
			
			this.element_TempReading.setValue("--.-");
			this.element_TempReading.setVisible(true);
			this.element_TempReading.setEnabled(true);
			this.element_TempReading.setColor("Black");
			this.element_TempReading.setFont("24px Monospace");
			
			if(this.element_TempReading_onTrigger !== undefined)
				this.element_TempReading.onTrigger = this.element_TempReading_onTrigger;
			
			if(this.element_TempReading_mousePressed !== undefined)
				this.element_TempReading.mousePressed = this.element_TempReading_mousePressed;
				
			if(this.element_TempReading_mouseClicked !== undefined)
				this.element_TempReading.mouseClicked = this.element_TempReading_mouseClicked;
			
			if(this.element_TempReading_mouseReleased !== undefined)
				this.element_TempReading.mouseReleased = this.element_TempReading_mouseReleased;
			
			if(this.element_TempReading_mouseEntered !== undefined)
				this.element_TempReading.mouseEntered = this.element_TempReading_mouseEntered;
			
			if(this.element_TempReading_mouseMoved !== undefined)
				this.element_TempReading.mouseMoved = this.element_TempReading_mouseMoved;
			
			if(this.element_TempReading_mouseExited !== undefined)
				this.element_TempReading.mouseExited = this.element_TempReading_mouseExited;
			
			this.element_TempReading.setBounds(this.layouts[this.currentLayout]["elements"]["TempReading"].x, 
								this.layouts[this.currentLayout]["elements"]["TempReading"].y, 
								this.layouts[this.currentLayout]["elements"]["TempReading"].width, 
								this.layouts[this.currentLayout]["elements"]["TempReading"].height);
							
		
			this.element_OnConnect = new ConnectionElement(this.parent);
			
			if(this.element_OnConnect_onTrigger)
				this.element_OnConnect.onTrigger = this.element_OnConnect_onTrigger;
		
			if(this.element_OnConnect_connecting)
				this.element_OnConnect.connecting = this.element_OnConnect_connecting;
		
			if(this.element_OnConnect_connected)
				this.element_OnConnect.connected = this.element_OnConnect_connected;
		
			if(this.element_OnConnect_disconnecting)
				this.element_OnConnect.disconnecting = this.element_OnConnect_disconnecting;
		
			if(this.element_OnConnect_disconnected)
				this.element_OnConnect.disconnected = this.element_OnConnect_disconnected;
		
			this.element_JoyControl = new ImageElement(this.parent, "JoyControl");
			
			this.element_JoyControl.setImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP0AAAD9CAYAAAB3NXH8AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAANUgAADVIBSqFyHQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7b15UBxbfib6ndqAoopFQIHYxb5IIAktIIG2e3W39u2+PbZ7/J6f3Z5xzH8T4bDD4/HYjpieCNvP43F4whHz38T4tbuf53k87mj3vX0XXam1S4CEhEBiXwRIIPadglrP+6OoukXVOVmZWZlZBaovogIpl3N+mXm+s/zObyGUUiSwP0EIsQKoAlAJIBOAdfdnifBvCwAzADuATQAbQX83BI4tAxgBMEwp3dDiGRNQHiRB+vgGIUQHoBRANeOXHzvJMANgiPGboJR6YyhXAhGQIH0cgRCSAeAigLP4htgVAJJiKZdEOACM4ptOoBPAHUrpakylSiCABOljCEJIKoBWAFd2fycB6GIqlDrwAngK4Obu7z6ldCu2Ir29SJBeQxBCTABa8A3JzwIwxlSo2MAF3wzA3wm0U0qdsRXp7UGC9CqDENII4CP4SH4eQIoa9ZhMJhiNRhiNRhgMBubf4H/r9Xp4PB64XC643W64XK49/w7963K54HSqxsttAA/g6wC+oJT2qFVRAgnSqwJCyGEA/yeA7wM4plS5er0eVqsVaWlpYX8NBoNS1XDhdruxvr6OjY2NsL8ej0fJqp4D+DsA/5NS+kbJghNIkF4xEEJSAHwC4DcBXAWgl1tWUlISMjIy9pA6LS0NZrMZhBClRFYMlFLY7Xasr6/v6QxWV1fhcDiiKdoD4DqAHwH4Z0rptiICv+VIkD4KEB8D2+Aj+q8CSJNTjtFohM1mQ25uLnJzc5GRkaGkmDHF6uoq5ubmMDc3h/n5ebhcLrlFrQP43/B1APdoouHKRoL0MkAIqYCP6L8B3x66JOj1emRnZwdInpWVFZcjuNKglGJpaSnQCSwuLspdFkwA+DGAH1FKRxUV8i1AgvQSQAg5C+CPAXws9d5gkufk5ECnO4g7c9Lg9XqxsLCwpxOQgc8A/BmltFNh8Q4sEqQXAULIJfjI/q6U+9LS0lBaWorS0lKkpqaqIlsw1JwtaNFOtra2MDExgYmJCayvr0u9/QZ85L+tvGQHCwnSC4AQ8gGAP4Fvq00UkpKSUFJSgtLSUmRlZUUqP0oJ9y8itbulpSVMTExgcnJSqjLwAYA/pZR+FY18BxkJ0odgVzn3CXwje5OYe/R6PQoKClBaWor8/PzE1F1BeL1ezMzMYGJiAtPT01J0AE8A/Bl8Wv9EIw9CgvS7IIToAfxLAH8EoF7MPTk5OThy5AhKSkpgNL6NhnXawuVyYXJyEi9fvsTCwoLY2/oA/DmA/0UpVdSYYL8iQXoAhJBvAfiv8LmoRkR+fj6OHj2K7OxsdQVLgIvFxUW8ePECMzMzYm8ZAfC7lNLPVRRrX+CtJj0hpATA3wD4johrUVRUhPr6emRmZqopk2plxwpqtrGVlRX09fXh1atXYuv5GYDfoZROqiZUnOOtJP2u48vvw6ekE7SFJ4SgtLQU9fX1SEuTbntzEEmsNuS0yfX1dfT19WFiYkLM/dsA/hTAX72Njj5vHekJIVcB/Df4Is5wodPpUFZWhrq6OlgsFl5ZKkiYgBjw2u3m5ib6+/sxPj4OrzdiLI9hAP+WUnpdafniGW8N6QkhBQD+GsD3hK7T6/WorKxEbW0tUlJSEsTeh6CUYnt7GwMDAxgZGRGj8f9HAL9HKZ3WQLyY48CTnhBiAPA7AH4AX2w4LoqKitDU1KSJIY1Y7MdOJ57a1NbWFp48eYJXr15FunQTvjbyN5RSt+qCxRAHmvSEkDMA/hYRtuAsFgtOnz6N/Hz1Q87tRxKrDS3a4MzMDB4/fozNzc1Il/YB+NeU0keqCxUjHFjSE0J+D8BfQCAyjU6nQ319Perr66HXy/aEDa4z6jLkwuv1YnNzEzs7O4GgF6FBMEKDY7CCbLD+n5ycDIvFElOjIyXaqcfjQV9fH/r6+iKt910A/pBS+tdRVxqHOHCkJ4QcAvBDRHCKyc/Px6lTp2C1WqWWL184BbCzsxPwW19bW9sTyELNb0kI2RO4Iz09PeDnn5ycrFq9YiD1uTc2NtDV1SVmj/8zAL9FKV2WK1s84kCRnhDSAuAfABTzrjGbzWhqakJxMfcSf1kKSycddrsds7OzmJubw+rqKtbX16PxR1cNRqMRaWlpyMjIQG5uLvLy8mA2m2MtVsTOYGpqCk+ePIHdbhe8DMCvUUrblZQtljgQpN+1l/99+MwtmXGjdDodampqcOzYsbDQUrEkeHDdOzs7mJ2dDfw2NvZvPgmr1Yq8vLzAL3g2EMs2F1q32+3G8+fPMTg4KDTld8Nnnv1XB8GOf9+TnhCSBV88tW/xrklNTUVrayuys7M1JXikupxOZ4Dg/tH8oCJ4FpCXlweTySR4vZbtklKKxcVF3L9/H1tbgpG5PwfwfUrpkkaiqYJ9TXpCyHn4pvOFvGuKiorQ0tISsZFFIYOk6z0eD169eoXx8XHMzMyo1rh1Ot0eZRwrUi4r4m3wT4RxiywQQpCfn4+ysjIUFRVJVqKq9c6cTifa29sjbe+9hm+6/0AVITTAviT97nT+D+AzpeRO50+ePImamhql6ozq/vn5eYyNjWFyclKRdbk/Mq5foeb/a7FYAiGuo4U/RPbm5mZAcRisQFQiAq7RaERJSQnKy8ths9miKkuptjw4OIinT59Gmu7/CYC/3I/T/X1H+l1jm/8BX4w6JiwWCy5cuIBDhw7JrUOmdHuxsbGB8fFxjI+Pi9kf5sJqtSI3NxeZmZkBgqempsZUF0EpxdbWVqAjWFlZwdzcXFR6CIvFgrKyMpSVlUneVRGSUw6Wl5dx9+7dSN/tRwB+e78Z8+wr0hNCzPBFRP2Id01JSQmam5sl+bcrSR5KKSYnJzE0NIT5+XlZZZjN5sDa9/Dhw3FlIRgJW1tbePPmTUBXEUEzzoXNZkN1dTVKSkoU/z5i4XK50NHRgclJQYe8LwD8KqVU3oPGAPuG9Lv7758DaGad1+v1aGpqQlWVoB+NvyyFpfMZx4yPj+PFixeSR7vk5OQ9mm453nzxivX19T07Ejs7O5Lut1qtOHr0KMrKylQxDhLT/oeHh/HkyROh5UwHgG/tl/38fUF6QkgRgGsAalnnrVYrLly4wPVzV4Pk/jI9Hg9GRkbQ19cXSfO7B0lJSSgtLUVZWRlycnIUly9YRjlQq10sLCxgfHwcExMTkmLfpaamor6+HpWVlQF9hRoy8spcWVnB3bt3hTr0AQDvU0ojGvnHGnFPekJIHXyEZ2roc3JycPny5T3aeaVJzirP5XJhaGgI/f39okcvnU6HwsJClJeXo6CgIOLIFQ8GQnIRqV15vV5MT09jbGwMr1+/Fr1TkJycjLq6OlRXVzOXcEq35+DynE4nbt26JRSq6zV8xO9XVAiFEdek37Ww+zkApkauoKAAFy5cgF6vV5QgQmU5nU709/djcHBQdEJHm82GsrIylJaWBjqn/UxopeBve06nExMTExgfHxetBzGZTKipqUFdXZ3gdqyS7ZtSCo/Hg7t372J6muuFuwzgl+LZgi9uSb8bt+4fATDtOcvKynDu3DlFyCO2jLGxMTx58kTUyG4wGFBVVYWamhrFNNFvAzY2NjA4OIjh4WG43ZGV4snJyWhqakJ5ebmo8pVo75RSPHz4EOPj47xL7AC+F6/x+OKS9ISQ3wLw38HZg6+vr8fJkyejKV/S9aurq+jo6BA1ChmNRtTU1KC+vh5JSUlyRXzr4XA4JM2obDYbmpubJecBjKb9P336FH19fbzTbgD/hlL6Q9kVqIS4I/0u4f8WAJOZTU1NqKurk1Ou5Hvcbjd6enrQ398fsXEkJSWhtrYWtbW1cWP9pyXUtJIbHBxEf39/RMUfIQS1tbU4fvy4rNTdcp6hv78fT5484RYJn2/+DyUXrCLiivS7U/p/BmOEJ4SgpaVF9DTOf49cTE5O4vHjxxH3mVNSUlBfX4/q6uqocsTHM6GVQjRtze12Y3h4GH19fRG/idlsxunTp1FSUiK7Pimyjo2Nob29nXePG8An8TTVjxvS7yrtboCxhtfr9bhw4QIKC7km9sHlRCXHxsYGOjs7I/pam0wmNDY2orq6WpLJ69tAbqmQ0gY9Hg9GR0fR3d0dceTPz8/H2bNno9apiJHv9evXuHv3Lm8v3w7g3XhR7sUF6Xe35e6BoaU3mUy4fPlyRLtsJcg0ODgYyQgDAFBeXo6mpiakpAhGz04QPApEapcOhwNPnz7F8PCw4HV+oy0lfDAiyTQ/P49bt27xdBDLANriYTsv5qTfNbx5CMY+vMFgwNWrVwUzyURLLEIInE4nHjx4gKmpKcFrMzMzcfbsWeTm5iouhxzE2vY+HupcXFxEe3s7lpeFjeGKi4tx/vx5mEymqGUXun9xcRHXr1/n7Ty8BnAu1gY8MSX9rmntfTAs7QghuHz5MgoKClj3RVtv4N+Li4u4c+eOoGOF0WjE8ePHUVtbG7hXbcIdhFmC2m3LXz6lFENDQ+ju7hbU9FssFly8eHHPIKJGBzA9PY1bt27xyh4A0BpLk92YkX7XeeYX4NjSnz9/HmVlZaH3RFNf2DG/5lXIGqysrAynTp1SLQb+QSC3VKhlPru9vY0nT55gbGyMe51Op+PuAEUjV+i94+PjePCA63LfAeCdWDnpxIT0u+6xPwPHWy70oyhNdqfTifv37wsGS/BH2zl8+LDsusXIkoAPSrbDN2/eRIyCU1RUhNbWVub2qlLkj7Cd9wWA78TCLVdz0u8GwPghOP7woYY3conCu0/MdL6wsBBtbW1RG9doTXI169O6nURbn8PhwL179/D69WvuNazpvhIyBN8XwYDnR/BF29X05caC9P8evnj0YSgvL8e5c+f818ktn3tuYmIC9+7d407n/dF2jh49KqvuSPVHg/0wS1CrLUVT7osXLwSj4Oh0OrS1taG0tFTx+v33PXz4UGjJ8YeU0v8sqwKZ0JT0hJBWALfAML4pLCzEpUuXZPtMRyLFwMAAHj9+zP2AqampuHjxoqyQTVo5++xXKO30IhXz8/O4c+cOd7pPCMHp06dRW8v03I6qbsDnUXj79m3erMMN4DKl9L6swmVAM9ITQrIBPAMQpo632Wx49913ZVu0RSJKd3c3ent7uecLCgrQ1tYmKWmDUuQ8iCSPBKXanJRydnZ2cO/ePSHvODQ0NODEiROK1RkMt9uNGzdu8Pw3pgEcp5QuyipcIjQh/e46/gsAH4Ses1qt+Oijj2StnyMRhlKK9vZ2jIyMcO8/ceIEGhoaFKlPqzLUrm+/rd+llNHb24vu7m7u9ZWVlWhpaRHVtqTC4XDgiy++4AXi+ArAR1qs77Ui/R8C+L9Dj+v1enzwwQfIysqSU6bgeb/fM8/gxm/pJ0Y7r6RdgFKIhxmClpFrlLz/zZs3QpZzKC4uDsRpiLauUCwtLeGrr77iWX3+B0opU9+lJFQnPSGkDb51fNgbPHv2LKqrq6WWF/Eap9OJmzdvYm5ujnk+JSUFV69ejRgtV+mtwngoS23Eev0u9t7l5WVcv34d29vbzPO5ubm4cuWKKI9JqXIODQ2hs7OTdcoD3/r+nqQCJUJV0gut40tKSnDx4kWp5UW8Znt7G9evX8fKygrzfFpaGt577z1YLIKp6lXZPdCyjHiBllN3qfdtbm7i66+/xvr6OvN8ZmYmrl69GtHHQo6Md+7c4UXZVX19r1ru4d11/I/BILzVakVLS4vU8iJe43Q6BQmfnZ2Njz76SJDwhBBZpJN7X/C90ZQhpS5KKdxuNyilmtQX7bOp9U0sFgs++ugj7j79ysoKrl+/LiqIh1T5WlpaeN5/BQB+TFT8MKqN9ISQ/wBfQsk90Ol0+PDDDyWt48U8v8fjwfXr17lT+oKCAly+fFlwh0Buw5ILJXcAvF5vIG312toa1tbWsLW1BafTGZauKtgZJDQXvdFohMlkQmpqKtLT0wOZc6xWK3Q6XUw070rcK3SP2+3GrVu3uJr93NxcXL16VZQLtRTZlpaW8OWXX/JsCP6IUhqmB1MCqpCe+HLM3QFjHS9mPzSkrIjXUEpx+/ZtrtKurKwMra2tgjYAWhI+WrJTSjE/P4+ZmRksLi4G0kyplXsO8HXW/jRa2dnZyM/Ph81mU+RZtLpP6B6v14v79+9z494VFxfj0qVLotujWPjtRxjwALhIVciZpzjpd+3qnwGoDz3nf3ESy4t4zcOHD7nbcrW1tTh79mxU5StxTzT3AT7z4ZmZGczMzGBubk5U0Ei1YTAYkJubi/z8fOTn5wu6QEdCvJC/s7MTAwMDzHOVlZUBi1ElZRIYsPrgW98r+rHlx3fi43fBILzFYhH1woIhhiTd3d1cwpeXlwsSXg606iQopXjz5g1GRkYUS3qpNNxuN6anpwPTYn8yysrKShw+fFjSc/uvlUoYv45CKZw9exZOp5NpNjsyMoKUlJSIBjxSZTp37hyWl5dZ/iD18PHpv4guTAQUHekJIYUABgHsSb6m0+nwwQcfSBoJxDSYgYEBPHr0iHmuoKAA77zzjqJTei0Iv7y8jNHRUYyNjcnOAxcPMJvNKC8vR0VFheREokqP3lKv93q9+MUvfsFd4585c0bUElWKTIuLi/jqq69YS7QtADWUUr7nkEQoTfp/AvDLocfr6+vR1NQktSzB8xMTE7h79y7zxebk5OD9999XVGmnJuGdTieGhoYwOjoaMQKMGJhMJmRkZCAtLQ1JSUkwmUwBBZ3/rz8/vV/RF/zX4XBgfX0dq6urohN6COHQoUOoqKhAdXW16EjBsSa+2+3GtWvXmNlsCCG4cOGCoJOOHHmePHnC88j7CaX0VyQVJgDFSE8I+QDAl6HHU1NT8e1vf1tSFtnd8rjnFhcXuVrP9PR0UWa9apNerE1BX18f+vv7ZU3f9Xo9cnNzkZWVhYyMDKSnpyMjI0PUvrJYbG9vY3V1FWtra1hdXcXS0hLm5uZk5aY3Go2oq6tDfX29KnvfSl/vN5tdW1sLO+ffhRKavUqVx+Vy4dNPP+U5Bn1IKf1KUoEcKEJ6QkgygBcAwuJTX7x4UXIoYiHCOJ1OfPbZZ0x/+NTUVHz00UcRUzvHmvB2ux29vb0YHByURB6dToecnBzk5+ejoKAANptNUiRepeDxeDA/P4/p6WnMzMxgYWFB0s6BXq9HTU0NGhoaYDYzExgFEGvib21t4YsvvmAS0WKx4OOPP1Y0rdbk5CTu3LnDOjUG4CilVFraXwaUIv0PAPzH0OP5+fl45513FCXNzZs3mRFvTCYTPvroI1EZTmJFervdju7ubgwPD4smiV6vR0lJCSoqKpCfnw+DwaDaUkPulNrtdmNmZgajo6OYnJwU3ZHpdDpUVVXhxIkTXPLHmvSAL8PRF198wVzqFBUV4cqVK4rK84tf/IIXgv0/UUp/IKlABqImPSGkHL5Rfo9fql6vx8cffwyr1aoYafr7+5l7mn5FoVhfeK1J7/V60dfXh+7ubtHT+Ly8PFRWVuLIkSNhI4ma8kdLGpfLhfHxcYyOjuLNmzeiyjAajThx4gTq6+vDFK/xQHrA55PPUbTh9OnT3KxLcuTZ2NjAZ599xuo8d+Ab7flBAEVACdJ/CYbLbENDAxobG/3XSC0z7JjQOv7s2bOKG/wodf3s7CwePnzINQ0ORkpKCurq6lBRUSGYoCGeSR+Mzc1NjI6Oor+/X9RORGZmJs6dO4e8vDxV5In2+oGBAaajjND6Xq48PT09vBgQX1FKP5RUaAiiIj0h5JcB/FPocYvFgm9/+9uB9Wa0jVRoHV9cXCw4vRJTvhrXb29v49GjRxgdHY14vcViQUNDg+hsOfE2vY8Ej8eD4eFh9Pb28nzJ96CiogJnzpxBSkpKXJEe8C0vWYY0vPW9XHk8Hg8+/fRTXizHX6GU/kRSwUGQTXpCiBHACIAwLd2VK1f2xKuPlmS3bt0SfNFSA3CoTfrx8XE8fPgw4nZXeno6GhoaUFlZKTlMWDx44kltO16vF6Ojo+jp6WFqxINhMplw7ty5sDDoSssk9XqHwyE4AF2+fFkxeaanp3Hz5k3WZZMAKimlsiy2oiH9v4Ivu+weFBcXM11m5RKNZ4ATOqWKtUYe8PXO7e3tEVMtmc1mnDlzBmVlZYFyY+nKKxXRmsxSSjE+Po5Hjx5FnPZXVVWhpaVFcWeXaK4XWmoGG+4oIc+dO3d4Jrq/TSkN458YyCI9IUQHX6aOquDjer0e3/nOd5hbZnJItrq6is8++0yU8iTWpF9bW8PNmzcF1+46nQ719fU4ceIE024hHjz2hKC0Z5zL5UJ3dzf6+voEdzMyMzNx5coVpKenKypfNNcLKZU//vhjZGRkKCLP1tYWfvazn7GUeqPwWepJNpiQ60//qwghPODrlSPtkUtBZ2cnszEUFRWFaUtjufYbGxvDp59+Kkj4vLw8fPLJJzhz5gzXUIlSGtUoGvxTAkqUKXSv0WjEmTNn8Mknn+xR3oViZWUFn376qWDmGq2/f11dHYqKisKu83q9vKg4spCamoqqqjCqAUAFgO/JKVPySL/r3P8MwJ5oknq9Ht/97ncFLa2kjEYvX77EvXvhUYNSU1O563gtbOODr/d6vWhvb8fQ0BD3+uTkZDQ3N6O8PMxuSXHZ4glyOomxsTF0dHRgZ4dvf1JdXY2WlpY9OhC1Cc+7x7++ZxnutLW14ciRI4rItL29jZ/+9Kes0f4FgAYq8YHkjPS/hBDCAz6PNqXMP10uF7q6upjnWltbuYo7pd2EherwhzQWIrx/dC8rK5Pd0LR4JiUhV2ZKKcrKyiKO+kNDQ7hx40bAtVjLbx6KpKQktLa2Ms91dXUp5hmZkpLCGzSOAviO1PLkkP6PQg8QQlBfH+ZNGwaxH+jZs2fMgIVlZWWCDUJKHXKvB3wx1L/88kvBlEmNjY348MMP91iaxdPUXSkotQTww2w248MPPwzYeLDw+vVrfPnll4IzAjF1KXF9Xl4ec4dhe3sbz549U0ym+vp63szvT0RVEgRJpCeEXAEjy+yRI0ciBpr0I9IDrqysYHBwMOy40WjEqVOnFKmDdb3Ye7a2tvD5558zva8A33T+/fffR1NTE/MjKUHeWHYCStUtVAYhBE1NTXj//fe5CUgWFhbw+eefCyapZNUnVUYxOHXqFFNPMzg4GNEoS2wdFouFt1xo2nV2Ew2pI/0fhx4ghESV+y0UnZ2dzBdx/PhxScsHNQxNVldX8fOf/5y7x2yz2fDJJ5/ssVGIVJ8SpA0lIu+ndhlSZBWDgoICfPLJJ1zz6rW1Nfz85z/H6upqxDrlyCkWKSkpOH78OLMMJZV6R48e5Y32YbwUgmjSE0KaAYSZvhUXFyMtLU1KndwXOjY2xkz7k5mZiZqaGkl1CNUT6R7WfX6nC96+cnFxMT744IOIXmNCdao9aqtJZrH1SoXZbMYHH3yA4uJi5nm73Y4vvviCSfxo9AtSUVNTg8zMzLDj8/Pz3F0HqfWkpaXx3kMrISTcOIYDKSM9szfxj/LRTp2cTic3l/fZs2dlh0VSYp25tbWFa9euweFwMK+tqqrClStXoNfr9/XUXSkovQTQ6/W4cuUKb+sKDocD165d2zPVV+K7S7mHEMINzfbkyZMw60y5fBGYVYse7UWRnhBSB5/Wfg8KCgr29G7REL+/v5+pmCkrK9szvZO7NpP7MXd2dnDt2jXuCN/Y2Ijz58+HTbuUIm4sRmaxUEM2XjmEEJw/f56r4LPb7bh27Rp2dnYUneFJucdmszGVejs7O+jv799zn9R6/MjMzOQtH68SQiJr0yF+pP8+6+CxY8fCjsl5IKfTyVTemUwmrvJOiw/r35bjreGbm5tx8uRJ0fUqSVa1199arO9ZdUXCyZMn0dwcpksG4FvjB2/nSalbKnj3nDp1ihlUY3BwEE6nM+oZMcDm3S5+U0yZEUm/a3L766HHc3JyuKGCpD7Y8PAw0zmlsbFRMH10NFO4SPf6c4rztPTNzc2S3HlD6471Gl4rQouRSypqa2u5xF9YWMDt27cjBimJ5jmF7ktOTmbORpxOZ0SfDLH1ZGdnIycnh3Xq13f5KggxI/0VMFJTRbIwE/tCPR7PnqmPHykpKdw1XGg9apC/o6ODuw/f2NiImpoaRcgRj9N2paH0M1JKUVNTw53qv379Gh0dHYKyyK1XzL1VVVXMnab+/n7RUYUi1cPhXwEYyvZQiCH9b4Qe8IdwigQxL2lkZIS5lq+rq5MU/03Jjzk2Nsbtlf3hnULvVYqw8byGjwQ1ZWeVd+LECe7AMDw8vEdrrgXZ/dDr9cxIOjs7O9wcDVLrKikp4fEjjK+hECQ9ISQVwL8IPV5YWCgpui3vIbxeL3OUT0pKQlVVlWYKmeB7V1dXuaNEUVGRYOJNNYkab1NytesXW3ZLSwvT8QXwzdZWV1c1I3vwfVVVVUxz8f7+fu7SQ0pdRqMRhYWFrFP/Ype3XEQa6b8LIMzUToojgR+sFzg+Ps60qKqpqQnErNfyg3k8Hty5c4dpM22z2UTnMguVQavROpo1fCw7FJbsYkEIwaVLl5gGPC6XC3fu3JEcrluJ9b7BYGDalmxtbYXly5NbH4eHFvh4y0Uk0odpA5OSknD48OGoekH/3xcvXoSdNxqNYS9Lq6lZZ2cn02wyOTkZFy9ejDrc9H6dtisNpd+DXq/HxYsXmUrflZUV0VZxSrezmpoa5oz4xYsXe3ggt67Dhw/znM8Etfhc0hNC8gG8E3q8tLQ0KrdG/z0TExPMeGlCWVCU+Ci8+8fHx7nrrba2NpjNZlXIGquRVQuo/WzBZZrNZrS1tTGvGxkZ4WajjVYuoXtNJhOqq6vDjm9sbGBiYiKqQRPwBezgZNl5Z5e/TAiN9L/OOs+aUsh5aazMoAaDgRtKONr6WPf7y9je3uaOBseOHUN+fvj7U5uk8TDljjf5IpWfn5/P3cPu7OwMeG4qIaPY++vq6pjp1XiZcaXWx5niM7fZg0/ypCR1FAAAIABJREFUEDZFSEtLQ1ZWlqBgYrC2toalpaWw45WVlZKCXCr18bq6uph2Arm5uREzlLJkidU6WMtfLJ5NDE6cOIHc3Nyw406nE11dXYoOFmKQlJSEysrKsONLS0sRg4MG18tDVlYWz/eFO8Vnkp4Qchw+B/09EKPAE/NSXr58yTwuV2Mvtl4WZmdnmVO/pKQkXLhwIaroNfE2OscrlHxP/uSSrMFjfHwcs7OzsuWTA0opd1uRxwOp9XJ4eXSXx2HgjfSfSCicCSGBWQ+bk5MTSPCgxBpLzP1C8cyC464rSdZ4nKprBbWf3V9eSkoKzpw5w7yGF3dRSNZoZAEAq9XKtKDjkV5qvQK8ZPKYR/owq56cnJyo3Eb9mJubY27TsRwVlHrxvPv7+/uZU6zc3NywF6n1enW/dQyxkF+o/CNHjjCn+Wtra0zbkNDyopUnFKz2vbW1hbm5ubD7pcJsNvPMcpnWeWGkJ4SkAAjzETx8+HBUgvnvY02lxVj4RdtwQj/I1tYWM22QkIskrzytCCln7a3VLxbPHwl+l+xQ9Pb2BgYeJZ5BzP08C7rx8fGoOQV8w88QnN3l8x6wRvrzAML2zEJ7TTmCejweZuD+goICwXS/rHqj/Ui9vb1Mb6za2lpRmW+F5Novo3O8Qql3mZGRwXSKcrvd6O3tVXQQiQSTycR0iZ2amlLEeIg1q4GPx+dDD7JIHzYlMBgMXK29lAd/9eoV09pNjoVfcN1SP57dbmdGM0lJSREMyCgHic6ADy3eTWNjI9P5ZWxsTFRSzWBEKyOrnbtcLmbqdaH6WcjKymJuDYLBZxbpL4ceyMnJiZhrTczLYCkukpKSkJ+fr/j0XQi8jCpNTU0wGAyaEDRepsxqIVbPF1qHwWBAU1NT2HX+9OFSyotWpvz8fOaughJafJ1Ox1vXh/F5D5MJIVYAYVErOFMHSQI6nU5mvvKSkpIwCz8lO4DQcnieTmlpaTzrprhZw2q9xo51/XLkY6G0tJS5l83y8FTqOVhl6HQ6pu7qzZs3TDsRqTJweHpql9ffyBFyQRuAsDlCpFjzLIQ+9NzcHPMBhKb2SjWi4HIGBgaYayiBSKMRy4zH0Tkawu6XZxELXsRmj8eDgYEBVdoZDzyLVr8WPxpZODw1wMfrAEJJHzYVMBqNspLxBYNSyjSKMJvN3Og7rDKi/TBOp5OZkcZisUhOicxDvBMonqHmuysrK2PmZhgaGoqYUlwIUuXMzs5mbn3Pzs5GzbGMjAyey/seXkckvc1mC4yA0XyI4P1IP+TMIKKRY2xsjKlI9Nv7q0nQ/TSyqoFYPX9w2Sy/DpfLJZgYU6hMuTKz2j2LH1LlIITwcgSwSU8IyQAQZmjOW89LeeidnR2mEYzNZlN0ShWpLJaNACtPWKwIuV+m4PEqZ6R6efkWeR54vHKjlZFFzLW1NdFpuoTk4PD1xC6/Aewd6S+Coc2PpMQT8zJ4vZi/bCUbB+8DraysMH3lq6urRfnJxxPpxMil5i/WkCuXXq9nurqGtg2lnze0LB6nhEZ7sfJwytbBx+/Af/wIM0NLSkqSZKjCE4z1MBaLhZnLXq0XzuvN5doIhJYfj+TYz1DrvfK+dzSWcaGIJG9qaipTvxDKEznPnJGRwfNUDfA7mPRhXaCQG20kBAvMUuKJXc8r8bEp9QXtYMkgx59ASr3xPmrGArF8L2azmdn25Aa18EOq7CwZ/Mq8aN8Bh7cBfguSPi0tLWoh7HY7Njc3w45L2fv3Q27DmJ2dZaa+9vf6sSTjfpxehyJe5efVzRrtt7e3mXYkYsuWClb739zclGwlyJKH41+/l/S7AfIrQq/yu7qGFiwFPP9lXiZSKRD74llTe4PBwE2KyCo7nggnp6NQ8xdrSJWruLiYabIqZBmn9DPz2r9Uf3+WPKG83UWFPxGGf6QvBRC2EOBlo5Xy8KwMMenp6UhOTlb8RfI+/vT0dNi1RUVFPFtlWXXEQ+M/yFDyvRsMBmbY7OnpadW+bWh5ycnJSE9PD7uOl1GJVxYLHN4mwcfzAOnDVZrg9hiSBGBt1XFshFUh0OLiInNvnmdyGw32w6gYj4jFe2N9f5fLhcXFRcXqiCQ/iwe8EFpS3oUAb6uBb0xuw0hvMpkE88jxBAsGIQTr6+th17F6ODFlyQFr58DvnBBcRzRhsaRAagNWQq6NjQ3MzMxgY2MD29vbsNvtcDqdMJlMMJvNSElJgdVqRX5+vqiOPhLitXMLlsvvRBbqeDU3NyfaSlSofDFg8cDPl2jeYXJyMkwmE8vSsBrAl1zSW61WUEqjanTb29vMUVZOw2K9BDGysUjPckPkvWStOgMe5H58v/vwq1evmPYJPGRmZqKoqAjl5eWq7myoCTHvzO8uHjqdnpubQ3195IzPSnRsLB64XC5sb29LHnCDQSmF1WplBZ8VHumD49X5IZUArLj2wWVHi0izAa/Xy1wjSfUa5CHWHQILTqcTL168wPDwsOTgDMA3hip9fX2oqqrC0aNHRQc40RJKkC43NzesfSwsLMDr9Ya5kqsxe+HxYGNjI+pZdlpamnTSs5QBUjsA1tRer9cHEkcEQwkChZa5sLDAbPhytgvF1MeClh3DyMgInj17FpUDiR9+D7SxsTEcP36cGcZZLWi1PMjNzQ3LsuTxeLCwsKDI7lIoQp/LbDZDr9eHtdH19XWu3kuovGBwOpRqANDt+tqGZXOINBqLUbSwRnqr1cokghqKm/n5+bBjer1e9ppNDsRue0XzzJRSPHr0CI8ePVKE8MFwOp2BsqOVUe33IBXZ2dlME2xWu5GDSM9FCGHyjDdDlvKeOPzNJ4RYDQCYQbl523U8sGYBPNJLLS+4TClYXl4OO5adnQ2dTheXa3g5Dd7lcuHu3buivLQyMjJgtVr3KHp2dnawsbGB1dVVwXtHRkawvr6OCxcuSMpYHA/gvVedTofs7Oywd8dqN9HUIwSr1Rr27oN5I7cTFOBvlQFA2LyNEMK0DRYLv6Cs6b3UziS0zGBEIiir/szMTMn1iK1Pa1BKIxLeYrGgqqoKhYWFgt90c3MTr1+/xvDwMNOCEvApue7evYsrV67E5buQg4yMjLD3x2o3StUXChYf1tfXoy7fYrGAEMIqp9IA4FDoUZPJtOcGOR/Y6/UyG49SSjxAuCPg1S+30+HVx6tfCzx58oRL+KSkJBw7dgwVFRUR4xsCvkZSU1ODqqoqjI6O4vnz53A4HGHXzc3N4cmTJzh1KiyqmmpQc8rPag+bm5t7lHlq1s/iQ2j9UhDMWZPJxPqGhwxg5J8Pnb7JmWpvbW0xX5Z/K1BqeWLhL3tjY4Nbv5qQ0kCiee6xsTEMDw8zzx06dAgXLlyQteWm0+kCM4O7d+8yp7rDw8PIzMwMi0MgBfGyl89TWG9sbEQ1QPAQ+tys9kgpxdbWlmjjOB6MRiOL9BYdgLCSI5mnilEo8AICsBqiGsoc3hTN3+nEg4WcFOVW8M/hcKC7u5tZZlFREa5evRr1HrvZbMbVq1eZ5qoA0N3dDYfDIfsZYolgOXjEEjPFl1IP77l534nHHynvkcNjqyzSixGEZZQDQFZSCzkNhaVEZFkZxnPj5OHFixdMLX1WVhbOnTsXUFRG+9PpdDh37hzTVdNvDxCPkPJNk5OTmYpJngZdSp1iwOODnz/RtEch0kec3ksFpZRJep1OJ2udElyu2JeglBIx3joFu93ODOGdlJSEtra2qN4vCzqdDm1tbczADCMjI7JdQaOB0t+Ep0yTUr9c8Djhcrmibl8cHvOn99E+DCtllL9cJSE0BQ5FNDsSUutXq4MYHx9nJuo4evQoM/6bEkhJSWGGkPZ6vRHjy4lFLJcGrCm+0NJFSVBKmSMyiz9SyuSVC95IH3yx3AdmjfT+nkeLDylUf6wQ7XQbAF6/fh1WrtVqRUVFWDgERVFRUcEkh18eJZ4tVmDNYnjL02jAe25Wu5RSP+9dckgvXZEn9mOxeioh0indEHj1x3Pji4StrS2m80xVVVVgi1WtHyEEVVXhdlwrKyvM1OPxhEjPpvRIy6uTBxYvhOoXW64kRZ6UEZEnAKunilZBqNRMQ2qd8dIpzMzMMI/n54dZUasCXj08ubRCtN9M6ZFWajth8SK4frllc9q7lblPLyeiTLCAgPSRXmr5oQjd89a6fjEyRQuWcslqtTKjCquB1NRUWK3WMM22EttbodCygxU70qslE2+kj7Y+3vTeAAFFXjSNljfS+x9EaUKEviAlZhrRIpqPxno/rOCeaignhWCxWMJIz5ILiB8DnEjgjfRqy+8vP9JIL7ds3vRecKQPfWgpROVp74OFCoVSHQGllOlSy9o9iDcbcj9Y74dFrpSUFE3Jxdoh2N7e3jcEB8LfLYscHo8n6oFPqM5I9UvVKbDKFxrpw0yCeBlfpBCVRzohKNUR8F4Yq34xjTVeOgaWQQ4nsYFqYNWntDtvNJDT+fDau9vtlrUkVGJNLxQARWz5nOcyGwDYAexZFEqJuMIbOVkVytGIil3DB4PXucjVyMZyHR8MlvWW1oRj1ad2ZB21ZxG89i5nkJIDVrsM5o/cejjPZTcA2EQI6aM1DACUmbKIqYcFQggzIomS9fMg9wOJ6SxYU2uxSQ+VAqs+sUZB8boEYK2f9Xo9zzVVcahlyMZp75sGABsA9sSPUsIwgaecCH4QtUZFvxIjlPROp1PRdZqSEPOBWXHTNjc3NSUTy13Zn8NgP4JStsm4GtajofX6oZbSmcPjDf9IvwdKjIhi9j7VVOax3Ar9zxXpY8ZjpwCwbcTX1tZgt9s1iVxrt9uZcdnVcEFVCmKIq9b2rlgZ1LIe5Y30OvhGejEXS4Lc6b1SRjHRbIOItVLTGocPH2YeZ2XwUQO8enhyqQklv5FSI61cGSLtdMkFh28bcUd6HqR+2GitrKKVSY3Owmw2M8N9jYyMMJ1wlITX62V692VmZkY1y9D6HbIgZaRXQ6ZYkD5seq8EObQgnR+sD6CGwYNSkNvQKaVMU9jNzU2MjY1F3SCF7h8bG2Ou5/Pz86N6nngAyyMz2NNUbXnVmt5z2nv8Te+VAms/2R9CKx4bnlgcOXKEuR3a398v6NseDQHtdjv6+/vDjuv1emba53gG67lZATO0tH840NN7r9crK+uKHEQTTzyeR6WUlBSmG63D4cCDBw8Uf78ejwcPHjxgjoYVFRWq+fBLRTTfMJpQ7dHC4/Ewl2YHZnovIIji4OUJi2ZfO16mrzU1Ncz3u7q6io6ODsWI7/F40NHRwYyJbzQaUVNTo0g9odDyPe/s7CiWb1EOeHzYl9N73vRIq/BKQnnCtEQ0613ez2g04sSJE8z6ZmZmcPPmzajfs91ux82bN7lusydOnBAVnyBeOkoe1M63GAm876TE8kLz6X1qaipzv1sr0sW6frVRXFzMzS+3urqKGzduYGRkJOA4Ivbn8XgwMjKCGzducLPeVFZWori4WM3H0wys9kAI0cxdWc36eaQ3AAgLxeJ0OmUH2/dDp9Mx3TC1Il2s69cCDQ0NWFtbY+ZeczgcePbsGUZGRlBeXo6CggLBhrS1tYXp6WmMjY0JRsKx2WxoaGhQRP54AKs9WCwWxQOMal2/1+vl+WWsGACEbb5SSrG5uRm1pVWsSceqn2VRtl9BCEFLSwva29u5SRe3trbQ29uL3t5epKWlwWKxhOWy29zcFBUIw2azoaWlJW4tFuWA1R60jFHAI320EDDPHjEAGOIJEy3prVYr3rx5E1auVsjMzAyrf2lpKepZTDzBaDSira0NPT09GB0dFbx2fX1ddpSbiooKNDY2HijCe71eVg73iPkOlYRaOwcCPBvSUUo3AYRpa5QgJy9Pl1bKGlaOcY/Hw/zQ+xmEEBw/fhynT59W3M3VZDLh9OnTOH78+IEiPOAbAFg7HWrkpmfBP6MOhYqkn6GUbvo3A4cQkqNeLdJ7PB7Y7XZNFCWHDh1iutjOz88jJydH9fq1RklJCfLz8zE4OIjR0dGotu70ej0qKiq424MHAawlkV6vx6FDYTldVYHdbmd+IxVJPwQAwaS/LOImSeCtTTY2NjQhPS//+Pz8POrr61WvPxYwGo2BbLUTExOYnp6OmHs+GBkZGSgoKEBpaWncGN6oBRbps7OzY6rEA5RZ04sh/aBYgaTAnycs1EhgY2MDeXl5UZcvBjk5OWGkX1lZgdvt1jxQppZISUlBbW0tamtrYbfbMTs7i42NDezs7AQMUoxGI5KTk5GcnAyr1Yq8vDxNXHTjAW63m5lDQMsZIItj/m+iRtnY5XnwSL8HLpcLDocjaiMBq9Ualu5YS2Uea33m9XqxuLioWccTa5jNZpSVlcVajLjC4uIi0/xVq/U8oJ4Sz+Fw8KzxhgBAF/wfMUJJBWsHYHFxMepyxSIzM5O5Jp2amtJMhgTiD6zvbzQaNdXcs3igREASIc098A3pJwGEeVQoQXrWdGl9fV2z2G6EEKY76vT0tKZefwnED9xuNzMgSH5+vmY7FDs7O8ztUyWWFxzeOuDjuY/0lFIvGEY6apEeABYWFqIuWyxYJqMej4eZDDKBg4/Xr18zteZamhbz2r+KpB/Z5TmC1ZRhU3wl0hWZzWamNpJnQaYGbDYbUxM9OTmpmQwJxA9Y3z0lJUXT9Tyr/VssFkUUqRzeBvgtSPpQBZxcsF6mlqQnhKCoqCjs+MLCgmZefwnEB+x2O3OULSoq0tT4iNX+lep0OLxlkv5R6FVOp1PSHi8PrCnL1taWpoQrKSlhHk+M9m8XeN+b1z7UgN1uZzo1KTG1X11d5TnaBPgdTPo7AML2MJRYe/MeRsvRPj09Henp6WHHx8bGNIvmk0Bs4fF4MDY2Fnac1zbUAq/dK0F6Dl+98PEbQBDpKaWrALrFCigFycnJzK0ILUkPsHvznZ0dTExMaCpHArHBxMQEc9dIy1EeYLf7tLQ0RYxyOJzq3uU3gL0jPQDcDL16cXFREQcZ1npFSw0+4AsqydqzHxoaUj2EdAKxhdfrxdBQuDmK0WjUPLgnq90rsZ6nlPJsYPbwOpT0t0Kvdrlcqq3rt7e3NfV4MxqNzKCSdrs9YaxzwDE1NcXUIVVUVGjqULS0tMRMOa7Uep5jibeH16GkvwcgzGJFiWl4Tk4OUzuqtSKtoqKCGUJ6aGgobiLeJqAsKKXMUd7vSaglWO2dEKII6Tk8dcPH6wD2kH7Xt/6xyMIkwWQyITc3N+z469evNZ1aJyUlMe3QNzY28OrVK83kSEA7vHr1immwUlZWpml8e6/XyzQIy83NVSQOAoenj3d5HQDLhzBsXe+PNhMtWAoTp9MZFt1GbVRVVTHdJ58/f54wzT1gcLvdeP78edhxnU6HqqoqTWV58+YNcztNCUUiLwoQGHxmkT5sXc9zQ5SK/Px85vpJ6yl+SkoKSktLw45vb28zM7kksH/R39/PXEPHIl4Aq50bjUamb4hU+N3FGQjjM4v0D8FwvlFiiq/X61FQUBB2fHZ2lmdQoBpqa2uZ/vQjIyMHKnjm24y1tTVm0k2DwYDa2lpNZXE6nZidnQ07XlBQwNQxSQWHnw74+LwHYaSnlG4D6Ag9HhqIQi5YUxmv16v5ejolJQV1dXVhxyml6O4OM1dIYB+iu7ubqZytq6vTfJR/9eoVc4mslI0Ah58du3zeA15cIOZ+vRJmszk5OUyngliYw1ZWVnL9/RPmufsbk5OTXH91XpIQteUJhdlsVkRrb7fbRe3P+8Ej/U9ZB5UiAqt3W15eZkYGVROEEG56qJ6enoQzzj6F3W5HT08P89yJEyc0j+q7ubnJdIJRapQX4CWTx0zSU0qfAwh7a0oZsPD8liPFbVcDOTk5THmcTic6OzsTe/f7DJRSdHZ2MnVExcXFMYmCzGvXSvnvc3jZs8vjMAiF/fxx6IGNjQ1F3G2tViszzPDLly+ZKZHVRkNDA3NXYWlpibndk0D84vnz58ytK6PRGJN0XA6HAy9fvgw7fujQIUXi4S0vL/OCZoTx1w8h0v9PAGHuZ0pN8VnrKn/yRK2RnJyMpqYm5rnh4WHN7QgSkIc3b95geHiYea6pqUkRhxap8CcRDYVSegUOHz3w8ZcJLukppW8A3Ag9ztNCSkVhYSEzos7o6Kjm23d+eXgRYx8/fpxY38c57HY7Hj8OMyYF4LO8Kyws1Fgi3xKRNbW3WCyKyCOw63Vjl79MRIrqHzZF4O03SgUhBDU1NWHH3W53TNb2ANDY2Mj0q3Y6nWhvb09Y68Up3G432tvbmYNFeno6GhsbYyCVbwBjtZmamhpFlIkC9i3cqT0QmfQ/BRCmUldqil9cXMzcvuO9LLWh1+vR3NzMNNpZWVlBe3t7wgU3zuD1etHe3s60GDUYDGhublbE+EUqeIOX2WxWTIHH4eEmOFp7PwRJTym1A/hJ6HGeDbFU6HQ6VFdXhx13Op3MCCdawGq14uTJk8xzc3Nz6Orq0liiBITQ1dXFNRw7efKkIsoyORgbG2NypLq6WpG0WQI+Kz/Z5S0XYmoPmyrwvIXkoLS0lKlg4SlAtEBxcTF3fT81NYXe3l6NJUqAhd7eXu42cllZmaYhrYPBU0gnJyczfT7kQMA7VXBqD4gj/S0AYQxXaoqv1+uZ3k47OzsYHx9XpA45OHHiBDft1fDwMFdLnIA2EPoGeXl5XKMrLTA+Ps4My1VVVaXYUoPDv9dgONiEIiLpdwPk/33o8aWlJcWi3pSVlTH9iQcGBmKybw/4FI0tLS3ctMW9vb0J4scIw8PD3NnWoUOH0NLSornVnR8OhwMDAwNhx00mk2L5BAW49/f+hBZCELu4+DsAYaZprIeTA4PBwNy3dDqdMTWO0ev1aG1t5a4Le3t7E8Y7GuP58+dcwlutVrS2tsZEcefH8+fPmWv5yspKxbIkC/DuR2LuF0V6SukAgJ+FHp+dnVUkfh7gC2PFWttPTExoGkcvFCaTCW1tbVyvrKGhIXR1dSXMdVUGpRRdXV3MsFeAz2uyra1NkQg0crG0tMSMrJycnKxYWK7V1VXelvlXlFJRwSCkqBH/nHVQqdFeyEzy6dOnMSWV2WwWbFATExN4+PBhIn6+SvB4PHj48CE3VLm/Y1YiJZRcUErx9OlT5jmembccCPDtT8WWIZr0lNLHAK6HHp+enlYk5x3g05pnZ2eHHV9bW4uZwY4faWlpuHz5MrdhvXnzBnfv3mVGaUlAPra3t3H37l2uKbTZbMbly5cVSfEcDUZHR5nBV7KzsxXbRVhfX2dm2wVwh1L6QGw5UjcMmaM9b8olBydPnmQqYfr6+mJOKKvVKtjAlpaWcOPGDUUsFhPwLR9v3LjBXd75O+JY7cX7sb29jb6+vrDjhBCuzYccCPDsz6SUI4n0lNLbYITfmZqaYubmkgNekAO32x0X++MpKSm4dOkSsrKymOcdDgfu37+P58+fJ9b5MkEpxfPnz3H//n3u7k1WVhYuXbqkeQQcFnp7e5kWpLwgLXKwtbXFs0l4TCkNm4ELQY5pUNhoz4srLhe8cEavXr1SLGxXNDCZTLhw4QIOHz7MvWZoaAi3bt1KOOpIhN1ux61btwTb0+HDh3HhwoWYKu38mJubYzq98MKxyYVAXgZJozwgg/SU0s/BCLAxMTGh2PTbYDBwlXpdXV0x27sPhl6vx7lz5wT3XpeXl3H9+vVErjyRmJiYwPXr1wVjNpSVleHcuXMx3Zbzw+FwcM2yGxoaFNui297e5rWh5wA+lVqeXCPgsNHe6/UqaqxSVFTETYXFc6HUGv4125kzZ7gf2OVyoaurC7du3UpE2eVgbW0Nt27dQldXFy8tEwwGA86cOcPV+cQCjx8/5qaoKioqUqye4eFhnsntn1MZa0giZ91JCNEBGACwx35Wr9fj/fffV2zrZH19HTdu3GA+8LFjx5jOOrHCxsYGOjo6BIlNCEFFRQXq6+sVGwX2M9xuN/r6+jA6Oiqo/0hPT0dzc3PMFXbBGBoa4ibRePfddxVby9vtdly7do21HTwCoEaMBV6YjHIE2a3oL0KPezwebkBCOUhLS8Px48eZ5168eBFTo51QWK1WXLlyRTADKqUUIyMjuHbtGqampt5aRR+lFFNTU7h27RpGRkYE38ORI0dw5cqVuCL80tISXrx4wTx3/PhxRbcPe3p6ePYffyGH8IDMkR4ACCFG+HqbsJCera2tXGcVOejo6GB69ZnNZrz77rtxodAJxtTUFJ49exbR/dhqtaK6uhrFxcWKuFvGO7xeL6ampjA0NMSL6xaAyWTC8ePHY+Ypx4PT6cSNGzeYCtrCwkI0NzcrVtfs7Czu37/POjUJoJJSyl4LRYBs0gMAIeSXAfxT6PHU1FS89957iilbXC4XfvGLXzBDZB8+fBjnz59XpB4l4fcbYAVFDIXZbEZ1dTVKS0vjQkGlNDweDyYmJjA0NCRqN+PIkSM4duxY3HXmAPDgwQOmoZDFYsE777yjmOWdx+PB119/zdsK/xVKaVicC7GIivQAQAj5EsAHocfr6uoU3bJYWVnBrVu3mOv7hoYGzZMRisXy8jKePn0qykchOTkZ5eXlKCkpialJqVKw2+2YnJzE2NgY09U0FBkZGTh58iTXszHW4Hn36XQ6XL58GZmZmYrV1d/fz8ur+BWl9MNoylaC9OUAXgDY4y2j0+nw3nvvMYNfysXo6CiePXsWdlyn06G1tRU2m02xupQEpRRjY2Po6+vjaqdDkZOTg5KSEhQUFCg2emgBl8uF6elpTE5OYmFhQdQ9RqMR9fX1KC8vjxvNfCjm5+dx//595qBz/PhxRfPcb25u4uuvv2bVtQPgKKU0qrBSUZMeAAghPwDwH0OP5+XlobW1Neryg9He3s60PzYYDLh06RIyMjIUrU9J7OzsYHBwEC9fvhTtnKPX65Gfnx9I1BCPWn+3242FhQVMTU1hZmZG0rMdOXIENTU1MQlPLRarq6u4ffs20+puBY4CAAAR7UlEQVSuoKAALS0titZ3//59nin3f6KU/iDa8pUifTJ8o3156LmWlhZmplq5cLlcuHHjBnOtk5ycjEuXLik6u1ADDocDw8PDGBsbkxQAVKfTITMzEzabDTabDVlZWTFRAPpzoc/Pz2N+fh4rKyuSAoYaDAaUl5ejqqoKSUlJKkoaPTY3N3H79m3m8iQ1NRXvvvuuojOx6elptLe3s06NwTfKR14nRYAipAcAQsgHAL4MPW42m/Hee+8pOkItLy/j9u3bzIZmsVhw6dKluB45/PDHRZcb61+v1yMrKwsZGRmwWCxIS0uD1WpVlEgOhwMbGxtYX1/H5uYmVldXsbS0JMuN2GQyoaKiAhUVFXGppAvFzs4Obt++zVQg63Q6XLp0SVH9g9vtxtdff81Tdn5IKf1KiXoUIz0AEEL+CcAvhx6vrq7GsWPHFKsH8NnhP3r0iLnHm5GRgUuXLsXlVJgFt9uNly9fYmJiQhGrPaPRCKvVCovFApPJBKPRCIPBEPbX7XbD5XKF/XU6ndjc3MTGxoZoHYQQ0tPTUVpaiiNHjuyrb3L79m2mApYQgjNnzihqdQf4ou5wfA5+Qin9FaXqUZr0hQAGAaQGH1dDuwnwFXsAYLPZ0Nrauu/2v9fW1jA5OYlXr17F3JU4GqSkpKCoqAglJSXMBCLxDK/Xi/v372N+fp55XmnFHSC4O7UFn+WdMuGnoTDpAYAQ8u8A/GXocTXWP4DPz54XTaSwsBBnz56NW42wECilmJ+fx9TUFGZnZ+PCySgSkpKSkJeXh+LiYthstn373js7O7kh3mtra1FfX69onUJ6KgB/QCn9L0rWpwbpDQCeAQh7M2poOgHgyZMnXCOYsrKymOQkVxqrq6sBxdni4mJcpNgyGAzIzs4OKBbjeedEDCil6O7u5oZeP3LkCDfRaTTg7UgB6ANwnFKq6MdWnPQAQAg5C+A+gLAFnBpTI0op2tvbMTMzwzxfWFiIM2fO7LupPg9erxfLy8uYn5/H+vo6NjY2sLm5qWqMPr1eD4vFAqvVirS0NNhsNhw6dOhAvdNHjx5xR/j8/HxVQmsLLFHdAFoppZ2KVgiVSA8AhJDfBxA2LVFrfe/xeHDv3j0sLi4yz9tsNpw7d27fKJKkglIKu92OjY2NQCdgt9sDCrpgZV1w56DX6/co9/z/NpvNAZJbrVaYzeZ9P1viwe124+HDh9w1fHZ2Ntra2hQ3kRayMgXw7yilf6VohbtQk/QEPgf/Xwo9p9b63uVy4fbt21wNeEZGBtra2uJ+b1htUErhdrthMBgOLJHFwuFw4N69e1wz6fT0dFy6dEmVtiqwjv85gG/L8ZUXA9VIDwCEkEPwre/D9jbUWt/7Y9SxspgCvn38trY2pKamMs8n8PZga2sL9+7dY+7DA0BmZiZaW1tVGSQE1vGv4FvH88MHRQlVF2S7gv8afOuTPZienlYlrHVSUhIuXrzItcPf3NzErVu3FEvSkcD+xOrqKm7dusUlvM1mw8WLF1Uh/OjoKI/wbgC/pibhAZVJDwCU0ocA/ph1rre3lzsiRwODwYDW1lau8cTOzg7u3Lkj2iEkgYOFhYUF3Llzh+v5V1RUhNbWVlX0PysrK0JRnf94ly+qQtXpfaAS38Lx5wA+Cj2XmpqKK1euqNKjUkrR09PDnVEQQnD06NG4CruVgLoYGhrCixcvuNF6Kioq0NjYqIquw+Fw4ObNm7x1/BcAfkmtdXwwNCE9ABBCsuBb3xeGnsvMzMTFixdV06wPDAwwkxH4kZeXh9OnT7/1Cr6DDIfDgcePHwsmIqmvr0dtba0q9bvdbty5c4c3s30N3zpek/hvmpEeAAgh5wHcBmP/Pjc3F+fPn1dt3/fly5eCOfFSUlJw9uxZZlqtBPY3FhcX0dnZyTVr9kc1FopvGA28Xi8ePHjAy9ngBnBJSlqqaKEp6QGAEPLvwQiqCfhy2Z05c0a1uqenp/Ho0SOuEQshBHV1dar19gloj4GBAfT393M7e71ejzNnzijq/h2KR48e8bLTAMAfUkr/s2qVMxAL0hMA/w+A77POV1ZWorGxUbX6V1dX0dHRwdXaAr5Zx5kzZxLT/X0Mh8OBR48eCWZEslgsaG5uVtV8uKenByMjI7zTfwfgX2mxjg+G5qQHAvb5/wzgW6zzase0d7lcePLkCdfkEvAF5Dh9+jRyc3NVkyMBdTA3N4fHjx8LxuUrLCxEU1OTqqHIeLHxd/E5gE+UtqsXg5iQHgAIISkAbgA4xzp/+vRplJSERddWFGNjY+jp6RGM+lJYWIiGhoYDEajyoGN7exs9PT2CnblOp0NjYyPKy8OCPCmKyclJoUxMDwG8SymNie90zEgPAISQTAD3wPDII4Tg/PnzisbPZ2FlZQUdHR2CWXcNBgNqa2tRWVl5YBxMDhK8Xi9GRkYwMDAg6H2YmpqK5uZmxf0+QjE7O4sHDx7w9Ah9ANoopcobqIhETEkPAISQAvh6vrCsBnq9HhcvXlQ9JLI/3xzHSioAq9WKEydOxG3U3bcRCwsL6O7uxvr6uuB1BQUFOHXqlOqRhZeXl3Hnzh2esngKwDlKqXBDUxkxJz0AEEKq4XPFDdsvM5lMOH/+PDcfvJIYHR1Fb29vxCCPRUVFaGhoiIvc6G8rdnZ20NvbK6QVB+Cbzjc0NCjuzs3C0tISHjx4wIt3uAifq6xyOd1lIi5IDwCEkDMAbiIk1BbgG/Gbm5sF88Erhc3NTXR3dwtqfQHflL+urg7l5eUHMitNvMLj8WBsbAwDAwMR4/fl5ubixIkTmkRHfvPmDTo6Ongj/BaAK5TSR6oLIgJxQ3oAIIS8D+AzAGFzMEIITp06pbpyz4/Xr1+jp6cnYpy65ORkVFZWory8/MD66scDXC4XxsbGMDIyEjF0WEpKChobG1FYGGb8qQomJyfR1dXFW8O7AHxMKb2miTAiEFekBwBCyP8B4O8BMI2ftUxh5Xa70d/fHzGzKrD/wjvvFzidToyMjGB0dDTiyE4IQWVlJerq6jTrgHmprnZBAfw6pfT/00QYkYg70gMAIeS3APx3MMx1AXVCagthfX0dT58+5UblCYbBYEBZWRmqqqr2Rez9eMXOzg6Gh4cxPj4uKh5gdnY2Tp48qWia6EgQCFkN+Mxr/w2l9IeaCSQScUl6ACCEfAvAPwJgbpCXlJTg1KlTmkZ+mZycRG9vr6jItHq9HqWlpSgvL9e0Ie53rK+vY2xsDC9fvhSVNScpKQkNDQ2aLfsAn/dmV1cXJicneZfYAXyPUvq5ZkJJQNySHgAIIS3wueQy9+wOHz6M5uZmTRVpLpcrMN0Um5UmMzMTJSUlKCoqSpj2MuBwOPDq1StMTk6Kjq/gX05VVlZqmuDT4/Ggo6ODma56F8vwucgyc1PFA+Ka9ABACKkDcA0Ml1wAyMrKwvnz5zVfR7vd7oBiSUwaZsC3fZSXl4eSkhIcPnz4rTb08Xq9ePPmDSYnJzE7Oys6F14sFadOpxMPHjzA0hLXA/Y1gPcppcwc0/GCuCc9ABBCiuAjPtP9TQvHCR48Hg9evnyJ4eFhXg4yJkwmEwoLC1FSUqKJDUK8YGlpCZOTk3j9+rWk/H1msxlVVVU4cuRITLZIRThqDcBH+FcaiiUL+4L0QCDI5ucAmlnntbKp5sHr9WJychJDQ0OCHnwsJCUlIScnBzabDTk5ObBarSpJqT02NzcDSToWFhYkZ+qxWCyorq5GSUlJzGZGInw0OgB8S+3Ydkph35AeAAghZgD/G4ywW35o4T0lBEopXr9+jbGxMVHafhZSUlICHYDNZttXzj52uz1A8Pn5edn5+LKzs1FeXo7CwsKYhekW440JX5irX6WUip/mxRj7ivRAwC33fwD4Td41FosFZ8+eVd2xIhK2trYwOTmJqakpyaN/MFJTU5GdnR1IRe3PSBvLmPWU0kBmW38q68XFRUHHpUiwWCwoLi5GSUlJzEOUr6ysoLOzM9J3+xGA346Fe2w02HekBwKBOP4AwJ+Cs5evpc21GCwtLWFqagqvXr2SlYs+FDqdbk8GGv8vNTUVRqNRkamw1+uFy+XC1tZWgNzBGXTEKt+EYDKZUFRUhOLi4rjRbYjwwXAD+BMAf6l1AAwlsC9J78duzL1/AEezD2jnXSUWfq311NQU3rx5owhxWNDpdMx0Vf6/er0eHo8nLD998L/VlO3w4cMoLi6Oq10Mkd6Wr+GLTa9ZTDulsa9JDwSi7P4dOFF4AN/0+OzZs6q76EqFy+Xas/6N5B66n+FPeunXU8RLJ+zH8vIyOjs7Iy1PPgfwfa2i1qqFfU96IDDd/30Afw6B6X5lZSVqa2vj1jFmZ2cHCwsLgU4gGj1ArGGxWAIkz8nJiVuTZLfbjYGBAYyMjESazv8RgL/aj9P5UBwI0vuxa8H3D2AE5PDDbDajsbFR1einSsFutwc6AX9K6khOJ7GA0WgMpLD2k3w/7DhMT0+jp6cnkn3FFHzT+bi1sJOKA0V6ILCf/0MAHwtdl5eXh+PHj2via60kdnZ29mjN/Uq1zc3NiJ6A0YAQAovFEqY8tFgscTuK87C5uYlnz54JJr7YxWcAfmu/7L+LxYEjvR+EkN+DL74+d/Go0+lQU1OD6urqfR8Iw+v1YmtrCw6Hg6mcY/3fr+ALVfiFKv2SkpKQmpoaNwo3ufB4PBgaGsLg4GAkJaULvnj0f62RaJriwJIeCETj+VswAm8GIzU1FSdOnFA9CGcCscPs7Cy6u7vF2BH0AfjX8RLlRg0caNIDAWOe3wHwAwCCc/mCggI0Njbui/VoAuJgt9vR09MTMegpgE342sjf7DdjG6k48KT3Yzfq7l8D+J7QdXq9PhAEIxH4cv9ie3s7EISDl8YsCP8I4PdiHaVWK7w1pPeDEHIVwH8DIBhzS6fToaSkBNXV1ftO2fc2Y3NzE0NDQ5icnBRjXDQM4N9SSq9rIFrc4K0jPQAQQkzw7ev/CQDB4ZwQgqKiItTU1CQi4MQx1tfXMTg4iFevXonZxdiGz4T7ryil0dtE7zO8laT3gxBSAuBvAHxHzPX5+fmora2NuSNPAt9gZWUFAwMDmJmZEXvLzwD8DqWUG+vqoOOtJr0fu/H4/iuASjHX5+bmoqamBjk5OeoKlgAXCwsLGBwcjJifIAgjAH43XuPWaYkE6XdBCNED+JfwmVsKbvH5kZGRgZKSEhQXFydi32kAh8OBqakpTE5OYnV1VextffCZZ/8vSmlEjd7bgATpQ7Brx/8JgD8G0CTynkDsu/z8/H1vxBJP8Hq9mJmZCcTSk9BenwD4MwD/fBDs5ZVEgvQCIIR8AJ+y77zYe97W2HdKQ24sPQAPAPwppfQrlUTb90iQXgQIIZfgG/nflXKfxWIJTP9jHQlmP2BrayswfZfhYXgDwJ9RSm8rL9nBQoL0EkAIOQsf+QWdeVg4dOgQcnNzYbPZkJWVlVgCwDd1X1pawvz8PObm5rC8LMuv5TP4yN6psHgHFgnSywAhpALAbwD4vwCUSb1fr9cjKysLNpsNNpsNmZmZMY13pxUopVhZWQlEx11aWhJjLcfCOID/F8CPKaWjykp58JEgfZQghLTC1wF8D4CswPtGoxHZ2dmBTiA9PV1RGWOJtbW1AMkXFxejiQewCp+57I8ppfeVk/DtQ4L0CoEQkgTftP83AXwAAZfeSEhKSkJ6ejrS0tL2+K/HsyOQ3W7f49+/vr6OtbU1yXHuQ+AC8BV8UWc/o5RGVVgCPiRIrwIIITkAfg2+DuCUUuXq9fqw6Lf+QBZahABzu91hATz8P5nTdB664CP6P1BKF5QsOIEE6VUHIaQGwHcBXIFv608V173QwBeR/vKi4Ub6qxK24dtquwngp5TSQbUqSiBBek2x6+jTAl8HcAXAWUSxDNjHcAHohI/kNwG0v42OL7FCgvQxBCEkFUArvukETgI4iHt5XgBP8Q3J71NK5afCSSAqJEgfRyCEZAC4AOA4gOrdXxWA/ZTRcgM+P/Wh3d8zAHcppaKN5RNQFwnS7wMQQvLxTScQ/CtFbGYGXgAT+IbYgR+lVLSPawKxQYL0+xi724QV8LkEH4JvRmAFkMb5d/D/zQDs8I3M67t/Nzj/9x9bhs9FdTSxfbZ/8f8D5GbGlqq+4gYAAAAASUVORK5CYII=");
			this.element_JoyControl.setRotation(0);
			this.element_JoyControl.setVisible(true);
			this.element_JoyControl.setEnabled(true);
			this.element_JoyControl.setBackground("transparent");

			if(this.element_JoyControl_onTrigger)
				this.element_JoyControl.onTrigger = this.element_JoyControl_onTrigger;
			
			if(this.element_JoyControl_mousePressed)
				this.element_JoyControl.mousePressed = this.element_JoyControl_mousePressed;
				
			if(this.element_JoyControl_mouseClicked)
				this.element_JoyControl.mouseClicked = this.element_JoyControl_mouseClicked;
			
			if(this.element_JoyControl_mouseReleased)
				this.element_JoyControl.mouseReleased = this.element_JoyControl_mouseReleased;
			
			if(this.element_JoyControl_mouseEntered)
				this.element_JoyControl.mouseEntered = this.element_JoyControl_mouseEntered;
			
			if(this.element_JoyControl_mouseMoved)
				this.element_JoyControl.mouseMoved = this.element_JoyControl_mouseMoved;
			
			if(this.element_JoyControl_mouseExited)
				this.element_JoyControl.mouseExited = this.element_JoyControl_mouseExited;
			
			this.element_JoyControl.setBounds(this.layouts[this.currentLayout]["elements"]["JoyControl"].x, 
							this.layouts[this.currentLayout]["elements"]["JoyControl"].y, 
							this.layouts[this.currentLayout]["elements"]["JoyControl"].width, 
							this.layouts[this.currentLayout]["elements"]["JoyControl"].height);
							
		
			this.element_BGForTemp = new ImageElement(this.parent, "BGForTemp");
			
			this.element_BGForTemp.setImage("https://atmosphere.anaren.com/dev/images/demo/blank.png");
			this.element_BGForTemp.setRotation(0);
			this.element_BGForTemp.setVisible(true);
			this.element_BGForTemp.setEnabled(false);
			this.element_BGForTemp.setBackground("#C4B893");

			if(this.element_BGForTemp_onTrigger)
				this.element_BGForTemp.onTrigger = this.element_BGForTemp_onTrigger;
			
			if(this.element_BGForTemp_mousePressed)
				this.element_BGForTemp.mousePressed = this.element_BGForTemp_mousePressed;
				
			if(this.element_BGForTemp_mouseClicked)
				this.element_BGForTemp.mouseClicked = this.element_BGForTemp_mouseClicked;
			
			if(this.element_BGForTemp_mouseReleased)
				this.element_BGForTemp.mouseReleased = this.element_BGForTemp_mouseReleased;
			
			if(this.element_BGForTemp_mouseEntered)
				this.element_BGForTemp.mouseEntered = this.element_BGForTemp_mouseEntered;
			
			if(this.element_BGForTemp_mouseMoved)
				this.element_BGForTemp.mouseMoved = this.element_BGForTemp_mouseMoved;
			
			if(this.element_BGForTemp_mouseExited)
				this.element_BGForTemp.mouseExited = this.element_BGForTemp_mouseExited;
			
			this.element_BGForTemp.setBounds(this.layouts[this.currentLayout]["elements"]["BGForTemp"].x, 
							this.layouts[this.currentLayout]["elements"]["BGForTemp"].y, 
							this.layouts[this.currentLayout]["elements"]["BGForTemp"].width, 
							this.layouts[this.currentLayout]["elements"]["BGForTemp"].height);
							
		
			this.element_BlueLabel = new LabelElement(this.parent, "BlueLabel");
			
			this.element_BlueLabel.setValue("Blue");
			this.element_BlueLabel.setVisible(true);
			this.element_BlueLabel.setEnabled(true);
			this.element_BlueLabel.setColor("Black");
			this.element_BlueLabel.setFont("18px Arial");
			
			if(this.element_BlueLabel_onTrigger !== undefined)
				this.element_BlueLabel.onTrigger = this.element_BlueLabel_onTrigger;
			
			if(this.element_BlueLabel_mousePressed !== undefined)
				this.element_BlueLabel.mousePressed = this.element_BlueLabel_mousePressed;
				
			if(this.element_BlueLabel_mouseClicked !== undefined)
				this.element_BlueLabel.mouseClicked = this.element_BlueLabel_mouseClicked;
			
			if(this.element_BlueLabel_mouseReleased !== undefined)
				this.element_BlueLabel.mouseReleased = this.element_BlueLabel_mouseReleased;
			
			if(this.element_BlueLabel_mouseEntered !== undefined)
				this.element_BlueLabel.mouseEntered = this.element_BlueLabel_mouseEntered;
			
			if(this.element_BlueLabel_mouseMoved !== undefined)
				this.element_BlueLabel.mouseMoved = this.element_BlueLabel_mouseMoved;
			
			if(this.element_BlueLabel_mouseExited !== undefined)
				this.element_BlueLabel.mouseExited = this.element_BlueLabel_mouseExited;
			
			this.element_BlueLabel.setBounds(this.layouts[this.currentLayout]["elements"]["BlueLabel"].x, 
								this.layouts[this.currentLayout]["elements"]["BlueLabel"].y, 
								this.layouts[this.currentLayout]["elements"]["BlueLabel"].width, 
								this.layouts[this.currentLayout]["elements"]["BlueLabel"].height);
							
		
			this.element_AccelBackground = new ImageElement(this.parent, "AccelBackground");
			
			this.element_AccelBackground.setImage("data:image/png;base64,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");
			this.element_AccelBackground.setRotation(0);
			this.element_AccelBackground.setVisible(true);
			this.element_AccelBackground.setEnabled(true);
			this.element_AccelBackground.setBackground("transparent");

			if(this.element_AccelBackground_onTrigger)
				this.element_AccelBackground.onTrigger = this.element_AccelBackground_onTrigger;
			
			if(this.element_AccelBackground_mousePressed)
				this.element_AccelBackground.mousePressed = this.element_AccelBackground_mousePressed;
				
			if(this.element_AccelBackground_mouseClicked)
				this.element_AccelBackground.mouseClicked = this.element_AccelBackground_mouseClicked;
			
			if(this.element_AccelBackground_mouseReleased)
				this.element_AccelBackground.mouseReleased = this.element_AccelBackground_mouseReleased;
			
			if(this.element_AccelBackground_mouseEntered)
				this.element_AccelBackground.mouseEntered = this.element_AccelBackground_mouseEntered;
			
			if(this.element_AccelBackground_mouseMoved)
				this.element_AccelBackground.mouseMoved = this.element_AccelBackground_mouseMoved;
			
			if(this.element_AccelBackground_mouseExited)
				this.element_AccelBackground.mouseExited = this.element_AccelBackground_mouseExited;
			
			this.element_AccelBackground.setBounds(this.layouts[this.currentLayout]["elements"]["AccelBackground"].x, 
							this.layouts[this.currentLayout]["elements"]["AccelBackground"].y, 
							this.layouts[this.currentLayout]["elements"]["AccelBackground"].width, 
							this.layouts[this.currentLayout]["elements"]["AccelBackground"].height);
							
		
			this.element_GrayBGforSliders = new ImageElement(this.parent, "GrayBGforSliders");
			
			this.element_GrayBGforSliders.setImage("https://atmosphere.anaren.com/dev/images/demo/blank.png");
			this.element_GrayBGforSliders.setRotation(0);
			this.element_GrayBGforSliders.setVisible(true);
			this.element_GrayBGforSliders.setEnabled(false);
			this.element_GrayBGforSliders.setBackground("#f2f2f2");

			if(this.element_GrayBGforSliders_onTrigger)
				this.element_GrayBGforSliders.onTrigger = this.element_GrayBGforSliders_onTrigger;
			
			if(this.element_GrayBGforSliders_mousePressed)
				this.element_GrayBGforSliders.mousePressed = this.element_GrayBGforSliders_mousePressed;
				
			if(this.element_GrayBGforSliders_mouseClicked)
				this.element_GrayBGforSliders.mouseClicked = this.element_GrayBGforSliders_mouseClicked;
			
			if(this.element_GrayBGforSliders_mouseReleased)
				this.element_GrayBGforSliders.mouseReleased = this.element_GrayBGforSliders_mouseReleased;
			
			if(this.element_GrayBGforSliders_mouseEntered)
				this.element_GrayBGforSliders.mouseEntered = this.element_GrayBGforSliders_mouseEntered;
			
			if(this.element_GrayBGforSliders_mouseMoved)
				this.element_GrayBGforSliders.mouseMoved = this.element_GrayBGforSliders_mouseMoved;
			
			if(this.element_GrayBGforSliders_mouseExited)
				this.element_GrayBGforSliders.mouseExited = this.element_GrayBGforSliders_mouseExited;
			
			this.element_GrayBGforSliders.setBounds(this.layouts[this.currentLayout]["elements"]["GrayBGforSliders"].x, 
							this.layouts[this.currentLayout]["elements"]["GrayBGforSliders"].y, 
							this.layouts[this.currentLayout]["elements"]["GrayBGforSliders"].width, 
							this.layouts[this.currentLayout]["elements"]["GrayBGforSliders"].height);
							
		
			this.element_CompBackground = new ImageElement(this.parent, "CompBackground");
			
			this.element_CompBackground.setImage("data:image/png;base64,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");
			this.element_CompBackground.setRotation(0);
			this.element_CompBackground.setVisible(true);
			this.element_CompBackground.setEnabled(true);
			this.element_CompBackground.setBackground("transparent");

			if(this.element_CompBackground_onTrigger)
				this.element_CompBackground.onTrigger = this.element_CompBackground_onTrigger;
			
			if(this.element_CompBackground_mousePressed)
				this.element_CompBackground.mousePressed = this.element_CompBackground_mousePressed;
				
			if(this.element_CompBackground_mouseClicked)
				this.element_CompBackground.mouseClicked = this.element_CompBackground_mouseClicked;
			
			if(this.element_CompBackground_mouseReleased)
				this.element_CompBackground.mouseReleased = this.element_CompBackground_mouseReleased;
			
			if(this.element_CompBackground_mouseEntered)
				this.element_CompBackground.mouseEntered = this.element_CompBackground_mouseEntered;
			
			if(this.element_CompBackground_mouseMoved)
				this.element_CompBackground.mouseMoved = this.element_CompBackground_mouseMoved;
			
			if(this.element_CompBackground_mouseExited)
				this.element_CompBackground.mouseExited = this.element_CompBackground_mouseExited;
			
			this.element_CompBackground.setBounds(this.layouts[this.currentLayout]["elements"]["CompBackground"].x, 
							this.layouts[this.currentLayout]["elements"]["CompBackground"].y, 
							this.layouts[this.currentLayout]["elements"]["CompBackground"].width, 
							this.layouts[this.currentLayout]["elements"]["CompBackground"].height);
							
		
			this.element_AccelLabel = new LabelElement(this.parent, "AccelLabel");
			
			this.element_AccelLabel.setValue("Accelerometer");
			this.element_AccelLabel.setVisible(true);
			this.element_AccelLabel.setEnabled(true);
			this.element_AccelLabel.setColor("Black");
			this.element_AccelLabel.setFont("18px Arial");
			
			if(this.element_AccelLabel_onTrigger !== undefined)
				this.element_AccelLabel.onTrigger = this.element_AccelLabel_onTrigger;
			
			if(this.element_AccelLabel_mousePressed !== undefined)
				this.element_AccelLabel.mousePressed = this.element_AccelLabel_mousePressed;
				
			if(this.element_AccelLabel_mouseClicked !== undefined)
				this.element_AccelLabel.mouseClicked = this.element_AccelLabel_mouseClicked;
			
			if(this.element_AccelLabel_mouseReleased !== undefined)
				this.element_AccelLabel.mouseReleased = this.element_AccelLabel_mouseReleased;
			
			if(this.element_AccelLabel_mouseEntered !== undefined)
				this.element_AccelLabel.mouseEntered = this.element_AccelLabel_mouseEntered;
			
			if(this.element_AccelLabel_mouseMoved !== undefined)
				this.element_AccelLabel.mouseMoved = this.element_AccelLabel_mouseMoved;
			
			if(this.element_AccelLabel_mouseExited !== undefined)
				this.element_AccelLabel.mouseExited = this.element_AccelLabel_mouseExited;
			
			this.element_AccelLabel.setBounds(this.layouts[this.currentLayout]["elements"]["AccelLabel"].x, 
								this.layouts[this.currentLayout]["elements"]["AccelLabel"].y, 
								this.layouts[this.currentLayout]["elements"]["AccelLabel"].width, 
								this.layouts[this.currentLayout]["elements"]["AccelLabel"].height);
							
		
			this.element_TermpLabel = new LabelElement(this.parent, "TermpLabel");
			
			this.element_TermpLabel.setValue("Temperature");
			this.element_TermpLabel.setVisible(true);
			this.element_TermpLabel.setEnabled(true);
			this.element_TermpLabel.setColor("Black");
			this.element_TermpLabel.setFont("18px Arial");
			
			if(this.element_TermpLabel_onTrigger !== undefined)
				this.element_TermpLabel.onTrigger = this.element_TermpLabel_onTrigger;
			
			if(this.element_TermpLabel_mousePressed !== undefined)
				this.element_TermpLabel.mousePressed = this.element_TermpLabel_mousePressed;
				
			if(this.element_TermpLabel_mouseClicked !== undefined)
				this.element_TermpLabel.mouseClicked = this.element_TermpLabel_mouseClicked;
			
			if(this.element_TermpLabel_mouseReleased !== undefined)
				this.element_TermpLabel.mouseReleased = this.element_TermpLabel_mouseReleased;
			
			if(this.element_TermpLabel_mouseEntered !== undefined)
				this.element_TermpLabel.mouseEntered = this.element_TermpLabel_mouseEntered;
			
			if(this.element_TermpLabel_mouseMoved !== undefined)
				this.element_TermpLabel.mouseMoved = this.element_TermpLabel_mouseMoved;
			
			if(this.element_TermpLabel_mouseExited !== undefined)
				this.element_TermpLabel.mouseExited = this.element_TermpLabel_mouseExited;
			
			this.element_TermpLabel.setBounds(this.layouts[this.currentLayout]["elements"]["TermpLabel"].x, 
								this.layouts[this.currentLayout]["elements"]["TermpLabel"].y, 
								this.layouts[this.currentLayout]["elements"]["TermpLabel"].width, 
								this.layouts[this.currentLayout]["elements"]["TermpLabel"].height);
							
		
			this.element_RedLabel = new LabelElement(this.parent, "RedLabel");
			
			this.element_RedLabel.setValue("Red");
			this.element_RedLabel.setVisible(true);
			this.element_RedLabel.setEnabled(true);
			this.element_RedLabel.setColor("Black");
			this.element_RedLabel.setFont("18px Arial");
			
			if(this.element_RedLabel_onTrigger !== undefined)
				this.element_RedLabel.onTrigger = this.element_RedLabel_onTrigger;
			
			if(this.element_RedLabel_mousePressed !== undefined)
				this.element_RedLabel.mousePressed = this.element_RedLabel_mousePressed;
				
			if(this.element_RedLabel_mouseClicked !== undefined)
				this.element_RedLabel.mouseClicked = this.element_RedLabel_mouseClicked;
			
			if(this.element_RedLabel_mouseReleased !== undefined)
				this.element_RedLabel.mouseReleased = this.element_RedLabel_mouseReleased;
			
			if(this.element_RedLabel_mouseEntered !== undefined)
				this.element_RedLabel.mouseEntered = this.element_RedLabel_mouseEntered;
			
			if(this.element_RedLabel_mouseMoved !== undefined)
				this.element_RedLabel.mouseMoved = this.element_RedLabel_mouseMoved;
			
			if(this.element_RedLabel_mouseExited !== undefined)
				this.element_RedLabel.mouseExited = this.element_RedLabel_mouseExited;
			
			this.element_RedLabel.setBounds(this.layouts[this.currentLayout]["elements"]["RedLabel"].x, 
								this.layouts[this.currentLayout]["elements"]["RedLabel"].y, 
								this.layouts[this.currentLayout]["elements"]["RedLabel"].width, 
								this.layouts[this.currentLayout]["elements"]["RedLabel"].height);
							
		
			this.element_RedSlider = new SliderElement(this.parent, "RedSlider");
			
			this.element_RedSlider.setVisible(true);
			this.element_RedSlider.setEnabled(true);
			this.element_RedSlider.setShowScale(false);
			this.element_RedSlider.setShowTitle(false);
			this.element_RedSlider.setMinValue(0);
			this.element_RedSlider.setMaxValue(19);
			this.element_RedSlider.setValue(0);
			this.element_RedSlider.setIntervals([0, 19]);
			this.element_RedSlider.setScaleStep(1);
			this.element_RedSlider.setOrientation("Horizontal");

			if(this.element_RedSlider_onTrigger)
				this.element_RedSlider.onTrigger = this.element_RedSlider_onTrigger;
			
			if(this.element_RedSlider_changed)
				this.element_RedSlider.changed = this.element_RedSlider_changed;
				
			if(this.element_RedSlider_mousePressed)
				this.element_RedSlider.mousePressed = this.element_RedSlider_mousePressed;
				
			if(this.element_RedSlider_mouseClicked)
				this.element_RedSlider.mouseClicked = this.element_RedSlider_mouseClicked;
			
			if(this.element_RedSlider_mouseReleased)
				this.element_RedSlider.mouseReleased = this.element_RedSlider_mouseReleased;
			
			if(this.element_RedSlider_mouseEntered)
				this.element_RedSlider.mouseEntered = this.element_RedSlider_mouseEntered;
			
			if(this.element_RedSlider_mouseMoved)
				this.element_RedSlider.mouseMoved = this.element_RedSlider_mouseMoved;
			
			if(this.element_RedSlider_mouseExited)
				this.element_RedSlider.mouseExited = this.element_RedSlider_mouseExited;
			
			this.element_RedSlider.setBounds(this.layouts[this.currentLayout]["elements"]["RedSlider"].x, 
							this.layouts[this.currentLayout]["elements"]["RedSlider"].y, 
							this.layouts[this.currentLayout]["elements"]["RedSlider"].width, 
							this.layouts[this.currentLayout]["elements"]["RedSlider"].height);
							
		
			this.element_AccelBubble = new ImageElement(this.parent, "AccelBubble");
			
			this.element_AccelBubble.setImage("data:image/png;base64,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");
			this.element_AccelBubble.setRotation(0);
			this.element_AccelBubble.setVisible(true);
			this.element_AccelBubble.setEnabled(true);
			this.element_AccelBubble.setBackground("transparent");

			if(this.element_AccelBubble_onTrigger)
				this.element_AccelBubble.onTrigger = this.element_AccelBubble_onTrigger;
			
			if(this.element_AccelBubble_mousePressed)
				this.element_AccelBubble.mousePressed = this.element_AccelBubble_mousePressed;
				
			if(this.element_AccelBubble_mouseClicked)
				this.element_AccelBubble.mouseClicked = this.element_AccelBubble_mouseClicked;
			
			if(this.element_AccelBubble_mouseReleased)
				this.element_AccelBubble.mouseReleased = this.element_AccelBubble_mouseReleased;
			
			if(this.element_AccelBubble_mouseEntered)
				this.element_AccelBubble.mouseEntered = this.element_AccelBubble_mouseEntered;
			
			if(this.element_AccelBubble_mouseMoved)
				this.element_AccelBubble.mouseMoved = this.element_AccelBubble_mouseMoved;
			
			if(this.element_AccelBubble_mouseExited)
				this.element_AccelBubble.mouseExited = this.element_AccelBubble_mouseExited;
			
			this.element_AccelBubble.setBounds(this.layouts[this.currentLayout]["elements"]["AccelBubble"].x, 
							this.layouts[this.currentLayout]["elements"]["AccelBubble"].y, 
							this.layouts[this.currentLayout]["elements"]["AccelBubble"].width, 
							this.layouts[this.currentLayout]["elements"]["AccelBubble"].height);
							
		
			this.element_GreenSlider = new SliderElement(this.parent, "GreenSlider");
			
			this.element_GreenSlider.setVisible(true);
			this.element_GreenSlider.setEnabled(true);
			this.element_GreenSlider.setShowScale(false);
			this.element_GreenSlider.setShowTitle(false);
			this.element_GreenSlider.setMinValue(0);
			this.element_GreenSlider.setMaxValue(19);
			this.element_GreenSlider.setValue(0);
			this.element_GreenSlider.setIntervals([0, 19]);
			this.element_GreenSlider.setScaleStep(1);
			this.element_GreenSlider.setOrientation("Horizontal");

			if(this.element_GreenSlider_onTrigger)
				this.element_GreenSlider.onTrigger = this.element_GreenSlider_onTrigger;
			
			if(this.element_GreenSlider_changed)
				this.element_GreenSlider.changed = this.element_GreenSlider_changed;
				
			if(this.element_GreenSlider_mousePressed)
				this.element_GreenSlider.mousePressed = this.element_GreenSlider_mousePressed;
				
			if(this.element_GreenSlider_mouseClicked)
				this.element_GreenSlider.mouseClicked = this.element_GreenSlider_mouseClicked;
			
			if(this.element_GreenSlider_mouseReleased)
				this.element_GreenSlider.mouseReleased = this.element_GreenSlider_mouseReleased;
			
			if(this.element_GreenSlider_mouseEntered)
				this.element_GreenSlider.mouseEntered = this.element_GreenSlider_mouseEntered;
			
			if(this.element_GreenSlider_mouseMoved)
				this.element_GreenSlider.mouseMoved = this.element_GreenSlider_mouseMoved;
			
			if(this.element_GreenSlider_mouseExited)
				this.element_GreenSlider.mouseExited = this.element_GreenSlider_mouseExited;
			
			this.element_GreenSlider.setBounds(this.layouts[this.currentLayout]["elements"]["GreenSlider"].x, 
							this.layouts[this.currentLayout]["elements"]["GreenSlider"].y, 
							this.layouts[this.currentLayout]["elements"]["GreenSlider"].width, 
							this.layouts[this.currentLayout]["elements"]["GreenSlider"].height);
							
		
			this.parent.appPanel.add(this.element_BGForTemp.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_GrayBGforSliders.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_TempReading.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_TermpLabel.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_RedSlider.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_GreenSlider.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_BlueSlider.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_AnarenLogo.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_JoyBackground.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_CompBackground.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_AccelBackground.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_CompNeedle.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_BlueLabel.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_GreenLabel.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_JoyLabel.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_CompassLabel.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_AccelLabel.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_JoyControl.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_AccelBubble.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_RedLabel.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_DebugValue.getZebraUIElement());
			
	};

}
