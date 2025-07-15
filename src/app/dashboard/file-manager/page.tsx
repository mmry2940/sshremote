import { PageHeader } from "@/components/page-header";
import { FileManager } from "@/components/file-manager";

export default function FileManagerPage() {
  return (
    <>
      <PageHeader
        title="File Manager"
        description="Browse and manage files on the remote device."
      />
      <FileManager />
    </>
  );
}
