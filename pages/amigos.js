import { useState, useEffect } from "react";
import { LayoutGrid } from "../src/layout/";
import { CardDiv } from "../src/components/";
import { AlurakutMenu } from "../src/lib/Commons";
import { useFollowers, useLogin } from "../src/hooks/";
import { sharedGetServerSideProps } from "../src/utils/utilFunctions";

export default function Comunidades({ githubUser, token }) {
  const [filterFollowers, setFilterFollowers] = useState(false);
  const [filterFollowing, setFilterFollowing] = useState(false);
  const { logOut } = useLogin();
  const {
    followers,
    following,
    followersError,
    followingError,
    isLoadingFollowers,
    isLoadingFollowing,
  } = useFollowers(token);

  return (
    <>
      <AlurakutMenu githubUser={githubUser} logOut={logOut} />
      <LayoutGrid>
        <CardDiv
          boxTitle="Seguindo"
          cardList={
            filterFollowing
              ? following.filter((e) => !followers.map(follower => follower.login).includes(e.login))
              : following
          }
          error={followingError}
          loading={isLoadingFollowing}
          filter={filterFollowing}
          setFilter={setFilterFollowing}
          filterText="Mostrar apenas quem não te segue"
        />
        <CardDiv
          boxTitle="Seguidores"
          cardList={
            filterFollowers
              ? followers.filter((e) => following.map(following => following.login).includes(e.login))
              : followers
          }
          error={followersError}
          loading={isLoadingFollowers}
          filter={filterFollowers}
          setFilter={setFilterFollowers}
          filterText="Mostrar apenas quem você segue"
        />
      </LayoutGrid>
    </>
  );
}

export async function getServerSideProps(ctx) {
  return sharedGetServerSideProps(ctx);
}
