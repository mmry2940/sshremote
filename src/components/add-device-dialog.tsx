
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const addDeviceSchema = z.object({
  name: z.string().min(1, "Device name is required."),
  ip: z.string().ip({ version: "v4", message: "Invalid IP address." }),
});

type AddDeviceFormValues = z.infer<typeof addDeviceSchema>;

export function AddDeviceDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const form = useForm<AddDeviceFormValues>({
    resolver: zodResolver(addDeviceSchema),
    defaultValues: {
      name: "",
      ip: "",
    },
  });

  const onSubmit = (data: AddDeviceFormValues) => {
    // Here you would typically handle the form submission, e.g., send to an API
    console.log("New device added:", data);
    toast({
      title: "Device Added",
      description: `Successfully added ${data.name} (${data.ip}).`,
    });
    setOpen(false); // Close the dialog
    form.reset(); // Reset the form
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New SSH Device</DialogTitle>
          <DialogDescription>
            Enter the details of the new device to connect via SSH.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Device Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. web-server-02" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ip"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>IP Address</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. 192.168.1.102" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Add Device</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
