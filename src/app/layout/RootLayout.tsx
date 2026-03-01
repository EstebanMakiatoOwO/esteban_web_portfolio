import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { SplashCursor } from "@shared/ui/react-bits";

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SplashCursor
        BACK_COLOR={{ r: 0.043, g: 0.059, b: 0.078 }}
        SPLAT_RADIUS={0.15}
        DENSITY_DISSIPATION={3}
        VELOCITY_DISSIPATION={2}
        TRANSPARENT={true}
      />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
