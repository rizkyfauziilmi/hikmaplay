import { MainLayout } from "./_layouts/main-layout";

export default function MainLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
