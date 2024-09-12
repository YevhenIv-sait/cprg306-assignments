import Link from "next/link";

export default function StudentInfo() {
    return (
      <main>
        <h1 className="italic text-green-300">Yevhen Ivachtchenko</h1>
        <Link href="https://github.com/YevhenIv-sait/cprg306-assignments" className="underline text-red-600" >Github Repository</Link>
      </main>
    );
  }