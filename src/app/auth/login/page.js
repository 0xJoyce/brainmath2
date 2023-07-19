import AuthForm from "@/components/AuthForm";

//Why is this not an async function?
export default function Login() {
  console.log("Accessing /auth/login route.");
  return (
    <div className="container mx-auto my-10">
      <AuthForm />
    </div>
  );
}
