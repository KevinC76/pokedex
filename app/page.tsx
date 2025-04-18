import Library from "@/components/test";

interface book{
  name: string,
  page: number
}



export default function Home() {

  const dataBook: book[] =[{name: "Harry", page: 20}, {name: "dave", page: 21}] 


  return <Library books={dataBook}/>;
}
