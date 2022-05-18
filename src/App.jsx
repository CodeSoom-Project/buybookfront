import { QueryClientProvider } from 'react-query'
import {useRoutes} from "react-router-dom";
import {routes} from "./routes";
import { ReactQueryDevtools } from 'react-query/devtools'

const App = () => {
  const elem = useRoutes(routes)
  return elem

  return (
    <QueryClientProvider client={queryClient}>
      <elem />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}


export default App
