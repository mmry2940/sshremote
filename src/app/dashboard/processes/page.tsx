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
} from "@/components/ui/select"

const processes = [
  { pid: 1024, user: "root", cpu: "0.5%", mem: "1.2%", command: "/usr/sbin/nginx -g 'daemon off;'" },
  { pid: 1056, user: "postgres", cpu: "2.1%", mem: "15.8%", command: "postgres: writer" },
  { pid: 1089, user: "www-data", cpu: "0.1%", mem: "0.8%", command: "php-fpm: pool www" },
  { pid: 2345, user: "admin", cpu: "0.0%", mem: "0.5%", command: "sshd: admin@pts/0" },
  { pid: 3122, user: "root", cpu: "5.3%", mem: "2.5%", command: "node /opt/app/index.js" },
  { pid: 4501, user: "systemd", cpu: "0.0%", mem: "0.1%", command: "/lib/systemd/systemd-logind" },
];

const devices = [
  { id: 1, name: "web-server-01", ip: "192.168.1.101", status: "Online" },
  { id: 2, name: "db-server-primary", ip: "192.168.1.105", status: "Online" },
  { id: 3, name: "k8s-worker-node", ip: "10.0.5.23", status: "Offline" },
  { id: 4, name: "local-dev-machine", ip: "127.0.0.1", status: "Online" },
  { id: 5, name: "backup-storage", ip: "192.168.2.50", status: "Warning" },
];

export default function ProcessesPage() {
  const deviceName = "web-server-01"; // Mock data

  return (
    <>
      <PageHeader
        title="Running Processes"
        description={`Active processes on ${deviceName}`}
      >
        <div className="w-[200px]">
            <Select defaultValue="web-server-01">
            <SelectTrigger>
                <SelectValue placeholder="Select device" />
            </SelectTrigger>
            <SelectContent>
                {devices.map(device => (
                    <SelectItem key={device.id} value={device.name}>{device.name}</SelectItem>
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
