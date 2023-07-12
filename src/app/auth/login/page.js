import AuthForm from "@/components/AuthForm";

//Why is this not an async function?
export default function Login() {
  return (
    <div className="container mx-auto my-10">
      <AuthForm />
    </div>
  );
}
