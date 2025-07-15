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
import { Progress } from "@/components/ui/progress";
import { Cpu, HardDrive, MemoryStick, FileText, TerminalSquare, MonitorPlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const processes = [
  { pid: 1024, user: "root", cpu: "0.5%", mem: "1.2%", command: "/usr/sbin/nginx -g 'daemon off;'" },
  { pid: 1056, user: "postgres", cpu: "2.1%", mem: "15.8%", command: "postgres: writer" },
  { pid: 1089, user: "www-data", cpu: "0.1%", mem: "0.8%", command: "php-fpm: pool www" },
  { pid: 2345, user: "admin", cpu: "0.0%", mem: "0.5%", command: "sshd: admin@pts/0" },
  { pid: 3122, user: "root", cpu: "5.3%", mem: "2.5%", command: "node /opt/app/index.js" },
  { pid: 4501, user: "systemd", cpu: "0.0%", mem: "0.1%", command: "/lib/systemd/systemd-logind" },
];

export default function DeviceDashboardPage({ params }: { params: { id: string } }) {
  const deviceName = "web-server-01"; // Mock data

  return (
    <>
      <PageHeader
        title={deviceName}
        description={`Dashboard for device ID: ${params.id}`}
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
         <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              File Manager
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href={`/dashboard/file-manager?device=${params.id}`}>Open File Manager</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TerminalSquare className="h-5 w-5" />
              SSH Terminal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href={`/dashboard/ssh?device=${params.id}`}>Open Terminal</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MonitorPlay className="h-5 w-5" />
              noVNC
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href={`/dashboard/novnc?device=${params.id}`}>Open VNC Viewer</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">CPU Usage</CardTitle>
            <Cpu className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42%</div>
            <Progress value={42} className="mt-2 h-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Memory Usage</CardTitle>
            <MemoryStick className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">76%</div>
            <p className="text-xs text-muted-foreground">12.2 / 16.0 GB</p>
            <Progress value={76} className="mt-2 h-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Disk Space</CardTitle>
            <HardDrive className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">65%</div>
            <p className="text-xs text-muted-foreground">325 / 500 GB</p>
            <Progress value={65} className="mt-2 h-2" />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Running Processes</CardTitle>
          <CardDescription>
            A list of processes currently running on the device.
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
              {processes.map((proc) => (
                <TableRow key={proc.pid}>
                  <TableCell>{proc.pid}</TableCell>
                  <TableCell>{proc.user}</TableCell>
                  <TableCell>{proc.cpu}</TableCell>
                  <TableCell>{proc.mem}</TableCell>
                  <TableCell className="font-mono text-xs">{proc.command}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
