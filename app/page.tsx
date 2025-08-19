"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";

export default function Home() {
  const [dutyCycle, setDutyCycle] = useState(0);
  const [frequency, setFrequency] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 gap-8">
      <h1 className="text-2xl font-bold">Monitor IoT</h1>  
      <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Control de Motor</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
            <span>Duty Cycle: {dutyCycle}%</span>
              <Slider
                  min={0}
                  max={100}
                  value={[dutyCycle]}
                  onValueChange={(value) => setDutyCycle(value[0])}
                />
            </div>
              <br />
              <div>
              <span>Frequency (Hz): {frequency} Hz</span>
              <Slider
                  min={0}
                  max={100}
                  value={[frequency]}
                  onValueChange={(value) => setFrequency(value[0])}
                />
              </div>
              <br />
            <Button className="w-full">Set</Button>
          </CardContent>
        </Card>

        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Control</CardTitle>
            <CardDescription>
              <div>
                <span>LED</span>
                <Switch checked={isChecked} onCheckedChange={setIsChecked} />
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">Set</Button>
          </CardContent>
        </Card>
        
    </div>
  );
}
