import "./globals.css";
import { AuthProvider} from "./auth/context";

export const metadata = {
  title: "Trainer",
  description: "-en web-app til et fitnesscenter.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
        {children}
        </AuthProvider>     
      </body>
    </html>
  );
}
