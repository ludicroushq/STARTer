import { config } from "@/config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="border-t-base-300 mt-6 border-t py-6">
      <div className="container mx-auto">
        <footer className="footer">
          <nav>
            <h6 className="footer-title">
              &copy; {year} {config.name}. All rights reserved.
            </h6>
            <aside>
              Powered by{" "}
              <a
                className="link-hover link"
                href="https://www.xnext.dev"
                target="_blank"
                rel="noreferrer"
              >
                xNext
              </a>
              .
            </aside>
          </nav>
        </footer>
      </div>
    </div>
  );
}
