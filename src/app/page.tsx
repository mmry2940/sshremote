import { LoginForm } from "@/components/login-form";
import { Terminal } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="flex flex-col items-center space-y-4 mb-8">
        <div className="bg-primary p-3 rounded-lg">
          <Terminal className="h-8 w-8 text-primary-foreground" />
        </div>
        <h1 className="text-3xl font-bold font-headline tracking-tight">
          Secure Shell Workspace
        </h1>
        <p className="text-muted-foreground">
          Login to your workspace to manage remote devices.
        </p>
      </div>
      <LoginForm />
    </main>
  );
}
