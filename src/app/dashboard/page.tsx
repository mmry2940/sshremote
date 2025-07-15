import { PageHeader } from "@/components/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileText, MonitorPlay, TerminalSquare } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        description="Active session: server-01 (192.168.1.101)"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              File Manager
            </CardTitle>
            <CardDescription>
              Browse and manage files on the remote device.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/dashboard/file-manager">Open File Manager</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TerminalSquare className="h-5 w-5" />
              SSH Terminal
            </CardTitle>
            <CardDescription>
              Access the command line with a full-featured terminal.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/dashboard/ssh">Open Terminal</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MonitorPlay className="h-5 w-5" />
              noVNC
            </CardTitle>
            <CardDescription>
              Connect to the graphical desktop environment.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/dashboard/novnc">Open VNC Viewer</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
