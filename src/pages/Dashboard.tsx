import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/dashboard/Sidebar";
import RepoCard from "../components/dashboard/RepoCard";
import RepoListHeader from "../components/dashboard/RepoListHeader";

type Repo = {
  id: number;
  title: string;
  type: string;
  language: string;
  size: number;
  lastUpdated: number;
};

export default function Dashboard() {
  const [reposList, setReposList] = useState<Repo[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchRepos = async () => {
      const token = import.meta.env.VITE_GITHUB_TOKEN;;
      const username = import.meta.env.VITE_GITHUB_USERNAME;
      if (!token || !username) {
        console.error("GitHub token or username is missing");
        return;
      }

      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos`,
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );

        const formattedRepos: Repo[] = response.data.map((repo: any) => ({
          id: repo.id,
          title: repo.name,
          type: repo.private ? "Private" : "Public",
          language: repo.language || "Unknown",
          size: repo.size,
          lastUpdated: Math.floor(
            (Date.now() - new Date(repo.updated_at).getTime()) /
              (1000 * 60 * 60 * 24)
          ),
        }));

        setReposList(formattedRepos);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchRepos();
  }, []);

  const filteredRepos = reposList.filter((repo) =>
    repo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <main className={`md:grid md:grid-cols-[1fr_6fr] h-screen md:bg-bgGray`}>
        <Sidebar />
        <section className="md:m-4 md:rounded-xl md:border bg-white overflow-scroll hidden-scrollbar">
          <RepoListHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} repoCount={filteredRepos.length} />
          <div>
            {filteredRepos.map((repoItem, index) => (
              <RepoCard
                key={repoItem.id}
                repoItem={repoItem}
                lastItem={filteredRepos.length - 1 === index}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
