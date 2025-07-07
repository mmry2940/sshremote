import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function VncViewer() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>noVNC Session</CardTitle>
        <CardDescription>Graphical desktop access to server-01.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
          <Image
            src="https://placehold.co/1280x720.png"
            alt="VNC Desktop"
            layout="fill"
            objectFit="cover"
            data-ai-hint="linux desktop"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <p className="text-white text-lg font-semibold bg-black/50 px-4 py-2 rounded-md">
              Connection Closed
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
