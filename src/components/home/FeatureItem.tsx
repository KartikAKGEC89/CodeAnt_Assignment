export default function FeatureItem({
    featureItem,
  }: {
    featureItem: { id: number; heading: string; description: string };
  }) {
    return (
      <div className="flex flex-col items-center gap-1">
        <div className="font-bold">{featureItem.heading}</div>
        <small className="text-altText">{featureItem.description}</small>
      </div>
    );
  }