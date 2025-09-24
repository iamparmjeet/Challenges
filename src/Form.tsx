import BlurDiv from "./components/BlurDiv";

export default function Form() {
  return (
    <main className="bg-[#0A0A0A] h-screen flex items-center font-lato">
      <section className="w-[1280px] h-[670px] flex items-center m-auto border border-white/5 p-2.5">
        <BlurDiv className="w-[372px] h-[350px] rounded-3xl bg-[#2626261A] mx-auto flex flex-col items-center justify-center">
          <h1 className="text-4xl font-medium text-center mb-12 text-white">
            Login
          </h1>
          <FormDiv></FormDiv>
        </BlurDiv>
      </section>
    </main>
  );
}

function FormDiv() {
  return (
    <form className="flex flex-col gap-4 items-center">
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <BlurDiv className="rounded-[10px] w-fit">
        <button
          className="min-w-[200px] h-[52px] cursor-pointer  text-white bg-[#EA763F33] px-3.5 py-[13px]"
          type="submit"
        >
          Submit
        </button>
      </BlurDiv>
    </form>
  );
}

type InputProps = {
  type: string;
  placeholder: string;
};

function Input({ type, placeholder }: InputProps) {
  return (
    <BlurDiv className="rounded-[10px]">
      <input
        type={type}
        placeholder={placeholder}
        className="min-w-[300px] min-h-[49px]  bg-[hsla(0,0%,10%,0.2)] border border-white/10 px-3.5 py-[13px] text-white"
      />
    </BlurDiv>
  );
}
