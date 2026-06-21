export default function Footer() {
  return (
    <footer className="border-t border-wn-border mt-auto py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-wn-muted">
        <span>
          © {new Date().getFullYear()} Witty Networks — a{" "}
          <span className="text-wn-slate">Witty Group</span> company
        </span>
        <span className="font-mono text-xs text-wn-border">wittynetworks.com</span>
      </div>
    </footer>
  );
}
