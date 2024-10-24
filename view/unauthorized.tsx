import { Layout } from "view"

export const Unauthorized = (props: { message: string }) => {
  return (
    <Layout>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col h-dvh justify-center">
          <p className="text-xl">Unauthorized</p>
          <p safe>{props.message}</p>
        </div>
      </div>
    </Layout>
  )
}