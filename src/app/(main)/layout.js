import { AuthProvider } from "../auth/context";

export default function MainLayout({ children}) {
  return (
    <AuthProvider> 
      <main>{children}</main>
    </AuthProvider>
  );
}
