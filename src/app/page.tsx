import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="h-screen flex justify-center items-center">
        <div className="flex justify-around w-1/2 max-w-full h-72">
          <div className="p-6">
            <Image
              src="/images/logo_lacos.png"
              alt="Picture of the author"
              width={400}
              height={400}
            />
          </div>
          <div>
          <Image
              src="/images/vetor.png"
              alt="Picture of the author"
              width={5}
              height={5}
            />
          </div>
          <div className="p-6 flex flex-col justify-evenly">
            <form className="flex flex-col space-y-2 items-center justify-between">
              <Input className="focus:border-purple-500" name="email" placeholder="Digite o email"></Input>
              <Input className="focus:border-purple-500" name="senha" type="password" placeholder="Digite a senha"></Input>
            </form>

            <Button className="bg-purple-800">Conectar</Button>

          </div>
        </div>
      </div>
    </main>
  );
}
