import { useRouter } from "next/router";

const querryParam = () => {
  const router = useRouter();

  return <h1>this is cards detail {router.query.id} </h1>;
};

export default querryParam;
