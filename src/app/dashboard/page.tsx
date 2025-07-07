import { PageHeader } from "@/components/page-header";
import { FileManager } from "@/components/file-manager";
import { TerminalView } from "@/components/terminal-view";
import { VncViewer } from "@/components/vnc-viewer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MonitorPlay, TerminalSquare } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        description="Active session: server-01 (192.168.1.101)"
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="lg:col-span-1">
          <FileManager />
        </div>
        <div className="lg:col-span-1">
          <Tabs defaultValue="terminal" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="terminal">
                <TerminalSquare className="mr-2 h-4 w-4" />
                Terminal
              </TabsTrigger>
              <TabsTrigger value="vnc">
                <MonitorPlay className="mr-2 h-4 w-4" />
                noVNC
              </TabsTrigger>
            </TabsList>
            <TabsContent value="terminal">
              <TerminalView />
            </TabsContent>
            <TabsContent value="vnc">
              <VncViewer />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
