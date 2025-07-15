"use client";

import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { VncViewer } from "@/components/vnc-viewer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const devices = [
  { id: 1, name: "web-server-01", ip: "192.168.1.101", status: "Online" },
  { id: 2, name: "db-server-primary", ip: "192.168.1.105", status: "Online" },
  { id: 3, name: "k8s-worker-node", ip: "10.0.5.23", status: "Offline" },
  { id: 4, name: "local-dev-machine", ip: "127.0.0.1", status: "Online" },
  { id: 5, name: "backup-storage", ip: "192.168.2.50", status: "Warning" },
];

export default function NoVncPage() {
  const [selectedDevice, setSelectedDevice] = useState(devices[0].name);
  const [description, setDescription] = useState(
    `Graphical desktop access to ${devices[0].name}.`
  );

  const handleDeviceChange = (deviceName: string) => {
    setSelectedDevice(deviceName);
    setDescription(`Graphical desktop access to ${deviceName}.`);
  };

  return (
    <>
      <PageHeader
        title="noVNC Viewer"
        description={description}
      >
        <div className="w-[200px]">
          <Select
            defaultValue={selectedDevice}
            onValueChange={handleDeviceChange}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select device" />
            </SelectTrigger>
            <SelectContent>
              {devices
                .filter((device) => device.status === "Online")
                .map((device) => (
                  <SelectItem key={device.id} value={device.name}>
                    {device.name}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
      </PageHeader>
      <VncViewer deviceName={selectedDevice} />
    </>
  );
}
