import { useState, useEffect } from "react";
import { LayoutGrid } from "../src/layout/";
import { CardDivFilter } from "../src/components/";
import { AlurakutMenu } from "../src/lib/Commons";
import { useFollowers, useLogin } from "../src/hooks/";
import { sharedGetServerSideProps } from "../src/utils/utilFunctions";

export default function Comunidades({ githubUser, token }) {
  const [filterFollowers, setFilterFollowers] = useState(false);
  const [filterFollowing, setFilterFollowing] = useState(false);
  const [filterStringFollowers, setFilterStringFollowers] = useState('');
  const [filterStringFollowing, setFilterStringFollowing] = useState('');
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
        <CardDivFilter
          boxTitle="Seguindo"
          cardList={
            filterFollowing
              ? following
                  .filter((result) => {
                    if (filterStringFollowing === "") return result;
                    return result.login.includes(filterStringFollowing);
                  })
                  .filter(
                    (e) =>
                      !followers
                        .map((follower) => follower.login)
                        .includes(e.login)
                  )
              : following.filter((result) => {
                  if (filterStringFollowing=== "") return result;
                  return result.login.includes(filterStringFollowing);
                })
          }
          error={followingError}
          loading={isLoadingFollowing}
          filter={filterFollowing}
          setFilter={setFilterFollowing}
          setFilterString={setFilterStringFollowing}
          filterString={filterStringFollowing}
          filterText="Mostrar quem não te segue"
        />
        <CardDivFilter
          boxTitle="Seguidores"
          cardList={
            filterFollowers
              ? followers
                  .filter((result) => {
                    if (filterStringFollowers === "") return result;
                    return result.login.includes(filterStringFollowers);
                  })
                  .filter((e) =>
                    following
                      .map((following) => following.login)
                      .includes(e.login)
                  )
              : followers.filter((result) => {
                  if (filterStringFollowers === "") return result;
                  return result.login.includes(filterStringFollowers);
                })
          }
          error={followersError}
          loading={isLoadingFollowers}
          filter={filterFollowers}
          setFilter={setFilterFollowers}
          setFilterString={setFilterStringFollowers}
          filterString={filterStringFollowers}
          filterText="Mostrar quem você segue"
        />
      </LayoutGrid>
    </>
  );
}

export async function getServerSideProps(ctx) {
  return sharedGetServerSideProps(ctx);
}
