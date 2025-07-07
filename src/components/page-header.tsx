import { cn } from "@/lib/utils";

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
}

export function PageHeader({ title, description, children, className, ...props }: PageHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between mb-6", className)} {...props}>
      <div className="grid gap-1">
        <h1 className="font-headline text-3xl font-bold md:text-4xl">{title}</h1>
        {description && <p className="text-lg text-muted-foreground">{description}</p>}
      </div>
      {children}
    </div>
  );
}
