import Link from "next/link";

export default function Home() {
  const name = 'park';
  const link = 'http://google.com';
  return (
    <div>
      <h4 className="title">애플후레시</h4>
      <p className="title-sub">by dev {name}</p>
      <a href={link}></a>
    </div>
  );
}
