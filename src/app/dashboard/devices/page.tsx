import { PageHeader } from "@/components/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Server, CircleDot, ChevronRight } from "lucide-react";
import Link from "next/link";

const devices = [
  { id: 1, name: "web-server-01", ip: "192.168.1.101", status: "Online" },
  { id: 2, name: "db-server-primary", ip: "192.168.1.105", status: "Online" },
  { id: 3, name: "k8s-worker-node", ip: "10.0.5.23", status: "Offline" },
  { id: 4, name: "local-dev-machine", ip: "127.0.0.1", status: "Online" },
  { id: 5, name: "backup-storage", ip: "192.168.2.50", status: "Warning" },
];

export default function DevicesPage() {
  return (
    <>
      <PageHeader
        title="Devices"
        description="Manage your connected remote devices."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {devices.map((device) => (
          <Card key={device.id}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">{device.name}</CardTitle>
              <Server className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground mb-4">{device.ip}</div>
              <div className="flex items-center">
                <Badge variant={device.status === 'Online' ? 'default' : device.status === 'Offline' ? 'destructive' : 'secondary'} className={device.status === 'Online' ? 'bg-green-600' : ''}>
                  <CircleDot className={`mr-2 h-3 w-3 ${
                    device.status === 'Online' ? 'text-green-300' : device.status === 'Offline' ? 'text-red-300' : 'text-yellow-300'
                  }`} />
                  {device.status}
                </Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href={`/dashboard/devices/${device.id}`}>
                  View Details <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
