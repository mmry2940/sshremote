
"use client";

import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const allProcesses = {
  "web-server-01": [
    { pid: 1024, user: "root", cpu: "0.5%", mem: "1.2%", command: "/usr/sbin/nginx -g 'daemon off;'" },
    { pid: 3122, user: "root", cpu: "5.3%", mem: "2.5%", command: "node /opt/app/index.js" },
  ],
  "db-server-primary": [
    { pid: 1056, user: "postgres", cpu: "2.1%", mem: "15.8%", command: "postgres: writer" },
    { pid: 1057, user: "postgres", cpu: "1.5%", mem: "12.1%", command: "postgres: checkpointer" },
  ],
  "local-dev-machine": [
    { pid: 2345, user: "admin", cpu: "0.0%", mem: "0.5%", command: "sshd: admin@pts/0" },
    { pid: 8192, user: "admin", cpu: "10.2%", mem: "4.8%", command: "code --nolazy" },
  ],
  "backup-storage": [
    { pid: 4501, user: "systemd", cpu: "0.0%", mem: "0.1%", command: "/lib/systemd/systemd-logind" },
    { pid: 5011, user: "rsync", cpu: "0.2%", mem: "0.3%", command: "rsync --daemon" },
  ],
};

const devices = [
  { id: 1, name: "web-server-01", ip: "192.168.1.101", status: "Online" },
  { id: 2, name: "db-server-primary", ip: "192.168.1.105", status: "Online" },
  { id: 3, name: "k8s-worker-node", ip: "10.0.5.23", status: "Offline" },
  { id: 4, name: "local-dev-machine", ip: "127.0.0.1", status: "Online" },
  { id: 5, name: "backup-storage", ip: "192.168.2.50", status: "Warning" },
];

export default function ProcessesPage() {
  const [selectedDevice, setSelectedDevice] = useState(devices[0].name);

  const handleDeviceChange = (deviceName: string) => {
    setSelectedDevice(deviceName);
  };
  
  const onlineDevices = devices.filter(d => d.status === "Online" || d.status === "Warning");
  const currentProcesses = allProcesses[selectedDevice as keyof typeof allProcesses] || [];

  return (
    <>
      <PageHeader
        title="Running Processes"
        description={`Active processes on ${selectedDevice}`}
      >
        <div className="w-[200px]">
          <Select
            value={selectedDevice}
            onValueChange={handleDeviceChange}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select device" />
            </SelectTrigger>
            <SelectContent>
              {onlineDevices.map((device) => (
                <SelectItem key={device.id} value={device.name}>
                  {device.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </PageHeader>

      <Card>
        <CardHeader>
          <CardTitle>Process List</CardTitle>
          <CardDescription>
            A list of processes currently running on the selected device.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>PID</TableHead>
                <TableHead>User</TableHead>
                <TableHead>CPU %</TableHead>
                <TableHead>Memory %</TableHead>
                <TableHead>Command</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentProcesses.length > 0 ? (
                currentProcesses.map((proc) => (
                  <TableRow key={proc.pid}>
                    <TableCell>{proc.pid}</TableCell>
                    <TableCell>{proc.user}</TableCell>
                    <TableCell>{proc.cpu}</TableCell>
                    <TableCell>{proc.mem}</TableCell>
                    <TableCell className="font-mono text-xs">
                      {proc.command}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                    <TableCell colSpan={5} className="text-center h-24">
                        No processes to display for this device.
                    </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
