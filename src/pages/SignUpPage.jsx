import FormInput from '../components/FormInput';

export default function SignUpPage() {
  return (
    <form>
      <FormInput placeholder="Username" />
      <FormInput placeholder="Email" />
      <FormInput placeholder="Full Name" />
      <FormInput placeholder="Sth else" />
    </form>
  );
}
