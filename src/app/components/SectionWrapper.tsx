import React from "react";

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-12 md:py-16 ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}