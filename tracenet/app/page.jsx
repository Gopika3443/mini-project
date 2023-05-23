import Feed from "@components/Feed";


const Home = () => {
  return (
    <section className="w-full felx-center felx-col">
      <h1 className="head_text blue_gradient text-center">
      TRACENET
        <br className="max-md:hiddden" />
      </h1>
      <p className="desc">
        The Elite Lost and Found - Lost Today, Found Tomorrow
      </p>

      <Feed />

    </section>
      )
}

export default Home