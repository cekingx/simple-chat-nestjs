import { Layout } from "view"

export const Login = (props: { link: string }) => {
  return (
    <Layout>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col max-w-screen-md h-dvh py-2 justify-center">
          <form action={props.link} method="POST">
            <div className="flex flex-col gap-2 my-2">
              <div className="flex flex-row justify-center">
                <p className="text-xl">Simple Chat</p>
              </div>
              <input type="text" name="username" placeholder="Username" className="border border-black p-2 rounded-md" />
              <button type="submit" className="bg-black text-white p-2 rounded-md">Login</button>
            </div>
          </form> 
        </div>
      </div>

    </Layout>
  )
}