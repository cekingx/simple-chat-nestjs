import { Layout } from "view"

class ErrorProps {
  title: string
  message: string
}

export const Error = (props: ErrorProps) => {
  return (
    <Layout>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col h-dvh justify-center">
          <p className="text-xl" safe>{props.title}</p>
          <p safe>{props.message}</p>
        </div>
      </div>
    </Layout>
  )
}