import Link from "next/link";

const details = [
  {
    title: "goods 1",
    id: 1,
  },
  {
    title: "goods 2",
    id: 2,
  },
  {
    title: "goods 3",
    id: 3,
  },
];

const cardsPage = () => {
  return (
    <div>
      {details.map((item) => (
        <Link key={item.id} href={`/cards/${item.id}`}>
          <li>{item.title}</li>
        </Link>
      ))}
    </div>
  );
};

export default cardsPage;
