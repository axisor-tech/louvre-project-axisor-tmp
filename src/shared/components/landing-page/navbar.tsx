import { MenuBar } from "../menu-bar";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50  bg-transparent">
      <div className="flex justify-center items-center container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <MenuBar />
      </div>
    </header>
  );
}
