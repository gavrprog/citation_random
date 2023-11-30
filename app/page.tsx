import Header from './components/header'
import Content from './components/contenet'
import Footer from './components/footer'

export default function Home() {
  return (
    <div id="root">
      <div className="flex flex-col justify-between w-[800px] h-[500px] border-2 border-solid border-white rounded-3xl p-10 absolute top-1/2 left-1/2 -mr-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>

  )
}
