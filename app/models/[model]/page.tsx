import { notFound } from "next/navigation";
import { ModelPageContent } from "@/components/models/model-page-content";
import { getModelDataWithImages } from "@/lib/models/model-data";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

interface ModelPageProps {
  params: Promise<{
    model: string;
  }>;
}

export async function generateMetadata({ params }: ModelPageProps) {
  const { model } = await params;
  const modelData = await getModelDataWithImages(model);

  if (!modelData) {
    return {
      title: `Model Not Found | Proyecta Business Group`,
    };
  }

  return {
    title: `${modelData.name} | ${modelData.price} | Proyecta Business Group`,
    description: modelData.description,
  };
}

export default async function ModelPage({ params }: ModelPageProps) {
  const { model } = await params;
  
  const modelData = await getModelDataWithImages(model);

  if (!modelData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <WhatsAppFloat />
      <ModelPageContent modelData={modelData} />
      <Footer />
    </div>
  );
}
