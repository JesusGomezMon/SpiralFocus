import Image from "next/image";

const LOGO = "/img/logo.svg";

export function LogoMark({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <Image
      alt=""
      className={className}
      height={52}
      priority={priority}
      src={LOGO}
      width={52}
    />
  );
}

export function LogoLockup({ centered, className }: { centered?: boolean; className?: string }) {
  return (
    <div className={`sf-logo-lockup ${centered ? "justify-center" : ""} ${className ?? ""}`.trim()}>
      <LogoMark className="sf-logo-mark" />
      <span className="sf-logo-text">
        Spiral <em>Focus</em>
      </span>
    </div>
  );
}
