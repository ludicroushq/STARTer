import { appName } from "@/config/app";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <section className="container mx-auto border-t py-8">
      <footer>
        <div className="font-medium text-muted-foreground text-sm">
          <p>
            &copy; {year} {appName}. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}
