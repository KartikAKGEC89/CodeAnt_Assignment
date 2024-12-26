import RenderIcon from "../RenderIcon";

type RepoListHeaderProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  repoCount: number; 
};

export default function RepoListHeader({ searchTerm, setSearchTerm, repoCount }: RepoListHeaderProps) {
  const repoMenu = [
    {
      id: 1,
      icon: "refresh",
      title: "Refresh All",
    },
    {
      id: 2,
      icon: "add",
      title: "Add Repository",
    },
  ];

  return (
    <header className="p-4 border-b border-borderGray flex flex-col gap-2">
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <div className="flex flex-col gap-0.5">
          <div className="text-2xl font-medium">Repositories</div>
          <div className="text-sm text-altText">{`${repoCount} total repositories`}</div>
        </div>
        <div className="flex gap-2 h-fit text-sm">
          {repoMenu.map((item) => {
            return (
              <div
                className={`flex cursor-pointer gap-2 p-2 items-center border border-borderGray rounded-md ${
                  item.id === 2 ? "bg-primaryBlue text-white" : ""
                }`}
              >
                <RenderIcon icon={item.icon} />
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center border border-borderGray mt-2 p-0.5 rounded-md md:w-1/3">
        <div className="scale-[1.5] px-2">
          <RenderIcon icon="search" />
        </div>
        <input
          type="text"
          placeholder="Search repositories"
          className="w-full px-2 py-1 focus:border-0 focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </header>
  );
}
