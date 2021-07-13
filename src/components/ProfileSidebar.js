import { Box } from "../layout";
import {
  AlurakutProfileSidebarMenuDefault
} from "../lib/Commons";

export const ProfileSidebar = ({ githubUser }) => {
  return (
    <Box as="aside">
      <img src={`https://github.com/${githubUser}.png`} />
      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${githubUser}`}>
          @{githubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
};
