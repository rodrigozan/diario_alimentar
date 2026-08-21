import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconHome(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 10.5 12 3.5l8.5 7" />
      <path d="M5.5 9.5V20a1 1 0 0 0 1 1H10v-5.5a2 2 0 0 1 2-2 2 2 0 0 1 2 2V21h3.5a1 1 0 0 0 1-1V9.5" />
    </svg>
  );
}

export function IconHistory(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12a8 8 0 1 1 2.4 5.7" />
      <path d="M4 20v-4h4" />
      <path d="M12 8v4.5l3 1.75" />
    </svg>
  );
}

export function IconUser(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
    </svg>
  );
}

export function IconPlus(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function IconDroplet(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5s6 6.4 6 10.5a6 6 0 1 1-12 0c0-4.1 6-10.5 6-10.5Z" />
    </svg>
  );
}

export function IconFlame(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.5c.6 2 .2 3.2-1 4.6C9 9 8 10.6 8 13a4 4 0 0 0 8 0c0-1 -.3-1.8-.8-2.6.6.3 1.3 1 1.6 2A6.5 6.5 0 0 1 5.5 14C5.5 9 9 6 12 2.5Z" />
    </svg>
  );
}

export function IconCoffee(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 9h11v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9Z" />
      <path d="M16 10.5h1.5a2.25 2.25 0 0 1 0 4.5H16" />
      <path d="M8 6c0-.9.5-1.2.5-2M11.5 6c0-.9.5-1.2.5-2" />
    </svg>
  );
}

export function IconSun(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </svg>
  );
}

export function IconMoon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
    </svg>
  );
}

export function IconCookie(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20.5 12.8a2.3 2.3 0 0 1-2.6-2.6 2.3 2.3 0 0 1-2.7-2.7 2.3 2.3 0 0 1-2.6-2.6A8.5 8.5 0 1 0 20.5 12.8Z" />
      <circle cx="9.5" cy="13.5" r=".9" fill="currentColor" stroke="none" />
      <circle cx="13" cy="17" r=".9" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="12.5" r=".9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconCamera(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 8.5A1.5 1.5 0 0 1 5.5 7h2l1-1.5h7L16.5 7h2A1.5 1.5 0 0 1 20 8.5v9A1.5 1.5 0 0 1 18.5 19h-13A1.5 1.5 0 0 1 4 17.5v-9Z" />
      <circle cx="12" cy="13" r="3.2" />
    </svg>
  );
}

export function IconX(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12.5 9.5 17 19 7" />
    </svg>
  );
}

export function IconChevronLeft(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M15 5 8 12l7 7" />
    </svg>
  );
}

export function IconChevronRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function IconTrash(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 7h14M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-8 0 .8 12a2 2 0 0 0 2 1.9h4.4a2 2 0 0 0 2-1.9L17 7" />
    </svg>
  );
}

export function IconPencil(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20l.9-3.6L15.6 5.7a1.5 1.5 0 0 1 2.1 0l.6.6a1.5 1.5 0 0 1 0 2.1L7.6 19.1 4 20Z" />
    </svg>
  );
}

export function IconGoogle(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="#FBBF24"
        d="M21.6 12.23c0-.71-.06-1.4-.18-2.05H12v3.88h5.4a4.6 4.6 0 0 1-2 3.02v2.5h3.23c1.9-1.75 3-4.32 3-7.35Z"
      />
      <path
        fill="#22C55E"
        d="M12 22c2.7 0 4.97-.9 6.63-2.42l-3.23-2.5c-.9.6-2.05.96-3.4.96-2.6 0-4.8-1.76-5.6-4.12H3.06v2.58A10 10 0 0 0 12 22Z"
      />
      <path
        fill="#60A5FA"
        d="M6.4 13.92a6 6 0 0 1 0-3.84V7.5H3.06a10 10 0 0 0 0 9l3.34-2.58Z"
      />
      <path
        fill="#F87171"
        d="M12 5.98c1.47 0 2.79.5 3.83 1.5l2.87-2.87A9.5 9.5 0 0 0 12 2a10 10 0 0 0-8.94 5.5l3.34 2.58c.8-2.36 3-4.1 5.6-4.1Z"
      />
    </svg>
  );
}
