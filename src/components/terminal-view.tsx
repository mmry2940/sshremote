"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState, useEffect, useRef } from "react";

export function TerminalView() {
  const [history, setHistory] = useState([
    "Last login: Wed May 22 10:25:17 2024 from 192.168.1.1",
    "Welcome to Secure Shell Workspace!",
  ]);
  const [command, setCommand] = useState("");
  const endOfHistoryRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    endOfHistoryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [history]);

  const handleCommandSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newHistory = [...history, `admin@server-01:~$ ${command}`];
    if (command.toLowerCase() === "ls") {
      newHistory.push("documents projects app.log docker-compose.yml");
    } else if (command.toLowerCase() === "clear") {
        setHistory([]);
        setCommand("");
        return;
    } else if (command.trim() !== "") {
        newHistory.push(`-bash: ${command}: command not found`);
    }
    setHistory(newHistory);
    setCommand("");
  };

  return (
    <Card>
      <CardContent className="p-0">
        <div className="bg-black text-white font-mono text-sm rounded-lg p-4 h-[450px] overflow-y-auto">
          {history.map((line, index) => (
            <div key={index}>
              <p>{line}</p>
            </div>
          ))}
           <div ref={endOfHistoryRef} />
        </div>
        <form onSubmit={handleCommandSubmit} className="relative p-2 border-t">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-mono text-sm">
            $
          </span>
          <Input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            className="w-full bg-transparent border-0 pl-6 focus-visible:ring-0 focus-visible:ring-offset-0 font-mono"
            placeholder="Enter command..."
            autoComplete="off"
            autoFocus
          />
        </form>
      </CardContent>
    </Card>
  );
}
