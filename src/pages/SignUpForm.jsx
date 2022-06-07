import { useForm } from 'react-hook-form';

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: '',
      password: '',
    },
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('id', {
        required: {
          value: true,
          message: 'id를 입력해주세요',
        },
      })}
      />
      <input {...register('password', {
        required: {
          value: true,
          message: '비밀번호를 입력해주세요',
        },
      })}
      />
      <input type="submit" />
    </form>
  );
}
