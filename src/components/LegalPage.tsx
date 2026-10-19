import { ReactNode, useEffect } from 'react';

interface LegalPageProps {
  eyebrow: string;
  title: string;
  updated?: string;
  intro?: string;
  documentTitle: string;
  children: ReactNode;
}

const LegalPage = ({ eyebrow, title, updated, intro, documentTitle, children }: LegalPageProps) => {
  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);

  return (
    <>
      {/* Hero Banner */}
      <div className="bg-neutral-900 text-white py-28 relative">
        <div className="absolute inset-0 z-0 bg-black opacity-70"></div>
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            filter: "brightness(0.4)"
          }}
        ></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary-400 font-bold text-md uppercase tracking-wider">{eyebrow}</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">{title}</h1>
            {updated && <p className="text-neutral-400 text-sm">{updated}</p>}
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          {intro && (
            <p className="text-lg text-neutral-700 leading-relaxed mb-8 pb-8 border-b border-neutral-200">
              {intro}
            </p>
          )}
          <div className="prose-content">{children}</div>
        </div>
      </section>
    </>
  );
};

export default LegalPage;
