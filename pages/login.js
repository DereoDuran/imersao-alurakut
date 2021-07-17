import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CLIENT_ID } from "../src/utils/constants";
import Link from "next/link";
import { useLogin } from "../src/hooks";
import { CircularProgress } from "@material-ui/core";

export default function LoginScreen() {
  const { checkCode } = useLogin();
  const [checkingCode, setCheckingCode] = useState(false);
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    const authenticate = async () => {
      if (code) {
        await checkCode(code, setCheckingCode);
      }
    };
    authenticate();
  }, [code]);

  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`;

  return (
    <main
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="loginScreen">
        <section className="logoArea">
          <img src="https://alurakut.vercel.app/logo.svg" />

          <p>
            <strong>Conecte-se</strong> aos seus amigos e familiares usando
            recados e mensagens instantâneas
          </p>
          <p>
            <strong>Conheça</strong> novas pessoas através de amigos de seus
            amigos e comunidades
          </p>
          <p>
            <strong>Compartilhe</strong> seus vídeos, fotos e paixões em um só
            lugar
          </p>
        </section>

        <section className="formArea">
          <form className="box">
            <p>
              Acesse agora mesmo com o <strong>GitHub</strong>!
            </p>
            <br />
            {checkingCode ? (
              <CircularProgress />
            ) : (
              <>
                <Link href={githubAuthUrl} passHref>
                  <button className="loginButton" type="submit">
                    Login
                  </button>
                </Link>
              </>
            )}
          </form>

          <footer className="box">
            <p>
              Ainda não é membro? <br />
              <a href={githubAuthUrl}>
                <br />
                <strong>ENTRAR JÁ</strong>
              </a>
            </p>
          </footer>
        </section>

        <footer className="footerArea">
          <p>
            © 2021 alura.com.br - <a href="/">Sobre o Orkut.br</a> -{" "}
            <a href="/">Centro de segurança</a> - <a href="/">Privacidade</a> -{" "}
            <a href="/">Termos</a> - <a href="/">Contato</a>
          </p>
        </footer>
      </div>
    </main>
  );
}
