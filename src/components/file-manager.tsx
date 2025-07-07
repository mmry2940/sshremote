"use client";

import {
  Card,
  CardContent,
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
import { Button } from "@/components/ui/button";
import { DownloadCloud, Folder, FileText, UploadCloud, MoreVertical } from "lucide-react";
import { Badge } from "./ui/badge";

const files = [
  { name: ".bash_history", type: "File", size: "16.4 KB", modified: "2024-05-22 10:30" },
  { name: ".config", type: "Folder", size: "-", modified: "2024-05-21 14:00" },
  { name: "documents", type: "Folder", size: "-", modified: "2024-05-20 09:15" },
  { name: "app.log", type: "File", size: "2.1 MB", modified: "2024-05-22 11:45" },
  { name: "docker-compose.yml", type: "File", size: "1.2 KB", modified: "2024-05-19 18:20" },
  { name: "projects", type: "Folder", size: "-", modified: "2024-04-30 12:00" },
];

export function FileManager() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>File Manager</CardTitle>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <UploadCloud className="mr-2 h-4 w-4" />
            Upload
          </Button>
          <Button variant="outline" size="sm">
            <DownloadCloud className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]"></TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Last Modified</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {files.map((file) => (
              <TableRow key={file.name}>
                <TableCell>
                  {file.type === 'Folder' ? <Folder className="h-5 w-5 text-accent" /> : <FileText className="h-5 w-5 text-muted-foreground" />}
                </TableCell>
                <TableCell className="font-medium">{file.name}</TableCell>
                <TableCell>{file.size}</TableCell>
                <TableCell>{file.modified}</TableCell>
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
  );
}
