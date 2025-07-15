import { PageHeader } from "@/components/page-header";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CircleDot, MoreVertical, ShieldCheck, ShieldOff } from "lucide-react";

const tailscaleNodes = [
  { id: 1, name: "web-server-01", ip: "100.101.102.103", os: "Linux", status: "Online" },
  { id: 2, name: "prod-database", ip: "100.110.111.112", os: "Linux", status: "Online" },
  { id: 3, name: "dev-laptop-mac", ip: "100.90.91.92", os: "macOS", status: "Offline" },
  { id: 4, name: "mobile-phone", ip: "100.80.81.82", os: "Android", status: "Online" },
  { id: 5, name: "home-nas", ip: "100.70.71.72", os: "Linux", status: "Warning" },
];

export default function TailscalePage() {
  return (
    <>
      <PageHeader
        title="Tailscale Network"
        description="Manage devices connected to your Tailnet."
      />
      <Card>
        <CardHeader>
          <CardTitle>My Devices</CardTitle>
          <CardDescription>
            A list of all machines in your Tailnet.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Status</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>IP Address</TableHead>
                <TableHead>OS</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tailscaleNodes.map((node) => (
                <TableRow key={node.id}>
                  <TableCell>
                    <Badge variant={node.status === 'Online' ? 'default' : node.status === 'Offline' ? 'destructive' : 'secondary'} className={node.status === 'Online' ? 'bg-green-600' : ''}>
                        <CircleDot className={`mr-2 h-3 w-3 ${
                        node.status === 'Online' ? 'text-green-300' : node.status === 'Offline' ? 'text-red-300' : 'text-yellow-300'
                        }`} />
                        {node.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">{node.name}</TableCell>
                  <TableCell>{node.ip}</TableCell>
                  <TableCell>{node.os}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
