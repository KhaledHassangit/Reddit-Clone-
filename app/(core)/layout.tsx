import Navbar from "@/components/layout/navbar";
import LeftSidebar from "@/components/layout/sidebar";
import { getSessionUser } from "@/lib/auth";
import { tagPostCounts } from "@/lib/db/queries";
import Container from "@/util/Container";

export default async function CoreLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const user = await getSessionUser();
  const tags = await tagPostCounts();

    return (
        <>
            <Navbar />
            <Container className="mx-auto  flex gap-8 px-4 pb-16 pt-2">
                <LeftSidebar showCta={!user} tagsWithCounts={tags} />
                <main className="min-w-0 flex-1">
                    {children}
                </main>
            </Container>
        </>
    )
}