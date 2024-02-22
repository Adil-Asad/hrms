import { PropsWithChildren } from "react";

function AuthLayout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <main className="h-[100svh] flex justify-center items-center bg-[#80807D]/10">
      <div className="w-[40%] mx-auto h-full hidden lg:block relative">
        <img
          className="absolute inset-3 mx-auto my-auto w-[600px] h-auto"
          src="/ilustration/shape.svg"
          alt="ilustration"
        />
        <img
          className="absolute inset-0 mx-auto my-auto xl:w-[350px] w-[280px] 2xl:w-[380px] h-auto"
          src="/img/baloon.png"
          alt="baloon"
        />
      </div>

      <div className="bg-white w-full lg:w-[60%] lg:rounded-s-[25px] z-10 h-full flex items-center justify-center">
        {children}
      </div>
    </main>
  );
}

export default AuthLayout;
