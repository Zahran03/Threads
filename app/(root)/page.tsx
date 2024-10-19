import { ClerkProvider, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <html lang="en">
      <ClerkProvider>
        <UserButton />
      </ClerkProvider>
    </html>
  );
}
