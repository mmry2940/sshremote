"use client";

import { useState } from "react";
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
import {
  DownloadCloud,
  Folder,
  FileText,
  UploadCloud,
  Edit,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Label } from "./ui/label";

const initialFiles = [
  {
    name: ".bash_history",
    type: "File",
    size: "16.4 KB",
    modified: "2024-05-22 10:30",
    content: "ls -la\ncd projects\nnpm install\n...",
  },
  { name: ".config", type: "Folder", size: "-", modified: "2024-05-21 14:00" },
  { name: "documents", type: "Folder", size: "-", modified: "2024-05-20 09:15" },
  {
    name: "app.log",
    type: "File",
    size: "2.1 MB",
    modified: "2024-05-22 11:45",
    content:
      "INFO: Application started successfully.\nWARN: Deprecated feature used.\nERROR: Failed to connect to database.",
  },
  {
    name: "docker-compose.yml",
    type: "File",
    size: "1.2 KB",
    modified: "2024-05-19 18:20",
    content:
      "version: '3.8'\nservices:\n  web:\n    build: .\n    ports:\n      - '5000:5000'",
  },
  { name: "projects", type: "Folder", size: "-", modified: "2024-04-30 12:00" },
];

export function FileManager() {
  const [files, setFiles] = useState(initialFiles);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<{
    name: string;
    content: string;
  } | null>(null);
  const [editedContent, setEditedContent] = useState("");
  const { toast } = useToast();

  const handleEditClick = (file: (typeof files)[0]) => {
    if (file.type === "File" && file.content) {
      setSelectedFile({ name: file.name, content: file.content });
      setEditedContent(file.content);
      setIsEditModalOpen(true);
    }
  };

  const handleSaveChanges = () => {
    if (selectedFile) {
      // Here you would typically save the file to the server.
      // For this demo, we'll just update the local state.
      const updatedFiles = files.map((f) =>
        f.name === selectedFile.name ? { ...f, content: editedContent } : f
      );
      setFiles(updatedFiles);

      toast({
        title: "File Saved",
        description: `${selectedFile.name} has been updated.`,
      });
      setIsEditModalOpen(false);
      setSelectedFile(null);
    }
  };

  return (
    <>
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
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {files.map((file) => (
                <TableRow key={file.name}>
                  <TableCell>
                    {file.type === "Folder" ? (
                      <Folder className="h-5 w-5 text-accent" />
                    ) : (
                      <FileText className="h-5 w-5 text-muted-foreground" />
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{file.name}</TableCell>
                  <TableCell>{file.size}</TableCell>
                  <TableCell>{file.modified}</TableCell>
                  <TableCell className="text-right">
                    {file.type === "File" && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEditClick(file)}
                      >
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="sm:max-w-2xl h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Edit {selectedFile?.name}</DialogTitle>
          </DialogHeader>
          <div className="flex-grow flex flex-col gap-2 overflow-hidden">
            <Label htmlFor="file-content" className="sr-only">
              File Content
            </Label>
            <Textarea
              id="file-content"
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              className="h-full w-full resize-none font-mono text-xs"
              placeholder="File content..."
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Cancel
              </Button>
            </DialogClose>
            <Button type="button" onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
