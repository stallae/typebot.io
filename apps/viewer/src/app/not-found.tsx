import { TypebotLogo } from "@/components/TypebotLogo";
import "../assets/styles.css";

export default function NotFound() {
  return (
    <div
    style={{
      height: "100dvh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column", 
      background: "black",
      padding: "2rem",
    }}
  >
    <div
      style={{
        background: "black",
        padding: "3rem",
        borderRadius: "1rem",
        maxWidth: "600px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: "1.1rem",
          lineHeight: "1.8",
          color: "white",
          marginBottom: "1.5rem",
        }}
      >
        Vendemos soluções de inteligência artificial e chatbots inteligentes
        para automatizar e melhorar a comunicação com seus clientes.
        Descubra tudo o que podemos fazer pelo seu negócio.
      </p>
      <div style={{ textAlign: "center" }}>
        <a
          href="https://stallae.com"
          style={{
            color: "black",
            textDecoration: "none",
            fontWeight: "500",
            fontSize: "1.2rem",
            background: "white",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            display: "inline-block",
          }}
        >
          STALLAE
        </a>
      </div>
    </div>
  </div>
  );
}
