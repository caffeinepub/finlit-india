interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export function PageHeader({ title, subtitle, badge }: PageHeaderProps) {
  return (
    <div className="bg-navy-dark text-white py-16 px-4">
      <div className="container mx-auto text-center">
        {badge && (
          <span className="inline-block bg-primary/20 text-primary border border-primary/30 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {badge}
          </span>
        )}
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
