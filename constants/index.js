import Home from "/assets/home.svg"
import Search from "/assets/search.svg"
import Activity from "/assets/heart.svg"
import CreateThread from "/assets/create.svg"
import community from "/assets/community.svg"
import user from  "/assets/user.svg"

export const sidebarLinks = [
    {
      imgURL: Home,
      route: "/",
      label: "Home",
    },
    {
      imgURL: Search,
      route: "/search",
      label: "Search",
    },
    {
      imgURL: Activity,
      route: "/activity",
      label: "Activity",
    },
    {
      imgURL: CreateThread,
      route: "/create-thread",
      label: "Create Thread",
    },
    {
      imgURL: community,
      route: "/communities",
      label: "Communities",
    },
    {
      imgURL:user,
      route: "/profile",
      label: "Profile",
    },
  ];
  
  export const profileTabs = [
    { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
    { value: "replies", label: "Replies", icon: "/assets/members.svg" },
    { value: "tagged", label: "Tagged", icon: "/assets/tag.svg" },
  ];
  
  export const communityTabs = [
    { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
    { value: "members", label: "Members", icon: "/assets/members.svg" },
    { value: "requests", label: "Requests", icon: "/assets/request.svg" },
  ];