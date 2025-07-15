import { PageHeader } from "@/components/page-header";
import { TerminalView } from "@/components/terminal-view";

export default function SshPage() {
  return (
    <>
      <PageHeader
        title="SSH Terminal"
        description="Access the command line of server-01."
      />
      <TerminalView />
    </>
  );
}
