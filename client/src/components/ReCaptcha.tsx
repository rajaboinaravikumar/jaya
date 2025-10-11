import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";

interface ReCaptchaProps {
  onChange: (token: string | null) => void;
  onExpired?: () => void;
  theme?: "light" | "dark";
  size?: "compact" | "normal" | "invisible";
}

export function ReCaptcha({ onChange, onExpired, theme = "light", size = "normal" }: ReCaptchaProps) {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  if (!siteKey) {
    console.warn("reCAPTCHA site key not found. Please add VITE_RECAPTCHA_SITE_KEY to your environment variables.");
    return (
      <div className="p-4 bg-muted/30 rounded-md border border-dashed">
        <p className="text-sm text-muted-foreground">
          reCAPTCHA is not configured. Add VITE_RECAPTCHA_SITE_KEY to enable spam protection.
        </p>
      </div>
    );
  }

  return (
    <ReCAPTCHA
      ref={recaptchaRef}
      sitekey={siteKey}
      onChange={onChange}
      onExpired={onExpired}
      theme={theme}
      size={size}
      data-testid="recaptcha"
    />
  );
}
