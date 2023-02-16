import type { NextraThemeLayoutProps } from "nextra";
export default function Layout({ children }: NextraThemeLayoutProps) {
  return (
    <div>
      <h1>MY THEME</h1>
      <div style={{ border: `1px solid` }}>{children}</div>
    </div>
  );
}
