"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "lucide-react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (e.g. insecure context); the address is still visible to copy by hand.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Email copied" : `Copy ${email}`}
      className="inline-flex items-center gap-2 rounded-lg border bg-card px-3 py-1.5 font-mono text-sm text-muted-foreground shadow-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      {email}
      {copied ? (
        <CheckIcon className="size-4 text-green-500" aria-hidden />
      ) : (
        <CopyIcon className="size-4" aria-hidden />
      )}
      <span className="sr-only" aria-live="polite">
        {copied ? "Copied" : ""}
      </span>
    </button>
  );
}
