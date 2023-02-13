import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import LoginPage from "@/pages/LoginPage/LoginPage";
import Link from 'next/link';

function Home() {
  return (
    <div>
        <Link href={"/login"}>Login</Link>
        <Link href={"/success"}>Success</Link>
    </div>
  );
}

export default Home;
