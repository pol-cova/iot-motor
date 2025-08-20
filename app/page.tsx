"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [motorADutyCycle, setMotorADutyCycle] = useState(0);
  const [motorBDutyCycle, setMotorBDutyCycle] = useState(0);
  const [frequency, setFrequency] = useState(100);
  const [isLedOn, setIsLedOn] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [deviceIP, setDeviceIP] = useState("192.168.1.100");
  const [uptime, setUptime] = useState("00:00:00");
  const [lastUpdate, setLastUpdate] = useState("Never");

  const handleConnect = () => {
    setIsConnected(true);
    setLastUpdate(new Date().toLocaleTimeString());
  };

  const handleStopAll = () => {
    setMotorADutyCycle(0);
    setMotorBDutyCycle(0);
    setFrequency(100);
    setIsLedOn(false);
  };

  const getStatus = () => {
    setLastUpdate(new Date().toLocaleTimeString());
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Monitor IoT</h1>
        
        {/* Status Info Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-sm text-gray-600">IP</span>
            <Badge variant="outline">{deviceIP}</Badge>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-sm text-gray-600">Uptime</span>
            <Badge variant="outline">{uptime}</Badge>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-sm text-gray-600">Last Update</span>
            <Badge variant="outline">{lastUpdate}</Badge>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-sm text-gray-600">Status</span>
            <Badge variant={isConnected ? "default" : "destructive"}>
              {isConnected ? "Connected" : "Disconnected"}
            </Badge>
          </div>
        </div>
        
        {/* Control Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Motor A Control */}
          <Card>
            <CardHeader>
              <CardTitle>Motor A</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Duty Cycle: {motorADutyCycle}%</span>
                  <Badge variant="secondary">{Math.round((motorADutyCycle / 100) * 255)}/255</Badge>
                </div>
                <Slider
                  min={0}
                  max={100}
                  value={[motorADutyCycle]}
                  onValueChange={(value) => setMotorADutyCycle(value[0])}
                />
              </div>
              <Button className="w-full">Set Motor A</Button>
            </CardContent>
          </Card>

          {/* Motor B Control */}
          <Card>
            <CardHeader>
              <CardTitle>Motor B</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Duty Cycle: {motorBDutyCycle}%</span>
                  <Badge variant="secondary">{Math.round((motorBDutyCycle / 100) * 255)}/255</Badge>
                </div>
                <Slider
                  min={0}
                  max={100}
                  value={[motorBDutyCycle]}
                  onValueChange={(value) => setMotorBDutyCycle(value[0])}
                />
              </div>
              <Button className="w-full">Set Motor B</Button>
            </CardContent>
          </Card>

          {/* General Controls */}
          <Card>
            <CardHeader>
              <CardTitle>General Controls</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Frequency Control */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Frequency: {frequency} Hz</span>
                  <Badge variant="outline">{frequency >= 1000 ? `${(frequency/1000).toFixed(1)}kHz` : `${frequency}Hz`}</Badge>
                </div>
                <Slider
                  min={100}
                  max={20000}
                  value={[frequency]}
                  onValueChange={(value) => setFrequency(value[0])}
                />
              </div>

              {/* LED Control */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">LED</span>
                <Switch checked={isLedOn} onCheckedChange={setIsLedOn} />
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <Button className="w-full" onClick={handleConnect}>Connect</Button>
                <Button className="w-full" onClick={getStatus}>Get Status</Button>
                <Button className="w-full" variant="destructive" onClick={handleStopAll}>Stop All</Button>
                <Button className="w-full" variant="outline">Set All</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
