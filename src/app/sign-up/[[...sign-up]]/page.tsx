import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="pt-5 flex items-center justify-center">
      <SignUp />
    </div>
  );
}
