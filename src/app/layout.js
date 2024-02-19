import FBMessanger from "@/components/FBMessanger/FBMessanger";
import { CartProvider } from "@/utils/Cart/CartContext";
import { QueryProvider } from "@/utils/QueryClientProvider";
import AuthProvider from "@/utils/SessionProvider";

export const metadata = {
  title: "MeetReady",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <QueryProvider>
          <CartProvider>
            <div>
              {children}
              <FBMessanger/>
            </div>
          </CartProvider>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
