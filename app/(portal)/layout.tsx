// Portal layout — will be auth-gated via Witty session management
// Clients: appointment history, documents, billing
// Field engineers: Witty knowledge base, runbooks, escalation paths

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="border-b border-gray-200 bg-white px-6 py-4">
        <span className="font-semibold text-gray-900">Witty Networks Portal</span>
      </nav>
      {children}
    </div>
  );
}
