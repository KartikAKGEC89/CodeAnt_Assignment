import RenderIcon from "../RenderIcon";

export default function RepoCard({
  repoItem,
  lastItem,
}: {
  repoItem: {
    id: number;
    title: string;
    type: string;
    language: string;
    size: number;
    lastUpdated: number;
  };
  lastItem: boolean;
}) {
  return (
    <div
      className={`flex flex-col  ${
        lastItem ? "border-b" : "border-b"
      }  border-borderGray p-4 gap-2 hover:bg-altGray cursor-pointer`}
    >
      <div className="flex gap-2 items-center">
        <div className="font-medium ">{repoItem.title}</div>
        <div className="bg-lightBlue border border-lightBlue py-0.5 px-2 text-sm rounded-full text-primaryBlue bg-opacity-30">
          {repoItem.type}
        </div>
      </div>
      <div className="flex gap-6 text-altText text-sm">
        <div className="flex items-center gap-2">
          <div>{repoItem.language}</div>{" "}
          <div className="w-2 h-2 bg-primaryBlue rounded-full"></div>{" "}
        </div>
        <div className="flex items-center gap-2">
          <RenderIcon icon="storage" />
          <p className="truncate">{repoItem.size} KB</p>{" "}
        </div>
        <div className="truncate">
          Updated {repoItem.lastUpdated}{" "}
          {repoItem.lastUpdated > 1 ? "days" : "day"} ago
        </div>
      </div>
    </div>
  );
}