import { PageHeader } from "@/components/page-header";
import { VncViewer } from "@/components/vnc-viewer";

export default function NoVncPage() {
  return (
    <>
      <PageHeader
        title="noVNC Viewer"
        description="Graphical desktop access to server-01."
      />
      <VncViewer />
    </>
  );
}
