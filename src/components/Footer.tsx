function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer>
      <p>Designed &amp; built by Shrenik Shukla · AI Engineer</p>
      <p style={{ marginTop: 8 }}>
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("hero");
          }}
        >
          Back to top ↑
        </a>
      </p>
    </footer>
  );
}
