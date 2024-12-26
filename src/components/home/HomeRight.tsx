import logo from "../../assets/logo.svg";
import github from "../../assets/github.svg";
import bitbucket from "../../assets/bitbucket.svg";
import azure from "../../assets/azure.svg";
import gitlab from "../../assets/gitlab.svg";
import sso from "../../assets/sso.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function HomeRight() {
  const navigate = useNavigate();

  const [authId, setAuthId] = useState(1);
  const authOptions = [
    {
      id: 1,
      title: "SAAS",
      options: [
        {
          id: 1,
          title: "Sign in with GitHub",
          icon: github,
        },
        {
          id: 2,
          title: "Sign in with Bitbucket",
          icon: bitbucket,
        },
        {
          id: 3,
          title: "Sign in with Azure DevOps",
          icon: azure,
        },
        {
          id: 4,
          title: "Sign in with GitLab",
          icon: gitlab,
        },
      ],
    },
    {
      id: 2,
      title: "Self Hosted",
      options: [
        {
          id: 1,
          title: "Self Hosted GitLab",
          icon: gitlab,
        },
        {
          id: 2,
          title: "Sign in with SSO",
          icon: sso,
        },
      ],
    },
  ];
  return (
    <div className="right bg-bgGray flex flex-col justify-center">
      <div className="bg-white m-6 flex flex-col justify-center items-center rounded-lg border border-borderGray">
        <div className="flex gap-2 items-center text-2xl font-light mt-8 mb-6">
          <img src={logo} alt={"logo"} className={`w-6`} />
          <div>CodeAnt AI</div>
        </div>
        <div className="text-2xl md:text-3xl font-semibold mt-4">
          Welcome to CodeAnt AI
        </div>
        <div className="flex w-[90%] rounded-md border border-borderGray my-6">
          {authOptions.map((authItem) => {
            return (
              <button
                key={authItem.id}
                className={`w-1/2 py-3 px-2 rounded-md text-center font-medium ${
                  authItem.id == authId
                    ? "bg-primaryBlue text-white"
                    : "bg-altGray"
                }`}
                onClick={() => {
                  setAuthId(authItem.id);
                }}
              >
                {authItem.title}
              </button>
            );
          })}
        </div>
        <div className="w-full border-b border-borderGray"></div>
        <div className="fixed-height my-6 flex flex-col min-h-[220px] w-full">
          <div className="flex flex-col gap-3 items-center">
            {authOptions
              .filter((item) => item.id == authId)[0]
              .options.map((selectedOptions) => {
                return (
                  <div
                    className="flex items-center justify-center gap-2 py-3 border border-borderGray rounded-lg md:w-3/5 w-4/5 cursor-pointer"
                    onClick={() => {
                      navigate("/dashboard");
                    }}
                  >
                    <img
                      src={selectedOptions.icon}
                      alt={"logo"}
                      className={`w-5`}
                    />
                    <div className="text-xs font-semibold">
                      {selectedOptions.title}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div className="flex justify-center text-xs">
        By signing up you agree to the <b>&nbsp;Privacy Policy</b>.
      </div>
    </div>
  );
}