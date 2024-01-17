interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="flex flex-col justify-center space-y-4">
      <div className="card-icon flex items-center justify-center text-4xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-center">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 text-center min-h-[200px] xs:min-h-[150px]">
        {description}
      </p>
    </div>
  );
};
